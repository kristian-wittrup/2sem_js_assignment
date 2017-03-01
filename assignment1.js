//assignment 1
//exercise 1;

var numKids  = 2;
var partner  = 'That girl';
var location = 'Sumplace warm';
var jobTitle = 'leisurable larry';

var future = 'You will be a ' + jobTitle + ' in ' + location + ', and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);

//exercise 2;
var birthYear = 1982;
var futureYear  = 2030;
var age  = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

//exercise 3;
var age = 34;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of coffey to last you until the ripe old age of ' + maxAge;
console.log(message);

//exercise 4;
var radius = 5;
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
console.log("The area is " + area);

//exercise 5;
var celsius = 25;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
