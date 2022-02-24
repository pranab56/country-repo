function country(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>dataCountry(data))
}
function dataCountry(flugs){
const totalFlug=document.getElementById('container')
for(const flug of flugs){
    // console.log(flug);
  const flugDiv=document.createElement('div')
  flugDiv.innerHTML=`
  <h5>${flug.name.common}</h5>
  <img src='${flug.flags.png}'
  >
`
  totalFlug.appendChild(flugDiv)
}
}