

let isMouseOver = false;

let MODOFIESTA = getCookie("MODOFIESTA");

let	MODOCINEMA = false;

let LASTCOLOR = getCookie("lastBannerColor");

let VIDEOPLAYING = false;

let ONLOADS = [];

let MODOFIESTADELAY = 100;

let ONLOADED = false;

onload = function() {
	if(!ONLOADED)
	{
		if (false && window.location.href != "file:///C:/Users/juani/Desktop/projectoNavidad/index.html"){
			document.getElementById("pageBanner").style.display = "none";
		}

		bannerLastColor();

		setupSongModes();

		musicStart();

		for(var fun of ONLOADS){
			fun();
		}

		bannerChangeColor();
		ONLOADED = true;
	}
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
	var s = getRandomNumber(180);
  	var l = getRandomNumber(20)+40;

	return `hsl(${h}deg, ${s}%, ${l}%)`;
}

function bannerChangeColor() {

	var new_color = LASTCOLOR;

	while(new_color == LASTCOLOR)
	{
		new_color = getRandomColor();
	}

	pageTitle = document.getElementById('pageBanner');

	if(MODOFIESTA){
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


function startModoFiesta(delay=100, disable=true){
	MODOFIESTADELAY = delay;
	MODOFIESTA = true;
	if(disable)uncinemaMode();
}

function cinemaMode(height="600px"){
	MODOCINEMA = true;
	MODOFIESTA = false;
	if(SETTINGS.cinemaheight && SETTINGS.cinemaheight != "false"){height = SETTINGS.cinemaheight;}
	document.getElementById("pageBanner").style.height = height;
	document.getElementById('bannerBackgroundVideo').style.height = height;
	document.getElementById('page_title').style.fontSize = "0px";
	document.getElementById('footerAutores').style.display = "none";
	removeBannerImage();
}

function clearAll(){
	uncinemaMode();
	removeVideoPlaying();
	removeBannerImage();
	bannerLastColor();
}


function removeBannerImage(){
	document.getElementById("page_title").style.color = "black";
	document.getElementById("pageBanner").style.backgroundImage = "none";
	document.getElementById("page_title").style.backgroundImage = "none";
}

function uncinemaMode(){
	MODOCINEMA = false;
	document.getElementById("pageBanner").style.height = "76px";
	document.getElementById('bannerBackgroundVideo').style.height = "76px";
	document.getElementById('page_title').style.fontSize = "2em";
	document.getElementById('footerAutores').style.display = "block";
}

function backgroundImage(imageName){
	MODOFIESTA = false;
	removeVideoPlaying();
	uncinemaMode();
	document.getElementById("page_title").style.backgroundColor = "none";
	document.getElementById("page_title").style.backgroundImage = "none";
	document.getElementById("pageBanner").style.backgroundColor = "rgb(0,0,0,0)";
	document.getElementById("pageBanner").style.backgroundImage = "url('../Images/"+imageName+"')";
}


function reloadCinemaHeight(){
	if(MODOCINEMA) cinemaMode(SETTINGS.cinemaheight);
}

function unBackgroundVideoIfNotPlaying(){
	videoPlayedBefore = VIDEOPLAYING;

	setTimeout(function(){if(((videoPlayedBefore != VIDEOPLAYING) && !VIDEOPLAYING) && videoPlayedBefore) removeVideoPlaying();}, 1000);
}

/*
false false = true

false true = false

0 0 = false

true false = true

true true = false*/

function removeVideoPlaying(){
	var video = document.getElementById('bannerBackgroundVideo');

	try{
		video.pause();
		video.removeAttribute('src'); // empty source
		video.load();
		video.currentTime = 0;
		video.innerHTML = "";
	}catch{}
}

function backgroundVideo(videoName, muted=true){
	MODOFIESTA = false;

	document.getElementById("pageBanner").style.backgroundColor = "rgb(0,0,0,0)";

	if(VIDEOPLAYING == videoName) {return false;}

	if(videoName != "") {VIDEOPLAYING = videoName;}
	else{
		VIDEOPLAYING = false;
	}

	var video = document.getElementById('bannerBackgroundVideo');

	removeVideoPlaying();


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