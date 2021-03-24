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
console.log(count); // должна возвратить 6;


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
  for (let j = 1; j < arr.length - 1; j++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[j] > max) {
      max = arr[j];
    }
  }
}
console.log(max - min);

// 6. Напишите функцию fillArray, которая принимает неотрицательное число n и возвращает массив чисел от 1 до n: [1, 2, 3, ..., n]
function fillArray(n) {
  let arr = [];
  if (n > 0)
    for (let i = 1; i <= n; i++) {
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
function sum(n) {
  let arr = [];
  if (n > 0)
    for (let i = 1; i <= n; i++) {
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
    if (num % 5 === 0 && num % 3 === 0) console.log('fizzbuzz');
    else if (num % 3 === 0) console.log('fizz');
    else if (num % 5 === 0) console.log('buzz');
    else console.log(num);
  }
}
console.log(fizzBuzz(20));

// #9. Описание числа. Напишите функцию describesNumber, которая принимает аргумент number и возвращает описание числа:
// "Even positive number", "Even negative number", "Odd positive number", "Odd negative number", "Zero".
function describesNumber(number) {
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
function anglesOfPolygon(n) {
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

// #14.1 factorial
function factorial(number) {
    if (number === 0) return 1;
    return (number * factorial(number - 1));
}
console.log(factorial(5));

// #14.2 factorial
const factorial = (number) => number === 0 ? 1 : (number * factorial(number - 1));
console.log(factorial(5));

// #14.3 Факториал числа — это произведение натуральных чисел от 1 до самого числа (включая данное число). Факториал нуля и единицы равен 1.
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

// #17. https://www.codewars.com/kata/5b7bd90ef643c4df7400015d/train/javascript
// Create palindrome, Consider the string "adfa" and the following rules:
// a) each character MUST be changed either to the one before or the one after in alphabet. 
// b) "a" can only be changed to "b" and "z" to "y". 
// From our string, we get:
// "adfa" -> ["begb","beeb","bcgb","bceb"]
// Here is another example: 
// "bd" -> ["ae","ac","ce","cc"]
// --We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".
// You will be given a lowercase string and your task is to return True if at least one of the outcomes is a palindrome or False otherwise.
function solve(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < s.length / 2; i++) {
    let indexOfCurrentChar = alphabet.indexOf(s[i]);
    let indexOfSimmetricalChar = alphabet.indexOf(s[s.length - i - 1]);
    let currentCharBefore = '1';
    let currentCharAfter = '';
    let simmetricalCharBefore = '';
    let simmetricalCharAfter = '2';
    if (indexOfCurrentChar == 0) {
      currentCharBefore = alphabet[indexOfCurrentChar - 1];
      currentCharAfter = alphabet[indexOfCurrentChar + 1];
    } else {
      currentCharBefore = alphabet[indexOfCurrentChar - 1];
      currentCharAfter = alphabet[indexOfCurrentChar + 1];
    }
    if (indexOfSimmetricalChar === alphabet.length - 1) {
      simmetricalCharBefore = alphabet[indexOfSimmetricalChar - 1];
    } else {
      simmetricalCharBefore = alphabet[indexOfSimmetricalChar - 1];
      simmetricalCharAfter = alphabet[indexOfSimmetricalChar + 1];
    }
    //console.log(currentCharBefore, currentCharAfter,simmetricalCharBefore ,simmetricalCharAfter)
    if (currentCharBefore !== simmetricalCharBefore &&
      currentCharBefore !== simmetricalCharAfter &&
      currentCharAfter !== simmetricalCharBefore &&
      currentCharAfter !== simmetricalCharAfter
    ) return false;
  }
  return true;
}

// #18. Напишите функцию numberOfDigits, которая принимает аргумент number и возвращает количество цифр в этом числе.
// Идея решения: чтобы найти количество цифр числа, мы будем отбрасывать по одной цифре с конца, до тех пор, пока число не станет равным нулю.
// Количество таких действий равно количеству цифр в числе.
function numberOfDigits(number){
  return number.toString().split('').length;
}
console.log(numberOfDigits(1987874)); // должна возвратить 7;
console.log(numberOfDigits(93)); // должна возвратить 2;
console.log(numberOfDigits(346821)); // должна возвратить 6;
console.log(numberOfDigits(5)); // должна возвратить 1;

// #19. Напишите функцию numberOfDigits, которая принимает аргумент number и возвращает количество цифр в этом числе.
// Идея решения: чтобы найти количество цифр числа, мы будем отбрасывать по одной цифре с конца, до тех пор, пока число не станет равным нулю.
// Количество таких действий равно количеству цифр в числе.
let numberOfDigits = number => number.toString().split('').length;
console.log(numberOfDigits(1987874)); // должна возвратить 7;
console.log(numberOfDigits(93)); // должна возвратить 2;
console.log(numberOfDigits(346821)); // должна возвратить 6;
console.log(numberOfDigits(5)); // должна возвратить 1;

// #20. Напишите функцию numberOfDigits, которая принимает аргумент number и возвращает количество цифр в этом числе.
// Идея решения: чтобы найти количество цифр числа, мы будем отбрасывать по одной цифре с конца, до тех пор, пока число не станет равным нулю.
// Количество таких действий равно количеству цифр в числе.
function numberOfDigits(number) {
  let arr = number.toString().split('');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr !== 0) count++;
  }
  return count;
}
console.log(numberOfDigits(1987874)); // должна возвратить 7;
console.log(numberOfDigits(93)); // должна возвратить 2;
console.log(numberOfDigits(346821)); // должна возвратить 6;
console.log(numberOfDigits(5)); // должна возвратить 1;

// #21. Заполнить массив четными числами от 2 до n.
// Напишите функцию fillArray, которая принимает аргумент n и возвращает массив четных чисел в диапазоне от 2 до n
function fillArray(n) {
  let arr = [];
    if (n > 0) for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) arr.push(i);
    }
    return arr;
}
console.log(fillArray(0)); // должна возвратить [];
console.log(fillArray(1)); // должна возвратить [];
console.log(fillArray(2)); // должна возвратить [2];
console.log(fillArray(3)); // должна возвратить [2];
console.log(fillArray(9)); // должна возвратить [2, 4, 6, 8];
console.log(fillArray(12)); // должна возвратить [2, 4, 6, 8, 10, 12];

// #22. Количество нечетных элементов массива
// Напишите функцию countOfOdd, которая принимает массив arr как аргумент и возвращает количество нечетных элементов этого массива.
// Нечетными элементами являяются те числа, у которых остаток от деления на 2 не равен нулю.
function countOfOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) count++;
  }
  return count;
}
console.log(countOfOdd([1, 20, -5, 4, 19])); // должна возвратить 3 (3 нечетных элемента: 1, -5, 19);
console.log(countOfOdd([-2, 4])); // должна возвратить 0;
console.log(countOfOdd([7, 9, 11])); // должна возвратить 3;
console.log(countOfOdd([])); // должна возвратить 0;

// #23. Количество отрицательных элементов массива
// Напишите функцию countOfNegative, которая принимает массив arr как аргумент и возвращает количество отрицательных элементов этого массива
function countOfNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }
  return count;
}
console.log(countOfNegative([1, 2, -3, 4])); // должна возвратить 1;
console.log(countOfNegative([-2, -4])); // должна возвратить 2;
console.log(countOfNegative([12, 4, 45])); // должна возвратить 0;
console.log(countOfNegative([])); // должна возвратить 0;

// #24. Количество четных элементов массива
// Напишите функцию countOfEven, которая принимает массив arr как аргумент и возвращает количество четных элементов этого массива.
// Четными элементами являются те числа, которые делятся на 2 без остатка
function countOfEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) count++;
  }
  return count;
}
console.log(countOfEven([1, 20, -5, 4])); // должна возвратить 2;
console.log(countOfEven([-2, -4, 0])); // должна возвратить 3;
console.log(countOfEven([7, 9, 11])); // должна возвратить 0;
console.log(countOfEven([])); // должна возвратить 0;

