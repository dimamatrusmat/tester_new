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

function first() {
    setTimeout( function(){
        console.log(1);
    }, 500)
}

function second() {
    console.log(2);
}

first();
second();

function test(lang, callback){
    console.log('I lear ' + lang);
    callback();
}

test('Javascript', function(){
    console.log('I prakting 3')
})