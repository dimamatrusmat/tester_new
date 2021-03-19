// let num = 49;   

// switch (num){
//     case num < 49:
//         console.log('False');
//         break;
//     case num > 100:
//         console.log('False');
//         break;
//     case num > 80:
//         console.log('False');
//         break;
//     case 50:
//         console.log('True');
//         break;
//     default:
//         console.log('PPs');
//         break;
// }



// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++
// }
// while (num < 55)

// for (let i = 1; i < 8; i++){
//     if (i == 6){
//         continue;
//     }
//     console.log(i);
// }

// let num = 30;

// function showFirstMessage(text) {
//     alert(text);
    
//     let num = 20;
//     console.log(num);
    
// }

// showFirstMessage('Hello');
// console.log(num);


// function calc(a, b) {
//     return a + b
// }
// console.log(calc(1, 2));

// function retVal(){
//     let num = 50;
//     return num;
// }

// let anotherNum = retVal();
// console.log(anotherNum)
// let calc = (a,b) => a + b

// console.log(calc(2,5))

// function first() {
//     setTimeout( function(){
//         console.log(1);
//     }, 500)
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function test(lang, callback){
//     console.log('I lear ' + lang);
//     callback();
// }

// test('Javascript', function(){
//     console.log('I prakting 3')
// })

// let nameFunction = (a, b) => a + b;

// console.log(nameFunction(1, 2))

// let options = {
//     width: 100,
//     hight: 200,
//     name: "u"
// };

// options.text  = "free";
// options.dorder = {
//     color: 'red',
//     bg: 'blue'
// }

// delete options.text; // Удаляем свойство

// console.log(options)

// for (let key in options) {
//     console.log('Свойство: ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length)

// arr.pop() //Удаляет последний элемень
// arr.shift() // Удаляет первый элемент масива
// arr.push(4) //Добавляет в конец масива элемент
// arr.unshift(1) //Добавляет элемент в начало масива

// let arr = ['Four', 2,  "Three", 4, 5];

// arr[10] = 10;

// arr.forEach(function(item, i, mass) {
//     console.log( i + ': ' + item + ' (массив: ' +mass + ')')
// });

// console.log(arr)

// let mass = [1,3,4,6,9];
// //key of -> получаем аргумент масива
// //key in -> поулчаем значение масива
// for(let key of mass){
//     console.log(key)
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(','); // Делит 1 строку на аргументы масива с помощью выбранного символа в скобках
// console.log(arr)

// let arr = ['dsa', 'gdf', 'gdfg'],
//     i = arr.join(' '); // Соединяет все аргементы масива через разделитель в скобках

// console.log(i)

// let arr = ['1', '100', '3', '2'],
//     i = arr.sort(comparentNum);

// function comparentNum(a, b) {
//     return a-b;
// }

// console.log(arr);

// let car = {
//     health: 200,
//     color: 'blue'
// };

// let reno = {
//     health: 100
// };

// reno.__proto__ = car;

// console.log(car);
// console.log(reno.color);

// let sting = '589 291 1229 1201 847 636 1015 1070 555 1076 335 247 1190 253 61 288 157 169 461 417 1208 61 364 1090 152 290 612 68 1000 445 1163 484 408 99 441 1290 1290 1055 1022 1156 571 921 357 868 1255 359';
// let arr = sting.split(' ');
// let ans = 0;
// for (let i = 0; i < arr.length; i++){
//     ans += parseInt(arr[i]);
// }

// console.log(ans)
///////////////////////////////
// const startStrkng = '960462 155444, 313148 744689, 688123 718293, 281320 569960, 179791 549585, 99536 129642, 991329 973547, 432259 467203, 838612 591855, 301694 914792, 103912 776721, 278652 767206, 955217 285640, 78214 865297, 246613 613727';
// let myArr = startStrkng.split(',');
/////////

let yourNumberSum = +prompt('Введите количество операций суммы');
    ansArr = [],
    ans;

while (yourNumberSum > 0) {
    let yourNumbers = prompt('Введиде 2 числа для суммы через пробел'),
        finishNumbers = yourNumbers.split(' '),
        sum = 0;

    for (let key of finishNumbers){
        sum += +key;
    }

    ansArr.push(sum);

    yourNumberSum--;
}
ans = ansArr.join(' ') //Превращаем массив в строку

console.log('Ваша сумма: ' + ans);

//Решение для этого задания
let myArr = '960462 155444,313148 744689,688123 718293,281320 569960,179791 549585,99536 129642,991329 973547,432259 467203,838612 591855,301694 914792,103912 776721,278652 767206,955217 285640,78214 865297,246613 613727',
    oneArr = myArr.split(','),
    twoArr = []

for (let i = 0; i < oneArr.length; i++){
    let Arr = oneArr[i].split(' '),
        num = 0;
    for(let key of Arr){
        num += +key;
    }
    twoArr.push(num);
}
console.log(twoArr.join(' '))