// #25. Произведение элементов массива
// Напишите функцию productOfArray, которая принимает массив arr как аргумент и возвращает произведение элементов этого массива.
// Если массив arr пустой (т.е. длина массива равна 0), функция должна вернуть 0.
function productOfArray(arr) {
  let count = 1;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    count = count * arr[i];
  }
  return count;
}
console.log(productOfArray([1, 2, 4])); // должна возвратить 8;
console.log(productOfArray([4])); // должна возвратить 4;
console.log(productOfArray([0])); // должна возвратить 0;
console.log(productOfArray([])); // должна возвратить 0;

// #26. Индекс первого отрицательного элемента массива
// Напишите функцию indexOfFirstNegative, которая принимает массив arr как аргумент и возвращает индекс первого отрицательного элемента массива.
// Если отрицательных элементов нет или массив пустой, вернуть строку "no negative elements".
function indexOfFirstNegative(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if(arr[i] < 0) return i;
    } return 'no negative elements';
}
console.log(indexOfFirstNegative([0, 8, -6, 0, -9])); // должна возвратить 2 (т.к. arr[2] < 0 - первый отрицательный элемент);
console.log(indexOfFirstNegative([-2, 4])); // должна возвратить 0 (т.к. arr[0] < 0);
console.log(indexOfFirstNegative([2, 7, 8])); // должна возвратить "no negative elements" (нет отрицательных элементов);
console.log(indexOfFirstNegative([])); // должна возвратить "no negative elements";

// #27. Сумма элементов массива
// Напишите функцию sumOfArray, которая принимает массив arr как аргумент и возвращает сумму элементов этого массива.
function sumOfArray(arr) {
  let count = 0;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}
console.log(sumOfArray([1, 2, 3, 4])); // должна возвратить 10;
console.log(sumOfArray([])); // должна возвратить 0;

// #28. Среднее арифметическое элементов массива
// Напишите функцию average, которая принимает массив arr как аргумент и возвращает среднее арифметическое элементов этого массива.
// Чтобы найти среднее арифметическое элементов массива, надо сумму элементов массива разделить на длину массива.
// Если массив пустой (т.е его длина равна 0), функция должна вернуть 0.
function average(arr) {
  let sum = 0;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(average([1, 2, 3, 4])); // должна возвратить 2.5, т.к. (1 + 2 + 3 + 4) / 4 = 2.5;
console.log(average([13, 10, -4, -2, 4, 5, 3, 5, 6, 12, -1, 10, 1, 4, -4])); // должна возвратить 4.133333333333334, т.к. 62 / 15 = 4.133333333333334;
console.log(average([9, -5, 2, -2, -1, 0, 13, 5, 12, 13, 2, -2, -4, 14, 11])); // должна возвратить 4.466666666666667, т.к. 67 / 15 = 4.466666666666667;
console.log(average([])); // должна возвратить 0;

// # 29. Сумма отрицательных элементов массива
// Напишите функцию sumOfNegative, которая принимает массив arr как аргумент и возвращает сумму отрицательных элементов этого массива.
function sumOfNegative(arr) {
  let neg = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) neg.push(arr[i]);
    else sum += arr[i];
  }
  return sum;
}
console.log(sumOfNegative([1, 2, -3, -4])); // должна возвратить -7 (т.к. -3 + (-4) = -7);
console.log(sumOfNegative([-2, -4])); // должна возвратить -6;
console.log(sumOfNegative([2, 1])); // должна возвратить 0 (т.к. нет отрицательных элементов);
console.log(sumOfNegative([])); // должна возвратить 0;

// # 30. Сумма отрицательных элементов массива
// Напишите функцию sumOfNegative, которая принимает массив arr как аргумент и возвращает сумму отрицательных элементов этого массива.
function sumOfNegative(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) sum += arr[i];
  }
  return sum;
}
console.log(sumOfNegative([1, 2, -3, -4])); // должна возвратить -7 (т.к. -3 + (-4) = -7);
console.log(sumOfNegative([-2, -4])); // должна возвратить -6;
console.log(sumOfNegative([2, 1])); // должна возвратить 0 (т.к. нет отрицательных элементов);
console.log(sumOfNegative([])); // должна возвратить 0;

// #31. Количество слов, состоящих из 5 букв
// Напишите функцию countOfWordsOf5Letters, которая принимает массив строк arr как аргумент и возвращает количество слов длиной 5.
function countOfWordsOf5Letters(arr) {
  let count = 0;
  for (let a of arr) {
    if (a.length === 5) count++;
  }
  return count;
}
console.log(countOfWordsOf5Letters(['apple', 'peach', 'ice', 'water'])); // должна возвратить 3;
console.log(countOfWordsOf5Letters(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])); // должна возвратить 3;
console.log(countOfWordsOf5Letters(['banana', 'watermelon'])); // должна возвратить 0;
console.log(countOfWordsOf5Letters([])); // должна возвратить 0;

// #32. Количество слов, состоящих из 5 букв
// Напишите функцию countOfWordsOf5Letters, которая принимает массив строк arr как аргумент и возвращает количество слов длиной 5.
let countOfWordsOf5Letters = arr => arr.filter(el => el.length === 5).length;
console.log(countOfWordsOf5Letters(['apple', 'peach', 'ice', 'water'])); // должна возвратить 3;
console.log(countOfWordsOf5Letters(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])); // должна возвратить 3;
console.log(countOfWordsOf5Letters(['banana', 'watermelon'])); // должна возвратить 0;
console.log(countOfWordsOf5Letters([])); // должна возвратить 0;

// #33. Количество слов, состоящих из 5 букв
// Напишите функцию countOfWordsOf5Letters, которая принимает массив строк arr как аргумент и возвращает количество слов длиной 5.
function countOfWordsOf5Letters(arr) {
  return arr.filter(word => word.length === 5).length
}
console.log(countOfWordsOf5Letters(['apple', 'peach', 'ice', 'water'])); // должна возвратить 3;
console.log(countOfWordsOf5Letters(['banana', 'watermelon'])); // должна возвратить 0;
console.log(countOfWordsOf5Letters([])); // должна возвратить 0;

// #34. Количество чисел в смешанном массиве
// Напишите функцию countOfNumbers, которая принимает массив arr как аргумент и возвращает количество элементов, которые являются числами.
// Массив arr может состоять из чисел, строк и булевых (логичесих) величин.
function countOfNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') count++;
  }
  return count;
}
console.log(countOfNumbers([2, 'a', 5, true, 'b', 1, 'c'])); // должна возвратить 3 (3 числа: 2, 5, 1);
console.log(countOfNumbers([-2, 4, 'z'])); // должна возвратить 2;
console.log(countOfNumbers([])); // должна возвратить 0;

// #35. Количество чисел в смешанном массиве
// Напишите функцию countOfNumbers, которая принимает массив arr как аргумент и возвращает количество элементов, которые являются числами.
// Массив arr может состоять из чисел, строк и булевых (логичесих) величин.
function countOfNumbers(arr) {
  return arr.filter(item => Number.isFinite(item)).length;
}
console.log(countOfNumbers([2, 'a', 5, true, 'b', 1, 'c'])); // должна возвратить 3 (3 числа: 2, 5, 1);
console.log(countOfNumbers([-2, 4, 'z'])); // должна возвратить 2;
console.log(countOfNumbers([])); // должна возвратить 0;

// #35. Решение линейного уравнения
// решите линейное уравнение ax + b = 0, если даны коэффициенты a и b (a не равно 0).
// Напишите функцию с именем equation, которая принимает значения a, b в качестве аргументов и возвращает корень уравнения x.
function equation(a, b) {
  let x = -(b / a);
  return x;
}
console.log(equation(3, 6)); // должна возвратить -2;
console.log(equation(4, -20)); // должна возвратить 5;

// #36. Конвертер температур - из градусов Цельсия в градусы Фаренгейта
// Дано значение температуры tempC в градусах Цельсия. Конвертируйте температуру в градусы Фаренгейта.
// Найдите температуру по Фаренгейту, используя соотношение: tFº = tCº * 9/5 + 32;
function fahrenheit(tempC) {
  let tempF = (tempC * (9 / 5)) + 32;
  tempF = Math.round((tempF * 10) / 10);
  return tempF;
}
console.log(fahrenheit(5)); // должна возвратить 41;
console.log(fahrenheit(32)); // должна возвратить 90;

