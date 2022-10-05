const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'



function onLoginSubmit(event) {
    event.preventDefault();           // submit의 기본 기능인 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME)   // login폼에 클래스명 추가하기 (hidden)
    const username = loginInput.value;          // 유저 네임은 폼에 입력한 값이다
    localStorage.setItem(USERNAME_KEY, username)  // 로컬 스토리지에 유저네임 저장하기
    paintGreegings()    //  paintGreegings 함수 실행
}

function paintGreegings() {    
    const username = localStorage.getItem(USERNAME_KEY) 
    greeting.innerText = `Hello ${username}`;    // 유저에게 인사하기 (h1의 값 생성)
    greeting.classList.remove(HIDDEN_CLASSNAME);  // hidden클래스 지워 h1 노출시키기
}

const savedUsername = localStorage.getItem(USERNAME_KEY)     // 로컬 스토리지에 저장된 유저네임의 키값

if(savedUsername === null) {  // 로컬 스토리지에 저장된 유저네임이 없다면
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)            // 폼에 있던 hidden 클래스 지워서 노출
    loginForm.addEventListener('submit', onLoginSubmit)     // 폼의 subint기능시 onLoginSubmit함수 실행
} else {       // 로컬 스토리지에 저장된 유저네임이 있다면
    // show the greetings
    paintGreegings()  // paintGreegings함수 실행
}