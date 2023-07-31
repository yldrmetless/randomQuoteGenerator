const quoteText = document.querySelector(".quote"),
      authorName = document.querySelector(".author .name")
      quoteBtn = document.querySelector("button"),
      soundBtn = document.querySelector(".sound"),
      copyBtn = document.querySelector(".copy"),
      twitterBtn = document.querySelector(".twitter");


const randomQuote = () => {
    // console.log("clicked");
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading"
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            console.log(result);
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerText = "New Quote"
            quoteBtn.classList.remove("loading")
        })
}


soundBtn.addEventListener("click", () => {
    let speech = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    // console.log(typeof speech);
    speechSynthesis.speak(speech)
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank")
})


quoteBtn.addEventListener("click",randomQuote)

//https://twitter.com/intent/tweet?url