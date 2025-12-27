const btn=document.getElementById("btn1")
btn.addEventListener('click',function handleClick(event){

event.preventDefault()
const name2=document.getElementById('name2').value;
const email=document.getElementById('email').value;
const pass=document.getElementById('pass').value;

console.log("button was clicked");

console.log(name2,email,pass);
})