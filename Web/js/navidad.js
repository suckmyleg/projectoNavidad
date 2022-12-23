onPlaying("Navidad dulce navidad", function(songName){
	$(document).snowfall({deviceorientation : true, round : true, minSize: 1, maxSize:8,  flakeCount : 250});
})

onPlaying("*", function(songName){$(document).snowfall.clear();})