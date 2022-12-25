//onPlaying("*", function(songName){$(document).snowfall.clear();})

let autoRemoveSnowDelay = 500;
let autoRemoveSnowRange = 100;
let changedBanner = false; 

clicksRegister = {};
clicksRegisterFun = [
	["001", 5, function(){runLogro("CLICK00");}],
	["001", 7, function(){runLogro("CLICK01");}],
	["001", 8, function(){runLogro("CLICK02");backgroundVideo("speed moment.mp4");}],
	["001", 9, function(){runLogro("CLICK03");backgroundVideo("speed moment.mp4");}],
	["001", 10, function(){runLogro("CLICK04");backgroundVideo("speed moment.mp4");}],
	["001", 11, function(){runLogro("CLICK05");backgroundVideo("speed moment.mp4");}],
	["002", 1, function(){
		if(checkLogroRunned("CLICK10")){runLogro("CLICK11");}
		else{runLogro("CLICK10");}}],
	["002", 2, function(){runLogro("CLICK11");}]
];


function fiestaSongDelay(songName, d, dd){
	setTimeout(function(){if(MUSICPLAYING == songName)startModoFiesta(d, false);}, dd-playingFor()*100);
}

function runClickFun(id, clicks){
	try{
		for(var data of clicksRegisterFun){
			if(data[0] == id && data[1] == clicks) data[2]();
		}
	}catch{}

}

function executeClick(id, t){
	try{
		var start = clicksRegister[id][0];
		var clicks = clicksRegister[id][1];

		if (!start || (new Date - start) >= t*1000) {start = new Date;clicks=0;}
		++clicks;
		clicksRegister[id] = [start, clicks];
		runClickFun(id, clicks);
	}
	catch{
		clicksRegister[id] = [0, 0, 0];
		executeClick(id);
	}
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
	runLogro('vende');
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
	backgroundVideo("hentai3.mp4");
	cinemaMode("400px");
})


onPlaying("NYA! ARIGATO Tokyo", function(songName){
	if(!MODOFIESTA)changedBanner = true;
	backgroundVideo("nya.mp4");
	cinemaMode("200px");
})


onPlaying("SPIT IN MY FACE", function(songName){
	if(!MODOFIESTA)changedBanner = true;
	startModoFiesta();
})


onPlaying("GayEchoSoundEffect", function(songName){
	runLogro("GAY");
	window.scrollTo({ top: 0, behavior: 'smooth' });
	backgroundVideo("Zoolander (Yally - Party Party) [Sub Espaol].mp4");
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
	window.scrollTo({ top: 0, behavior: 'smooth' });
	backgroundVideo("JuanBaile.mp4");
	cinemaMode('1000px');
})


onPlaying("Carajo paiaso", function(songName){
	window.scrollTo({ top: 0, behavior: 'smooth' });
	backgroundVideo("RubenShaco2.mp4");
	cinemaMode('1000px');
})

onPlaying("metroman", function(songName){
	backgroundVideo("metroman.mp4");
	cinemaMode('1000px');
})

onPlaying("pato bailando 7w7", function(songName){
	backgroundVideo("pato bailando 7w7.mp4");
	cinemaMode('200px');
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

	fiestaSongDelay(songName, 170, 900);
	fiestaSongDelay(songName, 1000, 1800);
	fiestaSongDelay(songName, 170, 170);
	fiestaSongDelay(songName, 1000, 3600);
	fiestaSongDelay(songName, 50, 4800);
	fiestaSongDelay(songName, 2000, 9700);
	fiestaSongDelay(songName, 1000, 11000);
	fiestaSongDelay(songName, 460, 13400);
	fiestaSongDelay(songName, 360, 14400);
	fiestaSongDelay(songName, 200, 20700);
	fiestaSongDelay(songName, 150, 22000);
})














function setupSongModes(){

	MODES = [];

	addModeSongs("Navidad", SONGS);

	if(checkLogroRunned("GAY")) {addModeSongs("Plantas vs Zombies", ["Guy Speaks Plants vs Zombies Victory Theme", "webi wabo  letra", "Plants vs Zombies Music Video"]);}

	if(checkLogroRunned("otakus")) addModeSongs("Otaku", ["S3RL HentaiExtreme Bass Boosted", "NYA! ARIGATO Tokyo", "CHAINSAW MAN"]);

	if(checkLogroRunned("🚗")) addModeSongs("Phonk", ["Dark Pact", "SADFRIENDD x KORDHELL  WTF",
		"Sadfriendd x MUPP vendetta", "L19U1D x KORDHELL  I AM THE KING MUSIC VIDEO",
		"Kordhell  Live Another Day", "SPIT IN MY FACE", "KNIGHT"]);

	if(checkLogroRunned("😎")) addModeSongs("😎", ["Los Viernes de la Jungla", "Todas Putas"]);

	if(checkLogroRunned("🍉")) addModeSongs("🍉", ["Los Viernes de la Jungla", "Todas Putas"]);

	if(checkLogroRunned("😎")) addModeSongs("Dance", ["pato bailando 7w7"]);

	if(checkLogroRunned("ROOBCRACK")) addModeSongs("ROOBCRACK", ['Porta - Dragon Ball Rap (con Letra)', "Carajo paiaso"]);

	if(checkLogroRunned("SUCKMYLEG")) addModeSongs("SUCKMYLEG", ["CANELITA  JUANITO JUAN", "Yo he peleado", "Zoolander Yally - Party Party",
		"Todas Putas", "Jose Luis Torrente Todas Putas"]);
}




function otakus(){
	window.scrollTo({ top: 0, behavior: 'smooth' });
	backgroundVideo("robertoBailando.mp4");
	cinemaMode('1000px');

	setTimeout(function(){
		runLogro('otakus');

	}, 1000);

	setTimeout(function(){
		SONGS = ["NYA! ARIGATO Tokyo", "S3RL HentaiExtreme Bass Boosted", "CHAINSAW MAN"];
		displaySongs();
		playMusic("NYA! ARIGATO Tokyo");

	}, 10000);
}

function water(){
	runLogro('🍉');
	cinemaMode('400px');
	backgroundVideo("watermelon.mp4");
}

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
ONLOADS.push(function(){console.log("Running onloads");});
ONLOADS.push(function(){autoRemoveSnow();});