var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {

	currentUser = currentUser == "Juan" || currentUser == "Josh" ?
		currentUser != "Josh" ?
			"Josh" : "Mario"
		: currentUser != "Mario" ?
			"Mario" : "Juan";

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
