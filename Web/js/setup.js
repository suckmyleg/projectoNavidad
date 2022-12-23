

let isMouseOver = false;

let MODOFIESTA = getCookie("MODOFIESTA");

let LASTCOLOR = getCookie("lastBannerColor");


onload = function() {
	
	if (false && window.location.href != "file:///C:/Users/juani/Desktop/projectoNavidad/index.html"){
		document.getElementById("page_title").style.display = "none";
	}

	if(LASTCOLOR){
		document.getElementById("page_title").style.backgroundColor = LASTCOLOR;
	}

	bannerChangeColor();

	musicStart();
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

function bannerChangeColor() {

	new_color = getRandomColor();

	pageTitle = document.getElementById('page_title');

	if(MODOFIESTA){
		pageTitle.style.backgroundColor = new_color;
		setCookie("lastBannerColor", new_color, 1);
		//pageTitle.innerHTML = "SuckMyLeg ("+new_color+")";
	}
	setTimeout(function() {bannerChangeColor();}, 100);
}

function switchModoFiest() {
	MODOFIESTA = !MODOFIESTA;
	setCookie("MODOFIESTA", MODOFIESTA, 1);
}

function onMouseOverBanner() {
	isMouseOver = true;
}

function onMouseOutBanner(){
	isMouseOver = false;
}