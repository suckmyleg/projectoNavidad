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
	var title = document.getElementById("page_title");
	$(document).snowfall().stop()
	autoRemoveSnowRange = 500;
	title.style.backgroundImage = "none";
	title.style.color = "black";
	if(changedBanner){
		changedBanner = false;
		MODOFIESTA = false;
	}
})


function navidad() {
	clearSnow();
	autoRemoveSnowRange = 0;
	$(document).snowfall({deviceorientation : true, round : true, minSize: 0.5, maxSize:8,  flakeCount : 150});
}

onPlaying("Navidad dulce navidad", function(songName){
	navidad();
	changedBanner = true;
	MODOFIESTA = true;
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

onPlaying("Porta - Dragon Ball Rap (con Letra)", function(songName){
	document.getElementById("page_title").style.backgroundImage = "url('../Images/Ruben.png')";
})

autoRemoveSnow();


function modoRoob(){
	SONGS = ['Porta - Dragon Ball Rap (con Letra)'];
	displaySongs();
	changedBanner = true;
	MODOFIESTA = true;	
	playMusic('Porta - Dragon Ball Rap (con Letra)');
}