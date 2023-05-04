


function PressGo() {
	if (vvod.value != "") {
		let date = new Date();
		messages.classList.remove('center');
		GoDialog.classList.add('d-none');

		timeAnswer = 0;
		x = true;


		let textMes = vvod.value;

		var divR = document.createElement("divR");


		let dvoe;
		if (date.getMinutes() >= 10) {
			dvoe = ':';
		} else {
			dvoe = ':0';
		}

		divR.innerHTML = '<div class="blokMes">' + textMes + '<span class="time">' + date.getHours() + dvoe + date.getMinutes() + '</span></div>';


		/* let blokMes = document.querySelectorAll('blokMes');
		if (blokMes.style.height > 50) {alert('eee') }; */


		document.getElementById("messages").appendChild(divR);

		vvod.value = null;
		let arr = null;
		let random = null;

		switch (textMes) {

			case "Доброе утро":
				arr = ['#ff0000', '#0219ae', '#ff299b', '#fff129'];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = 'Доброе утро  <svg fill="' + arr[random] + '" width="20px" height="20px" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="' + arr[random] + '"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>heart</title> <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path> </g></svg>';
				break;

			case "Живот болит":
			case "Голова болит":
			case "Тошнит":
			case "Горло болит":
			case "Сердце заболело":
			case "Не выспался":
				arr = ["Безобразие", "Ужас", "Плохо", "Что ж такое то..", "С этим надо что то делать"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Чмок":
			case "Цемк":
			case "Чмокс":
				arr = ["Чмок", "Цемк", "Чмокс"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Ты солнышко":
			case "Ты котенок":
			case "Ты золотце":
				arr = ["Ты котик", "Нет, ты", "Ты солнышко", "Да, это я"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Чем занимаетесь?":
			case "Что делаешь?":
			case "Что делаете?":
				arr = ["Курю с Настей <br> А вы?", "Курю с Дианой <br> А вы?", "Работаю", "Делаю презентацию", "Делаю курсовую", "Учу латынь", "Кушаю"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Я тебя люблю":
				arr = ['#ff0000', '#0219ae', '#ff299b'];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = 'Я тебя сильнее в ' + love + ' раз <svg fill="' + arr[random] + '" width="20px" height="20px" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="' + arr[random] + '"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>heart</title> <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path> </g></svg>';
				love++;
				break;

			case "Спокойной ночи, солнышко":
			case "Сладких снов, кукурузинка":
				arr = ['#ff0000', '#0219ae', '#ff299b'];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = 'Спокойной ночи котик  <svg fill="' + arr[random] + '" width="20px" height="20px" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="' + arr[random] + '"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>heart</title> <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path> </g></svg>  Я тебя люблю <svg fill="' + arr[random] + '" width="20px" height="20px" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="' + arr[random] + '"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>heart</title> <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path> </g></svg>';
				break;

			case "Покушал":
			case "Пошел мыться":
			case "Приготовил еду":
			case "Погулял с собаками":
			case "Гуляю с собаками":
			case "Пошел гулять с собаками":
			case "Щас к бабушке поеду":
			case "Сходил в магазин":
			case "Вымылся":
				arr = ["Молодец", "Хорошо", "Замечательно", "Отлично"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Приятного аппетита:)":
				arr = ["Спасибо:)"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

				case "Иду":
					arr = ["Жду"];
					random = Math.floor(Math.random() * (arr.length - 0)) + 0;
					BotMessage = arr[random];
					break;

			case "Пошли спать":
			case "Пошли мыться":
			case "Пошли кушать":
				arr = ["Пошли", "Да, пошли", "Щас пойдем"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Давай спать":
				arr = ["Давай", "Скоро пойдем", "Щас пойдем"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Иди":
				arr = ["Скоро пойду", "Щас пойду", "Не хочу"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Выспалась?":
				arr = ["Не выспалась", "Не знаю", "Да вроде"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Давай сериал посмотрим":
			case "Пошли смотреть сериал":
				arr = ["Давай", "Какой?", "Погоди, мне надо прибраться"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Пошел кушать":
				arr = ["Приятного аппетита", "Иди"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Ем йогурт":
			case "Ем пиццу":
			case "Ем тортик":
			case "Ем мороженое":
			case "Ем салат":
			case "Ем картошку с мясом":
				arr = ["Я тоже хочу", "Адай", "Делись"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Спасибо":
				arr = ["Чмок", "Обращайтесь", "Я тебя люблю"];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			case "Хочу пива":
				arr = ["Я тоже", "Без меня нельзя", "Никакого пива.."];
				random = Math.floor(Math.random() * (arr.length - 0)) + 0;
				BotMessage = arr[random];
				break;

			default:
				BotMessage = "Ага";
		}

		subName.innerHTML = "Печатает...";

		function MesBotText() {
			let date = new Date();

		

			let dvoe;
			if (date.getMinutes() >= 10) {
				dvoe = ':';
			} else {
				dvoe = ':0';
			}


			var divBot = document.createElement("divBot");

			divBot.innerHTML = '<div class="blokMesbot">' + BotMessage + '<span class="time">' + date.getHours() + dvoe + date.getMinutes() + '</span></div>';
			messages.appendChild(divBot);
			subName.innerHTML = "Online";


		}

		setTimeout(MesBotText, 1900);
	}


}