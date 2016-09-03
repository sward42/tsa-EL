var arrowField = document.getElementById("arrow-div");
var theBody = document.getElementById("main-body");



function getRandom(){
	var randomNum = Math.floor(Math.random() * (10 - 0 + 1) + 0);
	if (randomNum <= 5) {
		arrowField.classList.add('right-arrow');
		arrowField.classList.remove('left-arrow');
	} else {
		arrowField.classList.add('left-arrow');
		arrowField.classList.remove('right-arrow');
	}
}


theBody.addEventListener('click', getRandom);










