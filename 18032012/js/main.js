//let es = document.querySelector('.es');
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

// let yourNumberSum = +prompt('Введите количество операций суммы');
//     ansArr = [],
//     ans;

// while (yourNumberSum > 0) {
//     let yourNumbers = prompt('Введиде 2 числа для суммы через пробел'),
//         finishNumbers = yourNumbers.split(' '),
//         sum = 0;

//     for (let key of finishNumbers){
//         sum += +key;
//     }

//     ansArr.push(sum);

//     yourNumberSum--;
// }
// ans = ansArr.join(' ') //Превращаем массив в строку

// console.log('Ваша сумма: ' + ans);

// //Решение для этого задания
// let myArr = '960462 155444,313148 744689,688123 718293,281320 569960,179791 549585,99536 129642,991329 973547,432259 467203,838612 591855,301694 914792,103912 776721,278652 767206,955217 285640,78214 865297,246613 613727',
//     oneArr = myArr.split(','),
//     twoArr = []

// for (let i = 0; i < oneArr.length; i++){
//     let Arr = oneArr[i].split(' '),
//         num = 0;
//     for(let key of Arr){
//         num += +key;
//     }
//     twoArr.push(num);
// }
// console.log(twoArr.join(' '))
////////////
//// Minimum of Two
//////////////

// let es = document.querySelector('.es'),
//     startString = '6724654 -5788794 9302189,-2509656 -9562514 9524747,-3850553 2495829 7662609,6866709 7758721 8327952,-3414623 -8164372 2744564,-9599289 -467481 584895,2857905 7602006 5753823,8924072 293070 -1206818,5734683 2070454 1622700,-9576767 4397224 -4679283,8437206 -423741 -3402385,2120698 3058196 4788431,-4001561 5966585 2218359,-8820845 1168546 8886672,2720881 -2433567 -1508478,5895790 1400186 -8717994,4412761 9844450 2787565,4188966 2518225 1848443,4458120 6950638 9853055,-9378455 -6702157 1850921,-9255417 -1089176 -6205487,7437420 7913619 6126218,3100625 -4386800 9975938,6173397 -1586183 -2571734,-7919598 1228651 -2752023,5742485 2406399 3687841,1927468 -5184238 939757',
//     ans = [];

//     StringGo = startString.split(',');

//     function compareInt(a, b){
//         return (a - b);
//     }


//     for (let i = 0; i < StringGo.length; i++){
//         let a = StringGo[i].split(' ').sort(compareInt);
//         ans.push(a[0]);
//     }


// es.innerHTML = ans.join(' ');
////////////////////
/*10991 1928,7661394 76,4304049 89,9339 472,-7535845 4832447,14797 888,90 12,9251013 167,3070141 -4198265,12403 1652,119 14,16777 1808,78 4,8525 1102,13853 526,1035082 456,-6491809 -3766509,281071 609289,4941184 523,4092740 -1368971,-7396731 -2763990,-6581074 -259181,-7462976 979173,-4267675 3967789,105 6,7117548 758,46 4,2335485 869,9 6,3119648 841*/

// let es = document.querySelector('.es'),
//     input = document.querySelector('.input'),
//     bth = document.querySelector('.bth'),
//     inputStr,
//     ans = [];

// function shareInt(a, b) {
//     return Math.round(a / b);
// }

// bth.addEventListener('click', function(){
//     inputStr = '10991 1928,7661394 76,4304049 89,9339 472,-7535845 4832447,14797 888,90 12,9251013 167,3070141 -4198265,12403 1652,119 14,16777 1808,78 4,8525 1102,13853 526,1035082 456,-6491809 -3766509,281071 609289,4941184 523,4092740 -1368971,-7396731 -2763990,-6581074 -259181,-7462976 979173,-4267675 3967789,105 6,7117548 758,46 4,2335485 869,9 6,3119648 841';
//     inputStr = inputStr.split(',');
//     //input.value.split(',');

//     for (let i = 0; i < inputStr.length; i++){
//         let one = inputStr[i].split(' ')[0];
//         let two = inputStr[i].split(' ')[1];

//         ans.push(shareInt(one, two))
//     }

//     es.innerHTML = ans.join(' ');

// });
/////////////////
// let ans = [],
//     es = document.querySelector('.es'),
//     startString = '403 393 353 351 149 132 418 546 228 259 473 237 144 361 597 549 488 295 571 542 106 354 581 302 288 406 568 134 361 315 328 75 231 175 200 300 151 387',
//     startArr;

