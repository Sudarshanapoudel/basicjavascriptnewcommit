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
//let toyota1 = new car1
let toyota2 = new car1(2013,"rav4","white",2021)

//let honda = new car1
let honda= new car1(2015,"crv","grey",2022)

//let nissan = new car1
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

//using function set
class person{
    name = null
    age = null
    rollno= null
    phonenum= null
    city = null

    setname(namee){
        this.name = namee
    }

    setage(age1){
        this.age = age1
    }

    setrollno(rollno1){
        this.rollno = rollno1
    }

    setphonenum(phonenum1){
        this.phonenum = phonenum1
    }

    setcity(city1){
        this.city = city1
    }
}   

let sudar = new person()
sudar.setname("nani")
sudar.setage(25)
sudar.setrollno(12)
sudar.setphonenum(984237781)
sudar.setcity("brt")
console.log(sudar)


//using constructor

class person1{
    name = null
    age = null
    rollno = null
    phone = null
    city = null
}



    class person2{
        constructor(namee,age1,rollno1,phone1,city1){
            this.name = namee
            this.age = age1
            this.rollno = rollno1
            this.phone= phone1
            this.city = city1

        }
           

    }


let susan = new person2()
 susan = new person2("nani1",20,01,088877666,"ktm")
 console.log(susan)

 let akriti = new person2()
 akriti = new person2("rosy",21,11,999933333,"pokhara")
 console.log(akriti)

 