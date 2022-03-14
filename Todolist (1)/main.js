const btnAdd = document.getElementById('btn-add')
const input = document.getElementById('todo-input')
const todoLists = document.querySelector('.todo-list')
const all = document.getElementById('all')
const active = document.getElementById('active')
const unactive = document.getElementById('unactive')

let tasks = localStageValue()
renderUI(tasks)

btnAdd.addEventListener('click', function() {
    let valueInput = input.value;
    if(!valueInput) {
        alert('Xin nhap thong tin cong viec')
        return false
    }
    let tasks = localStageValue()
    let task = {
        name: valueInput,
        status: false
        }
    let tasksClass = this.getAttribute('class')

    if (tasksClass == 0 || tasksClass) {
        tasks[tasksClass] = task 
        this.removeAttribute('class')
    
    } else {
        tasks.push(task);
    }
    input.value = ''

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderUI(tasks)
})

function localStageValue() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}


function renderUI(arr) {
    
    let content = ''
    arr.forEach((value, index) => {
         content += `
        <div class="todo-item ${value.status ? "active-todo" : ""}">
            <div class="todo-item-title">
                <input type="checkbox" ${value.status ? 'checked' : ""} onclick="toggleStatus(${index})" >
                <p>${value.name}</p>
            </div>
            <div class="option">
                <button class="btn btn-update" onclick="editTodo(${index})">
                    <img src="https://raw.githubusercontent.com/buihien0109/game-dom/2dc626f8d51e57e97ee2c72961020b11ea28e619/todo/part-5/img/pencil.svg" alt="icon">
                </button>
                <button class="btn btn-delete" onclick="deleteTodo(${index})">
                    <img src="https://raw.githubusercontent.com/buihien0109/game-dom/2dc626f8d51e57e97ee2c72961020b11ea28e619/todo/part-5/img/remove.svg" alt="icon">
                </button>
            </div>
        </div>
        `
    })
    todoLists.innerHTML = content
}


function editTodo(id) {
    let tasks = localStageValue()
    if(tasks.length > 0) {
        input.value = tasks[id].name
    }
    btnAdd.setAttribute('class',id)

}

function deleteTodo(id) {
    let tasks = localStageValue()
    tasks.splice(id, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderUI(localStageValue())

}

function toggleStatus(id) {
    let tasks = localStageValue()
    tasks[id].status = !tasks[id].status
    
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderUI(tasks)
}

all.addEventListener('click', function(){
    let tasks = localStageValue()
    renderUI(tasks)

})

active.addEventListener('click', function() {
    let tasks = localStageValue()
    
    let tasksActive = tasks.filter(task => task.status == true)
    renderUI(tasksActive)
})

unactive.addEventListener('click', function() {
    let tasks = localStageValue()
    
    let tasksUnActive = tasks.filter(task => task.status == false)
    renderUI(tasksUnActive)
})

window.onload = localStageValue