//     function convertFar(fahren) {
//         let cels = Math.round((5 / 9) * (fahren - 32));
//         ans.push(cels);
//     }

//     startArr = startString.split(' ');
    
//     for (let i = 0; i < startArr.length; i++){
//         convertFar(startArr[i]);
//     }

//     es.innerHTML = ans.join(' ');

// let date = '15 12 23,20 3 90,17 7 82,22 12 68,22 1 72,3 9 34,22 6 80,1 1 35,20 20 57',
//     // 3381 13815 24641 28832 4140 5151 20720 630 33060
//     startDate = date.split(','),
//     ans = [];

//     function solveStep(a, b, n) {
//         return (2*a + b*(n-1))/2*n;
//     }

//     for (let key of startDate){
//         let arr = key.split(' ');
//         ans.push(solveStep(+arr[0], +arr[1],+arr[2]))

//     }

//     console.log(ans.join(' '))

// function cheackThree(a, b, c) {
//     let o = 0;
//     if (a > b - c){
//         o += 1;
//     }
//     if (b > a - c){
//         o += 1;
//     }
//     if (c > b - a){
//         o += 1;
//     }
//     if (o == 3) {
//         return 1;
//     } else {
//         return 0;
//     }
    
// }
// function solveInt(a,b) {
//     return b - a;
// }

// let startString = '509 1040 911,960 235 469,2720 1099 828,437 800 296,1008 567 820,591 228 251,604 657 538,287 579 321,135 389 183,415 839 601,889 1625 3991,526 1181 556,574 1307 303,1032 1033 566,819 1168 681,706 364 225,1154 907 1983,978 2670 1950,361 562 1129,1451 996 779,2689 938 1614,1108 892 1095,1743 1313 864', 
//     startArr = startString.split(','),
//     ans = [];

//     for(let key of startArr){
//         let arr = key.split(' ');
//         arr.sort(solveInt);
//         console.log(arr)
//         ans.push(cheackThree(+arr[0], +arr[1], +arr[2]));
//     }

// es.innerHTML = ans.join(' ');

// function solveFunction(x1, y1 ,x2, y2){
//     let a, b, c = [];
//     a = (y2-y1)/(x2-x1);
//     c.push(a);
//     b = y1 - a*x1;
//     c.push(b);
//     return c.join(' ') ;
// }

// let string = "724 44787 -836 -51933,-682 -39476 -293 -16914,590 58919 697 69512,394 16587 -545 -22851,193 -18460 425 -40268,662 36850 175 9578,887 -74722 -731 61190,327 27823 133 10751,493 29485 574 34183,775 9502 -243 -3732,96 8812 420 40564,-83 5914 -970 66230",
//     arr = string.split(','),
//     ans = [];

// for (let i = 0; i < arr.length; i++) {
//     let a = arr[i].split(' ');

//     ans.push(`(${solveFunction(a[0],a[1],a[2],a[3])})`);
// }

// es.innerHTML = ans.join(' ');

////////

// function convertInt(a, b, c) {
//     let r = a * b + c,
//         one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
//     switch(r == r){
//         case (r > 100000): 
//             one =  Math.floor(r / 100000);
//             r = r - one * 100000;
//         case r > 10000: 
//             two = Math.floor(r / 10000);
//             r = r - two * 10000;
//         case r > 1000: 
//             three = Math.floor(r / 1000);
//             r = r - three * 1000;
//         case r > 100: 
//             four =  Math.floor(r / 100);
//             r = r - four * 100;
//         case r > 10: 
//             five = Math.floor(r / 10);
//             r = r - five * 10;
//         case r > 1: 
//             six = Math.floor(r / 1);
//             r = r - six * 1;
//     }
//    es.innerHTML += " " +(one + two + three + four + five + six);
// }

// let string = '164 279 134,216 197 33,236 99 120,316 139 137,318 212 100,40 255 103,99 241 107,304 118 178,292 52 40,198 154 188,89 99 28,258 195 171',
//     arr = string.split(',');

//     for(let key of arr){
//         let inArr = key.split(' ');
//         convertInt(+inArr[0], +inArr[1], +inArr[2])
//     }
//////////////

// let box = document.querySelector('#cub'),
//     cubs = document.querySelectorAll('.cubs'),
//     rad = document.querySelectorAll('.rad');

