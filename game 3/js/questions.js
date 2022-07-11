const questions = [
	{
		questionId: 1,
		question: 'Какая планета самая горячая?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Венера'
			},
			{
				isRight: false,
				answer: 'Сатурн'
			},
			{
				isRight: false,
				answer: 'Меркурий'
			},
			{
				isRight: false,
				answer: 'Марс'
			}
		]
	},
	{
		questionId: 2,
		question: 'Сколько костей в теле человека?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: '206'
			},
			{
				isRight: false,
				answer: '216'
			},
			{
				isRight: false,
				answer: '211'
			},
			{
				isRight: false,
				answer: '243'
			}
		]
	},
	{
		questionId: 3,
		question: 'Кто из этих персонажей не дружит с Гарри Поттером?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Драко Малфой'
			},
			{
				isRight: false,
				answer: 'Рон Уизли'
			},
			{
				isRight: false,
				answer: 'Невилл Лонгботтом'
			},
			{
				isRight: false,
				answer: 'Гермиона Грейнджер'
			}
		]
	},
	{
		questionId: 4,
		question: 'Какая самая короткая трагедия Шекспира?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Макбет'
			},
			{
				isRight: false,
				answer: 'Ромео и Джульетта'
			},
			{
				isRight: false,
				answer: 'Отелло'
			},
			{
				isRight: false,
				answer: 'Гамлет'
			}
		]
	},
	{
		questionId: 5,
		question: 'На каком языке говорит больше всего людей на Земле?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Китайский'
			},
			{
				isRight: false,
				answer: 'Английский'
			},
			{
				isRight: false,
				answer: 'Испансикй'
			},
			{
				isRight: false,
				answer: 'Русский'
			}
		]
	},




	/* 5 ques */




	{
		questionId: 6,
		question: 'Какая социальная сеть появилась в 2003 году?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Myspace'
			},
			{
				isRight: false,
				answer: 'Twitter'
			},
			{
				isRight: false,
				answer: 'Facebook'
			},
			{
				isRight: false,
				answer: 'ВКонтакте'
			}
		]
	},
	{
		questionId: 7,
		question: 'Какая страна потребляет больше всего шоколада?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Швейцария'
			},
			{
				isRight: false,
				answer: 'Германия'
			},
			{
				isRight: false,
				answer: 'Северная Осетия'
			},
			{
				isRight: false,
				answer: 'Испания'
			}
		]
	},
	{
		questionId: 8,
		question: 'Хлорид натрия - это...',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Соль'
			},
			{
				isRight: false,
				answer: 'Сахар'
			},
			{
				isRight: false,
				answer: 'Перекись водорода'
			},
			{
				isRight: false,
				answer: 'Хлор'
			}
		]
	},
	{
		questionId: 9,
		question: 'Великобритания состоит из следующих стран: Англия, Ирландия, Уэльс и…',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Шотландия'
			},
			{
				isRight: false,
				answer: 'Франция'
			},
			{
				isRight: false,
				answer: 'Венгрия'
			},
			{
				isRight: false,
				answer: 'Австрия'
			}
		]
	},
	{
		questionId: 10,
		question: 'Сколько элементов в таблице Менделеева?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: '118'
			},
			{
				isRight: false,
				answer: '112'
			},
			{
				isRight: false,
				answer: '120'
			},
			{
				isRight: false,
				answer: '122'
			}
		]
	},




	 /* 10 ques */




	{
		questionId: 11,
		question: 'Сколько клавиш у стандартного современного пианино / фортепиано?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: '88'
			},
			{
				isRight: false,
				answer: '89'
			},
			{
				isRight: false,
				answer: '80'
			},
			{
				isRight: false,
				answer: '77'
			}
		]
	},
	{questionId: 12,
		question: 'Какой формы знак STOP?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Восьмиугольной'
			},
			{
				isRight: false,
				answer: 'Треугольной'
			},
			{
				isRight: false,
				answer: 'Круглой'
			},
			{
				isRight: false,
				answer: 'Квадратной'
			}
		]
	},
	{
		questionId: 13,
		question: 'Какое животное можно увидеть на логотипе Porsche?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Лошадь'
			},
			{
				isRight: false,
				answer: 'Лев'
			},
			{
				isRight: false,
				answer: 'Рысь'
			},
			{
				isRight: false,
				answer: 'Медведь'
			}
		]
	},
	{
		questionId: 14,
		question: 'Какой континент на Земле самый большой?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Евразия'
			},
			{
				isRight: false,
				answer: 'Северная Америка'
			},
			{
				isRight: false,
				answer: 'Азия'
			},
			{
				isRight: false,
				answer: 'Антарктида'
			}
		]
	},
	{
		questionId: 15,
		question: 'Какая страна имеет выход в Индийский океан, Аравийское море и Бенгальский залив?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Индия'
			},
			{
				isRight: false,
				answer: 'Китай'
			},
			{
				isRight: false,
				answer: 'Австралия'
			},
			{
				isRight: false,
				answer: 'Индонезия'
			}
		]
	},




	/*15 ques */




	{
		questionId: 16,
		question: 'Какая страна граничит с 14 странами и пересекает 8 часовых поясов?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Россия'
			},
			{
				isRight: false,
				answer: 'Канада'
			},
			{
				isRight: false,
				answer: 'ЮАР'
			},
			{
				isRight: false,
				answer: 'Австралия'
			}
		]
	},
	{
		questionId: 17,
		question: 'В Исландии есть дороги, которые огибают определенные места. Кого они не хотят беспокоить?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Эльфов'
			},
			{
				isRight: false,
				answer: 'Гномов'
			},
			{
				isRight: false,
				answer: 'Единорогов'
			},
			{
				isRight: false,
				answer: 'Лосей'
			}
		]
	},
	{
		questionId: 18,
		question: 'В какой стране производится больше всего кофе в мире?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Бразилия'
			},
			{
				isRight: false,
				answer: 'Норвегия'
			},
			{
				isRight: false,
				answer: 'Куба'
			},
			{
				isRight: false,
				answer: 'Эфиопия'
			}
		]
	},
	{
		questionId: 19,
		question: 'Какого цвета нет на норвежском флаге?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Черного'
			},
			{
				isRight: false,
				answer: 'Синего'
			},
			{
				isRight: false,
				answer: 'Красного'
			},
			{
				isRight: false,
				answer: 'Белого'
			}
		]
	},
	{
		questionId: 20,
		question: 'Кто сыграл Нео в "Матрице"?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Киану Ривз'
			},
			{
				isRight: false,
				answer: 'Мэттью Макконахи'
			},
			{
				isRight: false,
				answer: 'Том Круз'
			},
			{
				isRight: false,
				answer: 'Бред Питт'
			}
		]
	},



	/* 20 ques */



	{
		questionId: 21,
		question: 'Какая компания владеет Bugatti, Bentley, Lamborghini, Audi и Porsche?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Mercedec'
			},
			{
				isRight: false,
				answer: 'BMW'
			},
			{
				isRight: false,
				answer: 'Volkswagen'
			},
			{
				isRight: false,
				answer: 'FIAT'
			}
		]
	},
	{
		questionId: 22,
		question: 'В каком году вышел фильм "Титаник"?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: '1997'
			},
			{
				isRight: false,
				answer: '1990'
			},
			{
				isRight: false,
				answer: '1995'
			},
			{
				isRight: false,
				answer: '1987'
			}
		]
	},
	{
		questionId: 23,
		question: 'Что означает термин "пиано" в музыке?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Играть тихо'
			},
			{
				isRight: false,
				answer: 'Играть громко'
			},
			{
				isRight: false,
				answer: 'Играть медленно'
			},
			{
				isRight: false,
				answer: 'Играть очень громко'
			}
		]
	},
	{
		questionId: 24,
		question: 'Назовите самый большой остров в мире',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Гренландия'
			},
			{
				isRight: false,
				answer: 'Мадагаскар'
			},
			{
				isRight: false,
				answer: 'Новая Гвинея'
			},
			{
				isRight: false,
				answer: 'Борнео'
			}
		]
	},
	{
		questionId: 25,
		question: 'Мегалофобия - это страх чего?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Больших предметов'
			},
			{
				isRight: false,
				answer: 'Глубины'
			},
			{
				isRight: false,
				answer: 'Неизвестности'
			},
			{
				isRight: false,
				answer: 'Пауков'
			}
		]
	},




	/* 25 ques */




	{
		questionId: 26,
		question: 'Какой водопад самый высокий в мире?',
		typeId: 1,
		typeName: 'Простой',
		variants: [
			{
				isRight: true,
				answer: 'Анхель, Венесуэла'
			},
			{
				isRight: false,
				answer: 'Три Сестры, Перу'
			},
			{
				isRight: false,
				answer: 'Тугела, ЮАР'
			},
			{
				isRight: false,
				answer: 'Юмбилья, Перу'
			}
		]
	},
	{
		questionId: 27,
		question: 'Как называется единица измерения скорости и направления движения компьютерной мыши?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Микки'
			},
			{
				isRight: false,
				answer: 'Мисти'
			},
			{
				isRight: false,
				answer: 'Масти'
			},
			{
				isRight: false,
				answer: 'Мыши'
			}
		]
	},
	{
		questionId: 28,
		question: 'Какие две страны не пропустили ни одной современной Олимпиады?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Греция и Австралия'
			},
			{
				isRight: false,
				answer: 'Греция и Германия'
			},
			{
				isRight: false,
				answer: 'Греция и Италия'
			},
			{
				isRight: false,
				answer: 'Греция и Испания'
			}
		]
	},
	{
		questionId: 29,
		question: 'Какова длина олимпийского бассейна (в метрах)?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: '50'
			},
			{
				isRight: false,
				answer: '25'
			},
			{
				isRight: false,
				answer: '20'
			},
			{
				isRight: false,
				answer: '40'
			}
		]
	},
	{
		questionId: 30,
		question: 'Мегалофобия - это страх чего?',
		typeId: 2,
		typeName: 'Сложный',
		variants: [
			{
				isRight: true,
				answer: 'Больших предметов'
			},
			{
				isRight: false,
				answer: 'Глубины'
			},
			{
				isRight: false,
				answer: 'Неизвестности'
			},
			{
				isRight: false,
				answer: 'Пауков'
			}
		]
	},
];
