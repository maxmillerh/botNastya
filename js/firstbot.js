

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
		arr = ["Как вы себя чувствуете?", "Пошла работать", "Как встать то"];
		random = Math.floor(Math.random() * (arr.length - 0)) + 0;
		BotFirstText = arr[random];
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

	var divBot = document.createElement("divBot");
	divBot.style.display = "flex";
	divBot.style.justifyContent = "flex-start";
	divBot.innerHTML = '<div class="blokMes">' + BotFirstText + '<span class="time">' + date.getHours() + dvoe + date.getMinutes() + '</span></div>';
	messages.appendChild(divBot);

	subName.innerHTML = "Online";
}

setInterval(BotFirst, 60000);
