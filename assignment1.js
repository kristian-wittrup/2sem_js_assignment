//assignment 1
//exercise 1;

let numKids  = 2;
let partner  = 'That girl';
let location = 'Sumplace warm';
let jobTitle = 'leisurable larry';

let future = 'You will be a ' + jobTitle + ' in ' + location + ', and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);

//exercise 2;
let birthYear = 1982;
let futureYear  = 2030;
let age  = futureYear - birthYear;
console.log(`I will be either ${age} or ${age - 1}`);

//exercise 3;
let currentAge = 34;
let maxAge = 100;
let numPerDay = 2;
let totalNeeded = (numPerDay * 365) * (maxAge - currentAge);
let message = `You will need ${totalNeeded} cups of coffey to last you until the ripe old age of ${maxAge}`;
console.log(message);


//exercise 4;
let radius = 5;
let circumference = Math.PI * 2*radius;
console.log(`The circumference is ${circumference}`);
let area = Math.PI * radius*radius;
console.log(`The area is ${area}`);

//exercise 5;
let celsius = 25;
let celsiusInF = (celsius*9)/5 + 32;
console.log(`${celsius}°C is ${celsiusInF}°F`);
let fahrenheit = 20;
let fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(`${fahrenheit}°F is ${fahrenheitInC}°C`);