// #37. Конвертер температур - из градусов Цельсия в градусы Фаренгейта
// Дано значение температуры tempC в градусах Цельсия. Конвертируйте температуру в градусы Фаренгейта.
// Найдите температуру по Фаренгейту, используя соотношение: tFº = tCº * 9/5 + 32;
function fahrenheit(tempC) {
  return Math.round(tempC * 9 / 5 + 32);
}
console.log(fahrenheit(5)); // должна возвратить 41;
console.log(fahrenheit(32)); // должна возвратить 90;

// #38. Maximum Multiple
// Given a Divisor and a Bound, Find the largest integer N, Such That
// N is divisible by divisor,
// N is less than or equal to bound,
// N is greater than 0.
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}
console.log(maxMultiple(2, 7)); // должна возвратить 6;
console.log(maxMultiple(3, 10)); // должна возвратить 9;
console.log(maxMultiple(7, 17)); // должна возвратить 14;

// #39. Miles per gallon to kilometers per liter
// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
function converter(mpg) {
  return +((mpg / 4.54609188) * 1.609344).toFixed(2);
}
console.log(converter(10)); // 3.54
console.log(converter(20)); // 7.08
console.log(converter(30)); // 10.62

// #40. Find a slope
// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
function slope(points) {
  let dx = points[2] - points[0], dy = points[3] - points[1];
  if (dx === 0) return 'undefined';
  else return (dy / dx) + '';
}
console.log(slope([19, 3, 20, 3])); // '0'
console.log(slope([2, 7, 4, -7])); // '-7'
console.log(slope([10, 50, 30, 150])); // '5'
console.log(slope([15, 45, 12, 60])); // '-5'
console.log(slope([10, 20, 20, 80])); // '6'
console.log(slope([-10, 6, -10, 3])); // 'undefined'

// #41. Nth Root of a Number Redux… Redux!
// Given two numbers x and n, calculate the nth root of x, e.g. r such that r^n = x.
// However, many useful Math functions has been disabled, the used type doesn't have a Floating instance.
function root(x, nth) {
  let r;
  for (let i = 1; i <= 100; i++) {
    if (x === i ** nth) {
      r = i;
      break;
    }
  }
  return (x ** (1 / nth));
}
console.log(root(4, 2)); // должна возвратить 2
console.log(root(8, 3)); // должна возвратить 2
console.log(root(16, 2)); // должна возвратить 4
console.log(root(27, 3)); // должна возвратить 3

// #42. I love you, a little , a lot, passionately ... not at all
// when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you; a little; a lot; passionately; madly; not at all;
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
  const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return arr[(nbPetals - 1) % 6];
}
console.log(howMuchILoveYou(7)); // должна возвратить 'I love you'
console.log(howMuchILoveYou(3)); // должна возвратить 'a lot'
console.log(howMuchILoveYou(6)); // должна возвратить 'not at all'

// #43. Seats in Theater
// Your friend advised you to see a new performance in the most popular theater in the city.
// He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull.
// It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left.
// All you need to do is climb over your seat and make your way to the exit.
// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left.
// To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.
// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in,
// return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.
// Example: For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
function seatsInTheater(nCols, nRows, col, row) {
  if ((nCols && nRows) >= 1) return (((nCols - col) + 1) * (nRows - row));
  else return 0;
}
console.log(seatsInTheater(16, 11, 5, 3)); // должна возвратить 96
console.log(seatsInTheater(1, 1, 1, 1)); // должна возвратить 0
console.log(seatsInTheater(13, 6, 8, 3)); // должна возвратить 18
console.log(seatsInTheater(60, 100, 60, 1)); // должна возвратить 99
console.log(seatsInTheater(1000, 1000, 1000, 1000)); // должна возвратить 0


// // #44. – needs to be fixed
// // names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// // weights: [1, 4, 4, 5, 2, 1]
// // PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// // The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
// function rank(st, we, n) {
//   let albt = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   let vinNum = st.toLowerCase().split(',').map((el, i) => (el.split('').reduce((acc, cur) => acc + +albt.indexOf(cur) + 1, 0) + el.length) * we[i]);
//   let lst = st.split(',').reduce((acc, cur, i) => {
//     return acc.push([cur.toLowerCase(), vinNum[i]]), acc;
//   }, []).sort(([a, b], [c, d]) => d - b).sort(([a, b], [c, d]) => {
//     return b === d ? -1 : 0;
//   });
//   return lst;
// }
// console.log(rank("COLIN, AMANDBA, AMANDAB, CAROL, PauL, JOSEPH", [1, 4, 4, 5, 2, 1], 4)); // "PauL"
// console.log(rank("William, Willaim, Olivia, Olivai, Lily, Lyli", [1, 1, 1, 1, 1, 1], 1)); // "Willaim"
// console.log(rank("Elijah, Chloe, Elizabeth, Matthew, Natalie, Jayden", [1, 3, 5, 5, 3, 6], 2)); // "Matthew"

// #45. Math operations
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The bricks width and height are equal, forming a square.
// Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume.
// Write a function iceBrickVolume that will except these parameters:
// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.
function iceBrickVolume(radius, bottleLength, rimLength) {
  if (radius <= 1) return ((bottleLength - rimLength) * radius) * 2;
  else return radius * (((bottleLength - rimLength) * radius) * 2);
}
console.log(iceBrickVolume(1, 10, 2)); // должна возвратить 16;
console.log(iceBrickVolume(5, 30, 7)); // должна возвратить 1150;

// #46. Create palindrome
// Consider the string "adfa" and the following rules:
// a) each character MUST be changed either to the one before or the one after in alphabet.
// b) "a" can only be changed to "b" and "z" to "y".
// From our string, we get:
// "adfa" -> ["begb","beeb","bcgb","bceb"]
// Here is another example: 
// "bd" -> ["ae","ac","ce","cc"]
// --We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".
// You will be given a lowercase string and your task is to return True if at least one of the outcomes is a palindrome or False otherwise.
function solve(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < s.length / 2; i++) {
    let indexOfCurrentChar = alphabet.indexOf(s[i]);
    let indexOfSimmetricalChar = alphabet.indexOf(s[s.length - i - 1]);
    let currentCharBefore = '1';
    let currentCharAfter = '';
    let simmetricalCharBefore = '';
    let simmetricalCharAfter = '2';
    if (indexOfCurrentChar == 0) {
      currentCharBefore = alphabet[indexOfCurrentChar - 1];
      currentCharAfter = alphabet[indexOfCurrentChar + 1];
    } else {
      currentCharBefore = alphabet[indexOfCurrentChar - 1];
      currentCharAfter = alphabet[indexOfCurrentChar + 1];
    }
    if (indexOfSimmetricalChar === alphabet.length - 1) {
      simmetricalCharBefore = alphabet[indexOfSimmetricalChar - 1];
    } else {
      simmetricalCharBefore = alphabet[indexOfSimmetricalChar - 1];
      simmetricalCharAfter = alphabet[indexOfSimmetricalChar + 1];
    }
    if (currentCharBefore !== simmetricalCharBefore &&
      currentCharBefore !== simmetricalCharAfter &&
      currentCharAfter !== simmetricalCharBefore &&
      currentCharAfter !== simmetricalCharAfter
    ) return false;
  }
  return true;
}
console.log(solve("abba")); // должна возвратить true
console.log(solve("abaazaba")); // должна возвратить false
console.log(solve("abccba")); // должна возвратить true
console.log(solve("adfa")); // должна возвратить true
console.log(solve("ae")); // должна возвратить false
console.log(solve("abzy")); // должна возвратить false
console.log(solve("ababbaba")); // должна возвратить true
console.log(solve("sq")); // должна возвратить true
console.log(solve("kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm")); // должна возвратить true

// #47. Money, Money, Money
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// Example:
  // Let P be the Principal = 1000.00      
  // Let I be the Interest Rate = 0.05      
  // Let T be the Tax Rate = 0.18      
  // Let D be the Desired Sum = 1100.00
// After 1st Year --> P = 1041.00
// After 2nd Year --> P = 1083.86
// After 3rd Year --> P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    principal = principal + principal * interest - principal * interest * tax;
    years++;
  }
  return years;
}
console.log(calculateYears(1000, 0.05, 0.18, 1100)); // должна возвратить 3;
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // должна возвратить 14;
console.log(calculateYears(1000, 0.05, 0.18, 1000)); // должна возвратить 0;

