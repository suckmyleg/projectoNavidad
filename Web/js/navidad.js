//onPlaying("*", function(songName){$(document).snowfall.clear();})

onPlaying("*", function(songName){
	var title = document.getElementById("page_title");
	title.innerHTML = songName;
	title.style.backgroundImage = "none";})

function navidad() {
	$(document).snowfall({deviceorientation : true, round : true, minSize: 1, maxSize:8,  flakeCount : 100});
}

onPlaying("Navidad dulce navidad", function(songName){
	navidad();
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
	document.body.style.backgroundImage = "url('../Images/Ruben.png')";
})

