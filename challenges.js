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

// #9. Описание числа. Напишите функцию describesNumber, которая принимает аргумент number и возвращает описание числа:
// "Even positive number", "Even negative number", "Odd positive number", "Odd negative number", "Zero".
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

// #10. Сумма углов n-угольника. Мы знаем из школьного курса, что сумма углов треугольника равна 180 градусам,
// сумма углов квадрата или прямоугольника равна 360 градусам. Сумма углов n-угольника равна 180 * (n − 2).
// Напишите функцию anglesOfPolygon, которая принимает аргумент n (число углов) и возвращает сумму углов n-угольника.
function anglesOfPolygon(n){
  return 180 * (n-2);
}
console.log(anglesOfPolygon(5)); // функция anglesOfPolygon(5) должна возвратить 540;
console.log(anglesOfPolygon(4)); // функция anglesOfPolygon(4) должна возвратить 360;
console.log(anglesOfPolygon(3)); // функция anglesOfPolygon(3) должна возвратить 180;
console.log(anglesOfPolygon(2)); // функция anglesOfPolygon(2) должна возвратить 0.

// #11. Заполнить массив числами от n до m. Напишите функцию fillArray, которая принимает два аргумента n и m (n < m) и возвращает массив чисел от n до m включительно.
// Гарантируется, что во всех тестах n < m.
function fillArray(n, m){
  let arr = [];
  if (m > n) for (let i = n; i <= m; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(fillArray(0, 3)); // должна возвратить [0, 1, 2, 3];
console.log(fillArray(3, 5)); // должна возвратить [3, 4, 5];
console.log(fillArray(20, 25)); // должна возвратить [20, 21, 22, 23, 24, 25];

// #12. Напишите функцию perimeterOfTriangle, которая принимает три аргумента a, b, c (стороны треугольника)
// и возвращает периметр треугольника, если треугольник существует, или сообщение "The triangle does not exist", в противном случае.
// Треугольник существует, если каждая из его сторон меньше суммы двух других сторон:
function perimeterOfTriangle(a, b, c){
  if ((a < b + c && b < a + c && c < a + b) === true) return (a + b + c);
    else return 'The triangle does not exist';
}
console.log(perimeterOfTriangle(4, 5, 6)); // должна возвратить 15;
console.log(perimeterOfTriangle(3, 2, 10)); //  должна возвратить сообщение "The triangle does not exist".

// #13 Напишите функцию areaOfTriangle, которая принимает три аргумента a, b, c (стороны треугольника) и возвращает площадь треугольника, если треугольник существует, или сообщение "The triangle does not exist", в противном случае.
// Треугольник существует, если каждая из его сторон меньше суммы двух других сторон:
// a < b + c && b < a + c && c < a + b.
// Площадь треугольника вычисляется по формуле Герона:
// s = (p * (p - a) * (p - b) * (p - c)) ** 0.5; где p = (a + b + c) / 2.
function areaOfTriangle(a, b, c){
  let p = (a + b + c) / 2;
  let s = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
  if ((a < b + c && b < a + c && c < a + b) === true) return s;
    else return 'The triangle does not exist';
}
console.log(areaOfTriangle(3, 4, 5)); // должна возвратить 6;
console.log(areaOfTriangle(3, 2, 10)); // должна возвратить сообщение "The triangle does not exist".

// #14. Факториал числа — это произведение натуральных чисел от 1 до самого числа (включая данное число). Факториал нуля и единицы равен 1.
// Напишите функцию factorial, которая принимает число number и возвращает факториал этого числа.
function factorial(number) {
  if (number < 0) // If the number is less than 0, reject it.
    return -1;
  else if (number === 0) // If the number is 0, its factorial is 1.
    return 1;
  else { // Otherwise, call the recursive procedure again
    return (number * factorial(number - 1));
    /* 
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls
        
        Each call: number === "?"        	        number * factorialize(num - 1)
        1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
        
        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value
        
        5th call will return (5 * (5 - 1))     // number = 5 * 4
        4th call will return (20 * (4 - 1))    // number = 20 * 3
        3rd call will return (60 * (3 - 1))    // number = 60 * 2
        2nd call will return (120 * (2 - 1))   // number = 120 * 1
        1st call will return (120)             // number = 120
        
        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
  }
}
console.log(factorial(0)); // должна возвратить 1;
console.log(factorial(1)); // должна возвратить 1;
console.log(factorial(2)); // должна возвратить 2;
console.log(factorial(4)); // должна возвратить 24;
console.log(factorial(5)); // должна возвратить 120;

// #15. Факториал числа — это произведение натуральных чисел от 1 до самого числа (включая данное число). Факториал нуля и единицы равен 1.
// Напишите функцию factorial, которая принимает число number и возвращает факториал этого числа.
function factorial(number) { // Step 1. Create a variable result to store num
  let result = number; // If num = 0 OR num = 1, the factorial will return 1
  if (number === 0 || number === 1) return 1;
  while (number > 1) { // Step 2. Create the WHILE loop 
    number--; // decrementation by 1 at each iteration
    result = result * number; // or result *= num; 
    /* 
          number                number--    let result      result *= number         
    1st iteration:   5             4            5             20 = 5 * 4      
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop 
    */
  }
  // Step 3. Return the factorial of the provided integer
  return result; // 120
}
console.log(factorial(0)); // должна возвратить 1;
console.log(factorial(1)); // должна возвратить 1;
console.log(factorial(2)); // должна возвратить 2;
console.log(factorial(4)); // должна возвратить 24;
console.log(factorial(5)); // должна возвратить 120;

// #16. Факториал числа — это произведение натуральных чисел от 1 до самого числа (включая данное число). Факториал нуля и единицы равен 1.
// Напишите функцию factorial, которая принимает число number и возвращает факториал этого числа.
function factorial(number) { // If num = 0 OR num = 1, the factorial will return 1
  if (number === 0 || number === 1)
    return 1;
  // We start the FOR loop with i = 4
  // We decrement i after each iteration 
  for (var i = number - 1; i >= 1; i--) {
    // We store the value of number at each iteration
    number = number * i; // or number *= i;
    /* 
                  number     var i = number - 1    number *= i      i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no
    5th iteration: 120               0                120
    End of the FOR loop 
    */
  }
  return num; //120
}
console.log(factorial(0)); // должна возвратить 1;
console.log(factorial(1)); // должна возвратить 1;
console.log(factorial(2)); // должна возвратить 2;
console.log(factorial(4)); // должна возвратить 24;
console.log(factorial(5)); // должна возвратить 120;