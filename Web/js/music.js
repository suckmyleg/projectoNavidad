let MUSICPLAYING = getCookie("MUSICPLAYING");
let SINCEPLAYING = getCookie("SINCEPLAYING");

function getTimestampInSeconds () {
  return Math.floor(Date.now() / 1000);
}


function musicPlayingElement(){
	totalPlaying = getTimestampInSeconds() - SINCEPLAYING;

	let MINUTE = 1;
	let SECOND = 0;

	return "<audio controls autoplay>"+
	"<source src='Music/"+MUSICPLAYING+".mp3#t=00:"+MINUTE+":"+SECOND+"' type='audio/mpeg'>"+
	"Your browser does not support the audio element"+
	"</audio>";
}

function showMusicPlaying(){
	alert("Playing" + MUSICPLAYING);
}

function continuePlaying(){
	showMusicPlaying();
	document.body.innerHTML += musicPlayingElement();
}

function playMusic(song){
	MUSICPLAYING = song;
	setCookie("MUSICPLAYING", song, 1);
	SINCEPLAYING = getTimestampInSeconds();
	setCookie("SINCEPLAYING", SINCEPLAYING, 1);

	continuePlaying();
}

function showPlayer(){
	document.body.innerHTML += "<a onclick='playMusic("+
	'"Carol of The Bells - EPIC VERSION"'+
	")'>Play music</a>";
}

onload = function(){

	if (MUSICPLAYING){
		continuePlaying();
	}else{
		showPlayer();
	}

}
