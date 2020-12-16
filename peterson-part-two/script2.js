let rainInches =  prompt("How many inches of rain fell?");

let rainResponse = rainInches;

function repeatString(str){
   return str.repeat(rainInches)
}

let Bushelyield = 50;

let newYield = Bushelyield;

let fertilizerType = null;

console.log(repeatString("*"));

if (rainResponse < 10) {
   Bushelyield = 50 * .8
} else if (rainResponse >= 20) {
   Bushelyield = 50 * .9
} else {
   Bushelyield = 50;
}

let fertilizerAnswer = prompt("Did you use fertilizer?");

if (fertilizerAnswer == "yes") {

    fertilizerType = prompt("Did you use premium or regular fertilizer?");

   }

if (fertilizerType == "premium") {
   newYield  =  Bushelyield * 1.15
} else if(fertilizerType == "regular") {
   newYield = Bushelyield * 1.1
} else  {
   newYield = Bushelyield; 
   }

   console.log(`The yield should be ${newYield} bushels per acre`);