// #48. Growth of a Population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:  1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
// At the end of the 3rd year there will be: 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass) the function nb_year should return n number of entire years needed to get a population greater or equal to p. aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = p0 + p0 * percent / 100 + aug;
    years++;
  }
  return years;
}
console.log(nbYear(1500, 5, 100, 5000)); // должна возвратить 15;
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // должна возвратить 10;
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // должна возвратить 94;

// #49. This program tests the life of an evaporator containing a gas.
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
// The program reports the nth day (as an integer) on which the evaporator will be out of use.
// Example: evaporator(10, 10, 5) -> 29
// Note: Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let limit = content * threshold / 100;
  while (content > limit) {
    content = content - content * evap_per_day / 100;
    days++;
  }
  return days;
}
console.log(evaporator(10, 10, 10)); // должна возвратить 22;

// #50. Сколько чисел содержит массив?
// Напишите функцию с именем countNumbers, которая принимает массив arr в качестве аргумента и возвращает количество чисел в этом массиве.
function countNumbers(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      num++;
    }
  }
  return num;
}
console.log(countNumbers([2, 6, 'one'])); // должна возвратить 2;
console.log(countNumbers(['hello'])); // должна возвратить 0;
console.log(countNumbers([6, -12, 'abc', 0, 'bad'])); // должна возвратить 3;

// #51. Lowest int in given array
function array(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(array([985, 438, 2, 4, 284, 985])); // 2;
console.log(array([1000, 10, -100, 101010])); // -100;

// #52. Lowest int in given array usung methods
const arr = [985, 438, 1, 4, 284, 985];
const min = arr.reduce((a, b) => Math.min(a, b));
console.log(min);

// #53. Defanging an IP Address
// A defanged IP address replaces every period "." with "[.]".
// Example 1: Input: address = "1.1.1.1" ––– Output: "1[.]1[.]1[.]1"
// Example 2:  Input: address = "255.100.50.0" ––– Output: "255[.]100[.]50[.]0"
function defangIPaddr(address) {
  return address.replace(/[.\\]/g, '\[.]');
}
console.log(defangIPaddr('1.1.1.1')); // должна возвратить '1[.]1[.]1[.]1'

// #54. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1: Input: nums = [1,2,3,4] ––– Output: [1,3,6,10]; Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2: Input: nums = [1,1,1,1,1] ––– Output: [1,2,3,4,5]; Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
const runningSum = (nums) => nums.map((sum => value => sum += value)(0));
console.log(runningSum([1, 2, 3, 4])); // должна возвратить '[1, 3, 6, 10]';
console.log(runningSum([1, 1, 1, 1, 1])); // должна возвратить '[1, 2, 3, 4, 5]';

// #55. Discover The Original Price
// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.
// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.
// For example: Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.
// DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price
function discoverOriginalPrice(discountedPrice, salePercentage) {
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}
console.log(discoverOriginalPrice(75, 25)); // должна возвратить 100
console.log(discoverOriginalPrice(25, 75)); // должна возвратить 100
console.log(discoverOriginalPrice(75.75, 25)); // должна возвратить 101
console.log(discoverOriginalPrice(66.48, 73.82)); // должна возвратить 253.93
console.log(discoverOriginalPrice(38.02, 57.97)); // должна возвратить 90.46

// #56. Area of a Square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
function squareArea(a) {
  return +(((a * 4) / (2 * Math.PI)) ** 2).toFixed(2);
}
console.log(squareArea(2)); // должна возвратить 1.62
console.log(squareArea(0)); // должна возвратить 0
console.log(squareArea(14.05)); // должна возвратить 80

// #57. Area of a Square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
function squareArea(a) {
  let circum = 4 * a;
  let radius = circum / (2 * Math.PI);
  let area = Math.pow(radius, 2);
  return Math.round(area * 100) / 100
}
console.log(squareArea(2)); // должна возвратить 1.62
console.log(squareArea(0)); // должна возвратить 0
console.log(squareArea(14.05)); // должна возвратить 80

// 58. How many times should I go?
// Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.
// In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.
function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice / individualPrice);
}
console.log(howManyTimes(40, 15)); // должна возвратить 3
console.log(howManyTimes(30, 10)); // должна возвратить 3
console.log(howManyTimes(80, 15)); // должна возвратить 6

// 59. How many times should I go?
// Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.
// In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.
function howManyTimes(annual_price, individual_price) {
  let visits = 0;
  let cost = 0;
  while (true) {
    cost += individual_price;
    visits++;
    if (cost >= annual_price) {
      return visits;
    }
  }
}
console.log(howManyTimes(40, 15)); // должна возвратить 3
console.log(howManyTimes(30, 10)); // должна возвратить 3
console.log(howManyTimes(80, 15)); // должна возвратить 6

// 60. How many times should I go?
// Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.
// In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.
function howManyTimes(annual_price, individual_price) {
  let diff = Math.round(annualPrice / individualPrice);
  if (individualPrice * diff >= annualPrice) {
    return diff;
  } else {
    return diff + 1;
  }
  return result;
}
console.log(howManyTimes(40, 15)); // должна возвратить 3;
console.log(howManyTimes(30, 10)); // должна возвратить 3;
console.log(howManyTimes(80, 15)); // должна возвратить 6;

// #61. Count Odd Numbers below n
// Given a number n, return the number of positive odd numbers below n:
// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
function oddCount(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) count++;
  }
  return count;
}
console.log(oddCount(15)); // должна возвратить 7;
console.log(oddCount(15023)); // должна возвратить 7511;

// #62. Count Odd Numbers below n
// Given a number n, return the number of positive odd numbers below n:
// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
function oddCount(n) {
  return Math.floor(n / 2);
}
console.log(oddCount(15)); // должна возвратить 7;
console.log(oddCount(15023)); // должна возвратить 7511;

// #63. Проверьте истинность утверждения "Среди трех данных чисел есть хотя бы два противоположных по значению числа".
// Напишите функцию с именем atLeastOnePairOfOpposite, которая принимает три целых числа a, b, c в качестве аргументов и возвращает true,
// если среди этих чисел есть хотя бы два противоположных по значению числа, и false - в противном случае.
function atLeastOnePairOfOpposite(a, b, c) {
  if (a === -c || a === -b || b === -c) return true;
  else return false;
}
console.log(atLeastOnePairOfOpposite(4, -4, 10)); // должна возвратить true;
console.log(atLeastOnePairOfOpposite(2, 6, -2)); // должна возвратить true;
console.log(atLeastOnePairOfOpposite(4, -9, 9)); // должна возвратить true;
console.log(atLeastOnePairOfOpposite(1, -1, 1)); // должна возвратить true;
console.log(atLeastOnePairOfOpposite(2, 2, 0)); // должна возвратить false;
console.log(atLeastOnePairOfOpposite(4, 6, -10)); // должна возвратить false;

// #64. Проверьте истинность утверждения "Все цифры трехзначного числа различны"
// Напишите функцию с именем areAllDigitsDifferent, которая принимает положительное трехзначное число num в качестве аргумента и возвращает true,
// если все цифры этого числа различны, и false - в противном случае.
function areAllDigitsDifferent(num) {
  let num1 = num % 10;
  let num2 = Math.floor((num % 100) * 0.1);
  let num3 = Math.floor((num % 1000) * 0.01);
  if (num1 !== num2 && num1 !== num3 && num2 !== num3) return true;
  else return false;
}
console.log(areAllDigitsDifferent(123)); // должна возвратить true
console.log(areAllDigitsDifferent(260)); // должна возвратить true
console.log(areAllDigitsDifferent(220)); // должна возвратить false
console.log(areAllDigitsDifferent(363)); // должна возвратить false

