const quotes = [
  {
    quote: '언제나 현재에 집중할수 있다면 행복할것이다.',
    author: '파울로 코엘료'
  },
  {
    quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다',
    author: '엘버트 허버드'
  },
  {
    quote: '행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다',
    author: '헬렌켈러'
  },
  {
    quote: '단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?',
    author: '이드리스 샤흐'
  },
  {
    quote: '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에',
    author: '엘사 맥스웰'
  },
  {
    quote: '먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다 ',
    author: '채근담'
  },
  {
    quote: '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
    author: 'L.론허바드'
  },
  {
    quote: '어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다',
    author: '제임스 오펜하임'
  },
  {
    quote: '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다',
    author: '단테'
  },
  {
    quote: '고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.',
    author: '괴테'
  },
  {
    quote: '마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다',
    author: '이소룡'
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
