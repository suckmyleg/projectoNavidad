function createAccount(nickname){
	var data = sign(nickname);
}

function logIn(nickname, key){
	var data = login(nickname, key);
}

function formSign(){
	var nickname = document.getElementById("formNickname").value;
	createAccount(nickname);
}

function formLog(){
	var nickname = document.getElementById("formNickname").value;


}