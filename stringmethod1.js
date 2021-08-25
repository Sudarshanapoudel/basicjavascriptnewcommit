
console.log('...indexof......')
let fruit = "Grapes"
// 0 1 2 3 4 5 
// g r a p e s

let hs = fruit.indexOf('ry')
console.log(hs) 

let fruits = "apple grapes banana mango"
let userInput = "grapes"
let indexF = fruits.indexOf(userInput)
if(indexF >=0){
    console.log('Fruit is available')
}
else{
    console.log('Fruit not available')
}

let fruits1 = "apple grapes banana mango"
let userInput1 = "banana"
let indexF1 = fruits1.indexOf(userInput1)
if(indexF1 >=0){
    console.log('Fruit is available')
}
else{
    console.log('Fruit not available')
}

let fruits2 = "apple grapes banana mango"
let userInput2 = "orange"
let indexF2 = fruits2.indexOf(userInput2)
if(indexF2 >=0){
    console.log('Fruit is available')
}
else{
    console.log('Fruit not available')
}

let fruits3 = "apple grapes banana mango"
let userInput3= "apple"
let indexF3 = fruits3.indexOf(userInput3)
if(indexF3 >=0){
    console.log('Fruit is available')
}
else{
    console.log('Fruit not available')
}

let places = 'dallas newyork '
let userInput4 = 'texas'
let indexF5= places.indexOf(userInput4)
if(indexF5 >=0){
    console.log('place  is available')
}
else{
    console.log('place not available')
}

console.log('......SLICE.........')

//slice

let fruitsA = "apple"

console.log(fruitsA[0].toUpperCase()+fruitsA.slice(1,))


let fruitsA1= "banana"
console.log(fruitsA1[0].toUpperCase()+fruitsA1.slice(1,5))


let fruitsAa = "appleandbanana"
console.log(fruitsAa[0].toUpperCase()+fruitsAa.slice(1,13))

//textOne = "chinmay"

// // action to get the substring
// // it returns me another string
// //textone.slice(start,end)

//0  1  2  3  4  5  6
//c  h  i  n  m  a  y
//-7 -6 -5 -4 -3 -2 -1
console.log('................')

let textTwo = "chinmay"
let textTwoB = textTwo.slice(4,7) //may
let textTwoC = textTwo.slice(0,4) //chin
console.log(textTwoB)
console.log(textTwoC)
console.log(textTwo.slice(-6,-1)) //hinma
console.log(textTwo.slice(-6,-3)) //hin
console.log(textTwo.slice(-5,5)) //inm
console.log(textTwo.slice(5)) //ay
console.log(textTwo.slice(5,-5)) // blank coz start value in slice  dont go backward

console.log('.....SUBSTRING..........')

let textThree = "Mango"
                 01234
                 -5-4-3-2-1
//substring
let hh = textThree.substring(1,3)
console.log(hh) //an
let hh1 = textThree.substring(-3,4)
console.log(hh1) //Mang (here negative is ignored)
let hh2 = textThree.substring(0,4)
console.log(hh2) //Mang 
let hh3 = textThree.substring(3)
console.log(hh3) //go
let hh4 = textThree.substring(-3)
console.log(hh4) //Mango (here negative is ignored)

console.log('..........SUBSTR............')
//substr

let hy = textThree.substr(1,3)//ang
let he = textThree.substr(-5,1)//m
let hi = textThree.substr(1,-4)//blank starting and ending value is same 
let ht = textThree.substr(-3,1) //n
console.log(hy)
console.log(he)
console.log(hi)
console.log(ht)

console.log('...replace........')
//replace
let textFour = "I am learning phython"
let textFourB = textFour.replace("phython","javascript")
console.log(textFourB)


 console.log('.......concat....')

//concat
let textFive = 'amol' 
let textSix = 'rao'

console.log(textFive.concat(textSix)) //amolrao
//console.log(textFive+ textSix)
console.log(textSix.concat(textFive)) //raoamol



let textFive2= ' amol' 
let textSix2 = ' rao'
console.log(textFive2.concat(textSix2))// amol rao 
//console.log(textFive2+ textSix2)



let h = ["chinmay","amol","amit"]
for(let i = 0 ; i < h.length ; i++){
    console.log(h[i].concat(' Welcome!'))
 }

let h1 = ["sudarshana","richa", "lax"] //array
for(let i1 = 0; i1 < h1.length; i1++){
    console.log(h1[i1].concat(' welcome'))
}    

let h11 = ["sudarshana","richa", "lax"] //array
for(let i11 = 0; i11 < h11.length; i11++){
    console.log(h11[i11].concat('welcome '))
}    

console.log('.....trim........')
//trim
let textseven = " sudarshana poudel "
console.log(textseven.length)
console.log(textseven.trim().length)


console.log('..........chartAT.......')

//chartAT
let textnine = "newwords"
console.log(textnine.charAt(3))


//let put "Hello"
/*
let h12= ["chinmay","amol","amit"] //array
for(let i12=0;i12<h12.length;i12++){
// console.log(h12[i12.concat("Hello!"))
console.log(("hello ").concat(h12[i12]))
 }
let ab1= h12.map(function(el,arr,index){
    // console.log(el)
    // console.log(arr)
    // console.log(index)
    return `welcome ${el}`
 })
    console.log(ab1)
//el..current element of array
//map method will return array
//store in one var n map it return array

let str= "chinmay ,amol, amit" //we took 1 string 
let str2= []//we took blank array to push the value in array
str2.push(str)
console.log(str2)
console.log(str2.push(str))

 let x="sudarshana lax "  //1st string
 let u="pratiksha "      //2ND STRING
 str2.push(x,u)

console.log(str2)
*/
