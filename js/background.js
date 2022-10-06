const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg']

const chosenImage = images[Math.floor(Math.random() * images.length)]
                // 랜덤으로 배열의 인덱스 번호 뽑아내기

const bgImage = document.createElement('img');
                        // createElement(태그명) : HTML 문서에 없는 요소를 만들어서 반환

bgImage.src = `img/${chosenImage}`   // img src 생성

document.body.appendChild(bgImage)
        // body의 자식으로 등록한다 : appendChild-가장 뒤에 / prependChild 가장 위에 삽입






