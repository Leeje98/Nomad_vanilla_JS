const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement         // 어떤 li의 버튼을 클릭햇는지 감지
                  // target : 클릭된 엘리먼트
                         // parentElement : 클릭된 엘리먼트의 부모 (li)
  li.remove()   // 클릭된 li 지우기
}

function paintToDo(newTodo) {
  const li = document.createElement('li') 
  const span = document.createElement('span') 
  span.innerText = newTodo;
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', deleteToDo)
  li.appendChild(span)        // span을 li의 자식으로 등록
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text:newTodo,
    id:Date.now()
  } /////////////4:07
  toDos.push(newTodo)
  paintToDo(newTodo)
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit)

function sayHello(item) {
  console.log('this is the turn of', item)
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // parsedToDos.forEach((item) => console.log('this is the turn of', item));
  // parsedToDos.forEach(sayHello);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}











