//onPlaying("*", function(songName){$(document).snowfall.clear();})

let autoRemoveSnowDelay = 500;
let autoRemoveSnowRange = 100;
let changedBanner = false; 

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

onPlaying("*", function(songName){
	backgroundVideo("", true);
	var title = document.getElementById("page_title");
	uncinemaMode();
	bannerLastColor();
	$(document).snowfall().stop()
	autoRemoveSnowRange = 500;
	title.style.backgroundImage = "none";
	document.getElementById("pageBanner").style.backgroundImage = "none";
	title.style.color = "black";
	if(changedBanner){
		changedBanner = false;
		MODOFIESTA = false;
	}
})

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
	$(document).snowfall({deviceorientation : true, round : true, minSize: 0.5, maxSize:8,  flakeCount : 150});
}

onPlaying("Navidad dulce navidad", function(songName){
	navidad();
	changeBanner();
})

onPlaying("All I Want for Christmas Is You", function(songName){
	navidad();
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
	backgroundVideo("vende.mkv");
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
	backgroundImage('gay.png');
	cinemaMode('1000px');
})

onPlaying("Guy Speaks Plants vs Zombies Victory Theme", function(songName){
	backgroundVideo("guySpeaksPVZ.mp4");
	cinemaMode('1000px');
})

onPlaying("Zoolander Yally - Party Party", function(songName){
	backgroundVideo("Zoolander (Yally - Party Party) [Sub Espaol].mp4");
	cinemaMode('1000px');
	setVolume(80);
})

autoRemoveSnow();

function modoRoob(){
	SONGS = ['Porta - Dragon Ball Rap (con Letra)'];
	displaySongs();
	playMusic('Porta - Dragon Ball Rap (con Letra)');
}

function modoJuan(){
	SONGS = ["CANELITA  JUANITO JUAN", "Yo he peleado", "Zoolander Yally - Party Party"];
	displaySongs();
	playMusic("CANELITA  JUANITO JUAN");
}
addModeSongs("Plantas vs Zombies", ["Guy Speaks Plants vs Zombies Victory Theme", "webi wabo  letra"]);

addModeSongs("Otaku", ["S3RL HentaiExtreme Bass Boosted", "NYA! ARIGATO Tokyo", "CHAINSAW MAN"]);

addModeSongs("Phonk", ["Dark Pact", "SADFRIENDD x KORDHELL  WTF",
	"Sadfriendd x MUPP vendetta", "L19U1D x KORDHELL  I AM THE KING MUSIC VIDEO",
	"Kordhell  Live Another Day", "KNIGHT"]);