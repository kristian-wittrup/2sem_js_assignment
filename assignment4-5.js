/*
Maybe part of Assignment 4: 2023


/*
function sMulti() {
  for (i = 0; i <= 9; i++) {
    console.log(i)    
  }
}

sMulti();
*/
/*
// multi multi
function multi() {
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      let result = i * j;
      console.log(i + " * " + j + " = " + result)
    } 
    
  }
}

multi();
*/
*/

/* var vName = "variable to store all kinds of data";

let lName = "Stores data as variable - but use when we now it could change ";

const cName = "Store Data here, that is less likely to change";





var colors = ['red', 'blue', 'yellow', 'green', 'coral'];
colors.sort();

for (var i = 0; i < colors.length; i ++) {
  console.log ("My #" + (i+1) + " choice is " + colors[i])
}


for (var i = 0; i < colors.length; i ++) {
  var iaddition = i+1;
  var charSuffix = "";

  if (i == 0) {
    charSuffix = "st";
  }
  else if (i == 1) {
    charSuffix = "nd";
  }

  else if (i == 2) {
    charSuffix = "rd";
  }

  else {
    charSuffix = "th";
  }
  
  console.log ("My " + iaddition + charSuffix + " choice" + " is " + colors[i]);
}



var myDawgs = [
  {
    name: "Speedy",
    age: 8,
    furColor: "Brown"
  },
  {
    name: "Gonzales",
    age: 12,
    furColor: "Yellow"
  }
];

for (var i = 0; i < myDawgs.length; i ++) {
  console.log (myDawgs[i].name);
} 

myDawgs.forEach(function(dogs)
{
  console.log(dogs.age);
});

 */
/* 

const occupationTechDudes = famousPeople.filter (function (occu){
  if (occu.occupation === "TechDude"){
  return true;
  }
});


const occupationTechDudes = famousPeople.filter (occu => occu.occupation === "TechDude");


const olderThen = famousPeople.filter ( fPerson => (fPerson.end - fPerson.active >= 80));

const olderThen = famousPeople.filter ( function(fperson){
  if(fPerson.end - fPerson.active >= 80) {
    console.log (olderthen);
  }
});
 */


/* const infMovie = { 
  title: "The Secret Life of Walter Mitty",
  duration: 114,
  stars: "Ben Stiller, Kirten Wiig, Shirley MacLaine"
}

console.log (infMovie.title + " lasts for " + infMovie.duration + " minutes.");

console.log ("It's Stars are: " + infMovie.stars);
 */


/* 
const infMovie = [
  { 
    title: "The Secret Life of Walter Mitty",
    duration: 114,
    stars: "Ben Stiller, Kirten Wiig, Shirley MacLaine"
  },
  { 
    title: "Gansta Gansta",
    duration: 69,
    stars: "50Cent, 2pac, eminem"
  }

]

infMovie.forEach (function(film){
  console.log (film);
});


 */




const ages = [20, 40, 30, 15, 18, 17, 19, 21, 61, 55, 54, 9, 3, 22, 23];

const famousPeople = [
{name: "Elvis Presley", occupation: "Singer", active: 1935, end: 1977},
{name: "Freddie Mercury", occupation: "Singer", active: 1946, end: 1991},
{name: "Preben Elkjær", occupation: "Sport", active: 1957, end: 2018},
{name: "Ryan Reynolds", occupation: "Actor", active: 1976, end: 2018},
{name: "Sir Patrick Stewart", occupation: "Actor", active: 1940, end: 2018},
{name: "Dame Judi Dench", occupation: "Actor", active: 1934, end: 2018},
{name: "Fred Astair", occupation: "Dancer", active: 1899, end: 1987},
{name: "Ginger Rogers", occupation: "Dancer", active: 1911, end: 1995},
{name: "Gill Bates", occupation: "TechDude", active: 1955, end: 2018},
{name: "Mlon Eosk", occupation: "TechDude", active: 1971, end: 2018}
];


ages.filter ( function(item) {
 console.log(item);
});

 

var getAgeU30 = ages.filter(age => age < 30 );

var getAgeBT2040 = ages.filter(age => age >=20 && age <=40);

var getAgeO50 = ages.filter(age => age > 50 );

console.log(getAgeU30);
console.log(getAgeBT2040);
console.log(getAgeO50);



for (var i = 0; i < famousPeople.length; i ++ ) {
  console.log (famousPeople[i].name);
}

famousPeople.forEach(item => {
  console.log (item.name);
});



console.log(famousPeople[0].name);



const getAge = famousPeople.filter (age45 => (age45.end - age45.active) <= 45);

console.log (getAge);


let getoccu = famousPeople.filter (occu => occu.occupation === "Dancer");

console.log (getoccu);

let getoccu2 = famousPeople.filter (occu => occu.occupation === "Actor" && occu.occupation === "Singer");

console.log (getoccu2);




var number = [1, 15, 12, 13, 40, 24];

number.sort();

console.log (number);


var names = ["Peter", "Gilbert", "susanna", "Kristian", "Nikolai"];

names.reverse();
console.log(names);
