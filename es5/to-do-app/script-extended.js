function ToDoApp() {
    this.tasksToDo = []; // lista zadan do zrobienia
    this.tasksDone = []; // lista zadań zrobionych

    this.inputNode = (() => {
        const input = document.createElement('input');
        input.type = 'text';
        return input;
    })() // wywołanie funkcji natychmiastowej - tworzymy tutaj nasz znacznik <input> który będziemy trzymać w tym polu w celu optymalizacji i łatwego dostępu

    this.listToDoNode = document.createElement('ul');
    this.listDoneNode = document.createElement('ul');

    this.buttonNode = (() => {
        const button = document.createElement('button');
        button.innerText = 'add task';
        return button;
    })() // - tworzymy tutaj nasz znacznik <button> który będziemy trzymać w tym polu w celu optymalizacji i łatwego dostępu
};

ToDoApp.prototype.renderUI = function() {
    const appContainer = document.querySelector('#toDoAppContainer'); // pobieramy nasz div z htmla po ID w celu wstawienia w niego naszego UI
    appContainer.appendChild(this.inputNode); // <- wstawiamy nasze pole tekstowe
    appContainer.appendChild(this.buttonNode); // <- wstawiamy nasz przycisk dodaj
    appContainer.appendChild(this.listToDoNode); // <- wstawiamy naszą listę TO DO
    appContainer.appendChild(document.createElement('hr')); // <- wstawiamy znacznik HR
    appContainer.appendChild(this.listDoneNode); // <- wstawiamy naszą listę DONE
    this.buttonNode.addEventListener('click', this.addTaskToDo); // <- podpinamy słuchacza na zdarzenie click elementu <button>
    this.inputNode.addEventListener('keypress', this.addTaskToDo); // <- podpinamy słuchacza na zdarzenie keypress elementu <input>
}

ToDoApp.prototype.addTaskToDo = function(event) {
    if (!this.inputNode.value) return; // jeeli pole tekstowe jest puste, przerwij działanie funkcji
    if (event.type === 'keypress') {
        if (event.keyCode != 13 || event.which != 13) { // przerwij poprzez 'return' dzisałanie funkcji jezeli wciśnięty klawisz jest inny niz enter
            return;
        }
    }

    const newId = generateID(); // wygeneruj nowe ID
    const inputValue = this.inputNode.value; // pobierz wartość tekstową z pola input
    const newTask = new Task(inputValue, newId); // utwórz nowy obiekt Zadanie i przekazujemy mu parametry tekst oraz ID
    this.tasksToDo.push(newTask); // dodajemy obiekt do naszej tablicy

    const newListElement = this.createNewListElement(newTask.text, newId) // wywołujemy metodę tworzącą nowy element listy
    this.listToDoNode.appendChild(newListElement); // dodajemy nowy element listy do tablicy zadań TO DO
    this.inputNode.value = '';  // czyścimy pole <input>
}

ToDoApp.prototype.moveTaskToDone = function(event) {
    const referenceId = event.target.parentNode.dataset.id; // pobieramy wartość pola ID naszego parenta czyli znacznika <li>
    const removedElement = event.target.parentNode; // zapisujemy w zmiennej referencje do elementu listy który zaraz usuniemy z listy TO DO
    event.target.parentNode.remove(); // usuwamy element <li> z listy <ul> TO DO
    const taskIndex = this.tasksToDo.findIndex(task => task.id == referenceId); // szukamy w tablicy zadań TO DO indexu usuwanego elementu poprzez porównanie li.id == task.id
    const removedTask = this.tasksToDo.splice(taskIndex, 1); // usuwamy element z tablicy zadań TO DO, poprzez podanie indexu elementu

    this.listDoneNode.appendChild(removedElement); // dodajemy usunięty element do nowej listy <ul> DONE
    this.tasksDone.push(removedTask); // dodajemy usunięte zadanie z tablicy TO DO
}

