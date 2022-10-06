
const API_KEY = '071ddc563aa4f0fd47b4922ff0086e2e'

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
  console.log('You live in', lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(Response => Response.json())
  .then(data => {
    const weather = document.querySelector('#weather span:first-child')
    const city = document.querySelector('#weather span:last-child')
    city.innerText = data.name
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
  })
  // fetch : 실제로 url에 갈 필요없이 자바스크립트가 대신 url을 부른다
}

function onGeoError() {
  alert("Can't find you. No weather for you. \n 당신을 찾을 수 없습니다. 날씨가 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
// Navigator.geolocation : 웹에서 장치의 위치를 알아낼 때 사용할 수 있는 Geolocation 객체를 반환
// Geolocation.getCurrentPosition : 장치의 현재 위치를 가져온다 - 첫번째 인자로 문제가 없을때 정상적으로 실행되는 함수, 두번째 인자로 에러가 났을때 실행되는 함수를 가져온다






