// 16th april
/* 
Brug gamle video som platform
Array + objects
+ loops with them
.sort + .reverse

Add one line for each input. // Adding a new line for each input ( += )
Tom variable ( html = “”; ) som bruges til at skrive data ud

Muligvis product udprint

*/


/* 
var chocolateBars = ['Snickers', 'Mars', 'Bounty','Twix', 'KitKat', 'Yankee'];
chocolateBars.sort(); // last piece

for (var i = 0; i < chocolateBars.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + chocolateBars[i]);
}
 chocolateBars.forEach(function(cBars) {
   console.log(cBars);
 });
*/

const ages = [20, 40, 30, 15, 18, 17, 19, 21, 61, 55, 54, 9, 3, 22, 23];

const famousPeople = [
    {name: "Elvis Presley", category: "Singer", active: 1935, end: 1977},
    {name: "Freddie Mercury", category: "Singer", active: 1946, end: 1991},
    {name: "Preben Elkjær", category: "Sport", active: 1957, end: 2018},
    {name: "Ryan Reynolds", category: "Actor", active: 1976, end: 2018},
    {name: "Sir Patrick Stewart", category: "Actor", active: 1940, end: 2018},
    {name: "Dame Judi Dench", category: "Actor", active: 1934, end: 2018},
    {name: "Fred Astair", category: "Dancer", active: 1899, end: 1987},
    {name: "Ginger Rogers", category: "Dancer", active: 1911, end: 1995},
    {name: "Gill Bates", category: "TechDude", active: 1955, end: 2018},
    {name: "Mlon Eosk", category: "TechDude", active: 1971, end: 2018}
];


 

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// 

// forEach

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter(age => age >= 21);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true; // true if the callback function returns a truthy value for any array element; otherwise, false.
//   }
// });

const occupationTechDudes = famousPeople.filter(function(occu) {
    if(occu.occupation === 'TechDude') {
        return true; // true if the callback function returns a truthy value for any array element; otherwise, false.
    }
});

const occupationTechDudes = famousPeople.filter(occu => occu.occupation === 'Actor');

// Get 80s companies

const activeYears = famousPeople.filter(fPerson => (fPerson.active >= 1920 && fPerson.active < 1990))
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const olderThen = famousPeople.filter(fPerson => (fPerson.end - fPerson.active >= 80));
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);



// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);


// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);








//next level
var products = [
    {
        id: 1,
        name: "A little cheese",
        img: "http://www.pngmart.com/files/1/Shoes-Transparent-PNG.png",
        description: "Who has'eth dem best shoes'eth? So who you gonna call?",

    },
    {
        id: 2,
        name: "",
        img: "http://www.pngmart.com/files/1/Shoes-Transparent-PNG.png",
        description: "Much stylish - much wauw. Please sir, canIHazCheeseBurgers",

    }
    ];

    function load() {
        var htmlData = '';
       
        for (var i = 0; i < products.length; i++) {
            htmlData += '<div class="product">'
            + products[i].name + "<br>"
            + '</div>'
            + '<div class="prod_img"><img src=" ' + products[i].img + ' " alt="">'
            + products[i].description + "<br>"
            + '</div>'
        }
        document.getElementById("products").innerHTML = htmlData;
    }
    
    load();

    //add button with onclick for this
    function sortName() {
        products.sort((a, b) => a.name.localeCompare(b.name));
        load();
    }

    //add button with onclick for this
    function reverse() {
        products.reverse();
        load();







    


//11th april

function addTwoNumbers(x, y) {
    return x + y;
}

//first step : addTwoNumbers(2, 3)
//second step : console.log(addTwoNumbers(2, 3));

//with variable
function addTwoNumbers(x, y) {
    var z = x + y;
    return z;
}
console.log(addTwoNumbers(2, 3));
console.log(z);

/*
var age = 35;
if (age >= 10 && age < 27 || age > 50) {
    console.log("no worries - be happy");
}
else
{
    console.log("dangnabit - time for a nap");
}

*/


for (i = 1; i <= 6; i++) {
    if(i < 3) {
        console.log("Number is: " + i);
    }
    else if (i == 3) {
        console.log("i is : " + i)
    }
    else {
        console.log("much wauw for rest of: " + i);
    }

}

/*
HTML
<form name="form" >
    Enter something here:
    <input name="sum1" />
    <button type="button" onclick="newStuff()">add</button>
</form>
*/


// standard use of value from form
function newStuff () {
    var newStuff = document.form.sum1.value;
   
    console.log(newStuff);
}



function newStuff () {
    var newStuff = document.form.sum1.value;
    if (newStuff === "") {
        alert("type sumthing foo'");
    }
    else {
        console.log(newStuff);
        // return document.getElementById("hitme").innerHTML = newStuff;
    }
}



//9th april




print = 30;

document.getElementById("firstjs").innerHTML = print;


function sayMyName(name) {
    document.getElementById("hitme").innerHTML = name;
    console.log("Hi my name is: " + name);
}

sayMyName("Homer Simpson");



var countMe = "GrandPa Simpsons";
var spaceCount = (countMe.split(" ").length - 1);
console.log(spaceCount);
console.log('total count:- ', countMe.length - spaceCount)