let firstName = "Sudarshana Poudel"
console.log(firstName)

console.log('...............')

//string stores the value by index

let secondName = "soni"
// 0 1 2 3
// s o n i

// every object has 2 things
// properties and methods

//length

console.log(secondName.length)
// last index will always be length -1
console.log(secondName.length-1)


console.log('........................')

secondName = "soni"

// //printing the firstcharacter to the console
// console.log(secondName[0])
// console.log(secondName.length-1)

// console.log('........................')


//loops
//for(initialization;conditionCheck;increment/decrement){
    //statement
//}

// let thirdName = "Sudarshana Poudel"
// console.log(thirdName[0])
// for(let i = 0; i<thirdName.length;i++){
//     console.log(thirdName[i])
// }

console.log('......................')

//print all characters from reverse
let fourthName = "nani"
for(let t = fourthName.length -1; t>=0;t--){
    console.log(fourthName[t])
}

console.log('......................')


let fourthName1 = "nani"
let reveredString = ""
for(let t = fourthName1.length-1; t>=0;t--){
    console.log(fourthName1[t])
    reveredString = reveredString + fourthName1[t]
}
console.log(reveredString)    

console.log('.......................')


//program to count the "o" character in string

let fifthName = "Anoop Poudel"
let count = 0
for(let i = 0; i<fifthName.length;i++){
    if(fifthName[i]=='o'){
        count = count + 1
    }
}
console.log(count)


let fifthName4 = "Anoop"
let count1 = 0
for(let i = 0; i<fifthName4.length;i++){
    if(fifthName4[i]=='o'){
        count1= count1 + 1
    }
}
console.log(count1)
 
console.log('...........printing p from last.........')

let fifthName5 = "Anoop"
let count13 = 0
for(let i2 = fifthName5.length-1; i2>=0;i2--){
    if(fifthName5[i2] == 'p'){
        count13 = count13 + 1
    }   
    
}
console.log(count13)


console.log('.......................') 

//ways to print the string

console.log('I am new to js')
console.log("I am new to js")
console.log('I am new to js please help with "book"')
console.log("I am new to js please help with book's")

console.log('.......................')


console.log('............string concatination......')

let sixName = "Hari"
let sevenName = "rao"
console.log(sixName + " " +sevenName)


console.log('........string interpolation...............')


let firstName1 = "sudarshana"
let secondName1 = "poudel"
console.log("My first Name is "+firstName1+" and my last Name is "+secondName1)
console.log(`My firstname is ${firstName1} and my lastName is ${secondName1}` )

console.log('.......................')

//method of string 
//1) methods perform some action
//2) methods returns something

function add(x,y){
     console.log(x+y)
      return x + y

}
let k = add(10,12)
console.log(k)
console.log(typeof k+10)

console.log('.......................')

let eightName = "amit"
//action is to convert everything to uppercase
//return type string

let i = eightName.toUpperCase()
console.log(i)
console.log(typeof i)

let i2 = eightName.toLowerCase()
console.log(i2)
console.log(typeof i2)
i2 = eightName.toLowerCase().toUpperCase().length
console.log(i2)

console.log('........indexOf...............')
//indexof
//action to find index of character passes
//return type

let tenName = "sudar"
let iNo = tenName.indexOf('d')
let iNo2 = tenName.indexOf('d')
console.log(iNo)
console.log(iNo2)

let bb = tenName.indexOf('d',2)
console.log(bb)

console.log('.......................')

let elevenName = "Sudarshana Poudel"
let ino3 = elevenName.indexOf('a')
let ino4 = elevenName.indexOf('s')
let ino5 = elevenName.indexOf('a,3')
console.log(ino3)
console.log(ino4)
console.log(ino5)

console.log('.......................')

let k2 = "chimnahy"
let ino6 = k2.indexOf('h')
let ino7 = k2.indexOf('h')

console.log(ino6)
console.log(ino7)

let hb = tenName.indexOf('h',2)
console.log(hb)

console.log('..........')

let fruit = "Grapes"
// 0 1 2 3 4 5 
// g r a p e s

let hs = fruit.indexOf('ry')
console.log(hs) 


