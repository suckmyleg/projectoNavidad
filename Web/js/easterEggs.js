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

	setTimeout(function(){startModoFiesta(430);}, 3200);
	setTimeout(function(){startModoFiesta(2000);}, 8400);
	setTimeout(function(){startModoFiesta(5200);}, 10400);
	setTimeout(function(){startModoFiesta(4000);}, 15700);
	setTimeout(function(){startModoFiesta(1200);}, 19700);
	//setTimeout(function(){startModoFiesta(3000);}, 22400);
	setTimeout(function(){startModoFiesta(1000);}, 29400);
	setTimeout(function(){startModoFiesta(2700);}, 30400);
	setTimeout(function(){startModoFiesta(1600);}, 33400);
	setTimeout(function(){startModoFiesta(1600);}, 35400);
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
	cinemaMode('200px');
	setVolume(80);
})

onPlaying("Fiesta del administrador del grupo", function(songName){
	backgroundVideo("Fiesta del administrador del grupo.mp4");
	cinemaMode('200px');
})

onPlaying("Jose Luis Torrente Todas Putas", function(songName){
	backgroundVideo("Jose Luis Torrente Todas Putas.mp4");
	cinemaMode('200px');
})


onPlaying("Todas Putas", function(songName){
	setTimeout(function(){startModoFiesta(1050);}, 1000);
	setTimeout(function(){startModoFiesta(500);}, 15700);
	setTimeout(function(){startModoFiesta(1050);}, 26000);
	setTimeout(function(){startModoFiesta(550);}, 31000);
	setVolume(40);
})





autoRemoveSnow();

function modoRoob(){
	SONGS = ['Porta - Dragon Ball Rap (con Letra)'];
	displaySongs();
	playMusic('Porta - Dragon Ball Rap (con Letra)');
}

function modoJuan(){
	SONGS = ["CANELITA  JUANITO JUAN", "Yo he peleado", "Zoolander Yally - Party Party",
		"Todas Putas", "Jose Luis Torrente Todas Putas"];
	displaySongs();
	playMusic("CANELITA  JUANITO JUAN");
}
addModeSongs("Plantas vs Zombies", ["Guy Speaks Plants vs Zombies Victory Theme", "webi wabo  letra"]);

addModeSongs("Otaku", ["S3RL HentaiExtreme Bass Boosted", "NYA! ARIGATO Tokyo", "CHAINSAW MAN"]);

addModeSongs("Phonk", ["Dark Pact", "SADFRIENDD x KORDHELL  WTF",
	"Sadfriendd x MUPP vendetta", "L19U1D x KORDHELL  I AM THE KING MUSIC VIDEO",
	"Kordhell  Live Another Day", "KNIGHT"]);

addModeSongs("😎", ["Los Viernes de la Jungla", "Todas Putas"]);