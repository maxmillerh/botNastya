let vvod = document.getElementById('vvod');
let messages = document.getElementById('messages');
let go = document.getElementById('go');
let go2 = document.getElementById('go2');
let subName = document.getElementById('subName');
let GoDialog = document.getElementById('GoDialog');

let love = 777;
var timeAnswer = 0;
let x = true;
let timebespoc = 50;
let timemolcan = 30;
let timefirstmessage = 5000;




go2.onclick = function () {
	PressGo();
};

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







//Настроение и темы диалога
let mood = 50;
let topicLove = true;
let topicZabota = true;
let topicMeal = true;
let topicJob = true;
let topicSmoke = true;
let topicWant = true;
let topicDoing = true;


