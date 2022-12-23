let MUSICPLAYING = getCookie("MUSICPLAYING");
let SINCEPLAYING = getCookie("SINCEPLAYING");
let PAUSED = getCookie("PAUSED");
let PAUSEDAT = getCookie("PAUSEDAT");

function getTimestampInSeconds () {
  return Math.floor(Date.now() / 1000);
}


function musicPlayingElement(){
	totalPlaying = getTimestampInSeconds() - SINCEPLAYING;

	let add = new Date(totalPlaying * 1000).toISOString().substring(14, 19)

	return "<audio controls autoplay id='musicPlayer'>"+
	"<source src='Music/"+MUSICPLAYING+".mp3#t=00:"+add+"' type='audio/mpeg'>"+
	"<source src='../Music/"+MUSICPLAYING+".mp3#t=00:"+add+"' type='audio/mpeg'>"+
	"Your browser does not support the audio element"+
	"</audio>";
}

function showMusicPlaying(){
	//alert("Playing" + MUSICPLAYING);
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

function musicStart(){

	if (MUSICPLAYING){
		continuePlaying();
	}else{
		showPlayer();
	}

}
