'use strict';

const auth = {
	isAuthorized: false,

	// страницы приложения
	$welcome: $('#welcome_page'),
	$game: $('#game_page'),

	// элементы страницы (поп-апы, кнопки)
	$user: $('#account'),
	$settings: $('#settings'),
	$auth: $('#user-auth'),
	$create: $('#user-create'),


	// действия при клике по кнопке "Вход"
	authUser() {
		const $nickname = this.$auth.find("input[name='nickname']");
		const $password = this.$auth.find("input[name='password']");

		if (!$nickname.val() || !$password.val()) {
			alert('Данные не заполнены!');
			return;
		}

		let usersList = this.getUsersList();

		usersList.forEach(el => {
			if (el.nickname === $nickname.val() && el.password === $password.val()) {
				console.log(el);
				this.isAuthorized = true;
				account.login = $nickname.val();
				account.games = el.games;
				settings.difficult = el.difficult;
			}
		});

		$nickname.val('');
		$password.val('');

		this.checkAuth();
	},

	// получить из кладовки localStorage список всех пользователей
	getUsersList() {
		let users = localStorage.getItem('questionAppUsersList') || [];

		if (!users.length) {
			localStorage.setItem('questionAppUsersList',  JSON.stringify([]));
		} else {
			users = JSON.parse(users);
		}

		return users;
	},

	// проверить авторизацию пользователя
	checkAuth() {
		if (this.isAuthorized) {
			this.$settings.removeClass('hide');
			this.$auth.closest('.isNoneAuthorized').addClass('hide').siblings().removeClass('hide');
			this.$auth.closest('.popupWrap').addClass('hide');
			this.$welcome.find('h2.mainText').html(' Рады тебя видеть! <br><br> Давай проверим твои знания')
			account.setLogin();
			account.toggleLevel();
			account.updateGames();
			settings.initSettings();
			game.initGame();
			game.$start.removeClass('hide');
		} else {
			this.$settings.addClass('hide');
			this.$user.find('.isAuthorized').addClass('hide').siblings().removeClass('hide');
			this.$welcome.removeClass('hide').find('h2.mainText').html(' Привет! <br><br> Чтобы начать игру необходима авторизация')
			this.$game.addClass('hide');
			game.$start.addClass('hide');
		}
	},

	// действия при клике по кнопке "Создать аккаунт"
	createNewUser() {
		const $nickname = this.$create.find("input[name='nickname']");
		const $password = this.$create.find("input[name='password']");
		const $passwordRepeat = this.$create.find("input[name='password-repeat']");

		if (!$nickname.val() || !$password.val() || !$passwordRepeat.val()) {
			alert('Данные не заполнены!');
			return;
		}

		if ($password.val() !== $passwordRepeat.val()) {
			alert('Пароли не совпадают!');
			return;
		}

		let usersList = this.getUsersList();

		//TODO проверять пользователя на дубль

		usersList.push({
			nickname: $nickname.val(),
			password: $password.val(),
			difficult: false,
			games: [],
		});

		localStorage.setItem('questionAppUsersList',  JSON.stringify(usersList));

		$nickname.val('');
		$password.val('');
		$passwordRepeat.val('');

		alert('Новый пользователь создан');
	},

	// инициализация настроек авторизации пользователя
	initAuth() {
		this.checkAuth();

// обработчки событий для блока "Авторизация"=======================================

		// показать поп-ап при клике по иконке в хэдер
		$('.headWrap .headIcon').on('click', function() {
			$(this).siblings().removeClass('hide');
		});

		// скрыть поп-ап при клике по иконке закрытия
		$('.popupCloser').on('click', function() {
			$(this).closest('.popupWrap').addClass('hide');
		});

		// действия при создании пользователя
		this.$create.on('click', 'button', function(e) {
			e.preventDefault();
			auth.createNewUser();
		});

		// действия при авторизации пользователя
		this.$auth.on('click', 'button', function(e) {
			e.preventDefault();
			auth.authUser();
			if(!account.login) {
				alert('Пользователь с таким именем и паролем не найден');
			}
		});

	},

	// переключить видимость страницы приложения
	toggleQuestionPage($hide, $show) {
		$hide.addClass('hide');
		$show.removeClass('hide');
	},

	// сохранить изменения в кладовку
	updateUsersList(users) {
		localStorage.setItem('questionAppUsersList',  JSON.stringify(users));
	}

}

const settings = {
	difficult: false,

	$low: $('#level_low'),
	$high: $('#level_high'),
	$exit: $('#exit'),

	initSettings() {
		console.log(this.difficult);
		//установить уровень сложности
		this.difficult ? this.$high.prop('checked', true) : this.$low.prop('checked', true);

		// переключить тему
		$('.keckCheburek').on('click', function() {
			const $this = $(this);
			$('html').attr('class', `theme-${$this.attr('data-theme')}`);
		});

		// переключение уровня сложности на легкий
		this.$low.on('click', function (){
			settings.difficult = false;
			account.toggleLevel();
			account.updateLevel();
			game.getQuestions();
		});

		// переключение уровня сложности на сложный
		this.$high.on('click', function () {
			settings.difficult = true;
			account.toggleLevel();
			account.updateLevel();
			game.getQuestions();
		});

		// выйти из игры
		this.$exit.on('click', function () {
			auth.isAuthorized = false;
			auth.checkAuth();
		});
	}

}

