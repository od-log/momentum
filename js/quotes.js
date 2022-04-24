const quotes = [
    {
        quote: "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다.",
        author: "존 F. 케네디"
    }, 
    {
        quote: "변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다. 우리 자신이 우리가 기다리던 사람이고 우리가 바로 우리가 추구하는 변화이다.",
        author: "버락 오바마"
    },
    {
        quote: "행동은 모든 성공의 가장 기초적인 핵심이다.",
        author: "파블로 피카소"
    },
    {
        quote: "너는 머뭇거릴 수 있지만, 시간은 그렇지 않다.",
        author: "벤자민 프랭클린"
    },
        


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuotes.quote;
// author.innerText = `- ${todayQuotes.author}`;


document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(quote,
        {afterComplete: (instance) => {
            instance.destroy();
            new TypeIt(author, {
                strings : [`- ${todayQuotes.author}`],
                startDelay: 400,
                afterComplete: (instance) => {instance.destroy();}
            }).go();}
        }).go();
});

