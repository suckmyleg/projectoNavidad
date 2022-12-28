videos = [
	["Igor se folla que?", "Saved_clips/Replay_1.mp4", "28/12/2022"],
	["Momento Jona", "Saved_clips/Replay_2.mp4", "28/12/2022"],
	["Callate Jona", "Saved_clips/Replay_3.mp4", "28/12/2022"],
	["Vendekebaps cocinando speed up", "Vende.mp4", "28/12/2022"],
	["Juan bailando en el baño del dominos", "JuanBaile.mp4", "28/12/2022"],
	["Roberto bailando beat saber", "robertoBailando.mp4", "28/12/2022"],
	["Roobcrack shaco", "RubenShaco2.mp4", "28/12/2022"],
	["Ruben y joeri csgo spin", "RJCJH.mp4", "04/11/2019"],
	["Roberto basadisimo", "robertoBasado.mp4", "07/06/2022"],
	["Rive pistolero disco", "RiveDisco1.mp4", "28/04/2022"]
];

function clipHtml(name, loc, date){
	return '<div class="new_clip" onclick="window.location.href='+"'../Videos/"+loc+"'"+'">'+
	'<video src="../Videos/'+loc+'" type="video/mp4" muted class="clip">'+
	'</video>'+
	'<a class="date">Fecha: '+date+'</a>'+
	'<p>'+name+'</p>'+
	'</div>';

}

function setupClips(){
	var clipsContent = document.getElementById('clipsContent');

	var content = "";

	for(var clipData of videos){
		content += clipHtml(clipData[0], clipData[1], clipData[2]);
	}

	clipsContent.innerHTML = content;

}

ONLOADS.push(function(){setupClips();});