// box.style.backgroundColor = 'blue';
// cubs[1].style.backgroundColor = '#e2e';
// cubs[1].style.borderRadius = '50%';
// rad[0].style.backgroundColor = 'red';
// rad[1].style.backgroundColor = 'yellow';
// rad[2].style.backgroundColor = '#132';

// rad.forEach(function(item, i, rads) {
//     item.style.backgroundColor = "blue"
// });

// let div = document.createElement('div'),
//     text = document.createTextNode('Ага тут текси');

// div.('')('cubs');
// //document.body.appendChild(div); //Добавляем див в конец бади
// //cub.appendChild(div)
// div.style.color = 'blue';

// // div.innerHTML = '<h1>Text is hello world</h1>';
// div.textContent = "<h1>Text is hello world</h1>" //Теги тут не робят
// document.body.insertBefore(div, cubs[2]); //Добавить перед 
// // document.body.removeChild(cubs[2])

// document.body.replaceChild(cubs[3], rad[1]) // 2 элемент заменяеться первым

// console.log(div)

// let btn = document.querySelectorAll('.btn'),
//     text = document.querySelector('#text'),
//     link = document.querySelector('a');

// // btn.addEventListener('click', function(event){
// //     let target = event.target;
// //     target.style.display = 'none';
// //     // console.log('Произошло событие ' + event.type + ' на элементе ' + event.target);
// // });

// // link.addEventListener('click', function(){
// //     event.preventDefault();
// //     console.log('Произошло событие ' + event.type + ' на элементе ' + event.target);
// // });

// btn.forEach(function(item){
//     item.addEventListener('click', function(){
//         console.log('Нажали!');
//     });
// });

// btn.forEach(function(item){
//     item.addEventListener('mouseleave', function() {
//         console.log('Вышли!');
//     });
// });

// let sourse = document.querySelector('#sourse'),
//     body = document.body,
//     color = ['blue', 'red', 'yellow'];

//     body.addEventListener('click', function() {
//     sourse.innerHTML = +sourse.innerHTML + 1;

//     body.style.backgroundColor = color[Math.round(Math.random() * color.length)];
// });

///////// Steam

// function round() {
    
//     var delay = 800 * Math.random();
//     setTimeout(function () {
//                     let box = document.querySelectorAll("#market_commodity_forsale_table > table > tbody > tr");
//         let priceS = document.querySelector('.priceFinish');
//         if (priceS == null){
//         for (let i = 1; i < box.length; i++){
//             let price = document.querySelector(`#market_commodity_forsale_table > table > tbody > tr:nth-child(${i}) > td:nth-child(1)`);
//             let priceFinish = document.createElement('tr');
        
//             if (price != null){
//                 price..add('div').add('price');
//                 priceFinish.innerHTML = price.innerHTML.replace(/[^\d,;]/g, '');
//                 priceFinish.innerHTML = priceFinish.innerHTML.replace(/,/, '.');
//                 priceFinish.innerHTML = (priceFinish.innerHTML - priceFinish.innerHTML * 0.13).toFixed(2);
//                 priceFinish.classList.add('priceFinish');
//                 price.appendChild(priceFinish);
//             }

//         }
//     }

//         round();
//     }, delay);
    
// }

// round();

// let timeId = setInterval(seyHello, 3000);

// // clearTimeout(timeId);

// function seyHello(){
//     console.log('Hello world');
// }


// let timeId = setTimeout(function log() {
//     console.log('hello');
//     setTimeout(log, 1000)
// })

// function log(){
//     console.log('hello')
// }

// let btn = document.querySelector('.btn'),
//     box = document.querySelector('.box'),
//     elem = document.querySelector('.boxIn');

// btn.addEventListener('click', myAnimatet)
// function myAnimatet(){
//     let pos = 0;

//     let id = setInterval(frame, 10);
//     function frame(){
//         if (pos == 460) {
//             function frameOne(){
//                 if (pos == 0) {
//                     setInterval(frame, 10);
//                 } else {
//                 pos--
//                 elem.style.top = pos + 'px';
//                 elem.style.left = pos + 'px';
//             }
//             }
//             setInterval(frameOne,10);
//         } else {
//             pos++
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';    }
//     }
// }

// let btnAn = document.querySelectorAll('btnAn'),
//     an = document.querySelector('.an')

// an.addEventListener('click', function(e){
//     // if (e.target && e.target.classList.contains('btnAn')){
//     //     console.log('hello')
//     // }
//     // if (e.target && e.target.matches('button.btnAn')){
//     //         console.log('hello')
//     //     }
//     if (e.target && e.target.className =='btnAn'){
//         console.log('hello')
//     }
// })

