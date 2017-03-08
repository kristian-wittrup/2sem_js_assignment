//greaterNum
function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(greaterNum(5, 10));

//helloWorld
function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));

//assignGrade
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade(95));
console.log('You got a ' + assignGrade(65));


//Pluralize
function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));
