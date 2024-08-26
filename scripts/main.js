document.querySelector("resetButton").addEventListener("click", function () {
	document.getElementById("testingSpace").innerHTML = letterBank.charAt(Math.floor(Math.random()*26) + 1);
});