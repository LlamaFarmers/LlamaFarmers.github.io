document.getElementById("resetButton").addEventListener("click", function () {
	 document.getElementById("testingSpace").innerHTML = letterBank.charAt(Math.floor(Math.random()*26) + 1);
});
let myButton = document.querySelector("resetButton");
let myTestingSpace = document.querySelector("testingSpace");