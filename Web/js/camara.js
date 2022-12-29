
let HOST = window.location.host.split(":")[0];

function switchFlash(){
	makeCallFalse("http://"+HOST+":5000/MobileSwitchFlash");
}

function makeCallFalse(){
	document.getElementById("spawnableField").innerHTML = "<iframe class='hidden' src='"+src+"'></iframe>";
}

ONLOADS.push(function(){

document.getElementById("camera").innerHTML = "<img src='http://"+HOST+":5000/video_feed' width='100%'>";

});