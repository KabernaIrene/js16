//randomDelayPrint Створіть функцію randomDelayPrint , 
//яка прийматиме рядок messageяк аргумент і виводитиме кожну букву цього рядка з довільною затрмкою
//від 0 до 1 секунди. Вікористовуйте setTimeOut, щоб додати випадкову затримку перед виведенням кожної літери

const someStr = prompt('write a message')

function randomDelayPrint (message) {
  let mesArr = message.split("");
  console.log(mesArr)
  
  mesArr.forEach((el, i) => setTimeout(() => console.log(el), Math.random() * 1000))

}

randomDelayPrint(someStr)


//debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику 
//і затримку (в мілісекундах) як аргументи. Функція debounce повинна повертати нову функцію, 
//яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів. 
//Це дасть змогу ігнорувати часті виклики функції 
//та виконувати її лише один раз через зазначену затримку після останнього виклику.



function debounce(func, timeout) {
  let timer;

  return function(...args) {
      const context = this;

      if (timer) {
          clearTimeout(timer);
      }

      timer = setTimeout(() => {
          func.apply(context, args);
      }, timeout);
  };
}


function greet() {
  console.log('Hello');
}

const debouncedGreet = debounce(greet, 5000);

debouncedGreet(greet)
debouncedGreet(greet)

//intervalRac.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t 
//у мілісекундах. Функція intervalRace має викликати кожну функцію з масиву по черзі через 
//заданий інтервал часу t. Коли всі функції виконано, intervalRace має повернути масив із результатами.

function intervalRace(functions, t, callback) {
  let results = [];
  let i = 0;

  const interval = setInterval(() => {
      if (i < functions.length) {
          const result = functions[i]();
          results.push(result);
          i++;
      } else {
          clearInterval(interval);
          callback(results);
      }
  }, t);
}


const functions = [
  () => 'first',
  () => 'second',
  () => 'third',
];

intervalRace(functions, 3000, (results) => {
  console.log(results); 
});

