//array

let numbers = [1,2,3,4,5]
let names = ["chinmay","amol","raj","ramesh","rajiv"]
let person = ["chinmay", "deshpande", 26908,true,[234,34]] 

console.log({numbers,names,person})
console.log(typeof {numbers,names,person}) 

let city = ["pune","nagpur","mumbai"]

console.log(city[0]) //array stores value by index

console.log('@@@@@@@')

//length of array
console.log(city.length)
console.log('@@@@@@')
//last element of array
console.log(city[city.length-1])
console.log('@@@@@@@')

//replace the value at position 1
city[1] = "Jaipur"
console.log(city)

//replace the value at position 2
city[2] = "delhi"
console.log(city)

//printing every element inside arrays //using loop increment

let fruits = ["apple","banana","mango","papaya"]
for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i])
}

console.log('@@@@@@@')

//printing evry element inside arrays in reverse order //using loop decrement

let fruits1 = ["apple","banana","mango","papaya"]
for(let i2=fruits.length-1;i2>=0;i2--){
    console.log(fruits1[i2])
}

//adding the element at last
//push 
let veg = ["chilly","tomato","cabbage"]
let aa = veg.push("brinjal")
console.log(aa)
console.log(veg)
console.log(typeof aa) //i have just added randomly

console.log("@@@@@@@@@")

//removing the element from last
//pop
let bb = veg.pop()
console.log(veg)
console.log(bb)
console.log(typeof bb)

//add the element at the beginning
//unshift
let cc = veg.unshift('ladyfinger')
console.log(cc)
console.log(veg)
console.log(typeof cc)

//shift removes the element from beginning
//shift
let school=["a","b","c"]
let dd1 = school.shift()
console.log(dd1)
console.log(school)
console.log(typeof dd1)

let country = ["nepal",'india','pakistan','bhutan']
let ee = country.push('usa')
console.log(ee)
console.log(country)
console.log(typeof ee)


let country1= ["nepal",'india','pakistan','bhutan']
let ee1 = country1.push("usa").toUpperCase() // blank coz prev element is number annd touppercase is string property
console.log(country1.push("usa"))
console.log(country1)


let country12 = ["nepal",'india','pakistan','bhutan']
let ee12 =  country12.shift().length //number coz previous element is string and length is also string property
console.log(ee12)
console.log(country12)
console.log(typeof ee12)








