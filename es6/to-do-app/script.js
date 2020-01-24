class ToDo {
    constructor() {
        this.tasks = []

        this.render()
    }

    addTask(text) {
        this.tasks.push(new Task(text))

        this.render()
    }

    render() {
        document.body.innerHTML = ''

        this.makeUI()

        const ul = document.createElement('ul')

        this.tasks.forEach(task => {
            const li = document.createElement('li')
            li.innerText = task.text
            ul.appendChild(li)
        })

        document.body.appendChild(ul)
    }

    makeUI() {
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerText = 'Add task!'

        button.addEventListener(
            'click',
            () => this.addTask(input.value)
        )

        document.body.appendChild(input)
        document.body.appendChild(button)
    }
}

class Task {
    constructor(text) {
        this.text = text
    }
}

const toDo1 = new ToDo()

toDo1.addTask('Wynieś śmieci!')