// #65. Проверьте истинность утверждения "Все цифры трехзначного числа различны"
// Напишите функцию с именем areAllDigitsDifferent, которая принимает положительное трехзначное число num в качестве аргумента и возвращает true,
// если все цифры этого числа различны, и false - в противном случае.
function areAllDigitsDifferent(num) {
  num += '';
  for (let i = 0; i <= num.length - 1; i++) {
    for (let j = 0; j <= num.length - 1; j++) {
      if (num[i] === num[j] && i !== j) return false;
    }
  }
  return true;
}
console.log(areAllDigitsDifferent(123)); // должна возвратить true
console.log(areAllDigitsDifferent(260)); // должна возвратить true
console.log(areAllDigitsDifferent(220)); // должна возвратить false
console.log(areAllDigitsDifferent(363)); // должна возвратить false

// #66. Basic data types--Boolean and conditional statements if..else
// In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value.
// The operation between the two bool values can be used with logical operators:&&, || or some bitwise operators:&, |, !, ^
// Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements.
// In other words, the Boolean value is mainly used for conditional judgment.
// You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value.
// it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false),
// should return a string "false", if not, return a string "true".
function trueOrFalse(val) {
  if (val) return 'true';
  else return 'false';
}
// test for equations and inequalities var a = 1, b = 2, c = 1;
console.log(trueOrFalse(a > b)); // false
console.log(trueOrFalse(a === b)); // false
console.log(trueOrFalse(a < b)); // true
console.log(trueOrFalse(a !== b)); // true
console.log(trueOrFalse(b > c)); // true
console.log(trueOrFalse(b === c)); // false
console.log(trueOrFalse(b < c)); // false
console.log(trueOrFalse(b !== c)); // true
console.log(trueOrFalse(a === c)); // true
console.log(trueOrFalse(a !== c)); // false
// test for logical operators and bitwise operators var t = true, f = false;
console.log(trueOrFalse(t && f)); // false
console.log(trueOrFalse(f && f)); // false
console.log(trueOrFalse(t && t)); // true
console.log(trueOrFalse(t || f)); // true
console.log(trueOrFalse(t || t)); // true
console.log(trueOrFalse(f || f)); // false
console.log(trueOrFalse(t & f)); // false
console.log(trueOrFalse(t & t)); // true
console.log(trueOrFalse(f & f)); // false
console.log(trueOrFalse(t | f)); // true
console.log(trueOrFalse(t | t)); // true
console.log(trueOrFalse(f | f)); // false
console.log(trueOrFalse(!t)); // false
console.log(trueOrFalse(!f)); // true
console.log(trueOrFalse(t ^ f)); // true
console.log(trueOrFalse(t ^ t)); // false
console.log(trueOrFalse(f ^ f)); // false
// test for implicit conversion
console.log(trueOrFalse(true)); // true
console.log(trueOrFalse(123)); // true
console.log(trueOrFalse("123")); // true
console.log(trueOrFalse(["123"])); // true
console.log(trueOrFalse("false")); // true
console.log(trueOrFalse(false)); // false
console.log(trueOrFalse(0)); // false
console.log(trueOrFalse("")); // false
console.log(trueOrFalse(null)); // false
console.log(trueOrFalse([].length)); // false
console.log(trueOrFalse(undefined)); // false

// #67. Basic data types--Boolean and conditional statements if..else
// In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value.
// The operation between the two bool values can be used with logical operators:&&, || or some bitwise operators:&, |, !, ^
// Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements.
// In other words, the Boolean value is mainly used for conditional judgment.
// You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value.
// it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false),
// should return a string "false", if not, return a string "true".
function trueOrFalse(val) {
  if (val == false) {
    return ('false');
  } else if (val == undefined) {
    return ('false');
  } else if (val == null) {
    return ('false');
  } else {
    return ('true');
  }
}
// test for equations and inequalities var a = 1, b = 2, c = 1;
console.log(trueOrFalse(a > b)); // false
console.log(trueOrFalse(a === b)); // false
console.log(trueOrFalse(a < b)); // true
console.log(trueOrFalse(a !== b)); // true
console.log(trueOrFalse(b > c)); // true
console.log(trueOrFalse(b === c)); // false
console.log(trueOrFalse(b < c)); // false
console.log(trueOrFalse(b !== c)); // true
console.log(trueOrFalse(a === c)); // true
console.log(trueOrFalse(a !== c)); // false
// test for logical operators and bitwise operators var t = true, f = false;
console.log(trueOrFalse(t && f)); // false
console.log(trueOrFalse(f && f)); // false
console.log(trueOrFalse(t && t)); // true
console.log(trueOrFalse(t || f)); // true
console.log(trueOrFalse(t || t)); // true
console.log(trueOrFalse(f || f)); // false
console.log(trueOrFalse(t & f)); // false
console.log(trueOrFalse(t & t)); // true
console.log(trueOrFalse(f & f)); // false
console.log(trueOrFalse(t | f)); // true
console.log(trueOrFalse(t | t)); // true
console.log(trueOrFalse(f | f)); // false
console.log(trueOrFalse(!t)); // false
console.log(trueOrFalse(!f)); // true
console.log(trueOrFalse(t ^ f)); // true
console.log(trueOrFalse(t ^ t)); // false
console.log(trueOrFalse(f ^ f)); // false
// test for implicit conversion
console.log(trueOrFalse(true)); // true
console.log(trueOrFalse(123)); // true
console.log(trueOrFalse("123")); // true
console.log(trueOrFalse(["123"])); // true
console.log(trueOrFalse("false")); // true
console.log(trueOrFalse(false)); // false
console.log(trueOrFalse(0)); // false
console.log(trueOrFalse("")); // false
console.log(trueOrFalse(null)); // false
console.log(trueOrFalse([].length)); // false
console.log(trueOrFalse(undefined)); // false

// #68. Is the string a Palindrome
function palindrome(str) {
  let length = Math.floor(str.length / 2);
  for (let i = 0; i < length; i++) {
    if (str[i] !== str[str.length - i - 1])
      return false;
  }
  return true;
}
console.log(palindrome('eye')); // true

// #69. Is the string a Palindrome
function checkPalindrome(word) {
  let length = word.length;
  for (let i = 0; i < length / 2; i++) {
    if (word.charAt(i) !== word.charAt(length - 1 - i)) return 'The word is NOT a palindrome';
    else return 'The word is a palindrome';
  }
}
console.log(checkPalindrome('abdfaba'));

// #70. Is the string a Palindrome
function palindrome(str) {
  str = str.toLowerCase().replace((/[\W_]/g), '');
  let strLen = str.length;
  for (let i = 0; i < strLen / 2; i++) {
    if (str[i] !== str[strLen - 1 - i]) return `false, '${str}' isn't a palindrome`;
  }
  return `true, '${str}' is a palindrome`;
}
console.log(palindrome('sSabBAss')); // true, 'ssabbass' is a palindrome
console.log(palindrome('sSabBAss sSabBAss sSabBAss')); // true, 'ssabbassssabbassssabbass' is a palindrome
console.log(palindrome('A man, a plan, a canal. Panama')); // true, 'amanaplanacanalpanama' is a palindrome
console.log(palindrome('A man, a plan, a canal. Panamas')); // false, 'amanaplanacanalpanamas' isn't a palindrome

// #71. Is the string a Palindrome
function palindrome(text) {
  text = text.toLowerCase().replace((/[\W_]/g), '');
  let reversedText = text.split('').reverse().join('');
  if (text === reversedText) return `true, '${text}' is a palindrome`;
  else return `false, '${text}' isn't a palindrome`;
}
console.log(palindrome('sSabBAss')); // true, 'ssabbass' is a palindrome
console.log(palindrome('sSabBAss sSabBAss sSabBAss')); // true, 'ssabbassssabbassssabbass' is a palindrome
console.log(palindrome('A man, a plan, a canal. Panama')); // true, 'amanaplanacanalpanama' is a palindrome
console.log(palindrome('A man, a plan, a canal. Panamas')); // false, 'amanaplanacanalpanamas' isn't a palindrome

// #72. Is the integer a Palindrome
function palindrome(num) {
  num = num.toString().replace((/[\W_]/g), '');
  let strLen = num.length;
  for (let i = 0; i < strLen / 2; i++) {
    if (num[i] !== num[strLen - 1 - i]) return `false, '${num}' isn't a palindrome`;
  }
  return `true, '${num}' is a palindrome`;
}
console.log(palindrome(11111111)); // true, '11111111' is a palindrome
console.log(palindrome(11111211)); // false, '11211111' isn't a palindrome
console.log(palindrome(11111112)); // false, '21111111' isn't a palindrome
console.log(palindrome(141)); // должна возвратить palindrome
console.log(palindrome(111)); // должна возвратить palindrome
console.log(palindrome(481)); // должна возвратить not a palindrome

