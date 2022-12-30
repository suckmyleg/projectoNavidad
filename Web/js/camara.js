
let HOST = window.location.host.split(":")[0];

function switchFlash(){
	makeCallFalse("http://"+HOST+":5000/MobileSwitchFlash");
}

function makeCallFalse(src){
	document.getElementById("spawnableField").innerHTML = "<iframe class='hidden' src='"+src+"'></iframe>";
}

ONLOADS.push(function(){

document.getElementById("camera").innerHTML = "<img id='image' src='http://"+HOST+":5000/video_feed' width='100%'>";

let img = document.getElementById("image")
img.addEventListener("error", function(event) {
  event.target.src = "../Images/disconnected.png";
  event.onerror = null
})

});