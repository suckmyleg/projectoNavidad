
let LASTVISIT = getCookie("LASTVISIT");
let MUSICPLAYING = getCookie("MUSICPLAYING");
let SINCEPLAYING = getCookie("SINCEPLAYING");
let PAUSED = getCookie("PAUSED");
let PAUSEDAT = getCookie("PAUSEDAT");
let VOLUME = getCookie("PAUSEDAT");

if(VOLUME == false){
	VOLUME = 20;
}

let onPlayings = {};

var SONGS = ["All I Want for Christmas Is You", 
	"Carol of The Bells", 
	"Its Beginning to Look a Lot like Christmas", 
	"Mi cancion ;D",
	"I Really Want to Stay at Your House",
	"Navidad dulce navidad",
	"Yo he peleado",
	"Porta - Dragon Ball Rap (con Letra)"];


function onPlaying(songName, fun){
	try{
		onPlayings[songName].push(fun);
	}
	catch{
		onPlayings[songName] = [fun];
	}
}

function callOnPlaying(songName){
	try{

	}catch(){
		
	}
}

function getTimestampInSeconds() {
  return Math.floor(Date.now() / 100)/10;
}


function musicPlayingElement(){
	totalPlaying = getTimestampInSeconds() - SINCEPLAYING;

	let add = new Date(totalPlaying * 1000).toISOString().substring(14, 19)

	return "<audio controls autoplay id='audioControll' controlsList='nodownload noplaybackrate'>"+
	"<source src='Music/"+MUSICPLAYING+".mp3#t=00:"+add+"' type='audio/mpeg'>"+
	"<source src='../Music/"+MUSICPLAYING+".mp3#t=00:"+add+"' type='audio/mpeg'>"+
	"Your browser does not support the audio element"+
	"</audio>";
}


function continuePlaying(){
	document.getElementById("audioPlayer").innerHTML = musicPlayingElement();

	var audioControll = document.getElementById("audioControll")

	audioControll.onended = function() {
		var next = SONGS[SONGS.indexOf(MUSICPLAYING)+1];

		if (next == undefined)
		{
			playMusic(SONGS[0]);
		}
		else{
			playMusic(next);
		}
	};
	
	audioControll.onpaused = function() {
    	document.getElementById("musicPlayerTitle").innerHTML = "Player:";
	};

	audioControll.onplay = function() {
		document.getElementById("musicPlayerTitle").innerHTML = "Playing: " + MUSICPLAYING;
	};

	document.getElementById("musicPlayerTitle").innerHTML = "Playing: " + MUSICPLAYING;
}

function playMusic(song){
	MUSICPLAYING = song;
	setCookie("MUSICPLAYING", song, 1);
	SINCEPLAYING = getTimestampInSeconds();
	setCookie("SINCEPLAYING", SINCEPLAYING, 1);

	continuePlaying();
}


function showPlayer(){
	var element = "<div class='prevent-select' id='musicPlayer'>"+
	"<p id='musicPlayerTitle'>Player</p><div id='audioPlayer'></div><ul>";

	for(var songName of SONGS){
		element += "<a onclick='playMusic("+'"'+songName+'"'+")'>"+songName+"</a>";
	}

	element += "</ul></div>";

	document.body.innerHTML += element;
}

function musicStart(){

	showPlayer();

	if (MUSICPLAYING){
		continuePlaying();
	}else{
		if(LASTVISIT == false || getTimestampInSeconds()-LASTVISIT >= 1800)
		{
			playMusic(SONGS[0]);
		}
	}

}