// #73. Is the integer a Palindrome
function palindrome(num) {
  let revNum = num.toString().split('').reverse().join('');
  return ((revNum) * Math.sign(num));
}
console.log(palindrome(11111111)); // 11111111
console.log(palindrome(11111211)); // 11211111
console.log(palindrome(11111112)); // 21111111

// #74. Bubble Sort
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // flip arrays
      }
    }
  }
  return array;
}
console.log(bubbleSort([111, 32, 346, 93, 1, 23, 9687, 141098])); // [1, 23, 32, 93, 111, 346, 9687, 141098]

// #75. Selection Sort
function selectionArray(array) {
  array = array.slice(); // to create not mutated, but a pure function
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
console.log(selectionArray([111, 32, 346, 93, 1, 23, 9687, 141098])); // [1, 23, 32, 93, 111, 346, 9687, 141098]

// #76. Insertion Sort
function insertionSort(array) {
  array = array.slice();
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1])
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      else break;
    }
  }
  return array;
}
console.log(insertionSort([43, 23489, 2, 64, 1, 5609, 242])); // [1, 2, 43, 64, 242, 5609, 23489]

// #77. Quick Sort
function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array[array.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let el of array.slice(0, array.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
let arr = [8375, 387, 12, 968, 1, 402, 248, 90, 5];
console.log(quickSort(arr)); // [1, 5, 12, 90, 248, 387, 402, 968, 8375]

// #78. String Reverse
function reverse(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(reverse('abbey')); // yebba
console.log(reverse('nikitin yaro')); // oray nitikin

// #79. String Reverse with methods
function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse('abbey')); // yebba
console.log(reverse('nikitin yaro')); // oray nitikin

// #80. String Reverse with recursion
function reverse(str) {
  if (str === '') return '';
  else return reverse(str.substr(1)) + str.charAt(0);
}
console.log(reverse('abbey')); // yebba
console.log(reverse('nikitin yaro')); // oray nitikin

// #81. Reverse string
function printReverse(word) {
    let rev = '';
    for (let i = word.length - 1; i >= 0; i--) {
        rev += word[i];
    }
    return rev;
}
console.log(printReverse('yaro')); // 'oray'
console.log(reverse('nikitin yaro')); // oray nitikin

// #82. Reverse string
function printReverse(word) {
    let arr = [];
    for (let i = word.length - 1, j = 0; i >= 0; i--, j++) {
        arr[j] = word[i];
    }
    return arr.join('');
}
console.log(printReverse('yaro')); // 'oray'
console.log(reverse('nikitin yaro')); // oray nitikin

// #83. Prime number
function isPrime(num) {
    if (num < 2 || num != 2 && num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2)
        if (num % i === 0) return false;
    return true;
}
console.log(isPrime(5)); // true
console.log(isPrime(2)); // true
console.log(isPrime(1.5)); // false
console.log(isPrime(1)); // false


// #84. Имеет ли квадратное уравнение действительные корни?
// Напишите функцию с именем equationHasRoots, которая принимает три числа - коэффициенты квадратного уравнения a, b, c в качестве аргументов и возвращает строку:
// "The equation has roots", если уравнение имеет корни,
// "The equation has no roots", если уравнение не имеет корней.
function equationHasRoots(a, b, c) {
  let rootPart = Math.sqrt((b * b) - (4 * a * c));
  let denom = 2 * a;
  let firstRoot = (-b + rootPart) / denom;
  let secondRoot = (-b - rootPart) / denom;
  if (isNaN(firstRoot) || isNaN(secondRoot)) return 'The equation has no roots';
  else return 'The equation has roots';
}
console.log(equationHasRoots(3, 2, 1)); // должна возвратить "The equation has no roots"
console.log(equationHasRoots(19, 15, -34)); // должна возвратить "The equation has roots"

// #85. Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
//    90 <=  score   <= 100 'A'
//    80 <=  score   <= 90	'B'
//    70 <=  score   <= 80	'C'
//    60 <=  score   <= 70	'D'
//    0  <=  score   <= 60	'F'
function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  return score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
}
console.log(getGrade(95, 90, 93)); // 'A'
console.log(getGrade(100, 85, 96)); // 'A'
console.log(getGrade(92, 93, 94)); // 'A'
console.log(getGrade(70, 70, 100)); // 'B'
console.log(getGrade(82, 85, 87)); // 'B'
console.log(getGrade(84, 79, 85)); // 'B'
console.log(getGrade(89, 89, 90)); // 'B'
console.log(getGrade(70, 70, 70)); // 'C'
console.log(getGrade(75, 70, 79)); // 'C'
console.log(getGrade(60, 82, 76)); // 'C'
console.log(getGrade(65, 70, 59)); // 'D'
console.log(getGrade(66, 62, 68)); // 'D'
console.log(getGrade(58, 62, 70)); // 'D'
console.log(getGrade(44, 55, 52)); // 'F'
console.log(getGrade(48, 55, 52)); // 'F'
console.log(getGrade(58, 59, 60)); // 'F'

// #86. Debug Basic Calculator
const calculate = (a, o, b) => (o === '+') ? a + b : (o === '-') ? a - b : (o === '/' && b === 0) ? null : (o === '/') ? a / b : (o === '*') ? a * b : (typeof o !== 'number') ? null : null;
console.log(calculate(2, "+", 4)); // 6
console.log(calculate(6, "-", 1.5)); //4.5
console.log(calculate(-4, "*", 8)); // -32
console.log(calculate(49, "/", -7)); // -7
console.log(calculate(8, "m", 2)); // null
console.log(calculate(4, "/", 0)); // null

// 87. Debug Basic Calculator
function calculate(a, o, b) {
  if (o === '+') return a + b;
  else if (o === '-') return a - b;
  else if (o === '/' && b === 0) return null;
  else if (o === '/') return a / b;
  else if (o === '*') return a * b;
  else if (typeof o !== 'number') return null;
}
console.log(calculate(2, "+", 4)); // 6
console.log(calculate(6, "-", 1.5)); //4.5
console.log(calculate(-4, "*", 8)); // -32
console.log(calculate(49, "/", -7)); // -7
console.log(calculate(8, "m", 2)); // null
console.log(calculate(4, "/", 0)); // null

// #88. Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  let bmiCalc = (weight / (height ** 2)).toFixed(1);
  return ((bmiCalc <= 18.5) ? `Underweight` : (bmiCalc <= 25) ? `Normal` : (bmiCalc <= 30) ? `Overweight` : `Obese`);
}
console.log(bmi(66.5, 1.80));
console.log(bmi(80, 1.80));
console.log(bmi(89, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(100, 1.80));
console.log(bmi(105, 1.80));
console.log(bmi(106, 1.80));
console.log(bmi(108, 1.80));
console.log(bmi(70, 1.80));
console.log(bmi(60, 1.80));

// #89. Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  let bmiCalc = (weight / (height ** 2)).toFixed(1);
  if (bmiCalc <= 18.5) return `${bmiCalc} == Underweight`;
  else if (bmiCalc <= 25) return `${bmiCalc} == Normal`;
  else if (bmiCalc <= 30) return `${bmiCalc} == Overweight`;
  else return `${bmiCalc} == Obese`;
}
console.log(bmi(66.5, 1.80));
console.log(bmi(80, 1.80));
console.log(bmi(89, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(100, 1.80));
console.log(bmi(105, 1.80));
console.log(bmi(106, 1.80));
console.log(bmi(108, 1.80));
console.log(bmi(70, 1.80));
console.log(bmi(60, 1.80));

// #90. Fuel Calculator
// In this kata you will have to write a function that takes litres and pricePerLitre as arguments.
// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre.
// But total discount per litre cannot be more than 25 cents. Return the toal cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
function fuelPrice(l, pPerL) {
  let pr5 = Number((l * (pPerL - 0.05)).toFixed(2));
  let pr10 = Number((l * (pPerL - 0.10)).toFixed(2));
  let pr15 = Number((l * (pPerL - 0.15)).toFixed(2));
  let pr20 = Number((l * (pPerL - 0.20)).toFixed(2));
  let pr25 = Number((l * (pPerL - 0.25)).toFixed(2));
  return (l > 2 && l < 4) ? pr5 : (l >= 4 && l < 6) ? pr10 : (l >= 6 && l < 8) ? pr15 : (l >= 8 && l < 10) ? pr20 : (l >= 10) ? pr25 : pr25;
}
console.log(fuelPrice(5, 1.23)); // 5.65
console.log(fuelPrice(8, 2.5)); // 18.40
console.log(fuelPrice(5, 5.6)); // 27.50

// #91. Fuel Calculator
// In this kata you will have to write a function that takes litres and pricePerLitre as arguments.
// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre.
// But total discount per litre cannot be more than 25 cents. Return the toal cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
function fuelPrice(litres, pricePerLitre) {
  if (litres > 2 && litres < 4) return Number((litres * (pricePerLitre - 0.05)).toFixed(2));
  else if (litres >= 4 && litres < 6) return Number((litres * (pricePerLitre - 0.10)).toFixed(2));
  else if (litres >= 6 && litres < 8) return Number((litres * (pricePerLitre - 0.15)).toFixed(2));
  else if (litres >= 8 && litres < 10) return Number((litres * (pricePerLitre - 0.20)).toFixed(2));
  else if (litres >= 10) return Number((litres * (pricePerLitre - 0.25)).toFixed(2));
}
console.log(fuelPrice(5, 1.23)); // 5.65
console.log(fuelPrice(8, 2.5)); // 18.40
console.log(fuelPrice(5, 5.6)); // 27.50

// #92. Количество положительных и количество отрицательных чисел в наборе
// Дано три числа. Найдите, сколько среди них положительных чисел, и сколько отрицательных чисел.
// Напишите функцию с именем countOfPosAndNeg, которая принимает три числа a, b, c в качестве аргументов и возвращает количество положительных и количество отрицательных чисел в этом наборе в виде массива [countOfPositive, countOfNegative]
function countOfPosAndNeg(a, b, c) {
  let abc = [a, b, c];
  let countOfPositive = 0, countOfNegative = 0;
  for (let i = 0; i < abc.length; i++) {
    (abc[i] > 0) ? countOfPositive++ : (abc[i] < 0) ? countOfNegative++ : 0;
  }
  return [countOfPositive, countOfNegative];
}
console.log(countOfPosAndNeg(5, 13, 9)); // должна возвратить 3, 0
console.log(countOfPosAndNeg(-2, 7, 9)); // должна возвратить 2, 1
console.log(countOfPosAndNeg(-1, 7, 0)); // должна возвратить 1, 1

// #93. Не самое большое и не самое маленькое число
function middleOfThree(a, b, c) {
  let arr = [a, b, c];
  arr = arr.sort((a, b) => a - b);
  return arr[1];
}
console.log(middleOfThree(5, 15, 18)); // должна возвратить 15
console.log(middleOfThree(20, 9, 31)); // должна возвратить 20
console.log(middleOfThree(20, 9, 12)); // должна возвратить 12
console.log(middleOfThree(3, 4, -4)); // должна возвратить 3
console.log(middleOfThree(2, 3, -5)); // должна возвратить 2
console.log(middleOfThree(10, 5, 1)); // должна возвратить 5
console.log(middleOfThree(-2, 5, 8)); // должна возвратить 5

// #94. У какой фигуры площадь больше?
function areaComparison(r, a) {
  return ((r *= r * Math.PI) > (a *= a)) ? 'circle' : ((a *= a) > (r *= r * Math.PI)) ? 'square' : ((a *= a) === (r *= r * Math.PI)) ? 'the same' : 'square';
}
console.log(areaComparison(1, 1)); // должна возвратить circle
console.log(areaComparison(2, 5)); // должна возвратить square
console.log(areaComparison(3, 6)); // должна возвратить square

// #95. Какая точка ближе к началу координат?
// Даны координаты двух точек (x1, y1) и (x2, y2) в прямоугольной системе координат. Определить, какая из точек находится ближе к началу координат.
// Напишите функцию с именем distanceComparison, которая принимает координаты точек (x1, y1) и (x2, y2)
function distanceComparison(x1, y1, x2, y2) {
  let d1 = Math.sqrt((y1 * y1) + (x1 * x1));
  let d2 = Math.sqrt((y2 * y2) + (x2 * x2));
  return (d1 < d2) ? 1 : (d1 > d2) ? 2 : (d1 === d2) ? 0 : 1;
}
console.log(distanceComparison(1, 1, 2, 2));      // должна возвратить 1
console.log(distanceComparison(3, 4, 3, 0));      // должна возвратить 2
console.log(distanceComparison(3, 3, -3, 3));     // должна возвратить 0
console.log(distanceComparison(4, -4, 3, 5));     // должна возвратить 1
console.log(distanceComparison(6, -7, 9, 2));     // должна возвратить 0
console.log(distanceComparison(1, -8, -6, 3));    // должна возвратить 2
console.log(distanceComparison(-10, -2, -7, -5)); // должна возвратить 2
console.log(distanceComparison(-1, 4, -2, -3));   // должна возвратить 2
console.log(distanceComparison(2, 5, -1, 6));     // должна возвратить 1

// #96. Holiday VI - Shark Pontoon
// You are given 5 variables;
// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
// sharkSpeed = how fast it can move in metres/second.
// pontoonDistance = how far you need to swim to safety in metres.
// youSpeed = how fast you can swim in metres/second.
// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
// The pontoon, you, and the shark are all aligned in one dimension.
// If you make it, return "Alive!", if not, return "Shark Bait!".
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) sharkSpeed /= 2;
  return ((pontoonDistance / youSpeed) < (sharkDistance / sharkSpeed)) ? "Alive!" : "Shark Bait!";
}
console.log(shark(12, 50, 4, 8, true)); // Alive!
console.log(shark(7, 55, 4, 16, true)); // Alive!
console.log(shark(24, 0, 4, 8, true));  // Shark Bait!
console.log(shark(10, 8, 3, 7, true));  // Shark Bait!
console.log(shark(45, 159, 0, 0, true)); // Alive!
console.log(shark(6, 136, 1, 16, true)); // Alive!
console.log(shark(17, 123, 4, 16, false)); // Alive!

