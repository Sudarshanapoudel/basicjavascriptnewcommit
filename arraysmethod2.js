// //finding length

// //let languages = ["hindi","marathi","telgu"]
// //for(let ibb= 0; ibb <languages.length;ibb++){
//  //   console.log(languages[ibb].length)

// //console.log('.......................')

// //let places2 = ["biratnagar","pokhara","kathmandu","chitwan"]
// //for(let ib3 =places2.length-1;ib3>0;ib3--){
//   //  console.log(places2[ib3].length)
// //}

// //console.log('.......................')

// //let places23 = ["pokhara","kathmandu","chitwan"]
// //for(let ib33 =places23.length-1;ib33>0;ib33--){
//   //  console.log(places2[ib33].length)
// //}


// //console.log('.......................')


// //let languages1 = ["bhojpuri","newari","nepali"]
// //for(let ibb1 = 0; ibb1 <languages1.length;ibb1++){
//   //  console.log(languages1[ibb1].length)
// //}

// //console.log('.....arrays methods.........')
// //arrays 

// //let birthYear12 = [2000,2001,2004]
// //let ages2 = []
// //for(let i112 = 0; i112<birthYear12.length;i112++){
//   //  let age= 2021 - birthYear12[i112]
//     //ages2.push(age)
// //}
// //console.log(ages2)

// //console.log('.......................')


// let birthYear123 = [2008,2002,2004]
//   //  let age1= 2021 - birthYear123[i1122]
//     //ages22.push(age1)
// //}
// //console.log(ages22)


// //console.log('...............')

// //printing ages in reverse

// //let birthYear1234 = [2008,2002,2004]
// //let ages223= []
// //for(let i11223=birthYear1234.length-1;i11223>0 ;i11223--){
//  //   let age13= 2021 - birthYear1234[i11223]
//    // ages223.push(age13)
// //}
// //console.log(ages223)

// //console.log('......greater than 15..............')
// /*
// //value greater than 15

// let ag = [14,21,20,17,13,12]
// let grtThan15 = []
// for(let i = 0;i<ag.length;i++){
//     if(ag[i]>15){
//         grtThan15.push(ag[i])

//     }
// }
// console.log(grtThan15)   


  
// console.log('......greater than 12.............')

// let kk1 = [12,14,11,23,22,20,15]
// let grtThan12 =[]
// for(let q = 0; q<kk1.length;q++){
//     if(kk1[q]>12){
//         grtThan12.push(kk1[q])

//     }
// } 
//         grtThan12.push(kk1[q])

//     }
// } 
// console.log(grtThan12)
// */

// console.log('......average value.........')

// //average value

// let dages = [12,13,15,16,18]
// let sum = 0
// for(let i = 0; i<dages.length; i++){
//     sum = sum + dages[i]
// }
// console.log(sum)


// console.log('................')

// let dages1 = [12,13,15,16,18]
// let sum1= 0
// for(let i = 0; i<dages1.length; i++){
//     sum1 = sum1 + dages1[i]
// }
// console.log(sum1/dages1.length)


// console.log('................')



// console.log('....map method............')

// //map

// //array.map(function(el,index,arr){
//  //   console.log(el,index,arr)
// //})
// //[21,20,17]
// let birthyears22 = [2009,2007,2006]
// let kk = birthyears22.map(function(el,index,arr){
//     return 2021 - el 
// })
// console.log(kk)

// console.log('...........defining names......')
// //welcome shailesh!.......

// let namesA = ["shailesh","sudarshana","rhythm"]
// let uuu = namesA.map(function(el){
//     return `welcome ${el}!`
// })
// console.log(uuu)


// let namesAb = ["sameer","sudarshana","rhythm"]
// let uuu1 = namesAb.map(function(el){
//     return `welcome ${el}!`
// })
// console.log(uuu1)

// console.log('...filter......')
// //filter
// //odd number
// let odd = [23,34,55,66,77,88]
// let ooo = odd.filter(function(el){
//     return el % 2!== 0
// })
// console.log(ooo)

// console.log('...arrow function......')

// let odda =[ 23,34,55,66,77,88]
// let oooo = odda.filter((el)=> el  % 2!== 0)
// console.log(oooo)

console.log('.....................')
//filter
let transactions = [1000, -100, 500, -300, -400, 800, 4000, -3000]

// sum of despoist

//  let depoist = transactions.filter(function(el){
//     return el > 0
// }).reduce(function(acc, el){
//     return acc + el
// },0)

// console.log(depoist) 

// sum of withdrawl
let withdrawl = transactions.filter(function(el){
    return el < 0
}).reduce(function(acc,el){
    return acc - el
},0)    
console.log(withdrawl)

// console.log('.....................')



// console.log(depoist)

// console.log('....reduce.......')
// //reduce

// let nnn = dages.reduce(function(acc,el,index,arr){
//           return acc + el
// },0)
// console.log(nnn/dages.length)

// console.log('...............')

// //arrow 
// let nnnn = dages.reduce((acc,el)=> acc+el,0)
// console.log(nnnn/dages.length)

// console.log('...............')
// 
// //names\
////                  8        10            6
// let namesAA = ["shailesh","sudarshana","rhythm"]
// let ab=namesAA.reduce(function(acc,el){
//     return acc + el.length //0+8=8+10=18+6=24
// },0)

// console.log(ab/ namesAA.length)

// let namesAAA = ["shailesh","sudarshana","rhythm"].reduce(function(acc,el){
//     return acc + el.length //0+8=8+10=18+6=24
// },0)

// console.log(namesAAA/ ["shailesh","sudarshana","rhythm"].length)

