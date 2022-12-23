function navidad() {
	$(document).snowfall({deviceorientation : true, round : true, minSize: 1, maxSize:8,  flakeCount : 250});
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

onPlaying("*", function(songName){$(document).snowfall.clear();})