// let box = document.querySelector('.box'),
//     btn = document.getElementsByTagName('button')[0];

// let width = box.clientWidth,
//     height = box.clientHeight;


// console.log(box.getBoundingClientRect());

// console.log(document.documentElement.clientWidth)
// console.log(document.documentElement.clientHeight)


// btn.addEventListener('click',function(e){
//     box.scrollTop = 0;
// });

// scrollBy(0, 200)// Перемещение скрпула от текущего 
// scrollTo(0, 200) // Перемещение скрпула на определенную координату

///////////////////Fucnrtui

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('hello' + this.name)
//     }
// }

// User.prototype.exit = function (name) {
//     console.log('Пользователь ' + this.name + ' вышел')
// }

// let Ivan = new User('Ivan', 1),
//     Alex = new User('Alex', 2);

// console.log(Ivan)
// console.log(Alex)


// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello () {
//         console.log(`Hello! ${this.name}`)
//     }
//     exit () {
//         console.log(`Bye! ${this.name}`)
//     }
// }

// let Ivan = new User('Ivan', 23);
// let Alex = new User('Alex', 1);

// console.log(Ivan)
// console.log(Alex)

// Ivan.hello()
// Alex.exit()


// class User {
//     constructor (name, number, email) {
//         this.name = name;
//         this.number = number;
//         this.email = email;
//     }
//     hello () {
//         alert(`Hello ${this.name}. Вам скоро перезвонят на ${this.number}`)
//     }
// }

// let name = document.querySelector('#name'),
//     number = document.querySelector('#number'),
//     email = document.querySelector('#email'),
//     btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     let Ofuser = new User(name.value,number.value,email.value);
//     console.log(Ofuser)
// });
// 1) Вызов функции window/underfined
// function showThis(a, b) {
//     console.log(this)
//     function sum(){
//         console.log(this)
//         return this.a + this.b;
//         console.log(this.a);
//     }
//     console.log(sum())
// }
// showThis(3,5)
// 2) Метод объекта this = объекту

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function (a, b) {
//         console.log(this.a + this.b);
//     }
// };

// obj.sum();
// 3) Кострукстор (new) - this = новый созданный объект
// 4)  Конкретный контекст call, apply, bind

// let user = {
//     name: 'John'
// };

// function sayName(sur){
//     console.log(this);
//     console.log(this.name + sur)
// }
// console.log(sayName.call(user, 'Sergo')); // только строка
// console.log(sayName.apply(user, ['Sergo', 'Anna', 'Dima'])); // только массив

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2); // заменяет this на 2

// console.log(double(3))
//5) Оброботчик сам обрабатываекмый элемент
// let btn = document.getElementById('btn');

//     console.log(btn)

// btn.addEventListener('click', function() {
//     this.style.display = 'none'
// });
//////////Weighted sum of digits
// let string = '834 1410 12005 732161 55034910 12 13412021 90605441 440733715 34100886 15048231 4 16591136 779 1150142 64304111 2780686 1 4 476 142 68487 45675 16 116766800 95749 90497 203582 149106 3 565 390',
//     arrStr = string.split(' '),
//     ans = []

//     for (let i = 0; i < arrStr.length; i++){
//        let num = +arrStr[i],
//             number = 0,
//             nesNumber = 1;
//         for (let o = arrStr[i].length - 1; o >= 0; o--){
//             let ost = Math.floor(num/10**o);
//             number = number + ost * nesNumber;

//             num = num - ost*10**o;
//             nesNumber += 1;
           
//         }
//         ans.push(number);
//     }

// let wrap = document.querySelector('.wrap');

// wrap.innerHTML = ans.join(' ');

// Modulo and time difference

// let wrap = document.querySelector('.wrap'),
//     str = '1 4 22 40 24 17 56 37,1 16 17 2 13 7 41 41,22 10 53 59 29 2 12 49,12 8 55 42 24 16 42 2,10 15 30 38 17 16 58 12,6 16 53 45 13 22 50 51,15 14 28 6 18 22 30 27,15 19 0 38 24 22 17 17,8 0 59 47 25 18 51 32,8 17 8 8 11 6 30 52,17 16 57 46 23 10 48 30',
//     arrStr = str.split(','),
//     ans = [];

