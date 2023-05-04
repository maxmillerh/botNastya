

function BotFirst() {

	let date = new Date();



	let dvoe;
	if (date.getMinutes() >= 10) {
		dvoe = ':';
	} else {
		dvoe = ':0';
	}

	messages.classList.remove('center');
	GoDialog.classList.add('d-none');

	var randomFirst = Math.floor(Math.random() * (100 - 0)) + 0;

	let BotFirstText;
	if (randomFirst < 40) { // 40% Шанс
		var arr = [];
		arr[0] = {
			message: "Как вы себя чувствуете?",
			mood: 1,
			topic: "Забота"
		}
		arr[0] = {
			message: "Пошла работать",
			mood: -2,
			topic: "Работа"
		}
		arr[0] = {
			message: "Как встать то",
			mood: -2,
			topic: "Физактив"
		}
		random = Math.floor(Math.random() * (arr.length - 0)) + 0;
		BotFirstText = arr[random].message;
	} else if (randomFirst >= 40 && randomFirst < 70) { // 30% Шанс
		arr = ["Я тебя люблю", "Иди сюда, я соскучилась", "Девочки зовут курить"];
		random = Math.floor(Math.random() * (arr.length - 0)) + 0;
		BotFirstText = arr[random];
	} else if (randomFirst >= 70 && randomFirst < 90) { // 20% Шанс
		arr = ["Чем занимаетесь?", "Надо идти работать", "Пошли спать"];
		random = Math.floor(Math.random() * (arr.length - 0)) + 0;
		BotFirstText = arr[random];
	} else if (randomFirst >= 90) { // 10% Шанс
		arr = ["Голова болит", "Хочу пива", "Устала"];
		random = Math.floor(Math.random() * (arr.length - 0)) + 0;
		BotFirstText = arr[random];
	}

	if (timeAnswer > timebespoc) {
		arr = ['Куда пропал?', 'Куда делся?', 'Ну все, пропал'];
		random = Math.floor(Math.random() * (arr.length - 0)) + 0;
		BotFirstText = arr[random];
	}

	var divBot = document.createElement("divBot");
	divBot.innerHTML = '<div class="blokMesbot">' + BotFirstText + '<span class="time">' + date.getHours() + dvoe + date.getMinutes() + '</span></div>';
	messages.appendChild(divBot);
	subName.innerHTML = "Online";
}

function TimerAnswer() {
	timeAnswer = timeAnswer + 5;
	console.log(timeAnswer);
}
setInterval(TimerAnswer, 5000);

function Proverka() {
	if (x == true) {
		if (timeAnswer <= timemolcan) {
			BotFirst();
		} else if (timeAnswer > timemolcan && timeAnswer <= timebespoc) {
			//ничего не происходит
		} else {
			BotFirst();
			x = false;
		}
	}
}
setInterval(Proverka, timefirstmessage);





