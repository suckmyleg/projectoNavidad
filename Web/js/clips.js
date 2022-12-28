videos = [
	["Igor se folla que?", "Saved_clips/Replay_1.mp4", "28/12/2022", ["jona", "bolli", "rive", "igor", "vendekebaps"]],
	["Momento Jona", "Saved_clips/Replay_2.mp4", "28/12/2022", ["chino", "roberto", "jona", "cristian"]],
	["Callate Jona", "Saved_clips/Replay_3.mp4", "28/12/2022", ["roobcrack", "vendekebaps", "jona", "chino", "gamba", "prostata"]],
	["Vendekebaps cocinando speed up", "Vende.mp4", "28/12/2022", ["vendekebaps"]],
	["Juan bailando en el baño del dominos", "JuanBaile.mp4", "28/12/2022", ["suckmyleg"]],
	["Roberto bailando beat saber", "robertoBailando.mp4", "28/12/2022", ["suckmyleg", "roberto"]],
	["Roobcrack shaco", "RubenShaco2.mp4", "28/12/2022", ["roobcrack"]],
	//["Ruben y joeri csgo spin", "RJCJH.mp4", "04/11/2019"],
	["Roberto basadisimo", "robertoBasado.mp4", "07/06/2022", ["roberto", "cristian"]],
	["Rive pistolero disco", "RiveDisco1.mp4", "28/04/2022", ["rive", "gamba", "morgan", "humano", "rico", "roberto", "jona"]],
	["Rico 07", "RicoQueDice.mp4", "/04/2022", ["rico"]],
	["Rico buen setup", "RicoScream.mp4", "16/02/2022", ["rico", "joeri", "roberto", "rive", "gamba"]],
	["Joeri siendo racista", "Clips/JoeriRacista.mp4", "13/08/2020", ["joeri", "david", "rive"]],
	//["Rive tremendo tiro", "Clips/InGameReplay_2020.08.14-23.32.mp4", "14/08/2020", ["suckmyleg", "vendekebaps", "desi", "rive", "nacho"]],
	//["No no no, me voy a hacer un colateral", "Clips/InGameReplay_2020.08.14-23.43.mp4", "14/08/2020", ["suckmyleg", "rive", "desi", "joeri", "morgan"]],
	["Mas raro seria no comer pollas", "Clips/mas_raro_seria_no_comer_pollas.mp4", "15/08/2020", ["suckmyleg", "rive", "nacho"]], 
	["Hablemos de comer pollas", "Clips/a1.mp4", "15/08/2020", ["rive", "suckmyleg", "roberto", "nacho"]],
	["Nacho minimintu?", "Clips/a2.mp4", "17/08/2020", ["nacho", "humano", "suckmyleg"]]
];

let peopleShowing = [];

function showVideo(loc){
	window.location.href = loc;
}

function clipHtml(name, loc, date){
	return '<div id='+loc+' class="new_clip" onclick="showVideo('+"'../Videos/"+loc+"')"+'">'+
	'<video src="../Videos/'+loc+'" type="video/mp4" muted class="clip">'+
	'</video>'+
	'<a class="date">Fecha: '+date+'</a>'+
	'<p>'+name+'</p>'+
	'</div>';

}

function switchPersonFilter(name){
	console.log("person_"+name);
	if(peopleShowing.includes(name)){
		document.getElementById("person_"+name).classList.remove("selected")
		peopleShowing.splice(peopleShowing.indexOf(name), 1);
		reDisplayClips();
	}else{
		document.getElementById("person_"+name).classList.add("selected")
		peopleShowing.push(name);
		reDisplayClips();

	}
}

function switchPersonFilterTemporal(name){
	peopleShowing.push(name);
	reDisplayClips();
	peopleShowing.splice(peopleShowing.indexOf(name), 1);
}

function reDisplayClips(){

	for(var clipData of videos){
		if(peopleShowing.length == 0) document.getElementById(clipData[1]).classList.remove("hide")
		else{
			var isSomeoneIn = true;
			for(var a of peopleShowing){
				if(!clipData[3].includes(a)) {isSomeoneIn = false;break;}
			}
			if(isSomeoneIn) document.getElementById(clipData[1]).classList.remove("hide")
			else{
				document.getElementById(clipData[1]).classList.add("hide")
			}
		}
	}

}

function setupClips(aparece=[]){
	var clipsContent = document.getElementById('clipsContent');

	aparece = peopleShowing;

	var content = "";

	var peopleSown = [];

	for(var clipData of videos){
		for(var p of clipData[3]){
			if(!peopleSown.includes(p))peopleSown.push(p);
		}
		if(aparece.length == 0) content += clipHtml(clipData[0], clipData[1], clipData[2]);
		else{
			var isSomeoneIn = true;
			for(var a of aparece){
				if(!clipData[3].includes(a)) {isSomeoneIn = false;break;}
			}
			if(isSomeoneIn) content += clipHtml(clipData[0], clipData[1], clipData[2]);
		}
	}

	var peopleShownFilter = "";

	for(var p of peopleSown){
		//onmouseout='switchPersonFilterTemporal("+'"'+p+'"'+");' onmouseover='switchPersonFilterTemporal("+'"'+p+'"'+");'
		peopleShownFilter += "<a id='person_"+p+"' class='personFilter' onclick='switchPersonFilter("+'"'+p+'"'+");'>"+p+"</a>";
	}

	clipsContent.innerHTML = content;
	document.getElementById('peopleFilter').innerHTML = peopleShownFilter;


}

ONLOADS.push(function(){setupClips();});