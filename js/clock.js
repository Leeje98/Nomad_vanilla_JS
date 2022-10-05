const clock = document.querySelector('#clock')

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = (`${hours}:${minutes}:${seconds}`)
}

// setInterval(sayHello, 5000)
 // setInterval : 정해진 시간마다 실행되는 함수 - 첫번째 인자로 실행 함수, 두번째 인자로 시간을 받는다

 getClock()
 setInterval(getClock, 1000)
//  setTimeout : 정해진 시간 이후에 실행되는 함수 - 첫번째 인자로 실행 함수, 두번째 인자로 시간을 받는다





