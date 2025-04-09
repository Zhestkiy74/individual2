import { QuizTopic } from "./model";

export const quizData: QuizTopic[] = [
	{
		topicId: "basic_math",
		title: "Повторение курса математики основной школы",
		description: "Задачи по базовым математическим понятиям и вычислениям.",
		subtopics: [
			{
				subtopicId: "numbers_and_calculations",
				title: "Цель и задачи математики при освоении специальности. Числа и вычисления",
				description:
					"Задачи на работу с числами (натуральные, рациональные, иррациональные) и вычислениями.",
				tasks: [
					{
						id: "nc1",
						title: "Нахождение натуральных чисел",
						question: "Отметь натуральные числа:",
						images: [],
						parts: [
							{
								type: "checkbox",
								options: [
									{ id: "opt1", text: "\\(-7\\)" },
									{ id: "opt2", text: "\\(93\\)" },
									{ id: "opt3", text: "\\(2415\\)" },
									{ id: "opt4", text: "\\(4\\)" },
									{ id: "opt5", text: "\\(\\sqrt{11}\\)" },
									{ id: "opt6", text: "\\(-7,3\\)" },
								],
								answer: ["\\(93\\)", "\\(2415\\)", "\\(4\\)"],
							},
						],
					},
					{
						id: "nc2",
						title: "Натуральные числа, делимые на 2",
						question:
							"Сколько существует натуральных чисел, меньших \\(54\\) и делящихся на \\(2\\)?",
						images: [],
						parts: [
							{
								prefix: "Ответ:",
								type: "input",
								options: [],
								answer: "26",
							},
						],
					},
					{
						id: "nc3",
						title: "Делимость чисел",
						question:
							"Отметь, при каких значениях \\(x\\) выполняется \\(36 \\vdots x\\).",
						images: [],
						parts: [
							{
								question: "При \\(x =\\)",
								type: "checkbox",
								options: [
									{ id: "opt1", text: "\\(72\\)" },
									{ id: "opt2", text: "\\(12\\)" },
									{ id: "opt3", text: "\\(23\\)" },
									{ id: "opt4", text: "\\(3\\)" },
								],
								answer: ["\\(12\\)", "\\(3\\)"],
							},
						],
					},
					{
						id: "nc4",
						title: "Деление с остатком",
						question:
							"Составьте формулу натурального числа \\(a\\), которое при делении на \\(25\\) даёт остаток \\(20\\). Ответ:",
						images: [],
						parts: [
							{
								is_horizontal: true,
								partId: "1",
								prefix: "\\(a =\\)",
								type: "input",
								options: [],
								postfix: "\\(\\cdot \\)",
								answer: "25",
							},
							{
								is_horizontal: true,
								partId: "2",
								prefix: "\\(q +  \\)",
								type: "input",
								options: [],
								answer: "20",
							},
						],
					},
					{
						id: "nc5",
						title: "Нахождение рациональных чисел",
						question:
							"Отметь рациональные числа, которые находятся между числами \\(0,567\\) и \\(1,901\\):",
						images: [],
						parts: [
							{
								type: "checkbox",
								options: [
									{ id: "opt1", text: "\\(1,9\\)" },
									{ id: "opt2", text: "\\(1,801\\)" },
									{ id: "opt3", text: "\\(0,667\\)" },
									{ id: "opt4", text: "\\(2,101\\)" },
									{ id: "opt5", text: "\\(0,467\\)" },
									{ id: "opt6", text: "\\(2,567\\)" },
								],
								answer: [
									"\\(1,9\\)",
									"\\(1,801\\)",
									"\\(0,667\\)",
								],
							},
						],
					},
					{
						id: "nc6",
						title: "Перевод в обыкновенную дробь",
						question: "Запиши число в виде обыкновенной дроби:",
						images: [],
						parts: [
							{
								partId: "1",
								prefix: "74=",
								type: "input",
								options: [],
								answer: "74/1",
							},
							{
								partId: "2",
								prefix: "-0,3=",
								type: "input",
								options: [],
								answer: "-3/10",
							},
							{
								partId: "3",
								prefix: "-0,3003=",
								type: "input",
								options: [],
								answer: "-3003/10000",
							},
						],
					},
					{
						id: "nc7",
						title: "Нахождение количества правильных дробей",
						question:
							"Сколько существует положительных обыкновенных правильных несократимых дробей со знаменателем, равным \\(59\\).",
						images: [],
						parts: [
							{
								partId: "1",
								question: "Количество дробей?",
								type: "input",
								options: [],
								answer: "58",
							},
							{
								partId: "2",
								question: "Наибольшая дробь?",
								type: "input",
								options: [],
								answer: "58/59",
							},
						],
					},
					{
						id: "nc8",
						title: "Иррациональные числа",
						question: "Отметь иррациональные числа:",
						images: [],
						parts: [
							{
								type: "checkbox",
								options: [
									{ id: "opt1", text: "\\(-290,91\\)" },
									{ id: "opt2", text: "\\(9,(747)\\)" },
									{ id: "opt3", text: "\\(\\sqrt{13}\\)" },
									{ id: "opt4", text: "\\(π\\)" },
									{ id: "opt5", text: "\\(\\sqrt{0,16}\\)" },
									{ id: "opt6", text: "\\(0\\)" },
								],
								answer: ["\\(\\sqrt{13}\\)", "\\(π\\)"],
							},
						],
					},
					{
						id: "nc9",
						title: "Произведение иррациональных чисел",
						question: "Решить: \\(\\sqrt{96} \\cdot \\sqrt{24}\\)",
						images: [],
						parts: [
							{
								type: "input",
								options: [
									{ id: "opt1", text: "\\(48\\)" },
									{ id: "opt2", text: "\\(24\\)" },
									{ id: "opt3", text: "\\(96\\)" },
								],
								answer: "48",
							},
						],
					},
					{
						id: "nc10",
						title: "Действия с иррациональными числами",
						question:
							"Ответом выражения \\(\\sqrt{5} \\cdot \\sqrt{5}\\) будет:",
						images: [],
						parts: [
							{
								type: "radio",
								options: [
									{ id: "opt1", text: "рациональное число" },
									{
										id: "opt2",
										text: "иррациональное число",
									},
								],
								answer: "рациональное число",
							},
						],
					},
					{
						id: "nc11",
						title: "x, y — натуральные числа",
						question:
							"Найди все значения \\(a\\) (натуральное число), при которых \\(x\\) и \\(y\\) являются натуральными числами: <br/>\\(x = \\frac{6}{a}+14\\);<br/> \\(х = 7 \\cdot a + \\frac{12}{a}\\)<br/>(Ответы запиши в порядке возрастания):",
						images: [],
						parts: [
							{
								partId: "part1",
								type: "input",
								options: [
									{ id: "opt1", text: "\\(1\\)" },
									{ id: "opt2", text: "\\(2\\)" },
									{ id: "opt3", text: "\\(3\\)" },
									{ id: "opt4", text: "\\(6\\)" },
									{ id: "opt5", text: "\\(7\\)" },
								],
								answer: "1",
							},
							{
								partId: "part2",
								type: "input",
								options: [
									{ id: "opt1", text: "\\(1\\)" },
									{ id: "opt2", text: "\\(2\\)" },
									{ id: "opt3", text: "\\(3\\)" },
									{ id: "opt4", text: "\\(6\\)" },
									{ id: "opt5", text: "\\(7\\)" },
								],
								answer: "2",
							},
							{
								partId: "part3",
								type: "input",
								options: [
									{ id: "opt1", text: "\\(1\\)" },
									{ id: "opt2", text: "\\(2\\)" },
									{ id: "opt3", text: "\\(3\\)" },
									{ id: "opt4", text: "\\(6\\)" },
									{ id: "opt5", text: "\\(7\\)" },
								],
								answer: "3",
							},
							{
								partId: "part4",
								type: "input",
								options: [
									{ id: "opt1", text: "\\(1\\)" },
									{ id: "opt2", text: "\\(2\\)" },
									{ id: "opt3", text: "\\(3\\)" },
									{ id: "opt4", text: "\\(6\\)" },
									{ id: "opt5", text: "\\(7\\)" },
								],
								answer: "6",
							},
						],
					},
					{
						id: "nc12",
						title: "Возведение в степень",
						question: "Найди последнюю цифру числа \\(3^{1065}\\)",
						images: [],
						parts: [
							{
								type: "input",
								options: [
									{ id: "opt1", text: "\\(1\\)" },
									{ id: "opt2", text: "\\(3\\)" },
									{ id: "opt3", text: "\\(9\\)" },
								],
								answer: "3",
							},
						],
					},
					{
						id: "nc13",
						title: "Перевод числа в бесконечную десятичную периодическую дробь",
						question:
							"Запиши \\(6,434343...\\) в виде бесконечной десятичной периодической дроби",
						images: [],
						parts: [
							{
								partId: "part1",
								is_horizontal: true,
								type: "input",
								options: [],
								placeholder: "12,3",
								answer: "6,4)",
							},
							{
								partId: "part2",
								is_horizontal: true,
								prefix: "(",
								postfix: ")",
								type: "input",
								options: [],
								placeholder: "12",
								answer: "43",
							},
						],
					},
					{
						id: "nc14",
						title: "Число, равноудалённое от чисел",
						question:
							"Найди число, равноудалённое от чисел \\(\\frac{8}{9}\\) и \\(\\frac{9}{8}\\).",
						images: [],
						parts: [
							{
								question:
									"Ответ запиши в виде обыкновенной дроби",
								type: "input",
								options: [],
								answer: "145/144",
							},
						],
					},
					{
						id: "nc15",
						title: "Вычисление выражения",
						question: "",
						images: [],
						parts: [
							{
								question:
									"Вычисли: \\((\\sqrt{256} - 7)(7 + 8\\sqrt{4}) =\\)",
								type: "input",
								options: [],
								answer: "207",
							},
							{
								question:
									"Отметь, каким числом является числовое значение выражения",
								type: "radio",
								options: [
									{ id: "opt1", text: "рациональное число" },
									{
										id: "opt2",
										text: "иррациональное число",
									},
								],
								answer: "рациональное число",
							},
						],
					},
					{
						id: "nc16",
						title: "Интервал",
						question:
							"Отметь рациональные числа, расположенные на интервале \\((2,8; \\sqrt{8})\\):",
						images: [],
						parts: [
							{
								type: "checkbox",
								options: [
									{ id: "opt1", text: "\\(\\sqrt{9}\\)" },
									{ id: "opt2", text: "\\(2,802\\)" },
									{ id: "opt3", text: "\\(2,8\\)" },
									{ id: "opt4", text: "\\(2,81\\)" },
									{ id: "opt5", text: "\\(\\sqrt{7}\\)" },
								],
								answer: ["\\(2,802\\)"],
							},
						],
					},
					{
						id: "nc17",
						title: "Перевод из бесконечной периодической дроби в обыкновенную дробь",
						question:
							"Дана бесконечная десятичная периодическая дробь \\(8,(58)\\). Запиши её в виде обыкновенной дроби",
						images: [],
						parts: [
							{
								type: "input",
								options: [
									{ id: "opt1", text: "\\(850/99\\)" },
									{ id: "opt2", text: "\\(858/99\\)" },
									{ id: "opt3", text: "\\(85/9\\)" },
								],
								answer: "850/99",
							},
						],
					},
					{
						id: "nc18",
						title: "Корень из периодической дроби",
						question: "Реши: \\(\\sqrt{53,(7)}\\).",
						images: [],
						parts: [
							{
								question:
									"Ответ запиши в виде обыкновенной дроби",
								type: "input",
								options: [],
								answer: "22/3",
							},
						],
					},
					{
						id: "nc19",
						title: "Уравнение",
						question: "Найди \\(x: 13,(4) \\cdot x - 1 = 0\\).",
						images: [],
						parts: [
							{
								question:
									"Ответ запиши в виде обыкновенной дроби",
								type: "input",
								options: [],
								answer: "9/121",
							},
						],
					},
				],
			},
			{
				subtopicId: "algebra_and_percentages",
				title: "Процентные вычисления. Уравнения и неравенства",
				tasks: [
					{
						id: "ap1",
						title: "Дробное неравенство, сводимое к линейному",
						question:
							"Реши неравенство \\(\\frac{x + 8}{5} > \\frac{6 - x}{3}\\).",
						parts: [
							{
								question: "Выбери правильный вариант ответа:",
								partId: "1",
								type: "radio",
								options: [
									{ id: "1", text: "\\(x > 15\\)" },
									{ id: "2", text: "\\(x > 6\\)" },
									{ id: "3", text: "\\(x < 0,75\\)" },
									{ id: "4", text: "\\(x < 8\\)" },
									{ id: "5", text: "\\(x > 0,75\\)" },
									{
										id: "6",
										text: "\\(x > -0,75\\)",
									},
								],
								answer: "\\(x > 0,75\\)",
							},
						],
					},
					{
						id: "ap2",
						title: "Свежая трава",
						question:
							"Из свежей травы изготовили \\(6,16\\) т корма. Это количество составило \\(77\\%\\) свежей травы. Определи количество использованной свежей травы. Найди количество корма, которое можно изготовить из \\(2,2\\) т свежей травы.",
						parts: [
							{
								partId: "1",
								prefix: "Из ",
								postfix:
									"т свежей травы выйдет \\(6,16\\) т корма.",
								type: "input",
								options: [],
								answer: "8",
							},
							{
								partId: "2",
								prefix: "Из \\(2,2\\) т свежей травы выйдет",
								postfix: "т корма.",
								type: "input",
								options: [],
								answer: "1,694",
							},
						],
					},
					{
						id: "ap3",
						title: "Проценты как десятичная дробь",
						question: "",
						parts: [
							{
								question:
									"Представь проценты в виде десятичной дроби:",
								prefix: "\\(64\\% =\\)",
								placeholder: "0,32",
								partId: "1",
								type: "input",
								options: [],
								answer: "0,64",
							},
						],
					},
					{
						id: "ap4",
						title: "Проценты в виде десятичной дроби (сотни)",
						question: "",
						parts: [
							{
								question: "Запиши в виде десятичной дроби:",
								prefix: "\\(135\\% =\\)",
								placeholder: "0,32",
								partId: "1",
								type: "input",
								options: [],
								answer: "1,35",
							},
						],
					},
					{
						id: "ap5",
						title: "Проценты в виде десятичной дроби (десятичная дробь)",
						question: "",
						parts: [
							{
								question:
									"Переведи проценты в десятичную дробь:",
								prefix: "\\(1,4\\% =\\)",
								placeholder: "0,32",
								partId: "1",
								type: "input",
								options: [],
								answer: "0,014",
							},
						],
					},
					{
						id: "ap6",
						title: "Десятичные дроби в виде процентов (тысячные)",
						question: "",
						parts: [
							{
								question: "Запиши в процентах: ",
								prefix: "\\(0,208 = \\)",
								postfix: "\\( \\%\\)",
								partId: "1",
								placeholder: "0,32",
								type: "input",
								options: [],
								answer: "20,8",
							},
						],
					},
					{
						id: "ap7",
						title: "Деление неравенства на отрицательное число",
						question: "Запиши десятичные дроби в процентах:",
						parts: [
							{
								partId: "1",
								prefix: "\\(0,73 = \\)",
								postfix: "\\( \\%\\)",
								placeholder: "32",
								type: "input",
								options: [],
								answer: "73",
							},
							{
								partId: "2",
								prefix: "\\(0,09 = \\)",
								postfix: "\\( \\%\\)",
								type: "input",
								placeholder: "32",
								options: [],
								answer: "9",
							},
						],
					},
					{
						id: "ap8",
						title: "Деление неравенства на отрицательное число",
						question:
							"После деления обеих частей неравенства \\(-2x < 14\\) на \\(-2\\) получим (выбери подходящий ответ):",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{ id: "1", text: "\\(x < -7\\)" },
									{ id: "2", text: "\\(x < 7\\)" },
									{ id: "3", text: "\\(x > -7\\)" },
									{ id: "4", text: "\\(x > 7\\)" },
								],
								answer: "\\(x > -7\\)",
							},
						],
					},
					{
						id: "ap9",
						title: "Число, которое является или не является решением неравенства с модулем",
						question: "",
						parts: [
							{
								partId: "1",
								prefix: "Число \\(-0,85\\)",
								postfix:
									"решением неравенства \\(|x| < -0,85\\).",
								type: "radio",
								options: [
									{ id: "1", text: "является" },
									{ id: "2", text: "не является" },
								],
								answer: "не является",
							},
						],
					},
					{
						id: "ap10",
						title: "Линейное неравенство",
						question:
							"Реши неравенство \\(8 - 4x < 6 - 6x\\). <br/>(В одно окошко введи знак неравенства, в другое — число.)",
						parts: [
							{
								is_horizontal: true,
								prefix: "Ответ: \\(t\\)",
								partId: "1",
								placeholder: "> < =",
								type: "input",
								options: [],
								answer: "<",
							},
							{
								is_horizontal: true,
								placeholder: "123",
								partId: "2",
								type: "input",
								options: [],
								answer: "-1",
							},
						],
					},
					{
						id: "ap11",
						title: "Дискриминант квадратного уравнения",
						question:
							"Найди дискриминант квадратного уравнения \\(10x^2 + 15x + 20 = 0\\).",
						parts: [
							{
								prefix: "Ответ: \\(D =\\)",
								partId: "1",
								type: "input",
								options: [],
								answer: "-575",
							},
						],
					},
					{
						id: "ap12",
						title: "Число корней квадратного уравнения",
						question:
							"Определи число корней квадратного уравнения \\(2x^2 + 19x + 1 = 0\\). Выбери правильный вариант ответа:",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "Бесконечно много корней",
									},
									{
										id: "2",
										text: "Нет верного ответа",
									},
									{ id: "3", text: "Нет корней" },
									{
										id: "4",
										text: "Два корня",
									},
								],
								answer: "Два корня",
							},
						],
					},
					{
						id: "ap13",
						title: "Полное квадратное уравнение (a = 1; b > 0)",
						question:
							"Найди корни квадратного уравнения \\(x^2 + 3x + 2 = 0\\). (Первым вводи больший корень; если корни одинаковые, впиши одинаковые числа в оба поля.)<br/>Заполни:",
						parts: [
							{
								partId: "1",
								prefix: "\\(x_1 = \\)",
								type: "input",
								options: [],
								answer: "-1",
							},
							{
								partId: "2",
								prefix: "\\(x_2 = \\)",
								type: "input",
								options: [],
								answer: "-2",
							},
						],
					},
					{
						id: "ap15",
						title: "Частное суммы и разности биномов",
						question:
							"Представь в виде дроби \\((10 + tu):(10 - tu)\\).",
						parts: [
							{
								question: "Выбери правильный вариант ответа:",
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(\\frac{10u+t}{10u-t}\\)",
									},
									{ id: "2", text: "другой ответ" },
									{
										id: "3",
										text: "\\((10+t/u)^2\\)",
									},
									{
										id: "4",
										text: "\\(\\frac{10u-t}{10u+t}\\)",
									},
									{
										id: "5",
										text: "\\(\\frac{100-t^2}{u^2}\\)",
									},
									{
										id: "6",
										text: "\\(\\frac{u+t}{u-t}\\)",
									},
								],
								answer: "\\(\\frac{10u+t}{10u-t}\\)",
							},
						],
					},
					{
						id: "ap16",
						title: "Произведение суммы и разности биномов",
						question:
							"Представь в виде дроби \\((z + \\frac{z}{d}) \\cdot (z - \\frac{z}{d})\\). Выбери правильный вариант ответа:",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(\\frac{z^2(d^2-2d+1)}{d^2}\\)",
									},
									{
										id: "2",
										text: "\\(\\frac{z+\\frac{z}{d}}{z-\\frac{z}{d}}\\)",
									},
									{ id: "3", text: "другой ответ" },
									{
										id: "4",
										text: "\\(\\frac{(zd-z)^2}{d}\\)",
									},
									{
										id: "5",
										text: "\\(\\frac{z^2(d^2-1)}{d^2}\\)",
									},
									{
										id: "6",
										text: "\\(\\frac{z^2(d^2+2d+1)}{d^2}\\)",
									},
								],
								answer: "\\(\\frac{z^2(d^2-1)}{d^2}\\)",
							},
						],
					},
					{
						id: "ap17",
						title: "Проценты как несократимая дробь",
						question: "Запиши проценты в виде несократимой дроби:",
						parts: [
							{
								partId: "1",
								prefix: "\\(95\\% = \\)",
								type: "input",
								options: [],
								answer: "19/20",
							},
						],
					},
					{
						id: "ap18",
						title: "Десятичная дробь как проценты",
						question: "Запиши в виде процентов:;<br/>",
						parts: [
							{
								partId: "1",
								prefix: "\\(0,62 = \\)",
								postfix: "\\(\\%\\)",
								type: "input",
								options: [],
								answer: "62",
							},
							{
								partId: "2",
								prefix: "\\(0,9 = \\)",
								postfix: "\\(\\%\\)",
								type: "input",
								options: [],
								answer: "90",
							},
						],
					},
					{
						id: "ap19",
						title: "Обыкновенная дробь в виде процентов",
						question:
							"Представь дробь \\(\\frac{8}{20}\\) в виде процентов.",
						parts: [
							{
								partId: "1",
								prefix: "Ответ: ",
								type: "input",
								postfix: "\\(\\%\\)",
								options: [],
								answer: "40",
							},
						],
					},
					{
						id: "ap20",
						title: "Нахождение процентов от данного числа",
						question: "Вычисли:",
						parts: [
							{
								prefix: " \\(2\\%\\) от \\(337\\) равно",
								postfix: "\\(\\%\\)",
								partId: "1",
								type: "input",
								options: [],
								answer: "6,74",
							},
						],
					},
					{
						id: "ap21",
						title: "Нахождение числа по его процентам (десятичная дробь)",
						question:
							"Найди число, если \\(3\\%\\) его равны \\(1,2\\).",
						parts: [
							{
								prefix: "Число равно",
								partId: "1",
								type: "input",
								options: [],
								answer: "40",
							},
						],
					},
					{
						id: "ap22",
						title: "Проценты и прямоугольник",
						images: ["repeat22.png"],
						question:
							"Напиши, сколько процентов фигуры не закрашено синим цветом.",
						parts: [
							{
								partId: "1",
								placeholder: "21",
								postfix: "\\(\\%\\)",
								type: "input",
								options: [],
								answer: "75",
							},
						],
					},
					{
						id: "ap23",
						title: "Проценты от величины, тысячи",
						question: "",
						parts: [
							{
								partId: "1",
								prefix: "\\(1\\ кг — это\\)",
								postfix: "\\(г\\)",
								type: "radio",
								options: [
									{ id: "1", text: "\\(100\\)" },
									{ id: "2", text: "\\(10 000\\)" },
									{ id: "3", text: "\\(10\\)" },
									{ id: "4", text: "\\(1000\\)" },
								],
								answer: "\\(1000\\)",
							},
							{
								prefix: "\\(35\\%\\) от \\(5\\ кг =\\)",
								partId: "2",
								postfix: "\\(г\\)",
								type: "input",
								options: [],
								answer: "1750",
							},
						],
					},
					{
						id: "ap24",
						title: "Сравнение процентов и дроби (переход к процентам)",
						question:
							"Сравни \\(\\frac{4}{5}\\) и \\(82\\%\\), приведя оба числа к процентам.",
						parts: [
							{
								is_horizontal: true,
								question: "Число",
								partId: "2",
								postfix: "\\(\\%\\)",
								placeholder: "12",
								type: "input",
								options: [],
								answer: "80",
							},
							{
								is_horizontal: true,
								question: "Знак",
								partId: "1",
								placeholder: "> < =",
								postfix: "\\(87 \\%\\) ",
								type: "input",
								options: [],
								answer: "<",
							},
						],
					},
					{
						id: "ap25",
						title: "Бахча",
						question:
							"На бахче возле Астрахани собрали \\(897\\) т дынь. В Брянск отправили \\(3\\%\\) от всех дынь, а в Саратов — \\(1\\%\\) от всех дынь. Заполни:",
						parts: [
							{
								partId: "1",
								placeholder: "20,30",
								prefix: "В Брянск отправили",
								postfix: " т дынь",
								type: "input",
								options: [],
								answer: "26,91",
							},
							{
								partId: "2",
								placeholder: "20,30",
								prefix: "В Саратов отправили",
								postfix: " т дынь",
								type: "input",
								options: [],
								answer: "8,97",
							},
						],
					},
					{
						id: "ap26",
						title: "Себестоимость детали",
						question:
							"Себестоимость изделия была равна \\(739\\) р. После снижения на \\(3\\%\\) какова новая себестоимость?",
						parts: [
							{
								placeholder: "123,45",
								prefix: "Ответ:",
								postfix: " р.",
								partId: "1",
								type: "input",
								options: [],
								answer: "716,63",
							},
						],
					},
					{
						id: "ap27",
						title: "Количество страниц в книге",
						question:
							"Мальчик прочитал \\(120\\) страниц, что составляет \\(15\\%\\) от общего числа страниц в книге. Сколько страниц в книге?",
						parts: [
							{
								prefix: "Ответ:",
								postfix: " страниц.",
								placeholder: "123",
								partId: "1",
								type: "input",
								options: [],
								answer: "800",
							},
						],
					},
					{
						id: "ap28",
						title: "Количество девочек в школе",
						question:
							"В школе \\(900\\) учеников, из них \\(504\\) девочки. Сколько процентов учеников составляют девочки?",
						parts: [
							{
								prefix: "Ответ:",
								postfix: "\\(\\%\\).",
								placeholder: "12",
								partId: "1",
								type: "input",
								options: [],
								answer: "56",
							},
						],
					},
					{
						id: "ap29",
						title: "Неравенство, сведение к линейному (распределительный закон умножения)",
						question:
							"Реши неравенство \\(4y^2 - 4y(y + 5) \\le 100\\). Выбери правильный вариант ответа:",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(y \\ge -5\\)",
									},
									{
										id: "2",
										text: "\\(y \\le -6\\)",
									},
									{
										id: "3",
										text: "\\(y \\le -5\\)",
									},
									{ id: "4", text: "\\(y \\ge 6\\)" },
									{
										id: "5",
										text: "\\(y \\ge -6\\)",
									},
								],
								answer: "\\(y \\ge -5\\)",
							},
						],
					},
					{
						id: "ap30",
						title: "Значения переменной, при которых выражение имеет смысл",
						question:
							"При каких значениях \\(x\\) имеет смысл выражение \\(\\sqrt{(x - 6)(x + 5)}\\)? Выбери правильный вариант ответа:",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(-5 < x < 6\\)",
									},
									{
										id: "2",
										text: "\\(x \\le -5, x \\ge 6\\)",
									},
									{
										id: "3",
										text: "\\(x < -5, x > 6\\)",
									},
									{
										id: "4",
										text: "\\(-5 \\le x \\le 6\\)",
									},
								],
								answer: "\\(x \\le -5, x \\ge 6\\)",
							},
						],
					},
					{
						id: "ap31",
						title: "Область определения корня из квадратного трёхчлена",
						question:
							"Найди область определения выражения \\(f(x) = \\sqrt{x^2 - 5x + 6}\\). Выбери верный вариант ответа:",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(2 \\le x \\le 3\\)",
									},
									{
										id: "2",
										text: "\\(2 < x < 3\\)",
									},
									{
										id: "3",
										text: "\\(x \\le 2, x \\ge 3\\)",
									},
									{ id: "4", text: "другой ответ" },
									{
										id: "5",
										text: "\\(x < 2, x > 3\\)",
									},
								],
								answer: "\\(x \\le 2, x \\ge 3\\)",
							},
						],
					},
					{
						id: "ap32",
						title: "Область определения корня из дроби",
						question:
							"Найди область определения выражения \\(f(x) = \\frac{\\sqrt{3}}{5x - x^2 - 6}\\).",
						parts: [
							{
								question: "Выбери правильный вариант ответа:",
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(2 < x < 3\\)",
									},
									{
										id: "2",
										text: "\\(2 \\le x \\le 3\\)",
									},
									{
										id: "3",
										text: "\\(x < 2, x > 3\\)",
									},
									{
										id: "4",
										text: "\\(x \\le 2, x \\ge 3\\)",
									},
								],
								answer: "\\(2 < x < 3\\)",
							},
						],
					},
					{
						id: "ap33",
						title: "Значения переменной, при которых дробь имеет смысл (корень в знаменателе)",
						question:
							"Определи, при каких значениях \\(x\\) имеет смысл выражение \\(\\frac{\\sqrt{1}}{2x^2 - 7x + 6}\\).",
						parts: [
							{
								question: "Выбери правильный вариант ответа:",
								partId: "1",
								type: "radio",
								options: [
									{ id: "1", text: "другой ответ" },
									{
										id: "2",
										text: "\\(x \\le 1,5, x \\ge 2\\)",
									},
									{
										id: "3",
										text: "\\(1,5 < x < 2\\)",
									},
									{ id: "4", text: "\\(x \\ge 2\\)" },
									{ id: "5", text: "\\(x > 2\\)" },
									{
										id: "6",
										text: "\\(x < 1,5, x > 2\\)",
									},
									{ id: "7", text: "\\(x < 1,5\\)" },
									{
										id: "8",
										text: "\\(1,5 \\le x \\le 2\\)",
									},
									{
										id: "9",
										text: "\\(\\varnothing\\)",
									},
								],
								answer: "\\(x < 1,5, x > 2\\)",
							},
						],
					},
					{
						id: "ap34",
						title: "Полное квадратное уравнение (а не равно 1)",
						question:
							"Реши квадратное уравнение \\(2x^2 - 5x + 3 = 0\\).",
						parts: [
							{
								partId: "1",
								prefix: "\\(x_1 = \\) ",
								postfix: "- больший корень",
								type: "input",
								options: [],
								answer: "1,5",
							},
							{
								partId: "2",
								prefix: "\\(x_2 = \\) ",
								postfix: "- меньший корень",
								type: "input",
								options: [],
								answer: "1",
							},
						],
					},
					{
						id: "ap35",
						title: "Квадратное уравнение, введение новой переменной",
						question:
							"Реши квадратное уравнение \\(2(4x - 18)^2 - 4(4x - 18) + 2 = 0\\)",
						parts: [
							{
								partId: "1",
								prefix: "\\(x_1 = \\) ",
								postfix: "- больший корень",
								type: "input",
								options: [],
								answer: "4,75",
							},
							{
								partId: "2",
								prefix: "\\(x_2 = \\) ",
								postfix: "- меньший корень",
								type: "input",
								options: [],
								answer: "4,75",
							},
							{
								question:
									"Дополнительный вопрос: какой способ решения рациональнее использовать?",
								partId: "3",
								type: "radio",
								options: [
									{
										id: "1",
										text: "Метод введения новой переменной",
									},
									{
										id: "2",
										text: "Вынесение за скобку",
									},
									{
										id: "3",
										text: "Раскрытие скобок",
									},
									{
										id: "4",
										text: "Разложение на множители",
									},
								],
								answer: "Метод введения новой переменной",
							},
						],
					},
					{
						id: "ap36",
						title: "Квадратное уравнение, равенство произведения 0",
						question:
							"Найди корни уравнения \\(-11,7(x - 16)(x + 28) = 0\\). (Первым пиши меньший корень.)",
						parts: [
							{
								partId: "1",
								prefix: "\\(x_1 = \\) ",
								postfix: "- больший корень",
								type: "input",
								options: [],
								answer: "-28",
							},
							{
								partId: "2",
								prefix: "\\(x_2 = \\) ",
								postfix: "- меньший корень",
								type: "input",
								options: [],
								answer: "16",
							},
						],
					},
					{
						id: "ap37",
						title: "Произведение суммы и дроби",
						question:
							"Представь в виде дроби \\(\\left(\\frac{r}{4} + \\frac{r}{9}\\right) \\cdot \\frac{1}{r^2}\\).",
						parts: [
							{
								partId: "1",
								type: "input",
								options: [],
								answer: "13/36",
								postfix: "\\(\\frac{}{r}\\)",
							},
						],
					},
					{
						id: "ap38",
						title: "Произведение разности и дроби",
						question:
							"Упрости выражение \\(\\left(\\frac{t}{d} - \\frac{d}{t}\\right) \\cdot \\frac{6td}{(t - d)}\\).",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{ id: "1", text: "\\(6(t+d)\\)" },
									{ id: "2", text: "\\(6(t-d)\\)" },
									{ id: "3", text: "\\(t+d\\)" },
									{ id: "4", text: "\\(6t+6d\\)" },
								],
								answer: "\\(6(t+d)\\)",
							},
						],
					},
					{
						id: "ap39",
						title: "Произведение дроби и суммы дробей",
						question:
							"Выполни действия: \\(\\frac{t^2 - 81}{2t^2 + 1} \\cdot \\left( \\frac{18t + 1}{t - 9} + \\frac{18t - 1}{t + 9} \\right)\\).",
						parts: [
							{
								partId: "1",
								type: "input",
								options: [],
								answer: "18",
							},
						],
					},
					{
						id: "ap40",
						title: "Разность произведения и дроби",
						question:
							"Представь в виде дроби: \\(\\frac{r^2 - 64}{r + 2} \\cdot \\frac{1}{r^2 + 8r} - \\frac{r + 8}{r^2 - 2r}\\).",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(-\\frac{20}{r^2-4}\\)",
									},
									{
										id: "2",
										text: "\\(\\frac{20}{r^2-4}\\)",
									},
									{
										id: "3",
										text: "\\(-\\frac{20}{r^2+4}\\)",
									},
									{
										id: "4",
										text: "\\(\\frac{20}{r^2+4}\\)",
									},
								],
								answer: "\\(-\\frac{20}{r^2-4}\\)",
							},
						],
					},
					{
						id: "ap41",
						title: "Доказательство тождества",
						question:
							"Выясни, является ли тождеством равенство \\(\\frac{4p - g}{p\\,g} - \\frac{1}{p+g}\\left(\\frac{p}{g} - \\frac{g}{p}\\right) = \\frac{3}{g}\\).",
						parts: [
							{
								question:
									"После преобразования левой части получим выражение (выбери правильный ответ):",
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(\\frac{v}{u} - v\\)",
									},
									{
										id: "2",
										text: "\\(\\frac{v(u-v)}{u^2 - 2uv + v^2}\\)",
									},
									{
										id: "3",
										text: "\\(\\frac{uv}{u^2}\\)",
									},
									{
										id: "4",
										text: "\\(\\frac{v}{u} + v\\)",
									},
								],
								answer: "\\(\\frac{v}{u} + v\\)",
							},
							{
								prefix: "Данное равенство",
								postfix: " тождеством.",
								partId: "2",
								type: "radio",
								options: [
									{ id: "1", text: "является" },
									{ id: "2", text: "не является" },
								],
								answer: "является",
							},
						],
					},
					{
						id: "ap42",
						title: "Части прямого угла",
						question:
							"Луч, проведённый из вершины прямого угла, делит его на два угла. Один из этих углов составляет \\(27\\%\\) прямого угла. Вычисли градусные меры обоих углов.",
						parts: [
							{
								partId: "1",
								prefix: "Градусная мера меньшего угла равна",
								postfix: "°.",
								placeholder: "12,3",
								type: "input",
								options: [],
								answer: ["24,3"],
							},
							{
								partId: "2",
								prefix: "Градусная мера большего угла равна",
								postfix: "°.",
								placeholder: "12,3",
								type: "input",
								options: [],
								answer: ["65,7"],
							},
						],
					},
					{
						id: "ap43",
						title: "Участок прямоугольной формы",
						question:
							"Длина прямоугольного участка — \\(200\\) м, а ширина составляет \\(80\\%\\) от длины. Вспахано \\(20\\%\\) участка. Сколько гектаров не вспахано?",
						parts: [
							{
								prefix: "Ответ:",
								postfix: " га.",
								placeholder: "1,23",
								partId: "1",
								type: "input",
								options: [],
								answer: "2,56",
							},
						],
					},
					{
						id: "ap44",
						title: "Целочисленные значения параметра",
						question:
							"Найди такое целочисленное значение параметра \\(m\\), при котором множество решений неравенства \\((m - x)(x + 3) \\ge 0\\) содержит четыре целых числа. Выбери верный вариант ответа:",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{ id: "1", text: "другой ответ" },
									{
										id: "2",
										text: "\\(m_1 = 1, m_2 = 3\\)",
									},
									{ id: "3", text: "\\(m = 0\\)" },
									{
										id: "4",
										text: "\\(m_1 = -1, m_2 = -5\\)",
									},
									{
										id: "5",
										text: "\\(m_1 = 0, m_2 = -6\\)",
									},
									{
										id: "6",
										text: "\\(m_1 = 1, m_2 = -7\\)",
									},
									{
										id: "7",
										text: "\\(m_1 = -2, m_2 = -4\\)",
									},
								],
								answer: "\\(m_1 = 0, m_2 = -6\\)",
							},
						],
					},
					{
						id: "ap45",
						title: "Натуральное значение параметра (целые числа из множества решений)",
						question:
							"Найди такое натуральное значение параметра \\(m\\), при котором множество решений неравенства \\((x + m)(x - 5) \\le 0\\) содержит девять целых чисел.",
						parts: [
							{
								question: "Выбери верный вариант ответа:",
								partId: "1",
								type: "radio",
								options: [
									{ id: "1", text: "\\(m = 0\\)" },
									{
										id: "2",
										text: "\\(m_1 = 2, m_2 = 3\\)",
									},
									{ id: "3", text: "\\(m = 5\\)" },
									{ id: "4", text: "\\(m = 6\\)" },
									{ id: "5", text: "\\(m = 10\\)" },
									{
										id: "6",
										text: "\\(m_1 = 1, m_2 = -7\\)",
									},
									{
										id: "7",
										text: "\\(m_1 = 3, m_2 = 12\\)",
									},
									{
										id: "8",
										text: "\\(m_1 = -2, m_2 = -4\\)",
									},
									{ id: "9", text: "\\(m = 3\\)" },
									{ id: "10", text: "другой ответ" },
								],
								answer: "\\(m = 3\\)",
							},
						],
					},
					{
						id: "ap46",
						title: "Натуральное значение параметра (натуральные числа из множества решений)",
						question:
							"Укажи такое натуральное значение параметра \\(m\\), при котором множество решений неравенства \\((m - x)(10 - x) < 0\\) содержит четыре натуральных числа.",
						parts: [
							{
								question: "Выбери верный вариант ответа:",
								partId: "1",
								type: "checkbox",
								options: [
									{ id: "1", text: "другой ответ" },
									{ id: "2", text: "\\(m = 3\\)" },
									{ id: "3", text: "\\(m = 16\\)" },
									{ id: "4", text: "\\(m = 5\\)" },
									{ id: "5", text: "\\(m = 18\\)" },
									{ id: "6", text: "\\(m = 2\\)" },
									{ id: "7", text: "\\(m = 15\\)" },
									{ id: "8", text: "\\(m = 20\\)" },
									{ id: "9", text: "\\(m = 17\\)" },
									{ id: "10", text: "\\(m = 4\\)" },
								],
								answer: ["\\(m = 5\\)", "\\(m = 15\\)"],
							},
						],
					},
					{
						id: "ap47",
						title: "Задача на составление квадратного уравнения",
						question:
							"Детская площадка имеет форму прямоугольника, площадь которого равна \\(130\\) м². Одна сторона больше другой на \\(3\\) м. Определи размеры площадки и количество упаковок материала для бордюра, если в одной упаковке \\(15\\) м материала.",
						parts: [
							{
								partId: "1",
								question: "Меньшая сторона (м):",
								type: "input",
								options: [],
								answer: "10",
							},
							{
								partId: "2",
								question: "Большая сторона (м):",
								type: "input",
								options: [],
								answer: "13",
							},
							{
								partId: "3",
								question: "Количество упаковок:",
								type: "input",
								options: [],
								answer: "4",
							},
						],
					},
					{
						id: "ap48",
						title: "Сокращение алгебраической дроби, разложение на множители квадратного трёхчлена",
						question:
							"Сократи дробь \\(\\frac{(x - 1)^2}{x^2 + 2x - 3}\\).",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(\\frac{x-1}{x+3}\\)",
									},
									{
										id: "2",
										text: "\\(\\frac{x+1}{x-3}\\)",
									},
									{
										id: "3",
										text: "\\(\\frac{x-1}{x+3}\\)",
									},
									{
										id: "4",
										text: "\\(\\frac{x+1}{x+3}\\)",
									},
								],
								answer: "\\(\\frac{x-1}{x+3}\\)",
							},
						],
					},
					{
						id: "ap49",
						title: "Сокращение алгебраической дроби, формула разности кубов",
						question:
							"Сократи дробь \\(\\frac{2x^2 - 12x + 16}{x^3 - 64}\\).",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(\\frac{2(x-2)}{x^2 + 4x + 16}\\)",
									},
									{
										id: "2",
										text: "\\(\\frac{2(x+2)}{x^2 - 4x + 16}\\)",
									},
									{
										id: "3",
										text: "\\(\\frac{2(x-2)}{(x-4)(x^2+4x+16)}\\)",
									},
									{
										id: "4",
										text: "\\(\\frac{2(x-2)}{x^2-4x+16}\\)",
									},
								],
								answer: "\\(\\frac{2(x-2)}{x^2 + 4x + 16}\\)",
							},
						],
					},
					{
						id: "ap50",
						title: "Разложение на множители квадратного трёхчлена, отрицательные корни",
						question:
							"Разложи на множители квадратный трёхчлен \\(x^2 + 4x + 3\\).",
						parts: [
							{
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(x^2+4x+3 = (x+1)(x+3)\\)",
									},
									{
										id: "2",
										text: "\\(x^2+4x+3 = (x+2)(x+1.5)\\)",
									},
									{
										id: "3",
										text: "\\(x^2+4x+3 = (x-1)(x-3)\\)",
									},
									{
										id: "4",
										text: "\\(x^2+4x+3 = (x+3)(x+1)\\)",
									},
								],
								answer: "\\(x^2+4x+3 = (x+1)(x+3)\\)",
							},
						],
					},
					{
						id: "ap51",
						title: "Доказательство рациональных выражений",
						question:
							"Определи, является ли тождеством равенство \\(\\frac{uv - v^2}{u^2 - v^2} = \\frac{u+v}{2(u-v)} - \\frac{u+v}{2(u+v)} - \\frac{v}{u-v}\\).",
						parts: [
							{
								question:
									"После преобразования левой части получим выражение (выбери правильный ответ):",
								partId: "1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(\\frac{v}{u} - v\\)",
									},
									{
										id: "2",
										text: "\\(\\frac{v(u-v)}{u^2 - 2uv + v^2}\\)",
									},
									{
										id: "3",
										text: "\\(\\frac{uv}{u^2}\\)",
									},
									{
										id: "4",
										text: "\\(\\frac{v}{u} + v\\)",
									},
								],
								answer: "\\(\\frac{v}{u} + v\\)",
							},
							{
								question:
									"После преобразования правой части получим выражение (выбери правильный ответ):",
								partId: "2",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(\\frac{v}{u} - v\\)",
									},
									{
										id: "2",
										text: "\\(\\frac{v(u-v)}{u^2 - 2uv + v^2}\\)",
									},
									{
										id: "3",
										text: "\\(\\frac{uv}{u^2}\\)",
									},
									{
										id: "4",
										text: "\\(\\frac{v}{u} + v\\)",
									},
								],
								answer: "\\(\\frac{v}{u} + v\\)",
							},
							{
								question:
									"Данное равенство является ( ) тождеством.",
								partId: "3",
								type: "radio",
								options: [
									{ id: "1", text: "является" },
									{ id: "2", text: "не является" },
								],
								answer: "является",
							},
						],
					},
					{
						id: "ap52",
						title: "Выражение, значение которого не зависит от переменных",
						question:
							"Докажи, что значение выражения \\(\\left(\\frac{2ck}{c^2 - k^2} + c - \\frac{k}{2^c} + 2k\\right) \\cdot \\frac{14c}{c+k} + \\frac{7k}{k-c}\\) не зависит от \\(c\\) и \\(k\\), и найди его значение. (В ответ запиши число!)",
						parts: [
							{
								partId: "1",
								type: "input",
								options: [],
								answer: "7",
							},
						],
					},
					{
						id: "ap53",
						title: "Выражение на все действия",
						question:
							"Выполни действия:<br/>\\(\\frac{\\frac{r^2 - 5r + 25}{(25r)^2 - 1} \\cdot \\left(\\frac{(5r)^2 + r}{r^3 + 125}\\right) - \\frac{r + 5}{(5r)^2 - r}}{\\frac{4}{r^2 + 5r}} - \\frac{25r + 22}{4 - 20r}\\).",
						parts: [
							{
								partId: "1",
								type: "input",
								options: [],
								answer: "3/4",
							},
						],
					},
				],
			},
			{
				subtopicId: "algebra_percentages_tasks",
				title: "Процентные вычисления в профессиональных задачах",
				tasks: [
					{
						id: "t1",
						title: "Себестоимость детали",
						question:
							"Себестоимость изделия была равна \\(740\\) р. В результате применения инноваций себестоимость изделия снизилась на \\(3\\%\\).",
						parts: [
							{
								question: "Какой стала себестоимость изделия?",
								partId: "t1.1",
								type: "input",
								placeholder: "123,45",
								postfix: "\\(р\\)",
								options: [],
								answer: "717,8",
							},
						],
					},
					{
						id: "t2",
						title: "Части прямого угла",
						question:
							"Луч, проведённый из вершины прямого угла, делит его на два угла. Один из этих углов составляет \\(16\\%\\) прямого угла. Вычисли градусные меры обоих углов.",
						parts: [
							{
								partId: "t2.1",
								prefix: "Градусная мера меньшего угла:",
								postfix: "°",
								placeholder: "12,3",
								type: "input",
								options: [],
								answer: "14,4",
							},
							{
								partId: "t2.2",
								prefix: "Градусная мера большего угла:",
								postfix: "°",
								placeholder: "12,3",
								type: "input",
								options: [],
								answer: "75,6",
							},
						],
					},
					{
						id: "t3",
						title: "Участок прямоугольной формы",
						question:
							"Длина прямоугольного участка — \\(200\\) м, а ширина составляет \\(75\\%\\) от длины. Вспахано \\(25\\%\\) этого участка. Определи, сколько гектаров не вспахано.",
						parts: [
							{
								prefix: "Ответ: не вспахано",
								postfix: "га участка",
								placeholder: "1,23",
								partId: "t3.1",
								type: "input",
								options: [],
								answer: "2,25",
							},
						],
					},
					{
						id: "t4",
						title: "Количество груш",
						question:
							"На завод привезли партию груш массой \\(4802\\) кг. Из этого количества \\(19\\%\\) направили в цех для приготовления джема, а из оставшейся массы сделали грушевый сок. Вычисли массу груш, которые использовали для приготовления сока.",
						parts: [
							{
								partId: "t4.1",
								type: "input",
								postfix: "кг",
								placeholder: "123,45",
								options: [],
								answer: "3889,62",
							},
						],
					},
					{
						id: "t5",
						title: "Увеличение стоимости акции",
						question:
							"В сентябре биржевая стоимость одной акции фирмы «Альфа» выросла на \\(10\\%\\) по сравнению с августом, а в октябре — ещё на \\(10\\%\\), и составила \\(871200\\) руб. Ответь на следующие вопросы:",
						parts: [
							{
								partId: "t5.1",
								question:
									"Сколько рублей стоила одна акция в августе?",
								type: "input",
								postfix: "руб.",
								options: [],
								answer: "720000",
							},
							{
								partId: "t5.2",
								question:
									"На сколько процентов увеличилась биржевая стоимость акции за два месяца?",
								type: "input",
								postfix: "\\(\\%\\)",
								options: [],
								answer: "21",
							},
							{
								partId: "t5.3",
								question:
									"На сколько процентов стоимость акций в августе меньше, чем в октябре? (округли до целых)",
								type: "input",
								postfix: "\\(\\%\\)",
								options: [],
								answer: "17",
							},
						],
					},
					{
						id: "t6",
						title: "Сумма на счёте через год",
						question:
							"Банк начисляет \\(1,8\\%\\) годовых по вкладам. Василий положил на счёт \\(7000\\) р. Вычисли, какая сумма через год будет лежать на счёте у Василия.",
						parts: [
							{
								partId: "t6.1",
								postfix: "р.",
								type: "input",
								options: [],
								answer: "7126",
							},
						],
					},
					{
						id: "t7",
						title: "Доход с суммы",
						question:
							"Банк начисляет \\(1,6\\%\\) годовых по вкладу. Егор положил на счёт \\(40000\\) р. и собирается каждый год снимать начисляемые проценты. Вычисли, через сколько лет Егор получит общий доход в размере \\(1920\\) р.",
						parts: [
							{
								partId: "t7.1",
								prefix: "через ",
								postfix: "лет.",
								type: "input",
								options: [],
								answer: "3",
							},
						],
					},
					{
						id: "t8",
						title: "Проценты по вкладу",
						question:
							"Михаил положил на новый счёт \\(40000\\) р. Через год со счёта сняли \\(40600\\) р. Определи, какие проценты начисляются по вкладу.",
						parts: [
							{
								partId: "t8.1",
								type: "input",
								postfix: "\\(\\%\\)",
								options: [],
								answer: "1,5",
							},
						],
					},
					{
						id: "t9",
						title: "Снижение производительности комбината",
						question:
							"В октябре цех выпустил \\(800000\\) деталей. В ноябре производство снизилось на \\(20\\%\\), а в декабре — ещё на \\(20\\%\\). Ответь на вопросы:",
						parts: [
							{
								partId: "t9.1",
								question:
									"Сколько деталей выпустил цех в ноябре?",
								postfix: "деталей",
								type: "input",
								options: [],
								answer: "640000",
							},
							{
								partId: "t9.2",
								question:
									"Сколько деталей выпустил цех в декабре?",
								postfix: "деталей",
								type: "input",
								options: [],
								answer: "512000",
							},
							{
								partId: "t9.3",
								question:
									"На сколько процентов снизилась производительность за два месяца?",
								type: "input",
								postfix: "\\(\\%\\)",
								options: [],
								answer: "36",
							},
						],
					},
					{
						id: "t10",
						title: "Время на доход с суммы",
						question:
							"Вычисли, через какое время общий доход с \\(35000\\) р. составит \\(1540\\) р., если сумма положена под \\(2,2\\%\\) годовых, а проценты снимают ежегодно.",
						parts: [
							{
								partId: "t10.1",
								type: "input",
								postfix: "лет",
								options: [],
								answer: "2",
							},
						],
					},
					{
						id: "t11",
						title: "Практико-ориентированная задача (кроссовки)",
						question:
							"Кроссовки в апреле стоили \\(6000\\) р. В мае цену снизили на \\(25\\%\\), а в июне повысили на \\(30\\%\\).",
						parts: [
							{
								partId: "t11.1",
								question:
									"Стоимость кроссовок после снижения цены:",
								postfix: "рублей",
								type: "input",
								options: [],
								answer: "4500",
							},
							{
								partId: "t11.2",
								question:
									"Стоимость кроссовок после повышения цены:",
								postfix: "рублей",
								type: "input",
								options: [],
								answer: "5850",
							},
							{
								partId: "t11.3",
								question: "Итоговая стоимость кроссовок:",
								postfix: "рублей",
								type: "input",
								options: [],
								answer: "5850",
							},
						],
					},
					{
						id: "t12",
						title: "Текстовые задачи повышенного уровня (сплавы)",
						question:
							"Первый сплав содержит \\(40\\%\\) меди, а второй — \\(5\\%\\) меди. Из этих двух сплавов сделали третий сплав с \\(25\\%\\) меди. Если масса первого сплава равна \\(4\\) кг, найди массу третьего сплава (в кг).",
						parts: [
							{
								partId: "t12.1",
								type: "input",
								options: [],
								answer: "7",
							},
						],
					},
					{
						id: "t13",
						title: "Два раствора",
						question:
							"Имеются два сосуда: первый содержит \\(100\\) кг, второй — \\(85\\) кг раствора соли. Если смешать растворы так, чтобы получился раствор с \\(44\\%\\) соли, а при смешивании равных масс – раствор с \\(47\\%\\) соли, то сколько килограммов соли содержится в первом сосуде?",
						parts: [
							{
								partId: "t13.1",
								type: "input",
								options: [],
								answer: "10",
							},
						],
					},
					{
						id: "t14",
						title: "Практико-ориентированная задача (подарочный набор)",
						question:
							"Подарочный набор в октябре стоил \\(6500\\) р. В ноябре цену снизили на \\(40\\%\\), а в декабре повысили на \\(30\\%\\).",
						parts: [
							{
								partId: "t14.1",
								question:
									"Стоимость набора после снижения цены:",
								postfix: "рублей",
								type: "input",
								options: [],
								answer: "3900",
							},
							{
								partId: "t14.2",
								question:
									"Стоимость набора после повышения цены:",
								postfix: "рублей",
								type: "input",
								options: [],
								answer: "5070",
							},
							{
								partId: "t14.3",
								question: "Итоговая стоимость набора:",
								postfix: "рублей",
								type: "input",
								options: [],
								answer: "5070",
							},
						],
					},
					{
						id: "t15",
						title: "Проценты",
						question:
							"В городе N \\(15\\%\\) населения интересуется волейболом. Среди них финальный матч чемпионата смотрели \\(60\\%\\). Сколько процентов горожан смотрели финальный матч?",
						parts: [
							{
								partId: "t15.1",
								type: "input",
								postfix: "\\(\\%\\)",
								options: [],
								answer: "9",
							},
						],
					},
					{
						id: "t16",
						title: "Текстовые задачи повышенного уровня (раствор)",
						question:
							"Смешали \\(7\\) литров \\(44\\%\\)-ного раствора с \\(4\\) литрами воды. Найди концентрацию получившегося раствора в процентах.",
						parts: [
							{
								partId: "t16.1",
								type: "input",
								options: [],
								answer: "28",
							},
						],
					},
				],
			},
			{
				subtopicId: "bm_rc",
				title: "Решение задач. Входной контроль",
				tasks: [
					{
						id: "bm_rc1",
						title: "Уставный капитал",
						question:
							"Петя, Иван, Федя и Виктор учредили компанию с уставным капиталом \\(150000\\) рублей. Петя внёс \\(18\\%\\) уставного капитала, Иван — \\(40500\\) рублей, Федя — \\(0,20\\) уставного капитала, а оставшуюся часть капитала внёс Виктор. Учредители договорились делить ежегодную прибыль пропорционально внесённому в капитал вкладу. Какая сумма от прибыли в \\(800000\\) рублей причитается Виктору?",
						parts: [
							{
								partId: "bm_rc1.1",
								type: "input",
								options: [],
								answer: "280000",
							},
						],
					},
					{
						id: "bm_rc2",
						title: "Сушёные фрукты",
						question:
							"В свежих ягодах винограда содержится \\(87\\%\\) воды, а в сухофруктах — \\(24\\%\\). Сколько килограммов свежего сырья потребуется для приготовления \\(5\\) кг сухофруктов? (Округли до сотых, ответ без единиц измерения.)",
						parts: [
							{
								postfix: "кг",
								partId: "bm_rc2.1",
								type: "input",
								options: [],
								answer: "29,23",
							},
						],
					},
					{
						id: "bm_rc3",
						title: "Семейный доход",
						question:
							"Семья состоит из трёх человек (муж, жена и дочь-студентка). Если бы зарплата мужа увеличилась в два раза, общий доход семьи вырос бы на \\(61\\%\\). Если бы стипендия дочери уменьшилась на треть, общий доход семьи сократился бы на \\(2\\%\\). Сколько процентов от общего дохода семьи составляет зарплата жены?",
						parts: [
							{
								partId: "bm_rc3.1",
								type: "input",
								options: [],
								answer: "33",
							},
						],
					},
					{
						id: "bm_rc4",
						title: "Сравни вклады",
						question:
							"Банк принимает вклады на разных условиях. По вкладу «A» сумма увеличивается на \\(8\\%\\) ежегодно. По вкладу «B» в первые два года сумма растёт на \\(10\\%\\) ежегодно, а за третий год – на целое число \\(r\\%\\). Какое наименьшее целое число \\(r\\) нужно начислить за третий год по вкладу «B», чтобы вклад «B» оказался более выгодным при равных первоначальных взносах?",
						parts: [
							{
								partId: "bm_rc4.1",
								type: "input",
								options: [],
								answer: "5",
							},
						],
					},
					{
						id: "bm_rc5",
						title: "Текстовые задачи повышенного уровня (раствор)",
						question:
							"Смешали \\(16\\) литров \\(20\\%\\)-ного раствора с \\(4\\) литрами \\(30\\%\\)-ного раствора одного вещества. Найди концентрацию получившегося раствора в процентах.",
						parts: [
							{
								partId: "bm_rc5.1",
								type: "input",
								options: [],
								answer: "22",
							},
						],
					},
					{
						id: "bm_rc6",
						title: "Раствор",
						question:
							"В первой ёмкости \\(28\\) кг раствора геля для стирки, во второй — \\(16\\) кг. После смешивания общий раствор имеет концентрацию \\(77\\%\\), а при смешивании равных масс — \\(71\\%\\). Сколько кг геля для стирки растворено во второй ёмкости?",
						parts: [
							{
								partId: "bm_rc6.1",
								postfix: "кг",
								type: "input",
								options: [],
								answer: "7,84",
							},
						],
					},
					{
						id: "bm_rc7",
						title: "Практико-ориентированная задача (тренажёр)",
						question:
							"В августе цену на спортивный тренажёр повысили на \\(15\\%\\), а в сентябре снизили на \\(20\\%\\). Если в сентябре тренажёр стоит \\(8280\\) руб., то:\n1) Сколько он стоил в августе?\n2) Сколько он стоил в июле (до изменений)?\n3) Какова итоговая стоимость?",
						parts: [
							{
								partId: "bm_rc7.1",
								question: "Стоимость в августе:",
								postfix: "руб.",
								type: "input",
								options: [],
								answer: "10350",
							},
							{
								partId: "bm_rc7.2",
								question: "Стоимость в июле (руб.):",
								postfix: "руб.",
								type: "input",
								options: [],
								answer: "9000",
							},
							{
								partId: "bm_rc7.3",
								question: "Итоговая стоимость (руб.):",
								postfix: "руб.",
								type: "input",
								options: [],
								answer: "9000",
							},
						],
					},
					{
						id: "bm_rc8",
						title: "Дробное рациональное неравенство",
						question:
							"Реши неравенство: \\(\\frac{x^2 - 4x + 3}{x^2 - 3x - 18} > 0\\). Выбери правильный вариант ответа:",
						parts: [
							{
								partId: "bm_rc8.1",
								type: "radio",
								options: [
									{
										id: "1",
										text: "[\\(-3\\);\\(1\\)], [\\(3\\);\\(6\\)]",
									},
									{
										id: "2",
										text: "(\\(-∞\\); \\(-3\\)], (\\(1\\); \\(3\\)), [\\(6\\); +∞)",
									},
									{
										id: "3",
										text: "(\\(-∞\\); \\(-3\\)], [\\(1\\); \\(3\\)], [\\(6\\); +∞)",
									},
									{
										id: "4",
										text: "(\\(-∞\\); \\(-3\\)), (\\(1\\); \\(3\\)), (\\(6\\); +∞)",
									},
									{
										id: "5",
										text: "(\\(-4\\); 0), (\\(3\\); +∞)",
									},
									{
										id: "6",
										text: "(\\(-3\\); \\(1\\)), (\\(3\\); \\(6\\))",
									},
									{
										id: "7",
										text: "(\\(-∞\\); \\(-4\\)), (0; \\(3\\))",
									},
								],
								answer: "(\\(-∞\\); \\(-3\\)), (\\(1\\); \\(3\\)), (\\(6\\); +∞)",
							},
						],
					},
					{
						id: "bm_rc9",
						title: "Числовое выражение",
						question:
							"Найди значение выражения: \\(\\frac{\\sqrt{\\sqrt{12} - 2} \\cdot \\sqrt{\\sqrt{12} + 2}}{\\sqrt{128}}\\). ",
						parts: [
							{
								partId: "bm_rc9.1",
								type: "input",
								options: [],
								answer: "1/2",
							},
						],
					},
					{
						id: "bm_rc10",
						title: "Сократить алгебраическую дробь",
						question:
							"Сократи дробь: \\(\\frac{20^{(n+2)}}{2^{(2n+1)} \\cdot 5^{(n-2)}}\\).",
						parts: [
							{
								partId: "bm_rc10.1",
								type: "input",
								options: [],
								answer: "5000",
							},
						],
					},
					{
						id: "bm_rc11",
						title: "Алгебраическая дробь",
						question:
							"Найди значение выражения \\(\\frac{36a - 81b}{6\\sqrt{a} - 9\\sqrt{b} - 3\\sqrt{b}}\\), если \\(\\sqrt{a} + \\sqrt{b} = 27,06\\).",
						parts: [
							{
								partId: "bm_rc11.1",
								type: "input",
								options: [],
								answer: "162,36",
							},
						],
					},
					{
						id: "bm_rc12",
						title: "Уравнение и формулы сокращённого умножения",
						question:
							"Реши уравнение: \\(k^4 = (2 \\cdot k - 48)^2\\). Запиши корни уравнения в порядке возрастания.",
						parts: [
							{
								partId: "bm_rc12.1",
								question: "Меньший корень \\(k\\):",
								type: "input",
								options: [],
								answer: "-8",
							},
							{
								partId: "bm_rc12.2",
								question: "Больший корень \\(k\\):",
								type: "input",
								options: [],
								answer: "6",
							},
						],
					},
					{
						id: "bm_rc13",
						title: "Уравнение с заменой переменной",
						question:
							"Найди корни уравнения: \\(x^4 - 68x^2 + 256 = 0\\). Запиши наибольший из корней.",
						parts: [
							{
								partId: "bm_rc13.1",
								type: "input",
								options: [],
								answer: "8",
							},
						],
					},
					{
						id: "bm_rc14",
						title: "Квадратное неравенство",
						question:
							"Реши неравенство: \\(2,5 < 4b + 4,4 \\cdot 2\\).",
						parts: [
							{
								partId: "bm_rc14.1",
								type: "radio",
								options: [
									{ id: "1", text: "\\(b \\in (-1; 11)\\)" },
									{
										id: "2",
										text: "\\(b \\in (-∞; -1] \\cup [11; ∞)\\)",
									},
									{ id: "3", text: "\\(b \\in (-1; 10)\\)" },
									{ id: "4", text: "\\(b \\in (-1; 12)\\)" },
								],
								answer: "b ∈ (-1; 11)",
							},
						],
					},
					{
						id: "bm_rc15",
						title: "Метод интервалов",
						question:
							"Реши неравенство: \\(x^2 - 15,5x > 0\\). (Перечисли промежутки через точку с запятой. (-2;1;15,5))",
						parts: [
							{
								partId: "bm_rc15.1",
								type: "input",
								options: [],
								answer: "-5;0;15,5;+5",
							},
						],
					},
					{
						id: "bm_rc16",
						title: "Система уравнений",
						question:
							"Реши систему уравнений:\n\\(\\begin{cases} 2x^2 + y = 15 \\\\ 13x^2 - y = 0 \\end{cases}\\)\n(Перечисли все пары \\((x; y)\\) через точку с запятой, упорядочи по возрастанию \\(x\\)).",
						parts: [
							{
								partId: "bm_rc16.1",
								question:
									"Пара \\((x; y)\\) 1: (Пример ответа \\((2;33)\\))",
								type: "input",
								options: [],
								answer: "(-1;13)",
							},
							{
								partId: "bm_rc16.2",
								question:
									"Пара \\((x; y)\\) 2: (Пример ответа \\((2;33)\\))",
								type: "input",
								options: [],
								answer: "(1;13)",
							},
						],
					},
					{
						id: "bm_rc17",
						title: "Нахождение градусной меры угла",
						question:
							"В треугольнике MNK \\(\\angle M = 26°\\) и \\(\\angle K = 54°\\). Вычисли градусную меру угла между высотой \\(NH\\) и биссектрисой \\(NL\\).",
						parts: [
							{
								partId: "bm_rc17.1",
								type: "input",
								options: [],
								answer: "14",
							},
						],
					},
					{
						id: "bm_rc18",
						title: "Нахождение длины катета",
						question:
							"В прямоугольном треугольнике ABC с прямым углом \\(B\\), если медиана \\(BM = 22,5\\) и катет \\(AB = 36\\), найди катет \\(BC\\).",
						parts: [
							{
								partId: "bm_rc18.1",
								type: "input",
								options: [],
								answer: "27",
							},
						],
					},
					{
						id: "bm_rc19",
						title: "Подобие",
						question:
							"На параллельных прямых лежат отрезки \\(AB\\) и \\(DC\\), а отрезок \\(AC\\) пересекает отрезок \\(BD\\) в точке \\(M\\). Если \\(AB = 15\\), \\(DC = 30\\) и \\(AC = 36\\), найди длину \\(MC\\).",
						parts: [
							{
								partId: "bm_rc19.1",
								type: "input",
								options: [],
								answer: "24",
							},
						],
					},
					{
						id: "bm_rc20",
						title: "Площадь трапеции",
						question:
							"Периметр равнобедренной трапеции с основаниями \\(20\\) и \\(92\\) равен \\(190\\). Определи площадь этой трапеции.",
						parts: [
							{
								partId: "bm_rc20.1",
								type: "input",
								options: [],
								answer: "840",
							},
						],
					},
					{
						id: "bm_rc21",
						title: "Высота ромба",
						question:
							"Высота \\(AH\\) ромба \\(ABCD\\) делит сторону \\(DC\\) на отрезки \\(DH = 24\\) и \\(CH = 1\\). Определи высоту ромба.",
						parts: [
							{
								partId: "bm_rc21.1",
								type: "input",
								options: [],
								answer: "7",
							},
						],
					},
					{
						id: "bm_rc22",
						title: "Нахождение длины стороны",
						question:
							"Большая сторона параллелограмма равна \\(18,03\\) см, а его высоты – \\(5\\) см и \\(9\\) см. Найди значение меньшей стороны (без округления) и площадь (с округлением до целых).",
						parts: [
							{
								partId: "bm_rc22.1",
								question: "Меньшая сторона (без округления):",
								type: "input",
								options: [],
								answer: "90,15",
							},
							{
								partId: "bm_rc22.2",
								question: "Площадь (округлённая):",
								type: "input",
								options: [],
								answer: "10",
							},
						],
					},
					{
						id: "bm_rc23",
						title: "Отношение диагоналей ромба",
						question:
							"Отношение диагоналей ромба равно \\(1:14\\), а их сумма – \\(15\\) см. Чему равны диагонали и площадь ромба? Запиши ответы без единиц измерения.",
						parts: [
							{
								partId: "bm_rc23.1",
								question: "Длина меньшей диагонали:",
								type: "input",
								options: [],
								answer: "1",
							},
							{
								partId: "bm_rc23.2",
								question: "Длина большей диагонали:",
								type: "input",
								options: [],
								answer: "14",
							},
							{
								partId: "bm_rc23.3",
								question: "Площадь ромба:",
								type: "input",
								options: [],
								answer: "7",
							},
						],
					},
					{
						id: "bm_rc24",
						title: "Площадь равнобедренного треугольника",
						question:
							"В равнобедренном треугольнике боковая сторона равна \\(40\\), а основание — \\(42\\). \n1) Выбери формулу площади данного треугольника.\n2) Найди высоту треугольника.\n3) Найди площадь треугольника.",
						parts: [
							{
								partId: "bm_rc24.1",
								question: "Выбери формулу площади:",
								type: "radio",
								options: [
									{
										id: "1",
										text: "\\(S = \\frac{a \\cdot h}{2}\\)",
									},
									{ id: "2", text: "\\(S = a + h\\)" },
									{ id: "3", text: "\\(S = a \\cdot h\\)" },
									{
										id: "4",
										text: "\\(S = \\frac{a^2}{h}\\)",
									},
								],
								answer: "S = (a⋅h)/2",
							},
							{
								partId: "bm_rc24.2",
								prefix: "Найди высоту треугольника: \\(\\sqrt{}\\)",
								type: "input",
								options: [],
								answer: "1159",
							},
							{
								is_horizontal: true,
								partId: "bm_rc24.3",
								prefix: "Найди площадь треугольника:",
								type: "input",
								options: [
									{ id: "1", text: "\\(21\\sqrt{1159}\\)" },
									{ id: "2", text: "\\(\\sqrt{1159}\\)" },
									{ id: "3", text: "\\(21\\sqrt{1160}\\)" },
									{ id: "4", text: "\\(20\\sqrt{1159}\\)" },
								],
								answer: "21",
							},
							{
								prefix: "\\(\\sqrt{}\\)",
								is_horizontal: true,
								partId: "bm_rc24.4",
								type: "input",
								options: [
									{ id: "1", text: "\\(21\\sqrt{1159}\\)" },
									{ id: "2", text: "\\(\\sqrt{1159}\\)" },
									{ id: "3", text: "\\(21\\sqrt{1160}\\)" },
									{ id: "4", text: "\\(20\\sqrt{1159}\\)" },
								],
								answer: "1159",
							},
						],
					},
				],
			},
		],
	},
	{
		topicId: "stereometry",
		title: "Прямые и плоскости в пространстве. Координаты и векторы в пространстве",
		subtopics: [
			{
				subtopicId: "subtopic1",
				title: "Основные понятия стереометрии. Расположение прямых и плоскостей",
				tasks: [
					{
						id: "st1",
						title: "Вопросы по введению в стереометрию",
						question:
							"Закончи предложение, вписав пропущенное слово. Всё множество точек, изучаемое стереометрией, называется",
						parts: [
							{
								partId: "1",
								type: "input",
								options: [],
								answer: "пространством",
							},
						],
					},
					{
						id: "st2",
						title: "Аксиомы стереометрии. Практическая задача",
						question:
							"Точки A, B, C, N не лежат в одной плоскости. Будут ли плоскости, проходящие через точки A, B, C и через точки B, N, A, пересекаться по прямой AB? Что легче отрегулировать, чтобы они не качались: табуретку на трёх ножках или стул на четырёх ножках?",
						parts: [
							{
								partId: "2.1",
								type: "radio",
								options: [
									{ id: "1", text: "Да" },
									{ id: "2", text: "Нет" },
								],
								answer: "Да",
							},
							{
								partId: "2.2",
								type: "input",
								options: [],
								answer: "табуретка",
							},
						],
					},
					{
						id: "st3",
						title: "Число прямых, проходящих через данную точку",
						question:
							"Сколько прямых, которые не пересекают плоскость α, можно провести в пространстве через точку S, если известно, что S ∉ α?",
						parts: [
							{
								partId: "3",
								type: "radio",
								options: [
									{ id: "1", text: "Одну" },
									{ id: "2", text: "Три" },
									{ id: "3", text: "Ни одной" },
									{
										id: "4",
										text: "Бесконечное множество",
									},
									{ id: "5", text: "Две" },
								],
								answer: "Бесконечное множество",
							},
						],
					},
					{
						id: "st4",
						title: "Взаимное расположение рёбер куба",
						images: ["st4.png"],
						question:
							"Дан куб ABCDA1B1C1D1. Определи взаимное расположение данных прямых: AD и CC1 (впиши нужное слово: параллельны, пересекающиеся, скрещивающиеся).",
						parts: [
							{
								partId: "4",
								type: "input",
								options: [],
								answer: "скрещивающиеся",
							},
						],
					},
					{
						id: "st5",
						title: "Построение рисунка с данным расположением прямых",
						question:
							"Прямые OB и CD параллельны, прямые OA и CD скрещивающиеся. Найти угол между прямыми OA и CD, если ∠AOB = 40°.",
						parts: [
							{
								partId: "5",
								type: "input",
								options: [],
								answer: "40",
							},
						],
					},
					{
						id: "st6",
						title: "Вопросы по основным понятиям стереометрии",
						question:
							"Закончи предложение, выбрав подходящий вариант ответа. В стереометрии основными фигурами являются…",
						parts: [
							{
								partId: "6",
								type: "radio",
								options: [
									{
										id: "1",
										text: "точка, прямая и плоскость",
									},
									{ id: "2", text: "точка и прямая" },
									{
										id: "3",
										text: "точка и плоскость",
									},
									{
										id: "4",
										text: "точка, плоскость и пространство",
									},
								],
								answer: "точка, прямая и плоскость",
							},
						],
					},
					{
						id: "st7",
						title: "Вопросы на аксиомы стереометрии",
						question:
							"Закончи предложение, выбрав правильный вариант ответа. Если две плоскости пересекаются, то они делят пространство на…",
						parts: [
							{
								partId: "7",
								type: "radio",
								options: [
									{ id: "1", text: "три части" },
									{ id: "2", text: "две части" },
									{ id: "3", text: "шесть частей" },
									{ id: "4", text: "четыре части" },
								],
								answer: "четыре части",
							},
						],
					},
					{
						id: "st8",
						title: "Три точки в плоскости",
						question:
							"Ответьте на три вопроса:<br/>1) Верно ли, что только 3 вершины — B, A, D — параллелограмма ABCD находятся в одной плоскости?<br/>2) Верно ли, что через 3 точки, которые не находятся на одной прямой, проходит плоскость, и только одна?<br/>3) Четыре точки — B, C, A, D — не находятся в одной плоскости. Верно ли, что любые три точки из данных четырёх не находятся на одной прямой?",
						parts: [
							{
								partId: "8.1",
								type: "radio",
								options: [
									{ id: "1", text: "Да" },
									{ id: "2", text: "Нет" },
								],
								answer: "Нет",
							},
							{
								partId: "8.2",
								type: "radio",
								options: [
									{ id: "1", text: "Да" },
									{ id: "2", text: "Нет" },
								],
								answer: "Нет",
							},
							{
								partId: "8.3",
								type: "radio",
								options: [
									{ id: "1", text: "Да" },
									{ id: "2", text: "Нет" },
								],
								answer: "Нет",
							},
						],
					},
					{
						id: "st9",
						title: "Произведение иррациональных чисел",
						question:
							"Ответьте на три вопроса:<br/>1) Даны 2 различные прямые — b и c, пересекающиеся в точке C. Верно ли, что все прямые, пересекающие данные две прямые и не проходящие через точку C, находятся в одной плоскости?<br/>2) Возможно ли, что две различные плоскости имеют только одну общую прямую?<br/>3) Две плоскости — α и β — пересекаются по прямой m. Прямая a находится в плоскости α, а прямая b — в плоскости β. Пересекаются ли прямые a и b так, что их точка пересечения принадлежит прямой m?",
						parts: [
							{
								partId: "9.1",
								type: "radio",
								options: [
									{ id: "1", text: "Нет" },
									{ id: "2", text: "Да" },
								],
								answer: "Да",
							},
							{
								partId: "9.2",
								type: "radio",
								options: [
									{ id: "1", text: "Нет" },
									{ id: "2", text: "Да" },
								],
								answer: "Да",
							},
							{
								partId: "9.3",
								type: "radio",
								options: [
									{ id: "1", text: "Да" },
									{ id: "2", text: "Нет" },
								],
								answer: "Да",
							},
						],
					},
					{
						id: "st10",
						title: "Взаимное расположение прямых и плоскостей в пирамиде",
						question:
							"Правильная пирамида SABCD пересечена плоскостью KLNM, параллельной основанию. Ответь на вопросы:",
						parts: [
							{
								partId: "10.1",
								question: "Как расположены прямые BS и CS?",
								type: "radio",
								options: [
									{ id: "1", text: "пересекаются" },
									{ id: "2", text: "параллельны" },
									{ id: "3", text: "скрещиваются" },
								],
								answer: "пересекаются",
							},
							{
								partId: "10.2",
								question: "Как расположены прямые AD и BC?",
								type: "radio",
								options: [
									{ id: "1", text: "пересекаются" },
									{ id: "2", text: "параллельны" },
									{ id: "3", text: "скрещиваются" },
								],
								answer: "параллельны",
							},
							{
								partId: "10.3",
								question: "Как расположены прямые CS и KL?",
								type: "radio",
								options: [
									{ id: "1", text: "пересекаются" },
									{ id: "2", text: "параллельны" },
									{ id: "3", text: "скрещиваются" },
								],
								answer: "скрещиваются",
							},
							{
								partId: "10.4",
								question: "Как расположены прямые BS и KL?",
								type: "radio",
								options: [
									{ id: "1", text: "пересекаются" },
									{ id: "2", text: "параллельны" },
									{ id: "3", text: "скрещиваются" },
								],
								answer: "пересекаются",
							},
							{
								partId: "10.5",
								question: "Как расположены прямые AD и KL?",
								type: "radio",
								options: [
									{ id: "1", text: "пересекаются" },
									{ id: "2", text: "параллельны" },
									{ id: "3", text: "скрещиваются" },
								],
								answer: "параллельны",
							},
						],
					},
					{
						id: "st11",
						title: "Взаимное расположение прямых",
						images: ["st11.png"],
						question:
							"В плоскости лежит треугольник ABC, а точка D не находится в этой плоскости. Точки M, N и K — серединные точки отрезков DA, DB и DC. Определи взаимное расположение прямых MK и MN.",
						parts: [
							{
								partId: "11",
								type: "radio",
								options: [
									{ id: "1", text: "пересекающиеся" },
									{ id: "2", text: "параллельные" },
									{ id: "3", text: "скрещивающиеся" },
								],
								answer: "пересекающиеся",
							},
						],
					},
					{
						id: "st12",
						title: "Квадрат и прямая вне плоскости квадрата",
						images: ["st12.png"],
						question:
							"Прямая EF не лежит в плоскости квадрата ABCD, но параллельна стороне квадрата BC. Какой угол образуют прямые EF и AC?",
						parts: [
							{
								partId: "12",
								type: "radio",
								options: [
									{ id: "1", text: "45" },
									{ id: "2", text: "90" },
									{ id: "3", text: "30" },
									{ id: "4", text: "60" },
								],
								answer: "45",
							},
						],
					},
					{
						id: "st13",
						title: "Взаимное расположение прямых в призме шестиугольника",
						question:
							"Определи взаимное расположение прямых в правильной шестиугольной призме.",
						images: ["st13.png"],
						parts: [
							{
								partId: "13.a",
								question: "Как расположены прямые AA1 и DD1?",
								type: "radio",
								options: [
									{ id: "1", text: "параллельны" },
									{ id: "2", text: "пересекающиеся" },
									{ id: "3", text: "скрещивающиеся" },
								],
								answer: "параллельны",
							},
							{
								partId: "13.b",
								question: "Как расположены прямые FC1 и AC1?",
								type: "radio",
								options: [
									{ id: "1", text: "параллельны" },
									{ id: "2", text: "пересекающиеся" },
									{ id: "3", text: "скрещивающиеся" },
								],
								answer: "пересекающиеся",
							},
							{
								partId: "13.c",
								question: "Как расположены прямые FE и CD?",
								type: "radio",
								options: [
									{ id: "1", text: "параллельны" },
									{ id: "2", text: "пересекающиеся" },
									{ id: "3", text: "скрещивающиеся" },
								],
								answer: "пересекающиеся",
							},
						],
					},
				],
			},
			{
				subtopicId: "st_pp",
				title: "Параллельность прямых, прямой и плоскости, плоскостей",
				tasks: [
					{
						id: "st_pp1",
						title: "Взаимное расположение прямой и плоскости в пространстве",
						images: ["st_pp1.png"],
						question:
							"Определи взаимное расположение данной прямой и плоскости для следующих случаев:",
						parts: [
							{
								partId: "st_pp1.1",
								question: "Прямая AA1 и плоскость (BCD):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая пересекает плоскость",
							},
							{
								partId: "st_pp1.2",
								question: "Прямая BC и плоскость (A1B1C1):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая параллельна плоскости",
							},
							{
								partId: "st_pp1.3",
								question: "Прямая CC1 и плоскость (CDD1):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая находится в плоскости",
							},
							{
								partId: "st_pp1.4",
								question: "Прямая CB1 и плоскость (DD1C):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая пересекает плоскость",
							},
							{
								partId: "st_pp1.5",
								question: "Прямая AB1 и плоскость (A1B1B):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая находится в плоскости",
							},
						],
					},
					{
						id: "st_pp2",
						title: "Прямая и плоскость",
						images: ["st_pp2.png"],
						question:
							"Основание AB трапеции ABCD лежит в плоскости α, а основание CD не лежит в этой плоскости. Дополни предложения:",
						parts: [
							{
								partId: "st_pp2.1",
								question:
									"Так как прямая DB имеет общую точку с плоскостью, то эта прямая ( ) α:",
								type: "radio",
								options: [
									{
										id: "1",
										text: "пересекается с плоскостью",
									},
									{ id: "2", text: "параллельна плоскости" },
									{ id: "3", text: "находится в плоскости" },
								],
								answer: "пересекается с плоскостью",
							},
							{
								partId: "st_pp2.2",
								question:
									"Средняя линия EF трапеции, будучи параллельной основаниям, ( ) α:",
								type: "radio",
								options: [
									{
										id: "1",
										text: "пересекается с плоскостью",
									},
									{ id: "2", text: "параллельна плоскости" },
									{ id: "3", text: "находится в плоскости" },
								],
								answer: "параллельна плоскости",
							},
						],
					},
					{
						id: "st_pp3",
						title: "Расположение плоскостей",
						images: ["st_pp3.png"],
						question:
							"На рисунке изображён куб. Выполни следующие задания:",
						parts: [
							{
								partId: "st_pp3.1",
								question:
									"Определи взаимное расположение плоскостей ABC и A1B1C1:",
								type: "radio",
								options: [
									{ id: "1", text: "скрещивающиеся" },
									{ id: "2", text: "параллельные" },
								],
								answer: "параллельные",
							},
							{
								partId: "st_pp3.2",
								question:
									"Назови плоскость, параллельную A1B1C1:",
								type: "radio",
								options: [
									{ id: "1", text: "A1B1C1" },
									{ id: "2", text: "A1D1D" },
									{ id: "3", text: "DD1C1" },
									{ id: "4", text: "ABC" },
									{ id: "5", text: "BB1C1" },
								],
								answer: "ABC",
							},
						],
					},
					{
						id: "st_pp4",
						title: "Признак параллельности плоскостей",
						question: "Выполни задание:",
						parts: [
							{
								partId: "st_pp4.1",
								question:
									"Можно ли провести параллельные плоскости через две скрещивающиеся прямые c и d?",
								type: "radio",
								options: [
									{ id: "1", text: "Нет" },
									{ id: "2", text: "Да" },
								],
								answer: "Да",
							},
							{
								partId: "st_pp4.2",
								question:
									"Боковые стороны CD и AB трапеции DCBA параллельны плоскости α. Какими будут плоскость α и плоскость трапеции?",
								type: "radio",
								options: [
									{ id: "1", text: "Параллельны" },
									{ id: "2", text: "Пересекаются" },
									{ id: "3", text: "Скрещиваются" },
								],
								answer: "Параллельны",
							},
						],
					},
					{
						id: "st_pp5",
						title: "Взаимное расположение прямых в тетраэдре",
						question:
							"В тетраэдре KLMN найди скрещивающиеся пары рёбер и сумму всех рёбер правильного тетраэдра с ребром 5 см.",
						parts: [
							{
								partId: "st_pp5.a",
								question:
									"С ребром LM, какая пара рёбер скрещивается?",
								type: "radio",
								options: [
									{ id: "1", text: "KM" },
									{ id: "2", text: "MN" },
									{ id: "3", text: "KN" },
									{ id: "4", text: "KL" },
									{ id: "5", text: "LN" },
								],
								answer: "KN",
							},
							{
								partId: "st_pp5.b",
								question:
									"С ребром KL, какая пара рёбер скрещивается?",
								type: "radio",
								options: [
									{ id: "1", text: "LM" },
									{ id: "2", text: "MN" },
									{ id: "3", text: "KM" },
									{ id: "4", text: "LN" },
									{ id: "5", text: "KN" },
								],
								answer: "MN",
							},
							{
								partId: "st_pp5.c",
								question:
									"С ребром LN, какая пара рёбер скрещивается?",
								type: "radio",
								options: [
									{ id: "1", text: "KN" },
									{ id: "2", text: "KM" },
									{ id: "3", text: "MN" },
									{ id: "4", text: "KL" },
									{ id: "5", text: "LM" },
								],
								answer: "KM",
							},
							{
								partId: "st_pp5.d",
								question:
									"Какова сумма всех рёбер правильного тетраэдра с ребром 5 см?",
								type: "radio",
								options: [
									{ id: "1", text: "30" },
									{ id: "2", text: "25" },
									{ id: "3", text: "20" },
									{ id: "4", text: "35" },
								],
								answer: "30",
							},
						],
					},
					{
						id: "st_pp6",
						title: "Взаимное расположение прямых в параллелепипеде",
						images: ["st_pp6.png"],
						question:
							"На рёбрах BB1 и AA1 параллелепипеда ABCDA1B1C1D1 даны точки K и L. Прямая KL пересекает рёбра в верхнем и нижнем основаниях. Выбери соответствующие рёбра:",
						parts: [
							{
								partId: "st_pp6.1",
								question: "В верхнем основании:",
								type: "radio",
								options: [
									{ id: "1", text: "D1A1" },
									{ id: "2", text: "C1D1" },
									{ id: "3", text: "B1C1" },
									{ id: "4", text: "A1B1" },
								],
								answer: "A1B1",
							},
							{
								partId: "st_pp6.2",
								question: "В нижнем основании:",
								type: "radio",
								options: [
									{ id: "1", text: "DA" },
									{ id: "2", text: "AB" },
									{ id: "3", text: "CD" },
									{ id: "4", text: "BC" },
								],
								answer: "BC",
							},
						],
					},
					{
						id: "st_pp7",
						title: "Понятие сечения",
						images: ["st_pp7.png"],
						question:
							"Определи, являются ли сечения параллелепипеда на приведённых рисунках:",
						parts: [
							{
								partId: "st_pp7.1",
								question: "Рисунок 1:",
								type: "radio",
								options: [
									{ id: "1", text: "да" },
									{ id: "2", text: "нет" },
								],
								answer: "да",
							},
							{
								partId: "st_pp7.2",
								question: "Рисунок 2:",
								type: "radio",
								options: [
									{ id: "1", text: "да" },
									{ id: "2", text: "нет" },
								],
								answer: "да",
							},
							{
								partId: "st_pp7.3",
								question: "Рисунок 3:",
								type: "radio",
								options: [
									{ id: "1", text: "да" },
									{ id: "2", text: "нет" },
								],
								answer: "нет",
							},
							{
								partId: "st_pp7.4",
								question: "Рисунок 4:",
								type: "radio",
								options: [
									{ id: "1", text: "да" },
									{ id: "2", text: "нет" },
								],
								answer: "нет",
							},
						],
					},
					{
						id: "st_pp8",
						title: "Параллельность прямой и плоскости",
						images: ["st_pp8.png"],
						question:
							"Дан треугольник ABC, на сторонах которого отложены точки D и E так, что DE = 1 см и AD/BD = 7/4. Через точки B и C проведена плоскость α, параллельная отрезку DE. Чему равна сторона BC?",
						parts: [
							{
								partId: "st_pp8.1",
								type: "input",
								options: [],
								answer: "11/7",
							},
						],
					},
					{
						id: "st_pp9",
						title: "Взаимное расположение прямых и плоскостей в кубе и сечении куба",
						question:
							"Определи взаимное расположение данной прямой и плоскости:",
						parts: [
							{
								partId: "st_pp9.1",
								question: "Прямая DD1 и плоскость (ABC):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая пересекает плоскость",
							},
							{
								partId: "st_pp9.2",
								question: "Прямая LP и плоскость (ABA1):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая параллельна плоскости",
							},
							{
								partId: "st_pp9.3",
								question: "Прямая XY и плоскость (ABC):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая пересекает плоскость",
							},
							{
								partId: "st_pp9.4",
								question: "Прямая DC и плоскость (XYZ):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая пересекает плоскость",
							},
							{
								partId: "st_pp9.5",
								question: "Прямая MS и плоскость (ABB1):",
								type: "radio",
								options: [
									{
										id: "1",
										text: "прямая пересекает плоскость",
									},
									{
										id: "2",
										text: "прямая параллельна плоскости",
									},
									{
										id: "3",
										text: "прямая находится в плоскости",
									},
								],
								answer: "прямая находится в плоскости",
							},
						],
					},
					{
						id: "st_pp10",
						title: "Длина отрезка, параллельность прямых в пространстве",
						images: ["st_pp10.png"],
						question:
							"Точка C принадлежит отрезку AB. Через точку A проведена плоскость, через точки B и C проведены параллельные прямые, которые пересекают эту плоскость в точках B1 и C1. Вычисли длину отрезка CC1, если AC:BC = 4:7 и BB1 = 2.",
						parts: [
							{
								partId: "st_pp10.1",
								type: "input",
								options: [],
								answer: "8/11",
							},
						],
					},
					{
						id: "st_pp11",
						title: "Периметр пространственного четырёхугольника",
						images: ["st_pp11.png"],
						question:
							"Точки M, N, P и Q – середины отрезков AD, CD, BC и AB. Вычисли периметр четырёхугольника MNPQ, если AC = 19 см и BD = 19 см.",
						parts: [
							{
								partId: "st_pp11.1",
								type: "input",
								options: [],
								answer: "38",
							},
						],
					},
					{
						id: "st_pp12",
						title: "Площадь треугольника, параллельность прямых в пространстве",
						images: ["st_pp12.png"],
						question:
							"Точка O не находится в плоскости треугольника ABC. Точки D, E, F – середины отрезков AO, BO, CO. Вычисли площадь треугольника DEF, если площадь треугольника ABC равна 152 см².",
						parts: [
							{
								partId: "st_pp12.1",
								type: "input",
								options: [],
								answer: "38",
							},
						],
					},
					{
						id: "st_pp13",
						title: "Прямая, параллельная плоскости трапеции",
						images: ["st_pp13.png"],
						question:
							"Трапеция ABCD с основанием BC = 122,5 см лежит в плоскости α. Точка M не принадлежит плоскости трапеции. Точка K делит отрезок MB в отношении 3:4. Плоскость ADK пересекает отрезок MC в точке N. Выполни следующие задания:",
						parts: [
							{
								partId: "st_pp13.1",
								question:
									"Назови пучок параллельных прямых (выбери правильный вариант):",
								type: "radio",
								options: [
									{ id: "1", text: "AD ∥ BC ∥ KN" },
									{ id: "2", text: "AD ∥ BC ∥ KM" },
									{ id: "3", text: "AB ∥ CD ∥ KN" },
									{ id: "4", text: "AB ∥ BC ∥ KN" },
								],
								answer: "AD ∥ BC ∥ KN",
							},
							{
								partId: "st_pp13.2",
								question:
									"Назови подобные треугольники (укажи вершины второго треугольника в порядке, соответствующем первому): ΔKMN ~ Δ( )",
								type: "input",
								options: [],
								answer: "BMC",
							},
							{
								partId: "st_pp13.3",
								question: "Определи длину отрезка KN:",
								type: "input",
								options: [],
								answer: "52,5",
							},
						],
					},
					{
						id: "st_pp14",
						title: "Угол между прямыми в параллельных плоскостях",
						images: ["st_pp14.png"],
						question:
							"Даны три параллельные плоскости α, β и γ, в каждой из которых проведены прямые a, b и c, не параллельные между собой. Угол между прямыми a и b равен 68°, а между b и c — 67°. Определи наименьший возможный угол между прямыми a и c.",
						parts: [
							{
								partId: "st_pp14.1",
								type: "input",
								options: [],
								answer: "1",
							},
						],
					},
					{
						id: "st_pp15",
						title: "Параллельные плоскости, пересекающие стороны угла",
						images: ["st_pp15.png"],
						question:
							"Дан угол AOD и две параллельные плоскости α и β. Плоскость α пересекает стороны угла OA и OD в точках A и D, а плоскость β – в точках B и C. Дано: OB = 3, AB = 7, BC = 2, CD = 2. Найди:\n1) AD = ( )/( )\n2) OD = ( )/( )\n(Дроби должны быть сокращены.)",
						parts: [
							{
								partId: "st_pp15.1",
								question:
									"Выбери числитель для дроби, определяющей AD:",
								type: "input",
								options: [],
								answer: "20",
							},
							{
								partId: "st_pp15.2",
								question:
									"Выбери знаменатель для дроби, определяющей AD:",
								type: "input",
								options: [],
								answer: "3",
							},
							{
								partId: "st_pp15.3",
								question:
									"Выбери числитель для дроби, определяющей OD:",
								type: "input",
								options: [],
								answer: "20",
							},
							{
								partId: "st_pp15.4",
								question:
									"Выбери знаменатель для дроби, определяющей OD:",
								type: "input",
								options: [],
								answer: "7",
							},
						],
					},
					{
						id: "st_pp16",
						title: "Взаимное расположение прямых и плоскостей",
						question: "Выбери правильный ответ:",
						parts: [
							{
								partId: "st_pp16.1",
								question:
									"1.1. Прямая, находящаяся в одной плоскости, но не в другой, означает, что плоскости ( ):",
								type: "radio",
								options: [
									{ id: "1", text: "пересекаются" },
									{ id: "2", text: "параллельны" },
								],
								answer: "пересекаются",
							},
							{
								partId: "st_pp16.2",
								question:
									"1.2. Для каждой прямой из одной плоскости можно найти параллельную прямую в другой, значит плоскости ( ):",
								type: "radio",
								options: [
									{ id: "1", text: "параллельны" },
									{ id: "2", text: "пересекаются" },
								],
								answer: "параллельны",
							},
							{
								partId: "st_pp16.3",
								question:
									"2.1. Две прямые, не находящиеся в одной плоскости, называются:",
								type: "radio",
								options: [
									{ id: "1", text: "скрещивающимися" },
									{ id: "2", text: "параллельными" },
								],
								answer: "скрещиваются",
							},
							{
								partId: "st_pp16.4",
								question:
									"2.2. Две прямые, находящиеся в одной плоскости, могут быть:",
								type: "radio",
								options: [
									{ id: "1", text: "параллельными" },
									{ id: "2", text: "пересекающимися" },
									{
										id: "3",
										text: "либо параллельными, либо пересекающимися",
									},
								],
								answer: "либо параллельными, либо пересекающимися",
							},
						],
					},
					{
						id: "st_pp17",
						title: "Свойства параллельных плоскостей",
						images: ["st_pp17.png"],
						question:
							"Через точку O между параллельными плоскостями α и β проведены прямые c и d, пересекающие плоскости так, что точки A и B лежат в плоскости α, а C и D – в плоскости β. Если AB = 17 см, DO = 27 см и AC = 3⋅AO, вычисли BD и CD.",
						parts: [
							{
								partId: "st_pp17.1",
								type: "input",
								options: [],
								answer: "40,5",
							},
							{
								partId: "st_pp17.2",
								type: "input",
								options: [],
								answer: "34",
							},
						],
					},
					{
						id: "st_pp18",
						title: "Параллельные плоскости",
						images: ["st_pp18.png"],
						question:
							"Стороны угла N пересекают параллельные плоскости β и α в точках C, D и A, B соответственно. Вычисли длину отрезка AB, если NA = 13 см, NC = 20 см и CD = 56 см.",
						parts: [
							{
								partId: "st_pp18.1",
								type: "input",
								options: [],
								answer: "36,4",
							},
						],
					},
					{
						id: "st_pp19",
						title: "Сечение параллельных плоскостей",
						images: ["st_pp19.png"],
						question:
							"Дан параллелепипед ABCDA1B1C1D1. На рёбрах B1C1, AD и A1D1 расположены точки M, N и L. Объясни шаги построения сечения параллелепипеда плоскостью, проходящей через эти точки:",
						parts: [
							{
								partId: "st_pp19.1",
								question:
									"Если плоскости имеют хотя бы одну общую точку, то они ( ):",
								type: "radio",
								options: [
									{ id: "1", text: "пересекаются" },
									{ id: "2", text: "параллельны" },
									{ id: "3", text: "скрещиваются" },
								],
								answer: "пересекаются",
							},
							{
								partId: "st_pp19.2",
								question:
									"В данной ситуации плоскость сечения будет пересекать сколько граней параллелепипеда?",
								type: "radio",
								options: [
									{ id: "1", text: "3" },
									{ id: "2", text: "4" },
									{ id: "3", text: "5" },
									{ id: "4", text: "6" },
								],
								answer: "4",
							},
							{
								partId: "st_pp19.3",
								question:
									"Если две параллельные плоскости пересекает третья, то линии пересечения ( ):",
								type: "radio",
								options: [
									{ id: "1", text: "параллельны" },
									{ id: "2", text: "пересекаются" },
									{ id: "3", text: "скрещиваются" },
								],
								answer: "параллельны",
							},
							{
								partId: "st_pp19.4",
								question:
									"В противоположных гранях через данные точки проводим ( ) линии сечения:",
								type: "radio",
								options: [
									{ id: "1", text: "параллельные" },
									{ id: "2", text: "пересекающиеся" },
									{ id: "3", text: "разные" },
								],
								answer: "параллельные",
							},
							{
								partId: "st_pp19.5",
								question:
									"Искомое сечение параллелепипеда – (назови вид фигуры сечения):",
								type: "radio",
								options: [
									{ id: "1", text: "параллелограмм" },
									{ id: "2", text: "трапеция" },
									{ id: "3", text: "прямоугольник" },
									{ id: "4", text: "квадрат" },
								],
								answer: "параллелограмм",
							},
						],
					},
					{
						id: "st_pp21",
						title: "Свойства рёбер параллелепипеда",
						images: ["st_pp21.png"],
						question:
							"Сумма всех рёбер параллелепипеда ABCDA1B1C1D1 равна 120 см. Определи длины рёбер AB, BC и BB1, если AB/BC = 4/5 и BC/BB1 = 5/6.",
						parts: [
							{
								partId: "st_pp21.1",
								question: "AB =",
								type: "input",
								options: [],
								answer: "8",
							},
							{
								partId: "st_pp21.2",
								question: "BC =",
								type: "input",
								options: [],
								answer: "10",
							},
							{
								partId: "st_pp21.3",
								question: "BB1 =",
								type: "input",
								options: [],
								answer: "12",
							},
						],
					},
					{
						id: "st_pp22",
						title: "Поверхность тетраэдра",
						question:
							"Дан тетраэдр DABC, у которого три ребра с общей вершиной D перпендикулярны. Назовём грани между этими рёбрами боковыми. Определи общую площадь боковых граней, если DA = 6, DB = 5, DC = 8.",
						parts: [
							{
								partId: "st_pp22.1",
								type: "input",
								options: [],
								answer: "8",
							},
						],
					},
					{
						id: "st_pp23",
						title: "Пересечение прямых в тетраэдре",
						images: ["st_pp23.png"],
						question:
							"На рёбрах DC и DB тетраэдра DABC находятся точки M и N. Ответь на следующие вопросы:",
						parts: [
							{
								partId: "st_pp23.1",
								question:
									"В какой плоскости находится прямая MN?",
								type: "radio",
								options: [
									{ id: "1", text: "DAC" },
									{ id: "2", text: "DBC" },
									{ id: "3", text: "DAB" },
								],
								answer: "DBC",
							},
							{
								partId: "st_pp23.2",
								question:
									"С какой из прямых в основании тетраэдра пересекается прямая MN?",
								type: "radio",
								options: [
									{ id: "1", text: "AC" },
									{ id: "2", text: "AB" },
									{ id: "3", text: "BC" },
								],
								answer: "BC",
							},
						],
					},
				],
			},
			{
				subtopicId: "stp_perp",
				title: "Перпендикулярность прямых, прямой и плоскости, плоскостей",
				tasks: [
					{
						id: "stp1",
						images: ["stp1.png"],
						title: "Применение признака перпендикулярности прямой и плоскости",
						question:
							"Дан куб. Определи, какая из названных прямых перпендикулярна данной плоскости.",
						parts: [
							{
								partId: "stp1.1",
								question:
									"Плоскости (ABB1) перпендикулярна прямая:",
								type: "radio",
								options: [
									{ id: "1", text: "B1C1" },
									{ id: "2", text: "AA1" },
									{ id: "3", text: "AB" },
									{ id: "4", text: "BD" },
									{ id: "5", text: "AC" },
									{ id: "6", text: "AC1" },
									{ id: "7", text: "BD1" },
								],
								answer: "B1C1",
							},
							{
								partId: "stp1.2",
								question:
									"Плоскости (BDD1) перпендикулярна прямая:",
								type: "radio",
								options: [
									{ id: "1", text: "AB" },
									{ id: "2", text: "B1C1" },
									{ id: "3", text: "AC" },
									{ id: "4", text: "AC1" },
									{ id: "5", text: "AA1" },
									{ id: "6", text: "BD" },
									{ id: "7", text: "BD1" },
								],
								answer: "AC",
							},
						],
					},
					{
						id: "stp2",
						title: "Две прямые, перпендикулярные одной плоскости",
						images: ["stp2.png"],
						question:
							"Прямая PQ параллельна плоскости α. От точек P и Q к плоскости проведены прямые PP1⊥α и QQ1⊥α. Известно, что PQ = PP1 = 5,2 см. Определи вид четырёхугольника PP1Q1Q и рассчитай его периметр.",
						parts: [
							{
								partId: "stp2.1",
								question: "PP1Q1Q – это:",
								type: "radio",
								options: [
									{ id: "1", text: "Квадрат" },
									{ id: "2", text: "Прямоугольник" },
									{ id: "3", text: "Ромб" },
									{ id: "4", text: "Параллелограмм" },
								],
								answer: "Квадрат",
							},
							{
								partId: "stp2.2",
								question:
									"Периметр четырёхугольника равен (см):",
								type: "input",
								options: [],
								answer: "20,8",
							},
						],
					},
					{
						id: "stp3",
						title: "Перпендикулярность прямой к плоскости",
						images: ["stp3.png"],
						question:
							"Проведённая к плоскости перпендикулярная прямая пересекает плоскость в точке O. На этой прямой отложен отрезок AD, причем O – его середина. Определи вид треугольника ABD и его периметр, если AD = 18 см, а OB = 3 см (округли до десятых).",
						parts: [
							{
								partId: "stp3.1",
								question: "Треугольник ABD является:",
								type: "radio",
								options: [
									{ id: "1", text: "равнобедренным" },
									{ id: "2", text: "равносторонним" },
									{ id: "3", text: "разносторонним" },
								],
								answer: "равнобедренным",
							},
							{
								partId: "stp3.2",
								question: "Периметр треугольника ABD (см):",
								type: "input",
								options: [],
								answer: "37",
							},
						],
					},
					{
						id: "stp4",
						title: "Расстояние от точки до плоскости",
						question:
							"К плоскости α проведена наклонная длиной 25 см, проекция которой равна 15 см. На каком расстоянии от плоскости находится точка, из которой проведена наклонная?",
						parts: [
							{
								partId: "stp4.1",
								type: "input",
								options: [],
								answer: "20",
							},
						],
					},
					{
						id: "stp5",
						title: "Проекция наклонной",
						question:
							"Прямая a пересекает плоскость β в точке C и образует с плоскостью угол 30°. Точка P принадлежит a, а точка R – её проекция на плоскость β. Если PC = 16 см, то PR равна:",
						parts: [
							{
								partId: "stp5.1",
								type: "input",
								options: [],
								answer: "8",
							},
						],
					},
					{
						id: "stp6",
						title: "Прямые, перпендикулярные плоскостям",
						images: ["stp6.png"],
						question:
							"Прямые KN и LM образуют прямой угол с плоскостью α. Если KN = 41,5 см, LM = 17,5 см и NM = 7 см, то найдите длину отрезка KL:",
						parts: [
							{
								partId: "stp6.1",
								type: "input",
								options: [],
								answer: "25",
							},
						],
					},
					{
						id: "stp7",
						title: "Расстояние от точки до плоскости",
						question:
							"К плоскости α проведена наклонная AB (при этом A принадлежит α). Если длина наклонной равна 20 см, а угол между наклонной и плоскостью – 45°, то расстояние от точки B до плоскости равно:",
						parts: [
							{
								partId: "stp7.1",
								question:
									"Расстояние от точки B до плоскости (см):",
								type: "radio",
								options: [
									{ id: "1", text: "10√2" },
									{ id: "2", text: "10" },
									{ id: "3", text: "20" },
									{ id: "4", text: "5√2" },
								],
								answer: "10√2",
							},
						],
					},
					{
						id: "stp8",
						title: "Перпендикуляр к плоскости квадрата",
						images: ["stp8.png"],
						question:
							"К плоскости квадрата ABCD (сторона 3 см) через точку O (центр квадрата) проведена прямая, перпендикулярная плоскости. На этой прямой отложен отрезок OK длиной 6 см. Найдите расстояние от точки K до вершин квадрата.",
						parts: [
							{
								partId: "stp8.1",
								question: "KA (см):",
								type: "radio",
								options: [
									{ id: "1", text: "6,4" },
									{ id: "2", text: "5,0" },
									{ id: "3", text: "7,0" },
									{ id: "4", text: "8,0" },
								],
								answer: "6,4",
							},
							{
								partId: "stp8.2",
								question: "KB (см):",
								type: "radio",
								options: [
									{ id: "1", text: "6,4" },
									{ id: "2", text: "5,0" },
									{ id: "3", text: "7,0" },
									{ id: "4", text: "8,0" },
								],
								answer: "6,4",
							},
							{
								partId: "stp8.3",
								question: "KC (см):",
								type: "radio",
								options: [
									{ id: "1", text: "6,4" },
									{ id: "2", text: "5,0" },
									{ id: "3", text: "7,0" },
									{ id: "4", text: "8,0" },
								],
								answer: "6,4",
							},
							{
								partId: "stp8.4",
								question: "KD (см):",
								type: "radio",
								options: [
									{ id: "1", text: "6,4" },
									{ id: "2", text: "5,0" },
									{ id: "3", text: "7,0" },
									{ id: "4", text: "8,0" },
								],
								answer: "6,4",
							},
						],
					},
					{
						id: "stp9",
						title: "Наклонные",
						images: ["stp9.png"],
						question:
							"Наклонная AD с плоскостью α образует угол 30°, а наклонная DC – угол 45° с плоскостью. Если длина перпендикуляра DB равна 11 см, то:",
						parts: [
							{
								partId: "stp9.1",
								question: "Длина наклонной AD (см):",
								type: "radio",
								options: [
									{ id: "1", text: "22" },
									{ id: "2", text: "5,5" },
									{ id: "3", text: "112–√" },
									{ id: "4", text: "113–√" },
								],
								answer: "22",
							},
							{
								partId: "stp9.2",
								question: "Длина наклонной DC (см):",
								type: "radio",
								options: [
									{ id: "1", text: "11√2" },
									{ id: "2", text: "5,5" },
									{ id: "3", text: "22" },
									{ id: "4", text: "112–√" },
								],
								answer: "11√2",
							},
						],
					},
					{
						id: "stp10",
						title: "Доказательство перпендикулярности скрещивающихся прямых",
						images: ["stp10.png"],
						question:
							"В тетраэдре DABC ребро DA перпендикулярно ребру BC. На рёбрах DC и DB отмечены серединные точки K и L. Докажи, что DA перпендикулярно KL.",
						parts: [
							{
								partId: "stp10.1",
								question:
									"Так как K и L – серединные точки, KL является:",
								type: "radio",
								options: [
									{ id: "1", text: "средней линией" },
									{ id: "2", text: "биссектрисой" },
									{ id: "3", text: "медианой" },
									{ id: "4", text: "высотой" },
								],
								answer: "средней линией",
							},
							{
								partId: "stp10.2",
								question:
									"Средняя линия параллельна какой стороне треугольника?",
								type: "radio",
								options: [
									{ id: "1", text: "параллельна" },
									{ id: "2", text: "пересекается" },
									{ id: "3", text: "скрещивается" },
								],
								answer: "параллельна",
							},
							{
								partId: "stp10.3",
								question:
									"Определи вид рёбер, с которыми сравнивается прямая:",
								type: "radio",
								options: [
									{ id: "1", text: "параллельных" },
									{ id: "2", text: "пересекающихся" },
									{ id: "3", text: "скрещивающихся" },
								],
								answer: "параллельных",
							},
							{
								partId: "stp10.4",
								question:
									"Если DA перпендикулярна одной из этих прямых, то она:",
								type: "radio",
								options: [
									{ id: "1", text: "перпендикулярна" },
									{ id: "2", text: "параллельна" },
									{ id: "3", text: "скрещивается" },
								],
								answer: "перпендикулярна",
							},
						],
					},
					{
						id: "stp11",
						title: "Сравнение проекций наклонных",
						images: ["stp11.png"],
						question:
							"Дано: BD перпендикулярен плоскости α, ∠BAD = 30°, ∠BCD = 45°. Выбери, какая из проекций наклонных на плоскость α является большей.",
						parts: [
							{
								partId: "stp11.1",
								type: "radio",
								options: [
									{ id: "1", text: "BC" },
									{ id: "2", text: "AB" },
									{ id: "3", text: "AD" },
									{ id: "4", text: "DC" },
								],
								answer: "AD",
							},
						],
					},
					{
						id: "stp12",
						title: "Признак перпендикулярности прямой к плоскости",
						images: ["stp12.png"],
						question:
							"В тетраэдре DABC точка M – середина ребра CB, причем AC = AB и DC = DB. Докажи, что прямая, содержащая CB, перпендикулярна плоскости ADM.",
						parts: [
							{
								partId: "stp12.1",
								question: "Треугольник ΔABC является:",
								type: "radio",
								options: [
									{ id: "1", text: "равнобедренным" },
									{ id: "2", text: "равносторонним" },
									{ id: "3", text: "разносторонним" },
								],
								answer: "равнобедренным",
							},
							{
								partId: "stp12.2",
								question: "Треугольник ΔDCB является:",
								type: "radio",
								options: [
									{ id: "1", text: "равнобедренным" },
									{ id: "2", text: "равносторонним" },
									{ id: "3", text: "разносторонним" },
								],
								answer: "равнобедренным",
							},
							{
								partId: "stp12.3",
								question:
									"Какой угол образует медиана с основанием треугольника?",
								type: "radio",
								options: [
									{ id: "1", text: "90" },
									{ id: "2", text: "45" },
									{ id: "3", text: "60" },
									{ id: "4", text: "30" },
								],
								answer: "90",
							},
							{
								partId: "stp12.4",
								question:
									"Если прямая перпендикулярна двум пересекающимся прямым в плоскости, то она:",
								type: "radio",
								options: [
									{
										id: "1",
										text: "перпендикулярна этой плоскости",
									},
									{
										id: "2",
										text: "не обязательно перпендикулярна",
									},
									{
										id: "3",
										text: "параллельна этой плоскости",
									},
								],
								answer: "перпендикулярна этой плоскости",
							},
						],
					},
					{
						id: "stp13",
						title: "Угол между наклонной и плоскостью",
						question:
							"Длина отрезка VB равна √72 м, точка O – пересечение VB с плоскостью, а расстояния от V и B до плоскости равны 5 м и 2 м соответственно. Найди острый угол, который образует VB с плоскостью, и длины отрезков, на которые O делит VB (укажи сначала меньшую длину).",
						parts: [
							{
								partId: "stp13.1",
								question: "Угол между VB и плоскостью (°):",
								type: "radio",
								options: [
									{ id: "1", text: "45" },
									{ id: "2", text: "30" },
									{ id: "3", text: "60" },
									{ id: "4", text: "90" },
								],
								answer: "45",
							},
							{
								partId: "stp13.2",
								question:
									"Меньший отрезок VB, умноженный на √2 (см):",
								type: "radio",
								options: [
									{ id: "1", text: "2√2" },
									{ id: "2", text: "3√2" },
									{ id: "3", text: "4√2" },
									{ id: "4", text: "5√2" },
								],
								answer: "2√2",
							},
							{
								partId: "stp13.3",
								question:
									"Больший отрезок VB, умноженный на √2 (см):",
								type: "radio",
								options: [
									{ id: "1", text: "2√2" },
									{ id: "2", text: "3√2" },
									{ id: "3", text: "4√2" },
									{ id: "4", text: "5√2" },
								],
								answer: "5√2",
							},
						],
					},
					{
						id: "stp14",
						title: "Свойство прямой, перпендикулярной к плоскости",
						images: ["stp14.png"],
						question:
							"В прямоугольном треугольнике ABC с прямым углом при C через вершину C проведён перпендикуляр KC к плоскости. Точка D делит гипотенузу AB пополам. Если AC = 72 мм, BC = 96 мм и KC = 63 мм, то длина отрезка KD равна:",
						parts: [
							{
								partId: "stp14.1",
								type: "radio",
								options: [
									{ id: "1", text: "87" },
									{ id: "2", text: "63" },
									{ id: "3", text: "90" },
									{ id: "4", text: "95" },
								],
								answer: "87",
							},
						],
					},
					{
						id: "stp15",
						title: "Расстояние между концами проекций",
						images: ["stp15.png"],
						question:
							"Проекции наклонных AD и DC на плоскости α равны 10 см и 9 см, а угол между ними – 120°. Найди расстояние между концами этих проекций, а также назови отрезок, который они образуют.",
						parts: [
							{
								partId: "stp15.1",
								question:
									"Расстояние между концами проекций (см):",
								type: "radio",
								options: [
									{ id: "1", text: "271" },
									{ id: "2", text: "250" },
									{ id: "3", text: "300" },
									{ id: "4", text: "200" },
								],
								answer: "271",
							},
							{
								partId: "stp15.2",
								question: "Название отрезка:",
								type: "radio",
								options: [
									{ id: "1", text: "перпендикуляр" },
									{ id: "2", text: "биссектриса" },
									{ id: "3", text: "средняя линия" },
									{ id: "4", text: "диагональ" },
								],
								answer: "перпендикуляр",
							},
						],
					},
					{
						id: "stp16",
						title: "Теорема о трёх перпендикулярах, расстояние от точки до стороны треугольника",
						question:
							"В равнобедренном треугольнике ABE (боковые стороны по 20 см, основание AE = 32 см) к плоскости проведён перпендикуляр CB = 3 см, а также наклонные CA и CE. Найди расстояние от точки C до стороны AE и ответь на дополнительный вопрос.",
						parts: [
							{
								partId: "stp16.1",
								question:
									"Расстояние от точки C до стороны AE (см):",
								type: "radio",
								options: [
									{ id: "1", text: "153" },
									{ id: "2", text: "150" },
									{ id: "3", text: "160" },
									{ id: "4", text: "140" },
								],
								answer: "153",
							},
							{
								partId: "stp16.2",
								question:
									"Если прямая, проведённая через основание наклонной, перпендикулярна наклонной, то она:",
								type: "radio",
								options: [
									{
										id: "1",
										text: "перпендикулярна плоскости",
									},
									{
										id: "2",
										text: "не имеет отношения к плоскости",
									},
									{ id: "3", text: "параллельна плоскости" },
								],
								answer: "перпендикулярна плоскости",
							},
						],
					},
					{
						id: "stp17",
						title: "Теорема о трёх перпендикулярах, прямоугольный треугольник",
						question:
							"В прямоугольном треугольнике MBE (∠M = 90°) с BE = 15 см и ME = 9 см к плоскости проведён перпендикуляр CB = 4 см. Найди расстояние от точки C до стороны ME и ответь на дополнительные вопросы.",
						parts: [
							{
								partId: "stp17.1",
								question:
									"Расстояние от точки C до стороны ME (см):",
								type: "radio",
								options: [
									{ id: "1", text: "160" },
									{ id: "2", text: "150" },
									{ id: "3", text: "140" },
									{ id: "4", text: "170" },
								],
								answer: "160",
							},
							{
								partId: "stp17.2",
								question:
									"Сколько перпендикуляров можно провести из точки к прямой (если точка не принадлежит ей)?",
								type: "radio",
								options: [
									{ id: "1", text: "Один" },
									{ id: "2", text: "Два" },
									{ id: "3", text: "Бесконечное множество" },
									{ id: "4", text: "Ни одного" },
								],
								answer: "Один",
							},
							{
								partId: "stp17.3",
								question:
									"Какие теоремы используются в решении задачи? (выбери все подходящие)",
								type: "checkbox",
								options: [
									{ id: "1", text: "Теорема Пифагора" },
									{
										id: "2",
										text: "Теорема о трёх перпендикулярах",
									},
									{ id: "3", text: "Теорема высоты" },
									{ id: "4", text: "Теорема пирамиды" },
									{ id: "5", text: "Теорема косинусов" },
								],
								answer: [
									"Теорема Пифагора",
									"Теорема о трёх перпендикулярах",
								],
							},
						],
					},
					{
						id: "stp18",
						title: "Доказательство от противного",
						images: ["stp18.png"],
						question:
							"Прямая c перпендикулярна плоскости α и прямой g, которая не лежит в α. Докажи, что прямая g параллельна плоскости α.",
						parts: [
							{
								partId: "stp18.1",
								question:
									"Если прямая не лежит в плоскости, она может быть либо ______, либо ______ плоскости.",
								type: "radio",
								options: [
									{ id: "1", text: "параллельна" },
									{ id: "2", text: "пересекается" },
								],
								answer: "параллельна",
							},
							{
								partId: "stp18.2a",
								question:
									"Допустим, что прямая g не ______ плоскость α.",
								type: "radio",
								options: [
									{ id: "1", text: "пересекается" },
									{ id: "2", text: "параллельна" },
								],
								answer: "пересекается",
							},
							{
								partId: "stp18.2b",
								question: "А ______ плоскость α.",
								type: "radio",
								options: [
									{ id: "1", text: "пересекается" },
									{ id: "2", text: "параллельна" },
								],
								answer: "параллельна",
							},
							{
								partId: "stp18.3",
								question:
									"Если прямая c перпендикулярна плоскости α, то она ______ каждой прямой в этой плоскости.",
								type: "radio",
								options: [
									{ id: "1", text: "перпендикулярна" },
									{ id: "2", text: "параллельна" },
								],
								answer: "перпендикулярна",
							},
							{
								partId: "stp18.4",
								question:
									"Через одну точку к прямой c проведены две ______ прямые.",
								type: "radio",
								options: [
									{ id: "1", text: "перпендикулярные" },
									{ id: "2", text: "параллельные" },
								],
								answer: "перпендикулярные",
							},
							{
								partId: "stp18.5",
								question:
									"Следовательно, прямая g ______ плоскости α.",
								type: "radio",
								options: [
									{ id: "1", text: "параллельна" },
									{ id: "2", text: "пересекается" },
								],
								answer: "параллельна",
							},
						],
					},
					{
						id: "stp19",
						title: "Признак перпендикулярности прямой в расчётах расстояния до вершин квадрата",
						question:
							"От вершины K к плоскости квадрата ABCD проведена прямая KB, при этом ∠KBA = 90° и ∠KBC = 90°. Если сторона квадрата равна 19 см, а KB = 19 см, то рассчитай расстояния от K до вершин квадрата (округли до десятых).",
						parts: [
							{
								partId: "stp19.1",
								question: "KA (см):",
								type: "radio",
								options: [
									{ id: "1", text: "26,9" },
									{ id: "2", text: "25,0" },
									{ id: "3", text: "30,0" },
									{ id: "4", text: "32,9" },
								],
								answer: "26,9",
							},
							{
								partId: "stp19.2",
								question: "KC (см):",
								type: "radio",
								options: [
									{ id: "1", text: "26,9" },
									{ id: "2", text: "25,0" },
									{ id: "3", text: "30,0" },
									{ id: "4", text: "32,9" },
								],
								answer: "26,9",
							},
							{
								partId: "stp19.3",
								question: "KD (см):",
								type: "radio",
								options: [
									{ id: "1", text: "32,9" },
									{ id: "2", text: "30,0" },
									{ id: "3", text: "26,9" },
									{ id: "4", text: "35,0" },
								],
								answer: "32,9",
							},
						],
					},
					{
						id: "stp20",
						title: "Свойство точки на одинаковых расстояниях от вершин фигуры",
						images: ["stp20.png"],
						question:
							"Точка K находится на расстоянии 21 см от плоскости прямоугольника ABCD и равноудалена от вершин. Определи, где находится проекция точки K в плоскости и на каком расстоянии от вершин она лежит.",
						parts: [
							{
								partId: "stp20.1",
								question: "Проекция точки K находится в точке:",
								type: "radio",
								options: [
									{ id: "1", text: "пересечения диагоналей" },
									{ id: "2", text: "центре" },
									{ id: "3", text: "середине стороны" },
									{ id: "4", text: "вершине" },
								],
								answer: "пересечения диагоналей",
							},
							{
								partId: "stp20.2",
								question:
									"Расстояние от точки K до вершин (см):",
								type: "radio",
								options: [
									{ id: "1", text: "29" },
									{ id: "2", text: "21" },
									{ id: "3", text: "24" },
									{ id: "4", text: "32" },
								],
								answer: "29",
							},
						],
					},
				],
			},
		],
	},
];
