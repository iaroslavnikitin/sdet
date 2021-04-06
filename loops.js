// Циклы while, for, do while    (https://youtu.be/EVDC_61Z6f4)

//while цикл с предусловием

// while (условие){
//   тело цикла
// }

//напечатать в консоли числа 1,2,3,4,5
// let x = 1;
// while (x <= 5){
//   console.log(x);
//   x++;
// }

// 2,4,6,8,10,..., 30
// let x = 2;
// while(x <= 30){
//   console.log(x);
//   x += 2;
// }

// 1+2+3+4+...+100;
// let sum = 0;
// let x = 1;
// while (x <= 100){  
//   sum = sum + x; //1+2=3+3=6+4=10+5=15...
//   x++;           //6
// }
// console.log(sum);

//"1 monkey 2 monkey 3 monkey ... 30 monkey"

// let x = 1;
// let str = '';
// while (x <= 30){
//   if (x < 30){
//     str = str + x + " monkey ";
//   } else {
//     str = str + x + " monkey";
//   }
//   x++;
// }
// console.log(str);


//напечатать в консоли числа 1,2,3,4,5
// let x = 1;
// while (x <= 5){
//   console.log(x);
//   x++;
// }


//for
// for(let x = 1; x <= 5; x++){
//   console.log(x);
// }
// //"5 seconds... 4 seconds... 1 second..."
// let s = '';
// for(let x = 5; x >=1; x--){
//   s = s + (x > 1? `${x} seconds... ` : '1 second...');
// }
// console.log(s);


//do while цикл с постусловием

// do {
//   тело цикла выполняется минимум 1 раз
// }(условие);

// let x = 1;
// do {
//   console.log(x);
//   x++;
// } while (x < 5);


//заполнить массив n числами '1'
// let n = 2;
// let arr = [];
// do {
//   arr.push(1);
// } while(arr.length < n);
// console.log(arr);


//вычислить n в степени k, не используя операцию **

// let n = 2;
// let k = 10;

// let power = 1;
// let x = 1;
// while (x <= k){
//   power = power * n;
//   x++;
// }
// console.log(power);


// let arr = [];
// for (let i = 1; i <= 100; i++){
//   if (i % 15 === 0){
//     arr.push('TickTock')
//   } else if (i % 3 === 0){
//     arr.push('Tick');
//   } else if (i % 5 === 0){
//     arr.push('Tock')
//   } else {
//     arr.push(i)
//   }
// }
// console.log(arr);




// ======== --------- ======== --------- ======== --------- ======== ---------




//Циклы. Комбинирование циклов и условных операторов     (https://youtu.be/SZimwqVSZi8)

//1+2+3+4...+10
// let sum = 0;
// for(let x = 1; x <= 10; x++){
//   sum = sum + x;
// }
// console.log(sum);




// // Cумма чисел от a до b
// let a = 10;
// let b = 1;
// let sum = 0;
// for(let x = a; x <= b; x++){
//   sum = sum + x;
// }
// console.log(sum);


// let a = 1;
// let b = 100;
// let min;
// let max;
// if (a < b) {
//   min = a; max = b;
// } else {
//   min = b; max = a;
// }
// // console.log(min, max);

// let sum = 0;
// for(let x = min; x <= max; x++){
//   sum = sum + x;
// }
// console.log(sum);


// a = prompt("Enter number")
// console.log(a * 2);


// p0 - начальное количество населения
// percent - процент роста населения
// aug - ежегодно прибывает население (чел)
// p - количество населения
// Через сколько лет население города превысит p?

// let p0 = 10000;
// let percent = 7;
// let aug = 52;
// let p = 20000;

// let years = 0;
// while (p0 <= p){
//   p0 = p0 + p0 / 100 * percent + aug;
//   years++;
//   console.log(`Year: ${years}, people: ${p0}`);
// }
// console.log(years);
// console.log(p0);



//Дано число. Получить массив делителей этого числа
// let num = 120;   // ----> [ 1,2,3,4,6,12]

// let arr = [];
// for (let divisor = 1; divisor <= num; divisor++){
//   if (num % divisor === 0){
//     arr.push(divisor)
//   }
// }
// console.log(arr);


//построить таблицу умножения
//на 2:

// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// 4 * 2 = 8
// ...
// 10 * 2 = 20

// for(let i = 1; i <= 10; i++){
//   console.log(`${i} * 2 = ${i*2}`);
// }

//построить полную таблицу умножения

// for (let j = 1; j <= 10; j++){
//   for (let i = 1; i <= 10; i++){
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
//   console.log('-------------');
// }


//перевернуть строку hello ---> olleh
// let str = 'hello world';

// let t = ''; //  o+ l+ l+ e+ h+''
// for (let i = 0; i < str.length; i++){
//   t = str[i] + t;
// }
// console.log(t);

// let r = '';
// for (let i = str.length-1; i >=0; i--){
//   r = r + str[i];
// }
// console.log(r);