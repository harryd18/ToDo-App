
//SELECTORS
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")




//FUNCTIONS
const addTodo=(e)=>{
    e.preventDefault();
    //create todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    //LOCAL STORAGE
    saveLocalTodos(todoInput.value)
   
    
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

    //Clear Todo Input to Clear
    todoInput.value = "";
}

const deleteCheck = (e)=>{
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation added to delete
        todo.classList.add("fall")
        removeLocalStorageTodos(todo)
        todo.addEventListener("transitionend" , function(){
            todo.remove()
        })
    }

    //CHECK MARK
    if(item.classList[0]==='check-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}



const filterTodo = (e) =>{
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
    if (todo.nodeType == Node.ELEMENT_NODE)
       switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
            break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
            break;


        
       }
    })
}



const saveLocalTodos = todo =>{
    //CHECK -- if I do have anything saved there already ?
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(todo)
    localStorage.setItem("todos" , JSON.stringify(todos))
}


const getTodo = todo =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.forEach(function(todo){
    //create todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo
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
    })
}

const removeLocalStorageTodos = todo =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex) , 1)
    localStorage.setItem("todos" , JSON.stringify(todos))
}







//EVENT LISTENERS
todoButton.addEventListener("click",addTodo)

todoList.addEventListener("click" , deleteCheck)

filterOption.addEventListener("click",filterTodo)

document.addEventListener("DOMContentLoaded" , getTodo)










