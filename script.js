let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),      //Закоментированно т к эта часть 
// 	a2 = prompt("Во сколько обойдется?", ''),										//будет представлена в виде цикла
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

//appData.expenses[a]1 = a2;											//Переменные заменены в цикле на a и b
//appData.expenses[a3] = a4;
//console.log(appData.expenses);


 for (let i =0; i < 2; i++)	{						//ставим i < 2 т.к. у нас дважды задаются вопросы (см Задание 1)
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
		&& a != '' && b != '' && a.length < 50) {
			console.log('done');
			appData.expenses[a] = b;		// Точку здесь использовать нельзя, используются именно [] т.к. в "а" мы передаем переменную, 
			// а если мы используем [], то "свойство" может содержать любую "строку"
		} else {
i--
		}
 };

// let i = 0;
// while (i < 2)	
// { i++					//ставим i < 2 т.к. у нас дважды задаются вопросы (см Задание 1)
// 	{ let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
	
// 		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
// 		&& a != '' && b != '' && a.length < 50)
// 		 {
// 			console.log('done');
// 			appData.expenses[a] = b;		// Точку здесь использовать нельзя, используются именно [] т.к. в "а" мы передаем переменную, 
// 			// а если мы используем [], то "свойство" может содержать любую "строку"
// 		 }
// 		 else {
// 				i--
// 			  }
// 	}
// };

// let i = 0;
	
// do
// { i++					//ставим i < 2 т.к. у нас дважды задаются вопросы (см Задание 1)
// 	{ let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
	
// 		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
// 		&& a != '' && b != '' && a.length < 50)
// 		 {
// 			console.log('done');
// 			appData.expenses[a] = b;		// Точку здесь использовать нельзя, используются именно [] т.к. в "а" мы передаем переменную, 
// 			// а если мы используем [], то "свойство" может содержать любую "строку"
// 		 }
// 		 else {
// 				i--
// 			  }
// 	}
// }
// while (i < 2);


 //Запись бюджета на один день прямо в даные программы
 appData.moneyPerDay = appData.budget / 30; //создано новое свойство moneyPerDay  и в него будет записана конструкция appData.budget / 30
//alert(appData.budget / 30);				//так было записано в Задании 1
alert('Ежедневный бюджет: ' + appData.moneyPerDay); //после создания moneyPerDay можем вывести информацию в красивом виде
/*Какой смысл + перед appData.moneyPerDay ?  - Ответ :Нам нужно совершить конкатенацию (склейку) строк. Именно для этого и нужен плюс.
alert('строка' + переменная(выражение) со строкой);
*/
if (appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка') ;
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка') ;
} else if ( appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка') ;

} else {
	console.log ('Произошла ошибка')
}