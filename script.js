var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

var button = document.createElement("button");
button.appendChild(document.createTextNode("Random"));
color1.parentElement.appendChild(button);
button.classList.toggle("random");

function randomColor() {
	var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	console.log(randomColor);
	return randomColor;
}

function randomizeGradient(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

button.addEventListener("click", randomizeGradient);