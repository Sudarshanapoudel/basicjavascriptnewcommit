//no.1 write a program to reverse the string 
//input = chinmay
//output = yamnihc

// let input = "chinmay"
// let reveredString = ""
// for(let i = input.length-1;i>=0;i--){
//     console.log(input[i])
//     reveredString = reveredString + input[i]
// }
// console.log(reveredString)

 

//no.2 write a program to reverse only word from sentence
//input = "My new learning is javascript"
//output = "yM wen gninrael si tpircsavaj"




// let input2 = "My new learning is javascript"  
//   let reveredString= input2.split(" ")
//   let kk = reveredString.reverse(" ")
//  let pp = kk.join(" ")
// // console.log(pp) //           javascript is learning new My

// let input2 = "My new learning is javascript"  
// let newsen= input2.split("").reverse().join("")      //ym wen gninrael si tpircsavaj
// let newsentence= newsen.split(" ").reverse().join(" ")
// console.log(newsentence)

let input2 = "My new learning is javascript"
let input21 = input2.split("")
let input22 = input21.reverse().join("")
console.log(input22)
let newrevsen = ("")
for(let i = input22.length-1;i>=0;i--){
    newrevsen = newrevsen + input21[i]
}
console.log(newrevsen)


// //no3 find the highest number 
// //maxvalue
// let input3 = [34,55,-500,66,77,88,234,5,0,66,88]
// let maxvalue = 0;
//         for (let i = 0; i < input3.length; i++) {
//             if (input3[i] > maxvalue) {
//                 maxvalue = input3[i]

//           }
//          }
//          console.log(maxvalue)

// //minvalue
// let input4 = [34,55,-500,66,77,88,234,5,0,66,88]
// let minValue = 0
//         for (let i2 = input4.length; i2>=0; i2--) {
//             if (input4[i2] < minValue) {
//                 minValue = input4[i2]

//             }
//         }
//         console.log(minValue)     

// //mo 4 find the highest number from the given 2D array

// input5 = [[1,2,3],[33,44,55],[55,77,343]] 
// let result = input5.flat()
// console.log(result)

 
// let highestnum = 0
// for(let i3 =0;i3<result.length;i3++){
//     if(result[i3]>highestnum){
//         highestnum = result[i3]
//     }
// }     
// console.log(highestnum)

// //no5 count the number of vowels from string 


//  let input6 = "I am new to javascript"
//  let vowel = "a,e,i,o,u"
// let countvowel = 0
// for(let k=0;k<input6.length;k++){
//     if(vowel.includes(input6[k]))
//         countvowel = countvowel +1

   
// }
// console.log(countvowel)


// //this is my example 
// let input7 = "My name is Sudarshana"
// let vowel1 = "a,e,i,o,u"
// let countvowel1 = 0
// for(let k=0;k<input7.length;k++){
//    if(vowel1.includes(input7[k]))
//        countvowel1 = countvowel1 +1

  
// }
// console.log(countvowel1)