const account = {
	login: '',
	games: [],

	$login: $('#auth_nick'),
	$level: $('#difficult_level'),
	$count: $('#games_count'),
	$points: $('#games_points'),

  // установить никнейм
	setLogin() {
		this.$login.text(this.login);
	},

	// переключить уровень сложности
	toggleLevel() {
		settings.difficult ? this.$level.text('Сложно') : this.$level.text('Легко');
	},

	// обновить статистику игр
	updateGames() {
		this.$count.text(this.games.length);

		const sum = this.games.reduce(add, 0); // with initial value to avoid when the array is empty

		function add(accumulator, a) {
			return accumulator + a;
		}

		this.$points.text(sum);
	},

	// сохранить уровень сложности в кладовке
	updateLevel() {
		const users = auth.getUsersList();
		users.find(el => el.login === auth.login).difficult = settings.difficult;
		auth.updateUsersList(users);
	}
}

const game = {
	questionList: [],
	currentQuestion: {},
	questionCount: 0,
	rightAnswers: 0,
	points: 0,

	$start: $('#start_game'),
	$questionTmpl: auth.$game.find('.questionWrapper'),
	$questionWrapper: auth.$game.find('.JSAnswerWrapper'),
	$answerTmpl: auth.$game.find('template').prop('content'),


	// подготовить список вопросов
	getQuestions() {
		this.questionCount = 1;

		const level = settings.difficult ? 2 : 1;

		this.shuffleArray(questions);

		this.questionList = questions.filter(({typeId}) => +typeId === level);

		this.renderQuestion();
	},

	// инициализация игры при входе в аккаунт
	initGame() {

		this.getQuestions();

		// переключить вкладку игры с Заставки на Список вопросов
		this.$start.on('click', function() {
			auth.toggleQuestionPage(auth.$welcome, auth.$game);
			game.renderQuestion();
		});

		// получение и проверка ответа на вопроса
		this.$questionWrapper.on('click', '.answer', function () {
			game.postQuestionAnswer($(this));
		})
	},

	// принять ответ и проверить
	postQuestionAnswer($el) {
		if ($el.attr('data-is-right') === 'true') {
			this.rightAnswers ++;
			this.points += +$el.attr('data-points');
		}

		if (this.questionCount === this.questionList.length) {
			alert('Игра окончена! \nПравильных ответов: ' + this.rightAnswers + '\nНабрано очков: ' + this.points);

			this.updateAccountStatistic(this.points);

			this.points = 0;
			this.rightAnswers = 0

			this.getQuestions();

			return;
		}

		this.questionCount ++;

		this.renderQuestion();
	},

	// отрисовать новый вопрос
	renderQuestion() {
		this.$questionWrapper.empty();

		this.currentQuestion = this.questionList[this.questionCount - 1];

		this.shuffleArray(this.currentQuestion.variants);

		this.$questionTmpl.find('.JSQuestionText').text(this.currentQuestion.question);
		this.$questionTmpl.find('.JSQuestionImage').attr('src', `design/images/questions/${this.currentQuestion.questionId}.jpeg`);

		this.currentQuestion.variants.forEach(i => {
			const $el = $(this.$answerTmpl.children[0]).clone();
			$el.attr('data-is-right', i.isRight).attr('data-points', this.currentQuestion.typeId);
			$el.find('span').text(i.answer);
			this.$questionWrapper.append($el);
		})
	},

	// перемешать данные
	shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	},

	// обновить данные аккаунта и сохранить информацию в кладовку
	updateAccountStatistic(points) {
		account.games.push(points);
		account.updateGames();

		const users = auth.getUsersList();
		users.find(el => el.login === auth.login).games = account.games;
		auth.updateUsersList(users);
	}



	//TODO
	// ++ 1. Выбрать из списка вопросов вопросы согласно заданному уровню сложности
	// сохранить в переменную и перемешать вопросы
	// -------
	// ++ 2. Взять из спика вопросов вопрос равный переменной questionCount,
	// сохранить в переменную  currentQuestion и перемешать варианты ответов
	// -------
	// ++ 3. Вывести полученные данные в шаблон с использованием дата-атрибутов
	// points, isRight, img (по id)
	// --------
	// ++ 4. При клике по варианту ответа:
	// - ответ правильный? - questionCount++ , points => выполнить действие 2
	// - ответ не правильный? - уточнить что будем делать
	// --------
	// ++ 5. По завершению обнулить переменные 	questionList: '', currentQuestion: {}, questionCount: 0
	// и сохранить данные об игре в статистику
}

$(document).ready(
	function() {

		auth.initAuth();

	}
);
