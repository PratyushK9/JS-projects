// apiurl 
const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json"

let randomIndexGenerated;
let generatedQuote; //Holds the value of the uniquely generated quote each time
let quote = document.getElementById('fetched-quote')
let  author = document.getElementById('fetched-author')
let apiQuotes;  //Holdes the value of all the response from the api
const twitterButton = document.querySelector('.twitter-btn')
const generateQuoteButton = document.querySelector('.quote-generate-btn')

// fetching the api quotes 

function newQuote(){
    generatedQuote =  apiQuotes[Math.floor(Math.random()* apiQuotes.length) ]
    
    // checking for the text length  and then assigning it
    if(generatedQuote.text.length >120){
        quote.classList.add('long-quote')
    }else{
        quote.classList.remove('long-quote')
    }
    quote.innerText = generatedQuote.text;


    // checking for the authors name to be empty  
    if(!generatedQuote.author || generatedQuote.author == "Anonymous"){
        author.innerText = "-Unknown"
    }
    else{
        author.innerText  = `-${generatedQuote.author}`
    }
    
    
   

}
async function getQuotes(){
    try {
       
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        randomIndexGenerated = Math.floor(Math.random()* apiQuotes.length)  //this is the shorcut to use random index eachtime fn is called


        // calling the newQuote fn 
        newQuote();

       
    } catch (error) {
        alert(error)
    }
}
function tweetQuote(){
    tweetUrl = `https://twitter.com/intent/tweet?text=${generatedQuote.text}  -${generatedQuote.author}`

    // opens a new window 
    window.open(tweetUrl, "_blank")
}


generateQuoteButton.addEventListener('click', ()=>{
    newQuote();
})
twitterButton.addEventListener('click',()=>{
    tweetQuote();
})

// calling getquotes fn 
getQuotes()