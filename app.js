greet();

function greet() {
    console.log('hi');

}


var annonymousGreet = function () {
    console.log('hi');
}

annonymousGreet();


function log(a) {
    a();
}

log(function () {
    console.log('hi');
});
//greet.language = 'english';
//
//console.log(greet.language);
