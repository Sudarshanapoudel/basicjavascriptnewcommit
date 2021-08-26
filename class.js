class car{
    year = null
    Name = null 
    color = null 
    model = null


 }

// // Setting the object properties outside the class
//creating object from class
//toyota is object here in new car
let toyota = new car()
// let honda = new car()

// update the  values 
//object.property = new value
toyota.year = 2013
 toyota.name = "rav4"
 toyota.color = "white"
 toyota.model = 2021

//fetch the value
 console.log("....dot notation.........")

 console.log(toyota.year) //dot notation
 console.log(toyota.name)
 console.log(toyota.color)
 console.log(toyota.model)

 console.log("....bracket notation fetching value from class.........")

 console.log(toyota['year']) //bracket notation
console.log(toyota['name'])
 console.log(toyota['color'])
 console.log(toyota['model'])


//adding the new property
//object.property = new value here mileage added

 toyota.mileage = "150k miles"
 console.log(toyota)

 //delete
 //delete object.property
 delete toyota.mileage
 


// Setting the properties at the time of object creation

class car1{
    constructor(year,name,color,model){
    this.year = year
    this.Name = name
    this.color = color
    this.model = model
 
    }
    
}

let toyota2 = new car1(2013,"rav4","white",2021)
 let honda =  new car1(2015,"crv","grey",2022)
let nissan = new car1(2015,"ultima","black",2024)
console.log(toyota2)
console.log(honda)
console.log(nissan)

//findng averageyear
let sy = [toyota2,honda,nissan]
let aaverageyear = sy.reduce(function(acc,el){
        return acc + el.year
},0)
console.log(aaverageyear/sy.length)

let model= sy.find(function(el){
    return el.model == '2024'
})
console.log(model)

// Setting the property for object using function 


class car2{
    
    year = null
    model = null
    color = null
    name = null

    setname(namee){
        this.name = namee

    }
    setcolor(color1){
        this.color = color1
    } 
    setmodel(model1){
        this.model = model1 
    }
    setyear(year1){
         this.year = year1
    }  

    
    
    
}

let toyota3 = new car2()
toyota3.setmodel(2021)
toyota3.setyear(2013)
toyota3.setcolor("white")
toyota3.setname("rav4")
console.log(toyota3)



let honda2 = new car2()
honda2.setmodel(2022)
honda2.setyear(2015)
honda2.setcolor("grey")
honda2.setname("crv")
console.log(honda2)



//three methods 
// setting the property 

//1) outside the class 
//2) while creating object using constructor // most preferred way
//3) using function
