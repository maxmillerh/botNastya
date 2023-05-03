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



mediaQuery = window.matchMedia("screen and (max-width: 768px)");
mediaQuery.addListener(changePlaceholder);

function changePlaceholder(mq) {
	if (mq.matches) {
		vvod.setAttribute('placeholder', 'Сообщение');
	} else {
		vvod.setAttribute('placeholder', 'Напишите сообщение...');

	}
}
changePlaceholder(mediaQuery);

