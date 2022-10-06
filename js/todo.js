const toDoForm = document.getElementById('todo-form');  // from
const toDoInput = toDoForm.querySelector('input')       // from 안의 input
const toDoList = document.getElementById('todo-list');  // li가 생성되는 ul

const TODOS_KEY = 'todos'

let toDos = [];             // 값이 변화하는 배열 생성

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))    // 문자열로 변환한 값을 로컬스토리지에 저장
                                // JSON.stringify(): JavaScript 값이나 객체를 JSON 문자열로 변환
                                // ** 로컬 스토리지는 오직 문자(텍스트)만 저장 할 수 있다 **
}

function deleteToDo(event) {                    // event : 삭제 button 클릭
  const li = event.target.parentElement         // 어떤 li의 버튼을 클릭햇는지 감지 - 버튼이벤트를 하나만 등록해서 모든 li안의 버튼에 공통으로 적용했기 때문에 어떤 li의 버튼을 눌렀는지 찾아야 한다 그래서 parentElement써서 부모를 구별한다
          // event : 클릭
                  // target : 클릭된 엘리먼트
                         // parentElement : 클릭된 엘리먼트의 부모 (li)
  li.remove()   // 클릭된 li 지우기
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))  // 필터 기능을 통해 내가 클릭한 li를 제외한 나머지 li만 새로 배열하겠다
  saveToDos()    // 로컬스토리지에 저장하는 함수 실행
}

function paintToDo(newTodo) {                   // handleToDoSubmit함수의 newTodo(폼에 입력한 value)값 들고오기
  const li = document.createElement('li')       // li생성
  li.id = newTodo.id
  const span = document.createElement('span')   // span 생성
  span.innerText = newTodo.text;                   // newTodo:폼에 입력한 value값  // 오브젝트 객체의 text값
  const button = document.createElement('button')  // button 생성
  button.innerText = '❌'
  button.addEventListener('click', deleteToDo)      // 버튼 클릭시 deleteToDo함수 실행
  li.appendChild(span)        // span을 li의 자식으로 등록
  li.appendChild(button)      // button을 li의 자식으로 등록
  toDoList.appendChild(li)    // li를 ui의 자식으로 등록
}

function handleToDoSubmit(event) {     // event : submit
  event.preventDefault();              // submit의 기본동작 방지
  const newTodo = toDoInput.value;     // newTodo변수에 입력한 폼의 value값 저장하기
  toDoInput.value = '';                // 폼 비워주기
  const newTodoObj = {                 // 객체 생성
    text:newTodo,             // 객체에 포함된 입력한 폼의 value값
    id:Date.now()             // 객체의 id값(key)
  }    // Date.now() : 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 Number 형으로 반환
  toDos.push(newTodoObj)                 // 입력한 폼의 value값을 포함한 객체를 배열(toDos)에 등록
  paintToDo(newTodoObj)                  // paintToDo 함수 실행
  saveToDos();                          // 로컬스토리지에 값 저장하는 함수실행
}

toDoForm.addEventListener('submit', handleToDoSubmit)   // 폼 제출시 handleToDoSubmit 함수 실행

function sayHello(item) {        // item : 배열의 해당 요소
  console.log('this is the turn of', item)
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {       // 로컬 스토리지에 저장된 값이 있다면
  const parsedToDos = JSON.parse(savedToDos);  // JSON.parse: string을 배열로 변환해줌
                                               // 단순 json타입(텍스트) |a,b,c|가 아니라 |['a', 'b', 'c']|<-의 배열모양의 string 타입으로 저장되게 함

  // parsedToDos.forEach(sayHello);    /// 1. sayHello 함수를 따로 빼서 하는 방법 
  // parsedToDos.forEach((item) => console.log('this is the turn of', item));  /// 2. 함수를 따로 빼지 않고 화살표 함수를 사용하는 방법(최신)
  
  toDos = parsedToDos;       // 로컬스토리지에 값이 있으면 원래 존재하던 값부터 복원
                             // ㄴ이 항목을 추가하지 않으면 toDos는 빈 배열로 선언되었기 때문에 새로 추가하는 요소가 있으면 있던 배열에 추가되는 것이 아닌 빈 배열에 다시 생성되는것이 된다

  parsedToDos.forEach(paintToDo);       /// 3. 우리가 원하는 것은 콘솔 출력이 아니기 때문에 그냥 paintToDo함수만 실행해준다
  // parsedToDos의 배열 대한 각각의 아이템에 대한 함수를 실행
  paintToDo({text:'a'})
}













