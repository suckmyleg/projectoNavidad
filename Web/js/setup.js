onload = function() {
	
	if (false && window.location.href != "file:///C:/Users/juani/Desktop/projectoNavidad/index.html"){
		document.getElementById("page_title").style.display = "none";
	}

	bannerChangeColor();
}

function getRandomNumber(limit){
	return Math.floor(Math.random()*limit)
}

function getRandomColor(){
	var h = getRandomNumber(360);
	var s = getRandomNumber(200);
  	var l = getRandomNumber(70);

	return `hsl(${h}deg, ${s}%, ${l}%)`;
}

let isMouseOver = false;
let modoFiesta = false;

function bannerChangeColor() {

	new_color = getRandomColor();

	pageTitle = document.getElementById('page_title');

	if(modoFiesta){
		pageTitle.style.backgroundColor = new_color;
		//pageTitle.innerHTML = "SuckMyLeg ("+new_color+")";
	}
	setTimeout(function() {bannerChangeColor();}, 100);
}

function switchModoFiest() {
	modoFiesta = !modoFiesta;
}

function onMouseOverBanner() {
	isMouseOver = true;
}

function onMouseOutBanner(){
	isMouseOver = false;
}