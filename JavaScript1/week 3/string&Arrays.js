/* Question 1. Strings*/

let myStr = "hello,this,is,a,difficult,to,read,sentence"; 
console.log(myStr); 


let newStr = myStr.replace(/,/g, '-');

console.log(newStr);  // "hello-this-is-a-difficult-to-read-sentence"

/* Question 2. Arrays!*/
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals);
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat");
console.log(favoriteAnimals);
console.log('this array has a length of ',favoriteAnimals.length);
favoriteAnimals.splice(3,1); //giraffe' deleted from the array
console.log(favoriteAnimals);

for( let i = 0; i < favoriteAnimals.length; i++){ 
    if ( favoriteAnimals[i] === "meerkat") {
    console.log(i, 1); 
    }
 }
 