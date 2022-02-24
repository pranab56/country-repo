function kanya(){
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>kanyaU(data))
}
function kanyaU(quotes){
    const allQuote=document.getElementById('container')

const newQuote=document.createElement('h3')
newQuote.innerHTML=`<h3 style='color:red'>motivate space :</h3> ${quotes.quote}`
allQuote.appendChild(newQuote)
}
