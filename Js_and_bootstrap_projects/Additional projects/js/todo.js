let button = document.getElementById("btn");
let input = document.getElementById("input");
let todoList = document.getElementById("list");
let todoarr = [];
window.onload = ()=>{
    todoarr = JSON.parse(localStorage.getItem("todoarr")) || []
    todoarr.forEach((todo)=>{
        addTodo(todo);
    })
} 
button.addEventListener("click",()=>{
   todoarr.push(input.value);
   console.log(todoarr);
   localStorage.setItem("todoarr",JSON.stringify(todoarr))
   addTodo(input.value)
   input.value = "";
})
function addTodo(item){
    let para = document.createElement('p');
    para.innerHTML = item;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = "line-through"
        remove(item)
    })
    para.addEventListener('dblclick',()=>{
        para.style.textDecoration = "line-through"
        todoList.removeChild(para)
        remove(item)
    })
}
function remove(todo){
   let index = todoarr.indexOf(todo)
   if(index>-1)
   todoarr.splice(index,1)
   localStorage.setItem("todoarr",JSON.stringify(todoarr))
}