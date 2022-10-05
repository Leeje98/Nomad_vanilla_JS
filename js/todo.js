const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list');

const toDos = [];

function saveToDos() {
  localStorage.setItem('todos', toDos)
}

function deleteToDo(event) {
  const li = event.target.parentElement         // 어떤 li의 버튼을 클릭햇는지 감지
                  // target : 클릭된 엘리먼트
                         // parentElement : 클릭된 엘리먼트의 부모
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
  toDos.push(newTodo)
  paintToDo(newTodo)
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit)









