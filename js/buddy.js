function buddy(){
    fetch('https://randomuser.me/api/?results=500')
    .then(res=>res.json())
    .then(data=>totalBuddy(data))
}
function totalBuddy(buddys){
    const resultBuddy=buddys.results
  
    const buddyContainer=document.getElementById('container')
    for(const buddy of resultBuddy){
    const newBuddy=document.createElement('h4')
    newBuddy.innerText=`
    name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}__ Email : ${buddy.email} 
    `
    buddyContainer.appendChild(newBuddy)
    }
}