function ToDoApp() {
    this.tasksToDo = []; // lista zadan do zrobienia

    this.inputNode = (() => {
        const input = document.createElement('input');
        input.type = 'text';
        return input;
    })() // wywołanie funkcji natychmiastowej - tworzymy znacznik <input> który będziemy trzymać w tym polu w celu optymalizacji i łatwego dostępu

    this.listNode = document.createElement('ul');

    this.buttonNode = (() => {
        const button = document.createElement('button');
        button.innerText = 'add task';
        return button;
    })() // wywołanie funkcji natychmiastowej
};

ToDoApp.prototype.renderUI = function() {
    const appContainer = document.querySelector('#toDoAppContainer');
    appContainer.appendChild(this.inputNode);
    appContainer.appendChild(this.buttonNode);
    appContainer.appendChild(this.listNode);
    this.buttonNode.addEventListener('click', this.addTaskToDo);
}

ToDoApp.prototype.addTaskToDo = function() {
    const inputValue = this.inputNode.value;
    if(!inputValue) return;

    const newId = generateID();
    const newTask = new Task(inputValue, newId);
    this.tasksToDo.push(newTask);

    const newListElement = this.createNewListElement(newTask.text, newId)
    this.listNode.appendChild(newListElement);
    this.inputNode.value = '';
}

ToDoApp.prototype.removeTaskToDo = function(event) {
    const referenceId = event.target.parentNode.dataset.id;
    event.target.parentNode.remove();
    const taskIndex = this.tasksToDo.findIndex(task => task.id == referenceId);
    this.tasksToDo.splice(taskIndex, 1);
}

ToDoApp.prototype.createNewListElement = function(text, newId) {
    const newListItem = document.createElement('li');
    const removeIconElement = this.createRemoveIcon();

    newListItem.dataset.id = newId;
    newListItem.innerText = text;
    newListItem.appendChild(removeIconElement);
    return newListItem;
}

ToDoApp.prototype.createRemoveIcon = function() {
    const removeIconElement = document.createElement('span');
    removeIconElement.innerText = ' X';
    removeIconElement.style.fontSize = '20px';
    removeIconElement.style.color = 'red';
    removeIconElement.style.cursor = 'pointer';
    removeIconElement.addEventListener('click', this.removeTaskToDo);
    return removeIconElement;
}

function Task(text, id) {
    this.text = text;
    this.id = id;
}

function generateID() {
    return new Date().getUTCMilliseconds();
}

const ToDoListApp = new ToDoApp();
ToDoListApp.addTaskToDo = ToDoApp.prototype.addTaskToDo.bind(ToDoListApp)
ToDoListApp.removeTaskToDo = ToDoApp.prototype.removeTaskToDo.bind(ToDoListApp)
ToDoListApp.renderUI();
