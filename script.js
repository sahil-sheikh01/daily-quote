const quote = document.getElementById("quote");
const author = document.getElementById("author");
const API_URL = "https://dummyjson.com/quotes/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.textContent = data.quote;
    author.textContent = data.author;
}

getQuote(API_URL);

function tweet() {
    const text = encodeURIComponent(
        quote.textContent + "\n— " + author.textContent
    );

    window.open(
        "https://x.com/intent/post?text=" + text,
        "Tweet Window", 
        "width=600, height=300"
    ); 
};
