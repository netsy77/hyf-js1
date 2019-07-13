// 5. write if statement with just as a single line without if statement 

console.log ( 
    (4 > 5) ? "yes" : "no"
);
// no
let vehicleType

// 6.Add age parameter to vehicleType.

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
        vehicleType = 'motorbike'
    }
    if (age > 0)
    {
        vehicleAge = 'used'
    }
    else
    {
        vehicleAge = 'new'
    }
    return('a ' + color + ' ' +vehicleAge+ ' '+ vehicleType)
    
}

console.log(vehicle('green',5,1))
console.log(vehicle('green',0,1))


        
        

    
   


        