let SETTINGS = {

};

let settingsKeys = [
	["cinemaheight", "false"]
	];

function loadSettings(){
	for(var setting of settingsKeys){
		var value = getCookie(setting[0]);

		if (!value){value = setting[1];}

		change(setting[0], value);
	}
}

function change(setting, value){
	setCookie(setting, value, 30);
	SETTINGS[setting] = value;
}

loadSettings();