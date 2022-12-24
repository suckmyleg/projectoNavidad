
let LASTVISIT = getCookie("LASTVISIT");
let MUSICPLAYING = getCookie("MUSICPLAYING");
let SINCEPLAYING = getCookie("SINCEPLAYING");
let PAUSED = getCookie("PAUSED");
let PAUSEDAT = getCookie("PAUSEDAT");
let VOLUME = getCookie("PAUSEDAT");
let MODE = getCookie("MODE");

let MODES = [];

if(VOLUME == false){
	VOLUME = 20;
}

let onPlayings = [];

var SONGS = ["All I Want for Christmas Is You",  
	"Its Beginning to Look a Lot like Christmas", 
	"Navidad",
	"I Really Want to Stay at Your House",
	"Navidad dulce navidad",
	"CHAINSAW MAN",
	"SPIT IN MY FACE",
	"webi wabo  letra"];/*,
	"Porta - Dragon Ball Rap (con Letra)"];*/


function setVolume(lvl){
	document.getElementById("audioControll").volume = lvl/100;
}

function onPlaying(songName, fun){
	onPlayings.push([songName, fun]);
}

function callOnPlaying(songName){
	for(var data of onPlayings){
		if (data[0] == songName || data[0] == "*")
		{
			console.log(songName, data[1]);
			data[1](songName);
		}
	}
}

function getTimestampInSeconds() {
  return Math.floor(Date.now() / 10)/100;
}


function musicPlayingElement(){
	totalPlaying = getTimestampInSeconds() - SINCEPLAYING;

	let add = new Date(totalPlaying * 1000).toISOString().substring(14, 19)

	return "<audio controls autoplay id='audioControll' controlsList='nodownload noplaybackrate'>"+
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
		callOnPlaying(MUSICPLAYING);	
	};

	document.getElementById("musicPlayerTitle").innerHTML = "Playing: " + MUSICPLAYING;

	setVolume(VOLUME);
}

function playMusic(song){
	MUSICPLAYING = song;
	setCookie("MUSICPLAYING", song, 1);
	SINCEPLAYING = getTimestampInSeconds();
	setCookie("SINCEPLAYING", SINCEPLAYING, 1);

	continuePlaying();
}


function showPlayerSongs(status) {
	var player = document.getElementById("musicPlayer");
	if(player.style.bottom == "0px" || status)
	{
		player.style.bottom = -27-(41*(SONGS.length+1))+"px";
	}else{
		player.style.bottom = "0px";

	}
}

function displaySongs(){
	var list = document.getElementById("listOfSongs");
	var element = "";

	for(var songName of SONGS){
		element += "<a onclick='playMusic("+'"'+songName+'"'+")'>"+songName+"</a>";
	}

	element += "<a id='moreModes' onclick='switchDisplayModes();'>+++</a>";

	list.innerHTML = element;

	document.getElementById("musicPlayer").style.bottom = -27-(41*(SONGS.length+1))+"px";
}

function showPlayer(){
	var element = "<div onmouseleave='showPlayerSongs(true);' class='prevent-select' id='musicPlayer'>"+
	getDisplayModes()+
	"<p onclick='showPlayerSongs();' id='musicPlayerTitle'>Player</p><div id='audioPlayer'></div><ul id='listOfSongs'></ul></div>";

	document.getElementById("spawnableField").innerHTML += element;

	displaySongs();
}

function musicStart(){

	showPlayer();

	if(MODE){
		executeMode(MODE);
	}
	else{

	}

}

function playMusicIfSame(song){
	if (MUSICPLAYING == song){
			continuePlaying();
		}else{
			if(LASTVISIT == false || getTimestampInSeconds()-LASTVISIT >= 1800)
			{
				playMusic(SONGS[0]);
			}
		}
		displayModes();
}

function executeMode(name){
	for(var mode of MODES){
		if(mode[0] == name){
			setCookie("MODE", mode[0], 1);
			mode[1]();
			return null;
		}
	}
}

function formModes(){
	var nickname = document.getElementById("formNickname").value;
	var key = document.getElementById("formKey").value;

	logIn(nickname, key);
}



function switchDisplayModes(status=true){
	var modes = document.getElementById('musicModes');
	if(modes.style.display == "none" || modes.style.display == "" || !status){
		modes.style.display = "block";
		document.getElementById('moreModes').innerHTML = "---";
	}else{
		modes.style.display = "none";
		document.getElementById('moreModes').innerHTML = "+++";
	}
}	

function getDisplayModes(){
	var form = 	'<div id="musicModes"><ul>';
	for(var mode of MODES){
		form += "<a onclick='"+'executeMode("'+mode[0]+'")'+"' class='link web'>"+mode[0]+"</a>";
	}
	form += '</ul>'+
	'</div>';

	return form;
}

function addModeSongs(name, songs, play=0){
	addMode(name, function(){
		SONGS = songs;
		displaySongs();
		playMusicIfSame(SONGS[0]);
	});

}

function addMode(name, fun){
	MODES.push([name, fun]);
}

addModeSongs("Navidad", SONGS);