//     function howMuch(arr) {
//         let arr1 = [],
//             arr2 = [],
//             arr3 = [];
//         for (let i = arr.length; i > 0; i--){
//            if (i >= 5) {
//                arr2.unshift(arr.pop())
//            } else {
//                arr1.unshift(arr.pop())
//            }
//         }
//         let ans1 = 0,
//             ans2 = 0,
//             ans3 = 0;
        
//         ans1 = +arr1[0] * 86400 + +arr1[1] * 3600 + +arr1[2] * 60 + +arr1[3];
//         ans2 = +arr2[0] * 86400 + +arr2[1] * 3600 + +arr2[2] * 60 + +arr2[3]
        
//         ans3 = ans2 - ans1;
//         let day = Math.floor(ans3/86400);
//         ans3 -= day * 86400;
//         let hour = Math.floor(ans3/3600);
//         ans3 -= hour * 3600;
//         let min = Math.floor(ans3/60);
//         ans3 -= min * 60;
//         let sec = ans3;
//         ans3 -= sec;

//         arr3.push(day);
//         arr3.push(hour);
//         arr3.push(min);
//         arr3.push(sec);

//         ans.push('(' + arr3.join(' ') + ')');
//         wrap.innerHTML = ans.join(' ');
//     }


//     for (let i = 0; i < arrStr.length; i++) {
//         howMuch(arrStr[i].split(' '));
//     }
// let data = '75 + 9 + 7 * 578 * 2 + 553 + 71 + 297 + 84 + 2199 + 8 + 57 * 65 * 36 * 6 * 464 * 9002 + 5 * 1 + 78 * 4 + 90 + 3083 + 6825 * 23 + 1090 * 81 + 7469 * 38 * 431 * 1622 * 3576 + 9530 * 1 + 960 * 1 * 1 + 7 + 2 + 4 * 91 * 37 * 5 * 61 + 698 * 8221 + 4246 * 651 + 5 * 960 % 6428'
// //1480
// let input = document.querySelector('.str'),
//     btn = document.querySelector('.btn');

// btn.addEventListener('click', function(){
//     let str = input.value.split(' '),
//     num = BigInt(+str[0]),
//         ans = 0;
//     for (let i = 0; i < str.length - 1 ; i++) {
//        switch(str[i]){
            
//            case ('+'): num = BigInt(num) + BigInt(str[i + 1]);
//                break; 
//             case ('*'): num = BigInt(num) * BigInt(str[i + 1]);
//                break; 
//             case ('%'): ans = BigInt(num) % BigInt(str[i + 1]);
//                break; 
//        }

//     }
//       console.log(num) // Вывыоди полное число после всех преобразований, кроме модуля
//       console.log(ans.toString()) // Модуль всех преобразований

// })


// void function () {
//   const a = data.split(/\n/g).map((e) => e.trim().split(/\s/));
//   let initValue = BigInt(a.splice(0, 1)[0])
//   for (let [o, v] of a) {
//     initValue = new Function('initValue', 'v', `return initValue ${o}= v`)(initValue, BigInt(v))
//   }
//   console.log(initValue.toString())
// }()


// let input = '-47210 7189 -58555 13862 36592 29937 -64938 -47771 50987 -45183 -48237 -2471 -200 65965 55204 67775 4668 78211 -46765 25060 -31884 33965 1694 -31832 43963 21377 15008 20901 -44772 18198 68870 49283 36934 28528 -58874 -5964 33953 -34007 -33759 -9173 -17236 33905 -4374 -63912 25880 -26037 75348 -42447 -7535 42143 -33601 68567 56166 43145 -5048 -29226 -794 26533 76169 -44054 39783 -56161 25514 -11303 -60399 7711 -19135 67626 -77096 44875 -49899 -15465 60038 -30761 26453 -47578 52459 -25786 -68181 18398 -49068 54611 -66118 24894 -25786 -18426 79936 43865 64185 20935 50105 -54394 70987 23698 52154 23931 -2416 -40933 52844 39576 -26822 2724 -56931 52847 61497 -30480 26822 55572 -8089 -13010 20517 51417 -53915 55023 187 -68572 -37241 -51445 78375 52492 60714 -27625 79334 -51600 64870 12315 -33042 74861 50219 50742 -1223 -36146 -58205 22897 -38333 50163 -52116 62807 21379 -74985 -20895 -14085 -5193 -12742 -27837 -69987 -31487 55690 -27544 27148 -25759 47268 -78619 65666 17140 41107 -893 -69142 40411 -3165 65365 10722 -48778 34372 44807 -14899 10308 8995 54216 -52108 -20126 -72502 53379 25767 -75862 10481 -24638 79021 61183 -77144 -13787 59174 -64631 45654 -7844 56601 -52924 63625 -55353 30116 -33504 50986 -76283 50405 76404 -24801 31560 69671 -7787 322 66256 -36987 57334 305 73906 -79752 22125 -41923 41030 30443 -48722 -54435 29221 26630 -15729 16149 29240 -56044 78411 46248 -57225 -76397 79918 39118 20116 12351 53847 -36887 -26790 48617 -18537 36006 27552 -44420 5012 -50460 53469 13386 -74328 57748 25641 6455 27329 28753 -27175 -43878 5039 67207 -24234 21841 75554 -53954 42800 36755 43834 -26965 2826 5062 -604 -20541 -39463 34334 62903 -11454 66134 25939 -77870 -60703 -18947 -69207 -42093 49331 40334 26806 50343 778 -52713 -39825 48236 1129 -375 -74589 29994 79670 -73176 21665 -32315 30213 -38093 59986 14554 -54216 -4606 495 -70875 64652 79938 3107 -37873 40163',//document.querySelector('.str'),
//     btn = document.querySelector('.btn');

