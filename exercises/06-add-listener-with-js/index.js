window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	document.querySelector("#theGreen").addEventListener('click',alertHandler);
};

//the listener function here
function alertHandler() {
	alert("woohoo!");
}