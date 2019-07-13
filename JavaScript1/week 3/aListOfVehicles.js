// 7. list of vehicles  
listOfVehicles = ["motorbike", "caravan", "bike"]

//8. get the third element from the list
console.log(listOfVehicles[2]);

//9. Change the function 

function vehicle(color,age,code) 
{
    let vehicleType
    let vehicleAge
    if (code === 1)
    {
        vehicleType = 'car'
    }
    else if ( code === 2)
    {
        vehicleType = 'bike'
    }
    if (age > 3)
    {
        vehicleAge = 'used'
    }
    else
    {
        vehicleAge = 'new'
    }
    return('a ' + color + ' ' +vehicleAge+ ' '+ vehicleType)
    
}

console.log(vehicle('green',2,2))

//10. 

