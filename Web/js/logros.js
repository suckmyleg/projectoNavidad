let LOGROS = {
	"DIANIEVE":["!DIA DE NIEVE!", 
		"¡CORRIDA ANCESTRAL!",
		"facil",
		"snow_day.gif"],

	"GAY":["Eri gay?", 
		"Ahora en serio, eres gay? A ver, no me pasa nada con los gays, tengo amigos gays pero... ? sus",
		"facil",
		"snow_day.gif"],

	"ROOBCRACK":["Ruben Martinez Martinez", 
		"Eres un seguidor afaz del verdadero alphasnipper",
		"facil",
		"snow_day.gif"],

	"SUCKMYLEG":["Juan Ageitos Bonaldi", 
		"Seguidor del volumen",
		"facil",
		"snow_day.gif"],

	"CLICK00":["Clickeador novato fetichista de pies", 
		"Clickea 5 veces pr segundo el 'Creado por ...'",
		"facil",
		"snow_day.gif"],

	"CLICK01":["Clickeador medio fetichista de pies", 
		"Clickea 7 veces pr segundo el 'Created by: '",
		"medio",
		"snow_day.gif"],

	"CLICK02":["Clickeador experto fetichista de pies", 
		"Clickea 8 veces pr segundo el 'Created by: '",
		"dificil",
		"snow_day.gif"],

	"CLICK03":["Clickeador pro fetichista de pies", 
		"Clickea 9 veces pr segundo el 'Created by: '",
		"demoniaca",
		"snow_day.gif"],

	"CLICK04":["Clickeador profesional fetichista de pies", 
		"Clickea 10 veces pr segundo el 'Created by: '",
		"demoniaca",
		"snow_day.gif"],

	"CLICK05":["Clickeador master fetichista de pies", 
		"Clickea 11 veces pr segundo el 'Created by: '",
		"demoniaca",
		"snow_day.gif"],

	"😎":["Clickea => 😎", 
		"Has desbloqueado la playlist '😎'",
		"facil",
		"snow_day.gif"],

	"🍉":["Clickea => 🍉", 
		"Has desbloqueado la playlist '🍉'",
		"facil",
		"snow_day.gif"],

	"🚗":["Clickea => 🚗", 
		"Has desbloqueado la playlist '🚗'",
		"facil",
		"snow_day.gif"],

	"otakus":["Otaku roberto, duchate", 
		"Le has dado click a la palabra 'otakus'",
		"facil",
		"snow_day.gif"],

	"CLICK10":["El principio...", 
		"EL PRIMER CLICK EN LA WEB 🥳🥳🥳🥳🥳🥳🥳🥳",
		"facil",
		"snow_day.gif"],

	"CLICK11":["El segundo click 💀💀", 
		"No hace falta clickear tanto...",
		"facil",
		"snow_day.gif"],

	"VENDE":["Vendekebaps", 
		"+15 cuentas del lol bloqueadas",
		"easy",
		"snow_day.gif"],

	"JHONA":["kota (jona)", 
		"Incremento de tetas",
		"easy",
		"snow_day.gif"],

	"MATEO":["rive", 
		"2 metros de altura + 90 armas",
		"easy",
		"snow_day.gif"],

	"GAMBA":["ᛟ Jσяgε ᛟ", 
		"jorge, no quiero hablar de el",
		"easy",
		"snow_day.gif"],

	"ADRIAN":["我可以成為你的中國人", 
		"Tocar los culos de tus amigos es tu afición",
		"easy",
		"snow_day.gif"]
};

let LOGROSSHOWING = 0;

function logroHtml(name, comment, diff, gif, time, id="logro", clas=""){
		var idd = id + time;

		setTimeout(function(){reloadTime(idd, time)}, 300);

		return '<div title="Dificultad: '+diff+'" onclick="executeLogroFun();" id="'+id+'" class="'+diff+' logros '+clas+'">'+
		'<div class="logros_header">'+
		'<div>'+
		'<img class="loguito '+diff+'" src="../Gifs/'+gif+'">'+
		'</div>'+
		'<div>'+
		'<h2 class="prevent-select">'+
		name+
		'</h2>'+
		'</div>'+
		'<div class="logros_date" >'+
		'<strong id="'+idd+'">'+
		time_ago(time)+
		'</strong>'+
		'</div>'+
		'</div>'+
		'<hr>'+
		'<div class="logros_content">'+
		comment+
		'</div>'+
		'</div>';
}


