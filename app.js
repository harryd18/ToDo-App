
//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//functions
const addTodo=(e)=>{
    e.preventDefault()
    console.log('Hello');
    //create todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = "Hey"
    newTodo.classList.add("todo-item")

    todoDiv.appendChild(newTodo)
    
    // Check Button
    const checkedButton = document.createElement('button')
    checkedButton.innerHTML = `<i class="fas fa-check"></i>`;
    checkedButton.classList.add('check-btn')
    todoDiv.appendChild(checkedButton)

    //Trash Button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    //Append to List
    todoList.appendChild(todoDiv)
    


}


//event Listeners
todoButton.addEventListener("click",addTodo)