ToDoApp.prototype.removeTaskToDo = function(event) { 
    const referenceId = event.target.parentNode.dataset.id; // pobieramy wartość pola ID naszego parenta czyli znacznika <li>
    event.target.parentNode.remove(); // usuwamy element <li> z listy <ul> TO DO

    const taskIndex = this.tasksToDo.findIndex(task => task.id == referenceId); // szukamy w tablicy zadań TO DO indexu usuwanego elementu poprzez porównanie li.id == task.id
    this.tasksToDo.splice(taskIndex, 1);  // usuwamy element z tablicy zadań TO DO, poprzez podanie indexu zadania
}

ToDoApp.prototype.createNewListElement = function(text, newId) {
    const newListItem = document.createElement('li'); // tworzymy nowy element listy <li>
    const removeIconElement = this.createRemoveIcon(); // wywołujemy metodę zwracającą nam ikonkę usuń
    const checkboxElement = this.createCheckboxInput(); // wywołujemy metodę zwracającą nam checkbox

    newListItem.dataset.id = newId; // ustawiamy nowe id przekazane jako parametr funkcji
    newListItem.innerText = text; // ustawiamy tekst przekazany jako parametr funkcji
    newListItem.appendChild(checkboxElement); // dodajemy do elementu listy checkbox
    newListItem.appendChild(removeIconElement); // dodajemy do elementu listy ikonkę usuń
    return newListItem;
}

ToDoApp.prototype.createRemoveIcon = function() {
    const removeIconElement = document.createElement('span');  // tworzymy nowy element <span>
    removeIconElement.innerText = ' X'; // ustawiamy mu tekst
    removeIconElement.style.fontSize = '20px'; // cssy
    removeIconElement.style.color = 'red';
    removeIconElement.style.cursor = 'pointer';
    removeIconElement.addEventListener('click', this.removeTaskToDo); // dodajemy mu słuchacza zdarzeń na kliknięcie
    return removeIconElement; // zwracamy element
}

ToDoApp.prototype.createCheckboxInput = function() {
    const checkboxElement = document.createElement('input'); // tworzymy <input>
    checkboxElement.type = 'checkbox'; // ustawiamy typ checkbox
    checkboxElement.addEventListener('click', this.moveTaskToDone); // dodajemy słuchacza zdarzeń na kliknięcie checkbox-a
    return checkboxElement;
}

function Task(text, id) {
    this.text = text;
    this.id = id;
}

function generateID() {
    return new Date().getUTCMilliseconds();
}

const ToDoListApp = new ToDoApp(); // tworzymy obiekt
ToDoListApp.addTaskToDo = ToDoApp.prototype.addTaskToDo.bind(ToDoListApp) // przypisujemy na stałe kontekst wywołania metody do obiektu naszej aplikacji
ToDoListApp.moveTaskToDone = ToDoApp.prototype.moveTaskToDone.bind(ToDoListApp) // przypisujemy na stałe kontekst wywołania metody do obiektu naszej aplikacji
ToDoListApp.removeTaskToDo = ToDoApp.prototype.removeTaskToDo.bind(ToDoListApp) // przypisujemy na stałe kontekst wywołania metody do obiektu naszej aplikacji
ToDoListApp.renderUI(); // renderujemy UI


// FLOW //

// 1. tworzymy obiekt new ToDoApp
// 2. wywołujemy metode renderUI która renderuje nam interfejs czyli <ul>-ki, <input> oraz <button>, podpinamy niezbędne słuchacze zdarzeń dla input-a oraz button-a

// 3. gdy wprowadzimy wartośc w pole tekstowe i klikniemy dodaj nasz <button> wywoła metodę ToDoListApp.addTaskToDo() która doda nowe zadanie
// 4. gdy klikniemy w checkbox, wywoła on metodę ToDoListApp.moveTaskToDone() która przeniesie nasze zadanie do listy DONE
// 5. gdy klikniemy ikonke krzyzyka, wywoła ona metodę ToDoListApp.removeTaskToDone() która usunie zadanie z listy