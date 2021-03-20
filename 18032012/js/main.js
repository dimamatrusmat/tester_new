let es = document.querySelector('.es');
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

function convertInt(a, b, c) {
    let r = a * b + c,
        one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
    switch(r == r){
        case (r > 100000): 
            one =  Math.floor(r / 100000);
            r = r - one * 100000;
        case r > 10000: 
            two = Math.floor(r / 10000);
            r = r - two * 10000;
        case r > 1000: 
            three = Math.floor(r / 1000);
            r = r - three * 1000;
        case r > 100: 
            four =  Math.floor(r / 100);
            r = r - four * 100;
        case r > 10: 
            five = Math.floor(r / 10);
            r = r - five * 10;
        case r > 1: 
            six = Math.floor(r / 1);
            r = r - six * 1;
    }
   es.innerHTML += " " +(one + two + three + four + five + six);
}

let string = '164 279 134,216 197 33,236 99 120,316 139 137,318 212 100,40 255 103,99 241 107,304 118 178,292 52 40,198 154 188,89 99 28,258 195 171',
    arr = string.split(',');

    for(let key of arr){
        let inArr = key.split(' ');
        convertInt(+inArr[0], +inArr[1], +inArr[2])
    }