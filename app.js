function greet(firstname, lastname, language) {

    language = language || 'en';

    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('------------------');
        return;

    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments[0]);
    console.log('---------');
}

greet();
greet('Jason');
greet('Jason', 'Goldfarb');
greet('Jason', 'Goldfarb', 'es');


// var arr = [
//     1,
//     false,
//     {
//         name: 'Jason',
//         address: '345 main'
//     },
//     function (name) {
//         var greeting = 'Hello ';
//         console.log(greeting + name);
//     },
//     'hello'
// ];
//
// console.log(arr);
// arr[3](arr[2].name);

// greet();
//
// function greet() {
//     console.log('hi');
//
// }
//
//
// var annonymousGreet = function () {
//     console.log('hi');
// }
//
// annonymousGreet();
//
//
// function log(a) {
//     a();
// }
//
// log(function () {
//     console.log('hi');
// });
//greet.language = 'english';
//
//console.log(greet.language);

// greet();
//
// function greet() {
//     console.log('hi');
//
// }
//
//
// var annonymousGreet = function () {
//     console.log('hi');
// }
//
// annonymousGreet();
//
//
// function log(a) {
//     a();
// }
//
// log(function () {
//     console.log('hi');
// });
//greet.language = 'english';
//
//console.log(greet.language);