//https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site?page=1&tab=scoredesc#tab-top
function time_ago(time) {

  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [60, 'segundos', 1], // 60
    [120, 'hace 1 minuto', '1 minuto desde entonces'], // 60*2
    [3600, 'minutos', 60], // 60*60, 60
    [7200, 'hace 1 hora', '1 hora desde entonces'], // 60*60*2
    [86400, 'horas', 3600], // 60*60*24, 60*60
    [172800, 'Ayer', 'Mañana'], // 60*60*24*2
    [604800, 'dias', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Última semana', 'Próxima semana'], // 60*60*24*7*4*2
    [2419200, 'semanas', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Último mes', 'Próximo mes'], // 60*60*24*7*4*2
    [29030400, 'meses', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'Último año', 'Próximo año'], // 60*60*24*7*4*12*2
    [2903040000, 'años', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, 'Último siglo', 'Próximo siglo'], // 60*60*24*7*4*12*100*2
    [58060800000, 'siglos', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = 'hace',
    list_choice = 1;

  if (seconds == 0) {
    return 'Justo ahora'
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'desde entonces';
    list_choice = 2;
  }
  var i = 0,
    format;
  while (format = time_formats[i++])
    if (seconds < format[0]) {
      if (typeof format[2] == 'string')
        return format[list_choice];
      else
        return token + ' ' + Math.floor(seconds / format[2]) + ' ' + format[1] + ' ';
    }
  return time;
}

function reloadTime(id, time){
	try{
		document.getElementById(id).innerHTML = time_ago(time);
		setTimeout(function(){reloadTime(id, time);}, 1000);
	}catch(error){console.log(error);}
}

function displayFloatingLogro(name, date){
	LOGROSSHOWING += 1;

	let showing = LOGROSSHOWING;

	let idd = "logroFloat"+LOGROSSHOWING;

	var data = LOGROS[name];

	var element = logroHtml(data[0], data[1], data[2], data[3], date, idd, "logroFloat");
	
	document.getElementById("spawnableField").innerHTML += element;

	document.getElementById(idd).style.right = "0px";

	setTimeout(function(){document.getElementById(idd).style.top = (186*(showing-1))+"px";}, 1000);

	setTimeout(function(){document.getElementById(idd).style.top = "-300px";
		try{
			for(var i = showing; i <10; i++){document.getElementById("logroFloat"+i).style.top = (186*(i-2))+"px";}
		}catch{}
	LOGROSSHOWING -= 1;

	}, 7000);
	
	setTimeout(function(){document.getElementById(idd).remove();}, 10000);
}

function showLogros() {
	try{ 
		var content = document.getElementById("logrosContent");
		var logrosDone = getLogrosDone();
		try{
			var p = (logrosDone.length*100)/(Object.keys(LOGROS).length);
			console.log(p);
			document.getElementById("logrosProgressBar").innerHTML = Math.floor(p)+"%";
			document.getElementById("logrosProgressBar").style.paddingRight = p+"%";

		}catch(e){console.log(e);}
		content.innerHTML = "";
		for(var logro of logrosDone){
			var data = LOGROS[logro[0]];

			content.innerHTML += logroHtml(data[0], data[1], data[2], data[3], logro[1]);
		}
	}catch{}
}

function getLogrosDone(){
	return JSON.parse(SETTINGS.logros);
}

function checkLogroRunned(name){
	for(var logro of getLogrosDone()){
		if (logro[0] == name) {return true;}
	}
	return false;
}

function runLogro(name){
	if(!checkLogroRunned(name)){
		var date = new Date().getTime();
		var logros = getLogrosDone();
		logros.push([name, date]);

		change("logros", 
			JSON.stringify(logros)
			);
		displayFloatingLogro(name, date);

		showLogros();

		//musicStart();	

		setupSongModes();

		reloadModes();
	}
}

ONLOADS.push(function(){showLogros();});