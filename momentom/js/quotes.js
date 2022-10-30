const quotes = [
  {
    quote: "행복은 습관이다, 그것을 몸에 지니라.",
    author: "허버드",
  },
  {
    quote:
      "절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다.",
    author: "마이크 맥라렌",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
    author: "괴테",
  },
  {
    quote:
      "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭",
  },
  {
    quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다",
    author: "헨리 포드.",
  },
  {
    quote:
      "용기있는 자로 살아라. 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라.",
    author: "키케로",
  },
  {
    quote:
      "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
    author: "오손 웰스",
  },
  {
    quote: "문제점을 찾지 말고 해결책을 찾으라.",
    author: "헨리포드",
  },
  {
    quote:
      "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다.",
    author: "루소",
  },
  {
    quote: "겨울이 오면 봄이 멀지 않으리.",
    author: "셸리",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
