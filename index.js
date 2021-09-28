function addingEventListener() {
const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was a clicked!');
  console.log("hi")
});     
}

const button =  document.createElement("BUTTON");
console.log(button)
button.innerHTML = "CLICK ME"; 
document.body.appendChild(button)
button.addEventListener(`click`, elem=> console.log(elem.target))