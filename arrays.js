//Массив   (https://youtu.be/tLZOxD-TttM)
// let arr = [];
// console.log(arr);
// console.log(typeof arr);


// let arr = [5, 2, -1, 10, 15, 3, 13];
// console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[1]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);
// console.log([].length);
// console.log(arr.length === 0);

// let arr = [, , 5];
// console.log(arr);
// console.log(arr.length);


// let fruits = ['lime', 'apple', 'mango'];
// console.log(fruits[1]);
// console.log(fruits[1][0]);
// fruits.push('banana');
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[3]);
// let r = fruits.push('kiwi');
// console.log(r);
// console.log(fruits);

// let users = [{name:"Ann"}, {name:"Bob"}];
// console.log(users);
// console.log(users[0].name);


// let salaries = [[12, 15, 18], [10, 11, 30], [15, 24, 70, 50]]
// console.log(salaries[2][2]);

// let mix = ['2', 12, true, null, NaN, -12.9, 'hello'];


// let str = 'hello';
// str[0] = 'H';
// console.log(str);  //строки иммутабельны

// let arr = [1,2,3];

// arr[0] = arr[0] * 10;
// console.log(arr);
// let mix = ['1', '2', '3'];
// mix[1] = +mix[1];
// console.log(mix);

// let s = '12';
// s = 12;

//добавление элемента в конец массива push()
// let arr = [1,2,3];
// arr.push(4, 5);
// // console.log(arr);
// arr.push([10,11])
// // console.log(arr);
// let q = arr.push(100); //новая длина массива (кол.элементов)
// console.log(arr);
// console.log(q);


// //удаление последнего элемента массива pop()
// arr.pop();
// arr.pop();
// // console.log(arr);
// let w = arr.pop(); //удаленный элемент
// // console.log(arr);
// // console.log(w);

// //добавление элемента в начало массива unshift()
// arr.unshift(100);
// // console.log(arr);
// let z = arr.unshift(200); //новая длина массива
// console.log(arr);
// console.log(z);

// //удаление первого элемента массива shift()
// arr.shift();
// console.log(arr);
// let x = arr.shift(); //удаленный элемент
// console.log(arr);
// console.log(x);


// Цикл for 

// //напечатать числа 1, 2, 3, 4, 5

// for(let x = 1; x <= 5; x++){
//   console.log(x);
// }


//создать массив из чисел [1,2,3,....,100]
// let arr = [];
// for(let x = 1; x <= 100; x++){
//   arr.push(x);
// }
// // console.log(arr);




// for(let x = 1; x <= 10; x++){
//   arr.pop();
// }
// // console.log(arr);




// for(let x = 1; x <= 20; x++){
//   arr.shift();
// }
// // console.log(arr);



// for (let x = 1; x <= 5; x++){
//   arr.unshift('Hello');
// }
// console.log(arr);




// let person = {
//   name:'Alice',
//   age:20,
//   address:{
//     state: "CA",
//     city:'San Diego'
//   },
//   birth:{
//     year:2000,
//     city:'Moscow',
//     country:'Russia',
//   }
// }
// console.log(person.address.city);