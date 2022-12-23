

let isMouseOver = false;

let MODOFIESTA = getCookie("MODOFIESTA");

let LASTCOLOR = getCookie("lastBannerColor");

let ONLOADS = [];

let MODOFIESTADELAY = 100;

onload = function() {
	
	if (false && window.location.href != "file:///C:/Users/juani/Desktop/projectoNavidad/index.html"){
		document.getElementById("page_title").style.display = "none";
	}

	if(LASTCOLOR){
		var pageTitle = document.getElementById("page_title");
		if(pageTitle.style.backgroundImage == "none" || pageTitle.style.backgroundImage == ""){
			pageTitle.style.backgroundColor = LASTCOLOR;
		}else{
			pageTitle.style.color = LASTCOLOR;	
		}
	}

	musicStart();

	for(var fun of ONLOADS){
		fun();
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

function bannerChangeColor() {

	new_color = getRandomColor();

	pageTitle = document.getElementById('page_title');

	if(MODOFIESTA){
		console.log(pageTitle.style.backgroundImage);
		if(pageTitle.style.backgroundImage == "none" || pageTitle.style.backgroundImage == ""){
			pageTitle.style.backgroundColor = new_color;
		}
		else{
			pageTitle.style.color = new_color;
		}
		setCookie("lastBannerColor", new_color, 1);
		//pageTitle.innerHTML = "SuckMyLeg ("+new_color+")";
	}
	setTimeout(function() {bannerChangeColor();}, MODOFIESTADELAY);
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


function startModoFiesta(delay=100){
	MODOFIESTADELAY = delay;
	MODOFIESTA = true;
}