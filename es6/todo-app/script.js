class ToDoApp {
  constructor() {
    this.tasks = [];
    this.input = null;
  }

  render() {
    const button = $('<button>Dodaj</button>')
    this.input = $('<input type="text" />')
    button.on("click", () => this.addTask())

    $(document.body).append(button).append(this.input);
  }

  addTask() {
    const value = this.input.val();
    const newTaskNode = $(`<div>${value}</div>`);
    $(document.body).append(newTaskNode);

    this.tasks.push(new Task(value));
    console.log(this.tasks);
  }
}

class Task {
  constructor(text) {
    this.text = text;
  }
}

const newApp = new ToDoApp();
newApp.render();

