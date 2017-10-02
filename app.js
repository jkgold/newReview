var objectLiteral = {
    firstname: 'Jason',
    isAProgramer: true

}


console.log(JSON.stringify(objectLiteral));



var jsonValue = JSON.parse('{ "firstname": "Jason", "isAProgrammer": true}');


console.log(jsonValue);
