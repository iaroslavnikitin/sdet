//1. Выведите в консоль числа, кратные 3, в диапазоне от 1 до 40.
let arr = [];
for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0) arr.push(i);
}
arr.unshift(1);
console.log(arr);



//2. Задайте пустой массив arr. Используя метод push, заполните 
//   в цикле массив четными числами от 30 до 10 с порядке убывания.
let arr = [];
for (let i = 30; i >= 10; i--) {
  if (i % 2 === 0) arr.push(i);
}
console.log(arr);


//3. Задана строка str = 'Now I am studying programming on JS'.
// Найти количество пробелов в строке.
let str = 'Now I am studying programming on JS';
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
  count++;
  }
}
console.log(count);


//4. Найти общее количество гласных букв (a,o,e,u,i) в строке str.
let str = 'Now I am studying programming on JS';
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a' || str[i] === 'o' || str[i] === 'e' || str[i] === 'u' || str[i] === 'i') {
    count++;
  }
}
console.log(count);

//5. Дан массив arr = [3, 7, 4, 9, 2, 10, 1, 17, 6, 23, 5, 13];
// Найти разность между максимальным и минимальным элементом массива.
let arr = [3, 7, 4, 9, 2, 10, 1, 17, 6, 23, 5, 13];
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  for (let j = 1; j < arr.length-1; j++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[j] > max) {
      max = arr[j];
    }
  }
}
console.log(max - min);

// 6. Напишите функцию fillArray, которая принимает неотрицательное число n и возвращает массив чисел от 1 до n: [1, 2, 3, ..., n]
function fillArray(n){
  let arr = [];
    if (n > 0) for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
  return arr;
  }
console.log(fillArray(0));
console.log(fillArray(1));
console.log(fillArray(2));
console.log(fillArray(5));

// #7. Напишите функцию sum, которая принимает неотрицательное число n и возвращает сумму чисел от 1 до n:
// 1 + 2 + 3 + ... + n.
function sum(n){
  let arr = [];
    if (n > 0) for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
  return arr.reduce((part_sum, a) => part_sum + a, 0);
  }
console.log(sum(0));
console.log(sum(1));
console.log(sum(2));
console.log(sum(5));

// #8. Have a function fizzBuzz(num) which take a number as parameter. Function should return "Fizz" if number dividable by 3, "Buzz" by 5 or current number if not.
function fizzBuzz(num) {
  for (let num = 0; num <= 20; num++) {
  if (num % 5 === 0 && num %3 === 0) console.log('fizzbuzz');
  else if (num % 3 === 0) console.log('fizz');
  else if (num % 5 === 0) console.log('buzz');
  else console.log(num); 
  }
}
console.log(fizzBuzz(20));

// #9. Описание числа. Напишите функцию describesNumber, которая принимает аргумент number и возвращает описание числа: "Even positive number", "Even negative number", "Odd positive number", "Odd negative number", "Zero".
function describesNumber(number){
  if (number < 0) return 'Zero'
  if (number % 2 === 0 && number > 0) return 'Even positive number';
  if (number % 1 === 0 && number > 0) return 'Odd positive number';
  if (number % 2 === 0 && number < 0) return 'Even negative number';
  if (number % 1 === 0 && number < 0) return 'Odd negative number';
}
console.log(describesNumber(48)); // 'Even positive number';
console.log(describesNumber(-12)); // 'Even negative number';
console.log(describesNumber(51)); // 'Odd positive number';
console.log(describesNumber(-5)); // 'Odd negative number';
console.log(describesNumber(0)); // 'Zero';

// #10. Сумма углов n-угольника. Мы знаем из школьного курса, что сумма углов треугольника равна 180 градусам, сумма углов квадрата или прямоугольника равна 360 градусам. Сумма углов n-угольника равна 180 * (n − 2).
// Напишите функцию anglesOfPolygon, которая принимает аргумент n (число углов) и возвращает сумму углов n-угольника.
function anglesOfPolygon(n){
  return 180 * (n-2);
}
console.log(anglesOfPolygon(5)); // функция anglesOfPolygon(5) должна возвратить 540;
console.log(anglesOfPolygon(4)); // функция anglesOfPolygon(4) должна возвратить 360;
console.log(anglesOfPolygon(3)); // функция anglesOfPolygon(3) должна возвратить 180;
console.log(anglesOfPolygon(2)); // функция anglesOfPolygon(2) должна возвратить 0.