// btn.addEventListener('click', function(){
//     let num = input.trim().replace(-/[^\d]+/g," ") ;//.value
//     num = num.split(' ');
//     let min = Number(num[0]),
//         max = Number(num[0]);
//     for (let key of num){
//         if(min > Number(key)){
//           min = Number(key);
//         }
//         if(max < Number(key)){
//           max = Number(key);
//         }
//     }
//     console.log(max);
//     console.log(min)
// });

// console.log(
//   `51370 28988 37729 59784 -77910 39060 35850 -2293 43056 -13024 -46964 -39701 -78910 -48243 -79663 -77218 -35684 67416 -23628 30141 -43027 -18429 -5560 -19608 3060 3387 -75860 14403 24168 -26086 -65167 -4462 -77097 52561 -24678 -75008 11622 -68828 2699 -25321 -1852 35734 14977 -762 67491 15314 2019 -48192 2730 58391 61948 39703 -40037 -23612 -59905 43022 59775 -55765 -22575 3943 -1852 -7743 79481 1051 -35181 -25196 6042 56441 -14024 -71259 -48880 64123 44475 46097 -16639 31966 -18589 65380 63774 64140 43772 45723 23844 -76265 -57889 43938 46756 -78113 68172 -55819 5830 -13679 16438 5311 67371 61256 60115 -6586 37698 -33909 2154 68817 -49786 -33370 34915 13575 78596 -63674 -1044 62370 -79533 -37272 28093 24310 -33538 50204 -11751 -66782 52090 -23579 -42601 -22079 42742 53836 63232 30114 35093 43347 -56472 -7209 -70562 25682 -18391 -40348 72311 -63476 53227 70907 -47151 -27817 53277 -46684 14911 1371 57625 61372 -28425 -34126 74590 -56334 22295 -48010 1586 -14962 -74173 -15182 -64848 40919 -51834 -41321 -46289 -42397 64361 15320 -2745 56672 31843 -29518 47579 64692 22665 20857 -61992 -42423 -57772 75633 -61050 -6197 -38492 -66459 17468 63803 -34470 -60945 -31159 -28644 3873 -16007 -67724 32038 22672 -34013 69640 7033 61306 -13104 -16295 13150 37378 -48715 -2157 -19957 52141 15851 17619 74369 11484 36569 -11827 52992 50109 -74358 36795 -64361 -55304 -74363 -13005 28568 -10371 -729 -19394 -67699 45257 -29753 19333 26564 37142 -76961 -40285 -5480 -45677 37557 54563 -73535 -26592 -7817 -79165 64892 -51248 -10993 37884 78860 -5352 -5320 -65500 19344 316 1494 -32087 69945 -79235 28519 -77753 46022 78765 21579 -7413 35908 24618 32301 -49571 58941 -10141 -75007 65406 43267 -2825 66240 28159 25927 -24752 -13956 24787 49896 60724 39287 -10759 -18959 -39219 37153 -29014 -38454 -14328 -26768 -72431 -15562 74811 156 -59654 19429 -47542 -29225 -1629 22316 -24233 -16223 -14416 52942 -29983 -66256`
//     .split(' ')
//     .map(i => +i)
//     .reduce(([max, min], value) => [
//       value > max ? value : max,
//       value < min ? value : min
//     ], [-Infinity, Infinity])
//     .join(' ')
// )

