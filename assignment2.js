//Assignment 2
//The Fortune Teller
function tellFortune(jobTitle, location, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

//The Age Calculator
function calculateAge(birthYear, currentYear) {
    var age = currentYear - birthYear;
    console.log('You are either ' + age + ' or ' + (age - 1));
}

calculateAge(1984, 2012);
calculateAge(1988, 2012);
calculateAge(1982, 2012);


//The Lifetime Supply Calculator
function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of coffey to last you until the ripe old age of ' + maxAge;
  console.log(message);
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);


//The Geometrizer
function calcGeometry(radius) {
  var circumference = Math.PI * 2*radius;
  console.log("The circumference is " + circumference);
  var area = Math.PI * radius*radius;
  console.log("The area is " + area);
}


//The Temperature Converter
function celsiusToFahrenheit(celsius) {
  var celsiusInF = (celsius*9)/5 + 32;
  console.log(celsius + '°C is ' + celsiusInF + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitInC = ((fahrenheit - 32)*5)/9;
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}





//
// The Calculator assignment
//
function halfOf(num) {
    let half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}

//halfOf(5);

function squareNumber(num) {
    let squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}

//squareNumber(3);


function areaOfCircle(radius) {
    let area = Math.PI * squareNumber(radius);
    //console.log('The area of circle with radius ' + radius + ' is ' + area);
    console.log(`The area of circle with radius  ${radius}  is ${radius}`);
    return area;
}

//areaOfCircle(2);

function percentOf(num1, num2) {
    let percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

//percentOf(5, 10);


function doCrazyStuff(num) {
    let half    = halfOf(num);
    let squared = squareNumber(half);
    let area    = areaOfCircle(squared);
    let result  = percentOf(squared, area);
}

doCrazyStuff(5);
