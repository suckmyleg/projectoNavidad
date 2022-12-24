//onPlaying("*", function(songName){$(document).snowfall.clear();})

let autoRemoveSnowDelay = 500;
let autoRemoveSnowRange = 100;
let changedBanner = false; 

clicksRegister = {};



start = clicks = frequency = 0 
onclick = function() { 
	if (!start) start = new Date 
	frequency = ++clicks / (new Date - start) * 1000 
}



function startRegisterClicks(id){
	clicksRegister[id] = [0, 0, 0];
}



function autoRemoveSnow(){
	
	for(var i = 0; i < autoRemoveSnowRange; i++){
		try{
			document.getElementById("flake-"+i).remove();
		}
		catch{}
	}
	
	setTimeout(function(){autoRemoveSnow();}, autoRemoveSnowDelay);
}

function clearSnow(){
	for(var i = 0; i < 500; i++){
		try{
			document.getElementById("flake-"+i).remove();
		}
		catch{}
	}
}


function changeBanner(){
	if(!MODOFIESTA)
	{
		changedBanner = true;
		MODOFIESTA = true;
	}
}

function navidad() {
	clearSnow();
	autoRemoveSnowRange = 0;
	runLogro("DIANIEVE");
	$(document).snowfall({deviceorientation : true, round : true, minSize: 0.5, maxSize:8,  flakeCount : 150});
}















onPlaying("*", function(songName){
	unBackgroundVideoIfNotPlaying();
	removeBannerImage()
	uncinemaMode();
	bannerLastColor();
	$(document).snowfall().stop()
	autoRemoveSnowRange = 500;
	document.getElementById("pageBanner").style.backgroundImage = "none";
	if(changedBanner){
		changedBanner = false;
		MODOFIESTA = false;
	}
})


onPlaying("Navidad dulce navidad", function(songName){
	navidad();
	changeBanner();
})

onPlaying("All I Want for Christmas Is You", function(songName){
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(430, false);}, 3200);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(2000, false);}, 8400);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(5200, false);}, 10400);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(4000, false);}, 15700);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1200, false);}, 19700);
	//setTimeout(function(){startModoFiesta(3000);}, 22400);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1000, false);}, 29400);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(2700, false);}, 30400);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1600, false);}, 33400);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1600, false);}, 35400);
	navidad();
	if(!getCookie("FIRSTTIME")){cinemaMode("1000px");setCookie("FIRSTTIME", true, 31);}
})


onPlaying("Carol of The Bells", function(songName){
	navidad();
})


onPlaying("Its Beginning to Look a Lot like Christmas", function(songName){
	navidad();
})


onPlaying("Navidad dulce navidad", function(songName){
	navidad();
})


onPlaying("Navidad", function(songName){
	setVolume(100);
	window.scrollTo({ top: 0, behavior: 'smooth' });
	backgroundVideo("Vende-1.mp4");
	cinemaMode("1000px");
})


onPlaying("Porta - Dragon Ball Rap (con Letra)", function(songName){
	document.getElementById("page_title").style.backgroundImage = "url('../Images/Ruben.png')";
	if(!MODOFIESTA)changedBanner = true;
	startModoFiesta(600);
})


onPlaying("Yo he peleado", function(songName){
	if(!MODOFIESTA)changedBanner = true;
	startModoFiesta(800);
	navidad();
})


onPlaying("S3RL HentaiExtreme Bass Boosted", function(songName){
	if(!MODOFIESTA)changedBanner = true;
	cinemaMode("400px");
	backgroundVideo("hentai3.mp4");
})


onPlaying("NYA! ARIGATO Tokyo", function(songName){
	if(!MODOFIESTA)changedBanner = true;
	cinemaMode("200px");
	backgroundVideo("nya.mp4");
})


onPlaying("SPIT IN MY FACE", function(songName){
	if(!MODOFIESTA)changedBanner = true;
	startModoFiesta();
})


onPlaying("GayEchoSoundEffect", function(songName){
	runLogro("GAY");
	window.scrollTo({ top: 0, behavior: 'smooth' });
	backgroundImage('gay.png');
	cinemaMode('1000px');
})


onPlaying("Guy Speaks Plants vs Zombies Victory Theme", function(songName){
	window.scrollTo({ top: 0, behavior: 'smooth' });
	backgroundVideo("guySpeaksPVZ.mp4");
	cinemaMode('1000px');
})


onPlaying("Zoolander Yally - Party Party", function(songName){
	backgroundVideo("Zoolander (Yally - Party Party) [Sub Espaol].mp4");
	cinemaMode('200px');
	setVolume(80);
})


