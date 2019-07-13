//1 creat a function with three arguments that takes the sum of the arguments
function  add(a,b,c){
    return(a+b+c)
    }
console.log(add(10,20,5));

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example. 
function colorCar(color){
    return colorCar + "a red car";

}
colorCar("a red car"); // need to see it again. Sorry, can't figure it out now. 

//3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.


let myCar = {
    model: "Mustang",
    maker : "Ford",
    year  : 1969,
    myCar : function() {
      return this.model + " " + this.maker;
    }
  };
console.log(myCar);

// 4. creat a function for vehicle type 

let vehicleType
    if (code ===3){
        vehicleType ="car"
    }
    else if (code === 2){
        vehicleType = "motorbike"
    }
    if (color ===red){
        vehicleType ="car"
    }
    else if (color === motorbike){
        vehicleType = "motorbike"
    }
        return ('a'+vehicleType + ' '+ code + ' ' +color)

console.log(vehicleType('blue',2))
console.log(vehicleType('Red',3))

