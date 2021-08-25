

let students = [
    {
        firstName: "sudarshana",
        age: 23,
        skills: ["python", "c", "python"]

    },

    {
        firstName: "shailesh",
        age: 29,
        skills: ["python", "c", "js"]

    },

    {
        firstName: "rhythm",
        age: 24,
        skills: ["python3", "c++", "js"]

    }

]

// // // print name and skills for every student in array

// // console.log(students[0].firstName,students[0].skills)
// // console.log(students[1].firstName,students[1].skills)
// // // console.log(students[2].firstName,students[2].skills)

//through loop


// // console.log(students.firstName)
// // console.log(students['skills'])
// for (k = 0; k < students.length; k++) {
//     for (let key in students[k]) {
//         if(key =='firstName' || key == 'skills'){
//             console.log(`${key}': ${students[k][key]}`)
//           }

//        }        
//     }





// console.log('...find..........')
// //find

let ooooe = students.find(function(el,index,arr){
    return el.firstName == "shailesh"
})
console.log(ooooe)

// console.log('...............findindex......')    

// //findindex

// let ooooek = students.findIndex(function(el,index,arr){
//     return el.firstName == "shailesh"
// })
// console.log(ooooek)     

// console.log('....every some............')

// //some gives boolean value

// let vvvv = [22,12,33,44,55,77]
// let llll= vvvv.some(function(el,index,array){
//     return el > 40
// })
// console.log(llll)

// //every gives boolean value

// let wwww = [20,23,25,45,67,89,90]
// let rrrr =wwww.every(function(el,index,arr){
//     return el > 30
// })
// console.log(rrrr)

// console.log('............')
// //foreach doesnt return anything

// let cities = ["nepal","india","kathmanndu","biratnagar"]
// let ggg = cities.forEach(function(el,index,arr){
//     console.log(`welcome $(el)!`)
// })    
// console.log(cities[ggg]) // when method didnt return anything while storing in variable it is undefined



// let cities1= ["nepal","india","kathmanndu","biratnagar"]
// let yyy= cities1.forEach(function(el,index,arr){
//     console.log(`welcome $(el)!`)
//  })
//  console.log(cities[yyy])  


//  console.log('..............')


 //sort

//  let h = ["abhisha","yayga","chinmay"]
// h.sort()
// console.log(h)

// let ki =["pragya","pratik","priti"]
// ki.sort()
// console.log(ki)

// console.log('..............')

// //flat


// // // flat()
//  let numbersa = [[10,20,30],[11,224,33],[23,44,55]]
// console.log(numbersa[2][2]) //gives flat number from 2nd array second index value 
// console.log(numbersa[1][1]) //gives flat number from first array first index value


// let jjjjj =numbersa.flat()
// console.log(jjjjj) //this gives all number flat in single line


// ------> Highest number from numbersa //mine way

// let highestNum1 = []
// let numbersa = [[10,20,30],[11,224,33],[23,44,55]]
// for(let q = 1; q<numbersa.length;q++){
//     if(numbersa[q]>highestNum1){
//         }
// }
// console.log(numbersa[1][1])

console.log('..............')

//highest num from this array // neela way 
// //from each array
// let numbersa1 = [[10,20,30],[11,224,33],[23,44,55]]
// console.log(numbersa1[0][2])
// console.log(numbersa1[1][2])
// console.log(numbersa1[2][2])
// console.log(numbersa1[1][1])

// //alinas way through looping

// let number1 = [[10, 20, 30], [11, 224, 33], [23, 44, 55]]
// let test = number1.flat()
// console.log(test)      //[10, 20, 30, 224,33,23, 44, 55]

//to find largest number

// let largest = 0;
//         for (i = 0; i < test.length; i++) {
//             if (test[i] > largest) {
//                 largest = test[i]

//             }
//         }
//         console.log(largest)

// // //flat
// let kk = numbersa1.flat().sort().reverse()
// console.log(kk[kk.length-1])

//neelas way
//  let numbersa1 = [[10,20,30],[11,224,33],[23,44,55]]
//  let numbersa12 = numbersa1.flat()
//  let numbersa13 = numbersa12.sort((a,b) => a -b)
//  console.log(numbersa13)
// console.log(numbersa13[numbersa12.length-1])

// let num1 = [[10,20,30],[11,24,33],[23,404,55]] 
// let num2 = num1.flat()
// let numsort = num2.sort((a, b) => a - b)
// console.log(numsort[num2.length - 1])

console.log('................')



// //fill

// let r = [1,2,3,5,6,9]
// // r = [1,'c','c','c','c','c']
// console.log(r.fill('c',1,r.length))


console.log('................')

//slice
//  let fruits = ["mango","orange","banana","papaya"]
//  console.log(fruits.slice(2,3)) 
//  console.log(fruits.slice(1,3)) 
//  console.log(fruits.slice(-4,1))
//  console.log(fruits.slice(-3,0)) 
//  console.log(fruits.slice(-2,3)) 

//  let car = ["toyota","honda","bmw","mercedes","nissan"]
//  console.log(car.slice(-5,4))
//  console.log(car.slice(-5,-3))  
//  console.log(car.slice(-3,-1))


console.log('................')

//concat

// let name2 = ["hari","shyam","laxman","prakash","jyoti"]
// let fullName2 = ["hari prasad","shyam karki","laxman pandey","prakash kc","jyoti sharma"]
// let yy = name2.concat(fullName2)
// let rr = fullName2.concat(name2)
// console.log(yy)
// console.log(rr)


// console.log('................')

// //include boolean value true/false
//  let play = ["footbal","basketball","cricket","volleyball"]
//  console.log(play.includes("soccer")) // false
//  console.log(play.includes("footbal")) // true

 
console.log('................')

// // spilce(startpoint,no.ofdelete,"replacewithwith n number",)

// let play = ["footbal","basketball","cricket","volleyball"]
// //console.log(play.splice(1,2,"hh","fff","hhh"))
// console.log(play.splice(2,2,"hh","fff","hhh"))
// console.log(play)

console.log('................')

// //join 
//return string
// let sentences = ["i","am","new","to","js"]
// let no = [1,2,3,4,5]
// console.log(sentences.join('-'))
// console.log(no.join("/"))


// // Return - string
// let names2 = ["I","am","new","to","javascript"]
// names2 = [1,2,3,4,5]
// console.log(names2.join("-"))