
// let headingOne =document.querySelector('h1')
// headingOne.addEventListener('click', function(){
//     headingOne.style.color = "blue"
    
// })



//document.write('<p>hello i am  created from javascript <p>')
//document.write(' <p>hello my name is sudarshana <p>') 

// Javascript can be used to create , retrive , update and delete html element 

//and  update its properties and values based on the user action

let Nameofthecountry = document.querySelector('h1')
Nameofthecountry.addEventListener('click',function(){
    Nameofthecountry.style.color = "green"
})

let religion = document.querySelector('h2')
religion.addEventListener('click',function(){
    religion.style.color= "yellow"
    religion.style.font= "larger"
})

let language = document.querySelector('h3')
language.addEventListener('click',function(){
    language.style.color= "green"
    language.style.color= "left"
})

let detailsofmine = document.querySelector('p')
detailsofmine.addEventListener('mouseover',function(){
    detailsofmine.style.backgroundColor = "blue"
    detailsofmine.style.fontSize ="30px"
    detailsofmine.style.fontWeight =300
    detailsofmine.style.backgroundColor = "yellow"
})

document.write('<p>hello world<p>')