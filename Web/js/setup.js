

let isMouseOver = false;

let MODOFIESTA = getCookie("MODOFIESTA");

let	MODOCINEMA = false;

let LASTCOLOR = getCookie("lastBannerColor");

let ONLOADS = [];

let MODOFIESTADELAY = 100;

onload = function() {
	
	if (false && window.location.href != "file:///C:/Users/juani/Desktop/projectoNavidad/index.html"){
		document.getElementById("pageBanner").style.display = "none";
	}

	bannerLastColor();

	musicStart();

	for(var fun of ONLOADS){
		fun();
	}

	bannerChangeColor();
}

function bannerLastColor(){
	if(LASTCOLOR){
		var pageTitle = document.getElementById("pageBanner");
		if(pageTitle.style.backgroundImage == "none" || pageTitle.style.backgroundImage == ""){
			pageTitle.style.backgroundColor = LASTCOLOR;
		}else{
			pageTitle.style.color = LASTCOLOR;	
		}
	}else{
		LASTCOLOR = getRandomColor();
	}
}

function getRandomNumber(limit){
	return Math.floor(Math.random()*limit)
}

function getRandomColor(){
	var h = getRandomNumber(360);
	var s = getRandomNumber(200);
  	var l = getRandomNumber(50)+50;

	return `hsl(${h}deg, ${s}%, ${l}%)`;
}

function bannerChangeColor() {

	new_color = getRandomColor();

	pageTitle = document.getElementById('pageBanner');

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
	uncinemaMode();
}

function cinemaMode(height="600px"){
	MODOCINEMA = true;
	MODOFIESTA = false;
	if(SETTINGS.cinemaheight && SETTINGS.cinemaheight != "false"){height = SETTINGS.cinemaheight;}
	document.getElementById("pageBanner").style.height = height;
	document.getElementById('bannerBackgroundVideo').style.height = height;
	document.getElementById('page_title').style.fontSize = "20px";
}

function uncinemaMode(){
	MODOCINEMA = false;
	document.getElementById("pageBanner").style.height = "76px";
	document.getElementById('bannerBackgroundVideo').style.height = "76px";
	document.getElementById('page_title').style.fontSize = "2em";
}

function backgroundImage(imageName){
	MODOFIESTA = false;
	document.getElementById("pageBanner").style.backgroundColor = "rgb(0,0,0,0)";
	document.getElementById("pageBanner").style.backgroundImage = "url('../Images/"+imageName+"')";
}


function reloadCinemaHeight(){
	if(MODOCINEMA) cinemaMode(SETTINGS.cinemaheight);
}

function backgroundVideo(videoName, muted=true){
	MODOFIESTA = false;

	document.getElementById("pageBanner").style.backgroundColor = "rgb(0,0,0,0)";

	var video = document.getElementById('bannerBackgroundVideo');

	try{
		video.pause();
		video.removeAttribute('src'); // empty source
		video.load();
		video.currentTime = 0;
		video.innerHTML = "";
	}catch{}


	var source = document.createElement('source');

	source.setAttribute('src', '../Videos/'+videoName);
	source.setAttribute('type', 'video/mp4');

	video.appendChild(source);

	video.muted = muted;

	try{
		setCookie("BACKGROUNDVIDEO", videoName, 1);
		setCookie("BACKGROUNDVIDEOTIME", videoName, 1);
		video.load();
		video.play();
	}catch{}
}