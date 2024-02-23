// tre cose
// 1. funzione che fa addtask
// 2. funzione che gestisce attachComplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)

const handleSubmit = function (e) {
    e.preventDefault()                  // evita il comportamento di default
    addTask()
    attachComplete()
    attachDelete()
}

class taskList {
    constructor(){
        this.tasks = []
    }

    aggiungiTask(){
        this.tasks.push(task)
        const tk = document.getElementById("task")
        const p = document.createElement("p")
        p.appendChild(document.createTextNode(task))
        task.appendChild(p)
    }
}


const newTakBtn = document.getElementById("new-task-btn")
const clearBtn = document.getElementById("clear-btn")
const input = getElementById("new-task")

newTaskBtn.addEventListener("click", () => {
    console.log("nuovo task")
    taskList.aggiungiTask(input.value)
})

clearBtn.addEventListener("click", () => {
    console.log("pulisci task")
})

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        taskList.aggiungiTask(input.value)
        input.value= ""
    }
})

const taskList = new taskList()

const addTask = function () {
    
    // agganciare gli elementi html come fatto stamattina
    // stampare html necessario per aggiungere il value del mio campo input inputField.value
    // ogni task che aggiungo aggiunge html -> +=
}

const attachComplete = function () {
    // aggancia elementi html
    // li ciclo ad esempio con for
    // all'elemento che seleziono aggiunge|togli una classe (toggle)
    // this per leggere il contenuto
    // css -> text-decoration: line-through;
}

const attachDelete = function () {
    // aggancia gli elementi html
    // ciclo for
    // metodo per rimuovere qualcosa .remove
}

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}