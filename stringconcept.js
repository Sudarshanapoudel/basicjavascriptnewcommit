console.log('......string...........')

 let fullName = "sudar"
 // 0 1 2 3 4
 // s u d a r it means nuner value or index of string

 //property 
 //method -- action -- convert every character into uppercase
 // return ---


console.log(fullName.length)
let Upper = fullName.toUpperCase()
console.log(typeof Upper)

console.log('.....................')


console.log(fullName.length)
let Upper1 = fullName.toUpperCase()

console.log('...................')


console.log(fullName)
let Upper2 = fullName.toUpperCase()
console.log(typeof Upper2)

console.log('.....................')

console.log(fullName)
let Upper3 = fullName.toUpperCase().length
console.log(typeof Upper3)

console.log('........method chaining.........')

//method chaining
console.log(fullName.length)
let lower = fullName.toUpperCase()
console.log(lower)
console.log(typeof lower)

console.log('....................')

//d a l l a s
//length - 5
//length - 1 lastindex

let city1 = 'Dallas'
console.log(city1[0])
console.log(city1[1])
console.log(city1[2])
console.log(city1[3])
console.log(city1[4])
console.log(city1[city1.length-1])

console.log('...........printing every character of string............')


console.log(city1[0])
console.log(city1[1])
console.log(city1[2])
console.log(city1[3])
console.log(city1[4])

//let city2 = "dallas"

//loops
//syntax
//for(initialization; conditioncheck; increment/decrement){
    //statements
//}

//intialization ----conditioncheck---->?trueprint-------increment/decrement

//for(let i= 0; i < city1.length; i++){
//    console.log(i)
 //   console.log(state[i])
//}

console.log('...................')

let city2 = "dallas"
console.log(city2.length)

for(let i= 0 ; i<city2.length; i++){
    console.log(city2[i])
}


console.log('..........printing the character in reverse..........')

console.log(city2.length-1)
console.log(city2)
for(let i = 6; i>=0;i--){
    console.log(city2[i])
}

console.log('................')

let lastname = "POUDEL"
let lower2 = lastname.toLowerCase()
console.log(lastname.toLowerCase().length)
console.log(typeof lower2)


console.log('..............')


let city3 = "pune"
let reveredString = ""
for(let i = city3.length-1; i>=0; i--){
    reveredString = reveredString + city3[i]
}
console.log(reveredString)       

//string
//string + string = string
//string + number = string
//number + string = string
//number + number = number

let i = 10
let t = 20
let h = "add"

console.log(i+h+t) // number + string - "10add" + 20 = 10add20
console.log(i+t+h) // number + number
console.log(h+i+t) // string + number ----string + number ---- string

   









