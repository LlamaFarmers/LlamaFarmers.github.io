document.getElementById("resetButton").addEventListener("click", function () {
	 letter11 = letterBank.charAt(Math.floor(Math.random()*26));
	 letter12 = letterBank.charAt(Math.floor(Math.random()*26));
	 letter13 = letterBank.charAt(Math.floor(Math.random()*26));
	 letter21 = letterBank.charAt(Math.floor(Math.random()*26));
	 letter22 = letterBank.charAt(Math.floor(Math.random()*26));
	 letter23 = letterBank.charAt(Math.floor(Math.random()*26));
	 letter31 = letterBank.charAt(Math.floor(Math.random()*26));
	 letter32 = letterBank.charAt(Math.floor(Math.random()*26));
	 letter33 = letterBank.charAt(Math.floor(Math.random()*26));
	 document.getElementById("row1").innerHTML = letter11 + letter12 + letter13;
	 document.getElementById("row2").innerHTML = letter21 + letter22 + letter23;
	 document.getElementById("row3").innerHTML = letter31 + letter32 + letter33;
});
let myButton = document.getElementById("resetButton");
let myTestingSpace = document.getElementById("testingSpace");
const wordlist = [AAA, AAB]