// class User {
//   constructor(name, id, year) {
//     this.name = name,
//     this.id = id,
//     this.year = year
//   }
// }

// let Kata = new User('Kata', 2, 2002)


// function makeArray() {
//   var items = [];

//   for (let i = 0; i <= 10; i++) {
//     var item = function(){
//       console.log(i);
//     }
//     items.push(item)
//   }
//   return items
// }
// var arr = makeArray();
// arr[1]()
// arr[2]()
// arr[3]()
// arr[4]()

// let fun = () => {
//   console.log(this)
// };
// fun()

// let obj = {
//   number: 123,
//   setNumber: function(){
//       let say = () => {
//         console.log(this.number);
//       };
//       say();
//   }
// };
// obj.setNumber();

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function(){
//     let show = () => {
//       console.log(this.style.display = 'none');
//     };
//     show();
// });

// function calcOrDuoble(number, basis = 2) {
//   console.log(number * basis)
// }
// calcOrDuoble(1)

// class Rectangle {
//   constructor(height, weidth) {
//     this.height = height;
//     this.weidth = weidth;
//   }
//   calcArea() {
//     return this.height * this.weidth;
//   }
// }

// const square = new Rectangle(400, 400)

// console.log(square)

// let video = ['youtube', 'vk', 'inst'],
//     blogs = ['wordpress', 'live'],
//     intertet = [...video,...blogs, 'vk'];

// console.log(intertet)

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(a + b + c);
// }

// let numbers = [2, 5 ,7];

// log(...numbers)

// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//       size: '16px',
//       color: 'white'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

// let a = '';
// for (let i = 0; i < 7; i++) { 
//   console.log(a += "#" )
// }
// let i = 1;
// while (i <= 100){
//     if(i % 3 == 0 && i % 15 != 0){
//         console.log('Fizz');
//     }
//     if(i % 5 == 0 && i % 15 != 0){
//         console.log('Buzz');
//     }
//     if(i % 15 == 0){
//         console.log('FizzBuzz');
//     }
//     if(i % 3 != 0 && i % 5 != 0 && i % 15 != 0){
//         console.log(i);
//     }
    
//   i++
// }
// let res = '# ';
// for (let i = 0; i < 8; i++){
//     for (let o = 0; o < 8; o++) {
//        if(res.toString().substr(-1) != ' ') {
//             res = res + '#';
//        } else if (res.toString().substr(-1) != '#') {
//             res = res + 'o';
//        } else if (0 == 7){
//            res = res + '/n';
//        }
//     }
    
// }
// console.log()

// function round() {

//     var delay = 800 * Math.random();
//     setTimeout(function () {
//                     let box = document.querySelectorAll("#market_commodity_forsale_table > table > tbody > tr");
//         let priceS = document.querySelector('.priceFinish');
//         if (priceS == null){
//         for (let i = 2; i < box.length; i++){
//             let price = document.querySelector(`#market_commodity_forsale_table > table > tbody > tr:nth-child(${i}) > td:nth-child(1)`);
//             let priceFinish = document.createElement('tr');
           
//             if (price != null){
//                 price.classList.add('price');
//                 priceFinish.innerHTML = price.innerHTML.replace(/[^\d,;]/g, '');
//                 priceFinish.innerHTML = priceFinish.innerHTML.replace(/,/, '.');
//                 priceFinish.innerHTML = (priceFinish.innerHTML - priceFinish.innerHTML * 0.13).toFixed(2);
//                 priceFinish.classList.add('priceFinish');
//                 price.appendChild(priceFinish);
//             }

//         }
//     }

//         round();
//     }, delay);

// }

// round();



// const cells = [];
// for(let i=0;i<64;i++){
//   cells.push({
//     color: i%2?'black':'white',
//     x: i%8,
//     y: ~~(i/8)
//   });
// }
// console.log()

// let inputRub = document.querySelector('.rub'),
//     inputUsd = document.querySelector('.usd')

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();
//     //request.open(method, url, async, login, pass)
//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     //status - в каком состаяние сервер (код) 
//     //statusText -  в каком состаяние сервер (текст) 
//     //responseText / response / текст ответа от бэкенд разработчика 
//     //readyState - проверка состояний 5 состояний

//     request.addEventListener('readystatechange', function() {
//         if(request.readyState === 4 && request.status == 200) {
//             let date = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / date.usd; 
//         } 
//     });
// });

// inputUsd.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', function() {
//         if(request.readyState === 4 && request.status == 200) {
//             let date = JSON.parse(request.response);

//             inputRub.value = inputUsd.value * date.usd; 
//         } else {
//             inputUsd.value = 'Что-то пошло не так!';
//         }
//     });
// });
// let btn = document.querySelector('.btn'),
//     money = document.querySelector('#money'),
//     drink = 1;

// btn.addEventListener('click', function(){
//     shoot({},
//         function(mark) {
//             console.log('Вы попали в цель');
//             win(mark, buyBeer, giveYouMoney);
//         },
//         function(miss) {
//             console.error(miss);
//             loose();
//         });
// });

// function shoot(arrow) {
//     console.log('Выстрел произведен...');
//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             Math.random() > 0.5 ? resolve({}) : reject('Вы промахнулись');
//         }, 3000);
//     });
    
//     return promise;
// }

// function win() {
//     console.log('Вы победили!');
//     money.innerHTML = +money.innerHTML + 1;
//     (drink == 1) ? buyBeer() : giveYouMoney()
// }
// function loose() {
//     console.log("Вы проиграли");
//     money.innerHTML = +money.innerHTML - 1;
// }

// function buyBeer() {
//     console.log('Вам купили пива');
// }
// function giveYouMoney() {
//     console.log('Вам дали денег');
// }

// shoot({})
//     .then(mark => console.log('Вы попали в цель'))
//     .then(win)
//     .catch(loose)

// localStorage.setItem("number", 21);


// //localStorage.removeItem('number') Удалить ключ
// //localStorage.clear() Удалить все ключи
// console.log(localStorage.getItem('number'))
// Прогруска документов
// window.addEventListener('DOMContentLoaded', function() {

//     let inputLog = document.querySelector('.log'),
//         inputPas = document.querySelector('.pas'),
//         cheakbox = document.querySelector('#remember'),
//         change = document.querySelector('.btn'),
//         form = document.getElementsByTagName('form')[0]

//     if(localStorage.getItem('isChecked') === 'true') {
//         cheakbox.checked = true;
//     }

//     cheakbox.addEventListener('click', function(){
//         localStorage.setItem('isChecked', true);
//     });

//     if(localStorage.getItem('bg') === 'changed') {
//         form.style.backgroundColor = "red"
//     }

//     change.addEventListener('click', function(){
//         if(localStorage.getItem('bg') === 'changed'){
//             localStorage.removeItem('bg');
//         } else {
//             localStorage.setItem('bg', 'changed');
//             form.style.backgroundColor = "red";
//         }
//     });

//     let person = {
//         name: 'Alex',
//         age: 25,
//         tech: ['mobile', 'laptop']
//     }

//     let serializedPersone = JSON.stringify(person);

//     localStorage.setItem('Alex', serializedPersone);

//     console.log(JSON.parse(localStorage.getItem('Alex')))
    
// });
// let json = '{"id":2}';
// try {
//    let user = JSON.parse(json);
//    console.log(user);

//    if(!user.name){
//        throw new Error('В этих данных нет имени')
//    }
// } catch (error) {
//     console.log(`Мы получили ошибку ${error.name} с ошибкой "${error.message}"`)
// } finally {
//     console.log('Всегда выполнюсь')
// }


// $('document').ready(function(){
//     $('.btn').hover(function(){
//         $(this).toggleClass('active');
//     });
//     $('.btn:eq(3)').on('click', function(){
//         $('.img:even').hide();
//     });
//     $('.btn:eq(4)').on('click', function(){
//         $('.img:even').show();
//     });
//     $('.btn:eq(1)').on('click', function(){
//         $('.img').animate(
//             {
//                 opacity: 'toggle',
//                 height: 'toggle'
//             }, 3000
//         );
//     });
// });

function User (name, age) {
    let UserName = name;
    let UserAge = age;

    this.getAge = function() {
        return UserAge;
    }
    this.setAge = function(a){
        if(typeof(a) != Number && a <= 0 && a >= 110){
            console.log('Введеный возвраст не верен')
        } else {
            UserAge = a;
        }
    }
    this.getName = function() {
        return UserName;
    }
    this.say = function() {
        console.log(`Имя пользователя ${this.UserName}, возвраст ${this.userAge}`)
    }
}

let Lexa = new User('Lexa', 32)
console.log(Lexa.setAge(30))
console.log(Lexa.getAge())