// #97. Find the sum of the roots of a quadratic equation
// Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing.
// If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots.
// There will always be valid arguments.
function solve(a, b, c) {
  var result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  return (isNaN(result1) || isNaN(result2)) ? null : (typeof result1 === 'number' && typeof result2 === 'number') ? Number((result1 + result2).toFixed(2)) : null;
}
console.log(solve(1, -35, -23)); // 35
console.log(solve(1, -5 / 3.0, -26)); // 1.67
console.log(solve(6, 4, 8)); // null

// #98. Lucky number
// Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
// 1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
// Function will return true for lucky numbers and false for others.
function isLucky(n) {
  let arr = n.toString().split('').map(Number);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return (count % 9 === 0 || count === 0) ? true : false;
}
console.log(isLucky(1892376)); // true
console.log(isLucky(189237)); // false
console.log(isLucky(1098)); // true
console.log(isLucky(22869)); // true
console.log(isLucky(0)); // true

// #99. Lucky number
// Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
// 1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
// Function will return true for lucky numbers and false for others.
const isLucky = n => n % 9 === 0;
console.log(isLucky(1892376)); // true
console.log(isLucky(189237)); // false
console.log(isLucky(1098)); // true
console.log(isLucky(22869)); // true
console.log(isLucky(0)); // true

// # 100. Is this a triangle?
// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}
console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(5, 1, 5)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(-1, -2, -2)); // false

// # 101. number with 3 roots
// In mathematics, an nth root of a number x, where n is usually assumed to be a positive integer, is a number r which, when raised to the power n, yields x: r^n=x,
// Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0), return true if it exists, false if not.
// 2nd root of 256 is 16
// 4th root of 256 is 4
// 8th root of 256 is 2
// perfectRoots(256) // returns true 
function perfectRoots(n) {
  return (Math.sqrt(Math.sqrt(Math.sqrt(n)))) % 1 === 0;
}
console.log(perfectRoots(256)); // true
console.log(perfectRoots(1000)); // false
console.log(perfectRoots(6561)); // true
console.log(perfectRoots(390625)); // true
console.log(perfectRoots(16000000)); // false
console.log(perfectRoots(5764801)); // true

