// sort

// сортировка массива строк
let words = ['lime', 'banana', 'apple', 'grape'];
words.sort();
console.log(words);




let letters = ['w', 'b', 'hi', 'e'];
letters.sort();
console.log(letters);




// сортировка массива цифр
let digits = [4, 1, 8, 9, 2, 1, 3, 1, 5];
digits.sort();
console.log(digits);




// сортировка массива чисел
let nums = [100, 43, 1, 4, 5, 24, 1025];
nums.sort();
console.log(nums); //числа сортируются как строки (лексикографически)
// console.log('1025' < '4');


let nums = [100, 43, 1, 4, 5, 24, 1025];
nums.sort((a, b) => a - b);
//если a > b то функция возвратит полож. значение, и элементы 
//поменяются местами (сортировка по возрастанию)
console.log(nums);

// [100, 43, 1, 4, 5, 24, 1025];
// [43, 100, 1, 4, 5, 24, 1025];
// [43, 1, 100, 4, 5, 24, 1025];
// [43, 1, 4, 100, 5, 24, 1025];
// [43, 1, 4, 5, 100, 24, 1025];
// [43, 1, 4, 5, 24, 100, 1025];

// 2 итерация:
// [43, 1, 4, 5, 24, 100, 1025];
// [1, 43, 4, 5, 24, 100, 1025];
// [1, 4, 43, 5, 24, 100, 1025];
// [1, 4, 5, 43, 24, 100, 1025];
// [1, 4, 5, 24, 43, 100, 1025];
// 3 итерация --> массив отсортирован!

let nums = [100, 43, 1, 4, 5, 24, 1025];
nums.sort((a, b) => b - a);
//если b > a то функция возвратит полож. значение, и элементы 
//поменяются местами (сортировка по убыванию)
console.log(nums);




// Сортировка с помощью отдельной функции
function compare(a, b) {
    return a - b;
}
let arr = [5, 23, 9, 267, 1, -3];
arr.sort(compare);
console.log(arr);



// Сортировка с помощью отдельной функции
function compare(a, b) {
    return a > b ? 1 : -1;
}
let arr = [5, 23, 9, 267, 1, -3];
arr.sort(compare);
console.log(arr);




let words = ['lime', 'grapefruit', 'banana', 'apple', 'grape'];
//отсортировать в порядке возрастания длин слов
words.sort((a, b) => a.length - b.length)
console.log(words);




let users = [ ['anna', 25], ['bob', 12], ['alice', 17] ];
//сортировка по именам (по первому параметру)
// users.sort();
// console.log(users);
//сортировка по возрасту (по второму параметру)
users.sort((a, b) => a[1] - b[1]);
console.log(users);



let arr = ['grapefruit', 'banana', 'pear', 'lime', 'kiwi', 'apple'];
// сортировка по двум параметрам - сначала по длине слова, 
// а если длины слов равны, то по алфавиту
arr.sort((a, b) => a.length - b.length)
console.log(arr);




function compare(a, b) {
    if (a.length === b.length) {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    } else {
        return a.length - b.length;
    }
}
arr.sort(compare);
console.log(arr);



let arr = ['grapefruit', 'banana', 'pear', 'lime', 'kiwi', 'apple'];
arr.sort((a, b) => {
    if (a.length === b.length) {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    } else {
        return a.length - b.length;
    }
})
console.log(arr);




let arr = ['grapefruit', 'banana', 'pear', 'lime', 'kiwi', 'apple'];
arr.sort((a, b) => a.length === b.length ? (a > b ? 1 : -1) : a.length - b.length);
console.log(arr);




// сортировка по последней букве слов
let arr = ['grapefruit', 'banana', 'pear', 'lime', 'kiwi', 'apple'];
arr.sort((a, b) => a[a.length - 1] > b[b.length - 1] ? 1 : -1);
console.log(arr);