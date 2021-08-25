//creating a function Land()

function Land() {
    this.area = '';
    this.status = 'for Sale';
    }
    //Setting status open for sale
    Land.prototype.open = function() {
    this.status = 'Open for Sale';
    return this;
    }
    //Setting status not for sale
    Land.prototype.close = function() {
    this.status = 'Not for Sale';
    return this;
    }
    //Setting Parameters
    Land.prototype.setParams = function(area) {
    this.area = area;
    return this;
    }
    //printing land status
    Land.prototype.doorStatus = function() {
    console.log('The',this.area,'Land is',this.status);
    return this;
    }
    //creating a land object
    var land = new Land();
    land.setParams("500 sq ft").close().doorStatus().open().doorStatus();

    let lastname = "POUDEL"
    let lower2 = lastname.toLowerCase()
    console.log(typeof lower2)
    console.log(lower2.toLowerCase().length)

    
  let country = "america"
  let reveredString = ""
  for(let i = country.length-1; i>=0; i--){
       reveredString = reveredString + country[i]
  }
  console.log(reveredString)    

//let put "Hello"
let h = ["chinmay","amol","amit"]
//  for(let i=0;i<h.length;i++){
//  //console.log(h[i].concat("Hello!"))
// console.log(("hello ").concat(h[i]))
//  }
let ab= h.map(function(el,arr,index){
    // console.log(el)
    // console.log(arr)
    // console.log(index)
    return `welcome ${el}`
 })
 console.log(ab)
//el..current element of array
//map method will return array
//store in one var n map it return array

let str="chinmay ,amol, amit" //we took 1 string 
let str2=[]//we took blank array to push the value in array
// str2.push(str)
// console.log(str2)
//  console.log(str2.push(str))

// let x="sudarshana lax "  //1st string
// let u="pratiksha "      //2ND STRING
// str2.push(x,u)

// console.log(str2)






console.log("-----------indexof-------------------------")


let tenName = "sudar"
let iNo = tenName.indexOf('d')
let iNo2 = tenName.indexOf('d')
console.log(iNo)
console.log(iNo2)

let bb = tenName.indexOf('d',2)
console.log(bb)

console.log('.............indexof...............')


let elevenName = "Sudarshana Poudel"
let ino3 = elevenName.indexOf('a')
let ino4 = elevenName.indexOf('s')
let ino5 = elevenName.indexOf('a,3')
console.log(ino3)
console.log(ino4)
console.log(ino5)



//let put "Hello"

//let h12= ["chinmay","amol","amit"] //array
//for(let i12=0;i12<h12.length;i12++){
// console.log(h12[i12.concat("Hello!"))
//console.log(("hello ").concat(h12[i12]))
// }
//let ab1= h12.map(function(el,arr,index){
    // console.log(el)
    // console.log(arr)
    // console.log(index)
    //return `welcome ${el}`
 //})
   // console.log(ab1)
//el..current element of array
//map method will return array
//store in one var n map it return array

//let str= "chinmay ,amol, amit" //we took 1 string 
//let str2= []//we took blank array to push the value in array
//str2.push(str)
//console.log(str2)
//console.log(str2.push(str))

 //let x="sudarshana lax "  //1st string
 //let u="pratiksha "      //2ND STRING
 //str2.push(x,u)

//console.log(str2) 




              // Action                       // Return (value and type)
// Push        add the element at last of array     new length (number)

// Pop         removes the element from last    // string

// Shift       removes the element from the beginning  // string 

// Unshift     Add the element at the begning     //new length number

//loop without intialization
var j = 1;
for (; j < 10; j += 2){
    console.log(j);
}



var j3 = 5;
for (; j3 <10; j3 += 2){
    console.log(j3);
}


//loop without condition
for (let j4 = 1;; j4 += 2) {
  console.log(j4);
  if (j4 > 10) {
      break;
  }
}


console.log('..........practice..........')

//finding length

let firstName2 = "shailesh"
console.log(firstName2.length)
console.log(firstName2.toUpperCase())
console.log(typeof(firstName2))

console.log('.................')

let fullName22 = "susan"
console.log(fullName22.length)
let Upper111 = fullName22.toUpperCase().length
console.log(typeof Upper111)

console.log('......method chaining............')

let fullName23 = "richa"

console.log(fullName23.length)
let lower22 = (fullName23.toUpperCase())
console.log(lower22)
console.log(typeof lower22)

console.log('...................')

console.log(fullName23)

let lower20 = (fullName23.toUpperCase())
console.log(lower20)
console.log(typeof lower20)


console.log('...........printing every character of string............')

let country112= "texas"
console.log(country112[0])
console.log(country112[country112.length-1])//printing last character

let food ="pizza"
console.log(food[3])
console.log(food[food.length-1]) //printing last character

let play = "football"
console.log(play[play.length-1]) //printing last character

let play1 = "football"
console.log(play1[play1.length-1])
console.log(typeof play1)

console.log('..................')

//loop is for primtimg all character of string
//print in vertical order 

let eat = "butter"

console.log(eat.length)
for(let e = 0; e < eat.length; e++){
  console.log(eat[e])
}

  console.log(".................")


//print in vertical but in reversed
let eat1 = "butter"

console.log(eat.length-1)
for(let kl = eat.length-1; kl>=0; kl--){
  console.log(eat1[kl])

}

console.log(".................")

let city20 = "dallas"
console.log(city20.length-1)

for(let i = city20.length-1; i>=0;i--){
    console.log(city20[i])
}

console.log(".................")

let city201 = "dallas"
console.log(city201.length)

for(let i= 0 ; i<city201.length; i++){
    console.log(city201[i])
}

console.log(".................")

let city31 = "dallas"
let reveredString12 = ""
console.log(city31.length-1)
for(let i = city31.length-1; i>=0; i--){
    reveredString12 = reveredString12 + city31[i]
}
console.log(reveredString12)  



