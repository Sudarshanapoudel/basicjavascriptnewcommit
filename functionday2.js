
function add(x,y){
    return [x+y,x-y,x*y,x/y,x%y]
}
let h = add(12,33)
console.log(h[0])
console.log(h[1])
console.log(h[3])
console.log(h[4])

// -------------- Three ways 

// Function declartion 
// function Addition(x,y){
//     return x+y
// }

// let rr = Addition(33,22)
// console.log(rr)

// Function expression
/*
let Addition = function(x,y){
    return x+y
}

let rr = Addition(33,22)
console.log(rr)


let subtraction = function(x,y){
    console.log(x-y)
}

console.log(subtraction)
// subtraction(30,15) // calling the function

// //Arrow function

// let subtraction = (x,y)=>{
//     console.log(x-y)
// }


// let subtraction = (x,y)=>console.log(x-y)
// subtraction(12,6)


// Function declaration 
// function addA(x,y){
//     return x+y
// }

// let bb = addA(10,5)
// console.log(bb)

// Function expression 

// let addA = function(x,y){
//     return x+y
// }
// let bb = addA(10,5)
// console.log(bb)
// console.log(addA)

// Arrow function 

// let addA = (x,y)=>{
//     console.log(x+y)
//     return x+y
// }


// let addA = (x,y)=> x+y
// addA(12,14)



// Arrow function 


let x = 10



let addB = function(x,y){
    return x*y
}


// let fn = function(x,y){
//     return x*y
// }


function addC(fn){
   let f =  fn(12,13)
   return f
}

let rrr = addC(addB)
console.log(rrr)



// declaration 


// function sub(x,y){
//     return x-y
// }

// let c = sub(12,5)
// console.log(c)


// // function expression


// let sub = function (x,y){
//     return x-y
// }

// console.log(sub)
// let c = sub(12,5)
// console.log(c)


// // Arrow

// let sub =  (x,y)=>{
//     return x-y
// }
// let sub =  (x,y)=> x-y
// console.log(sub)
// let c = sub(12,5)
// console.log(c)





let newA = function(x,y){

    return x+y
    
}


// let fn = function(x,y){

//     return x+y

// } 
 

// passing fn as parameter tp another function

// function newB(fn){
//     let cccccc = fn(12,13)
//     return cccccc
// }

// let ff = newB(newA)
// console.log(ff)

// let  greeting = function(){
//     console.log('Hello World')
// }

// console.log(greeting)
// greeting()


// function greetingB(fn){
//     fn() //
//}
//greetingB(greeting)
*/