// # 102. Triangular Treasure
// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:
//  triangular(0) == 0
//  triangular(2) == 3
//  triangular(3) == 6
//  triangular(-10) == 0
function triangular(n) {
  return (n > 0) ? (n * (n + 1) / 2) : 0;
}
console.log(triangular(2)); // 3
console.log(triangular(4)); // 10

// # 103. if..else and ternary operator
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs,
// different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
// +---------------+-------------+
// |  numbers n    | price(cents)|
// +---------------+-------------+
// |n<5            |    100      |
// +---------------+-------------+
// |n>=5 and n<10  |     95      |
// +---------------+-------------+
// |n>=10          |     90      |
// +---------------+-------------+
function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
console.log(saleHotdogs(1)); // 100
console.log(saleHotdogs(4)); // 400
console.log(saleHotdogs(5)); // 475
console.log(saleHotdogs(9)); // 855
console.log(saleHotdogs(10)); // 900
console.log(saleHotdogs(100)); // 9000

// # 104. GCD sum
// Description: Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1
// For example: 
// Given sum = 12 and gcd = 4...
// solve(12,4) = [4,8]. The two numbers 4 and 8 sum to 12 and have a gcd of 4.
// solve(12,5) = -1. No two numbers exist that sum to 12 and have gcd of 5.
// solve(10,2) = [2,8]. Note that [4,6] is also a possibility but we pick the one with the lower first element: 2 < 4, so we take [2,8].
function solve(s, g) {  
  return (s % g === 0) ? [(s + g) - s, s - g] : -1;
}
console.log(solve(6, 3)); // [3, 3]
console.log(solve(8, 2)); // [2, 6]
console.log(solve(10, 3)); // -1
console.log(solve(12, 4)); // [4, 8]
console.log(solve(12, 5)); // -1

// # 105 Cat Years, Dog Years (2)
// // Cat Years:
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// // Dog Years:
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
const ownedCatAndDog = function (catYears, dogYears) {
  let result = [catYears, dogYears];
  result.forEach(function (v, i) {
    if (v < 15) {
      result[i] = 0;
    } else if (v == 15 || v < 24) {
      result[i] = 1;
    } else {
      if ((v - 15) <= 9) {
        result[i] = 2;
      } else {
        result[i] = parseInt(((v - 24) / (i > 0 ? 5 : 4)) + 2);
      }
    }
  });
  return result;
}
console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(56, 64)); // [10, 10]
console.log(ownedCatAndDog(0, 0)); // [0, 0]
console.log(ownedCatAndDog(20, 85)); // [1, 14]

// # 106 Cat Years, Dog Years (2)
// // Cat Years:
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// // Dog Years:
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
const ownedCatAndDog = function (catYears, dogYears) {
  let result = [catYears, dogYears];
  if (catYears <= 15) {
    catYears = 1;
  } else {
    if ((catYears - 15) <= 9) {
      catYears = 2;
    } else {
      catYears = parseInt(((catYears - 24) / 4) + 2);
    }
  }
  if (dogYears <= 15) {
    dogYears = 1;
  } else {
    if ((dogYears - 15) <= 9) {
      dogYears = 2;
    } else {
      dogYears = parseInt(((dogYears - 24) / 5) + 2);
    }
  }
  return [catYears, dogYears];
}
console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(56, 64)); // [10, 10]
console.log(ownedCatAndDog(0, 0)); // [0, 0]
console.log(ownedCatAndDog(20, 85)); // [1, 14]

// # 107 Cat Years, Dog Years (2)
// // Cat Years:
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// // Dog Years:
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
const ownedCatAndDog = (catYears, dogYears) => [
  (catYears < 24) ? catYears / 15 : (catYears - 16) / 4,
  (dogYears < 24) ? dogYears / 15 : (dogYears - 14) / 5
].map(Math.floor);
console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(56, 64)); // [10, 10]
console.log(ownedCatAndDog(0, 0)); // [0, 0]
console.log(ownedCatAndDog(20, 85)); // [1, 14]

// # 108 Cat Years, Dog Years (2)
// // Cat Years:
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// // Dog Years:
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
const ownedCatAndDog = function (catYears, dogYears) {
  let cat = (catYears < 24) ? catYears / 15 : (catYears - 16) / 4;
  let dog = (dogYears < 24) ? dogYears / 15 : (dogYears - 14) / 5;
  return [Math.floor(cat), Math.floor(dog)];
}
console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(56, 64)); // [10, 10]
console.log(ownedCatAndDog(0, 0)); // [0, 0]
console.log(ownedCatAndDog(20, 85)); // [1, 14]

// # 109. Приветствие на разных языках
function greetings(name, language) {
  let arrL = [];
  switch (name, language) {
    case 'English': arrL.push('Hello'); return `${arrL} ${name}!`;
    case 'German': arrL.push('Hallo'); return `${arrL} ${name}!`;
    case 'French': arrL.push('Bonjour'); return `${arrL} ${name}!`;
    case 'Spanish': arrL.push('Hola'); return `${arrL} ${name}!`;
    case 'Italian': arrL.push('Saluto'); return `${arrL} ${name}!`;
    case 'Russian': arrL.push('Привет'); return `${arrL} ${name}!`;
    case 'Czech': arrL.push('Nazdar'); return `${arrL} ${name}!`;
    default: return `Hello ${name}!`;
  }
}
console.log(greetings('Peter', 'Russian')); // должна возвратить "Привет Peter!"
console.log(greetings('Ann', 'Chinese')); // должна возвратить "Hello Ann!"
console.log(greetings('Lera', 'Ukrainian')); // должна возвратить "Hello Ann!"
console.log(greetings('Amber', 'German')); // должна возвратить "Hallo Amber!"
console.log(greetings('Betty', 'French')); // должна возвратить "Bonjour Betty!"


// # 110. Какой это день недели?
// Дни недели пронумерованы так: 0 - 'Sunday', 1 - 'Monday', 2 - 'Tuesday', 3 - 'Wednesday', 4 - 'Thursday', 5 - 'Friday', 6 - 'Saturday'.
// Дано целое число k (от 1 до 365). Определите название дня недели для k-го дня года, если считать, что 1 января был понедельник.
// Напишите функцию с именем dayOfWeek, которая принимает число k в качестве аргумента (число от 1 до 365 - номер дня года) и возвращает название дня недели.
function dayOfWeek(k) {
  switch (k % 7) {
    case 0: return 'Sunday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
    default: return undefined;
  }
}
console.log(dayOfWeek(3)); // должна возвратить "Wednesday"
console.log(dayOfWeek(14)); // должна возвратить "Sunday"

// # 111. Какой это день недели?
// Дни недели пронумерованы так: 0 - 'Sunday', 1 - 'Monday', 2 - 'Tuesday', 3 - 'Wednesday', 4 - 'Thursday', 5 - 'Friday', 6 - 'Saturday'.
// Дано целое число k (от 1 до 365). Определите название дня недели для k-го дня года, если считать, что 1 января был понедельник.
// Напишите функцию с именем dayOfWeek, которая принимает число k в качестве аргумента (число от 1 до 365 - номер дня года) и возвращает название дня недели.
function dayOfWeek(k) {
  let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return arr[k % 7];
}
console.log(dayOfWeek(3)); // должна возвратить "Wednesday"
console.log(dayOfWeek(14)); // должна возвратить "Sunday"

// # 111. Reverse a string and check if the string is a palindrome
function palindrome(str) {
  str = str.toLowerCase();
  let strLen = str.length;
  for (let i = 0; i < strLen / 2; i++) {
    if (str[i] !== str[strLen - 1 - i]) return `${str.split('').reverse().join('')} isn't a palindrome`;
  }
  return `${str.split('').reverse().join('')} is a palindrome`;
}
console.log(palindrome('soMe word'));
console.log(palindrome('dlroW olleH'));
console.log(palindrome('raCecar'));