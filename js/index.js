function DATAUSERS(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>dataUser(data))
}
function dataUser(users){
    const allusers=document.getElementById('container')
  for(const user of users){
   const newUsers=document.createElement('h4')
   newUsers.innerText=`${user.name}`
   newUsers.style.backgroundColor='magenta'
   newUsers.style.width='200px'
   newUsers.style.padding='20px'
   newUsers.style.textAlign='center'
   allusers.appendChild(newUsers)
  }
}