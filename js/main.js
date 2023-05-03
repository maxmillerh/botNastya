let vvod = document.getElementById('vvod');
let messages = document.getElementById('messages');
let go = document.getElementById('go');
let love = 777;
let subName = document.getElementById('subName');
let GoDialog = document.getElementById('GoDialog');



go.onclick = function () {
	PressGo();
};


vvod.onkeyup = function (e) {
	if (e.keyCode == 13) {
		PressGo();
	}
}




