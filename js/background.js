const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg']

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)
        // body의 자식으로 등록한다 : appendChild-가장 뒤에 / prependChild 가장 위에 삽입






