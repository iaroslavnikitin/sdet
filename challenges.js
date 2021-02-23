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
// ешите линейное уравнение ax + b = 0, если даны коэффициенты a и b (a не равно 0).
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