onPlaying("Fiesta del administrador del grupo", function(songName){
	backgroundVideo("Fiesta del administrador del grupo.mp4");
	cinemaMode('200px');
})


onPlaying("Jose Luis Torrente Todas Putas", function(songName){
	backgroundVideo("Jose Luis Torrente Todas Putas.mp4");
	cinemaMode('1000px');
})


onPlaying("Plants vs Zombies Music Video", function(songName){
	backgroundVideo("Plants vs Zombies Music Video.mp4");
	cinemaMode('1000px');
})


onPlayingSongs(["Dark Pact", "SADFRIENDD x KORDHELL  WTF",
	"Sadfriendd x MUPP vendetta", "L19U1D x KORDHELL  I AM THE KING MUSIC VIDEO",
	"Kordhell  Live Another Day", "KNIGHT"], function(songName){
	backgroundVideo("Jdm drift Saint-Petersburg__Phonk.mp4");
	cinemaMode('200px');
})


onPlaying("CANELITA  JUANITO JUAN", function(songName){
	backgroundVideo("JuanBaile.mp4");
	cinemaMode('1000px');
})


onPlaying("Carajo paiaso", function(songName){
	backgroundVideo("RubenShaco2.mp4");
	cinemaMode('1000px');
})


onPlaying("Todas Putas", function(songName){
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1050, false);}, 1000);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(500, false);}, 15700);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1050, false);}, 26000);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(550, false);}, 31000);
	setVolume(40);
})


onPlaying("Meme", function(songName){
	clearAll();
	cinemaMode('600px');
	setVolume(40);
	var DELAY = 2500;
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+0+'.png');}}, (DELAY*0));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+1+'.png');}}, (DELAY*1));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+2+'.png');}}, (DELAY*2));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+3+'.png');}}, (DELAY*3));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+4+'.png');}}, (DELAY*4));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+5+'.png');}}, (DELAY*5));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+6+'.png');}}, (DELAY*6));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+7+'.png');}}, (DELAY*7));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+8+'.png');}}, (DELAY*8));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+9+'.png');}}, (DELAY*9));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+10+'.png');}}, (DELAY*10));
	setTimeout(function(){if(MUSICPLAYING == songName){backgroundImage("Meme/"+11+'.png');}}, (DELAY*11));
	setTimeout(function(){if(MUSICPLAYING == songName){cinemaMode('76px');}}, (DELAY*12));
	setTimeout(function(){if(MUSICPLAYING == songName){clearAll();}}, (DELAY*12.5));
})


onPlaying("Los Viernes de la Jungla", function(songName){
	setVolume(60);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(170, false);}, 900);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1000, false);}, 1800);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(170, false);}, 2800);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1000, false);}, 3600);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(50, false);}, 4800);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(2000, false);}, 9700);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(1000, false);}, 11000);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(460, false);}, 13400);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(360, false);}, 14400);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(200, false);}, 20700);
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(150, false);}, 22000);
})














function setupSongModes(){
	let MODES = [];

	if(checkLogroRunned("PRIMERAVEZ")) addModeSongs("Navidad", SONGS);

	if(checkLogroRunned("GAY")) {addModeSongs("Plantas vs Zombies", ["Guy Speaks Plants vs Zombies Victory Theme", "webi wabo  letra", "Plants vs Zombies Music Video"]);}

	addModeSongs("Otaku", ["S3RL HentaiExtreme Bass Boosted", "NYA! ARIGATO Tokyo", "CHAINSAW MAN"]);

	addModeSongs("Phonk", ["Dark Pact", "SADFRIENDD x KORDHELL  WTF",
		"Sadfriendd x MUPP vendetta", "L19U1D x KORDHELL  I AM THE KING MUSIC VIDEO",
		"Kordhell  Live Another Day", "KNIGHT"]);

	addModeSongs("😎", ["Los Viernes de la Jungla", "Todas Putas"]);

	if(checkLogroRunned("ROOBCRACK")) modoRoob();

	if(checkLogroRunned("SUCKMYLEG")) modoJuan();
}






autoRemoveSnow();

function modoRoob(){
	runLogro("ROOBCRACK");
	SONGS = ['Porta - Dragon Ball Rap (con Letra)', "Carajo paiaso"];
	displaySongs();
	playMusic('Porta - Dragon Ball Rap (con Letra)');
}

function modoJuan(){
	runLogro("SUCKMYLEG");
	SONGS = ["CANELITA  JUANITO JUAN", "Yo he peleado", "Zoolander Yally - Party Party",
		"Todas Putas", "Jose Luis Torrente Todas Putas"];
	displaySongs();
	playMusic("CANELITA  JUANITO JUAN");
}

