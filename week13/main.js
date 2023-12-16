//event propagation
//1. select HTML objects
const outerDiv = document.getElementById('outer-div')
const innerDiv = document.getElementById('inner-div')
const submitButton = document.querySelector('button')

console.log(outerDiv)
console.log(innerDiv)
console.log(submitButton)
console.log("================================")

//2.select event type 'click'
//3.register event type to HTML objects

outerDiv.addEventListener("click",(e) => { // e is parameter for doing something in function
    console.log("outerDiv clicked")
    console.log(e.type) //click 
    console.log(e.target) //<button></button>
    console.log(e.currentTarget) 
    console.log(e.eventPhase)
},true)

innerDiv.addEventListener("click",(e) => { // e is parameter for doing something in function
    console.log("innerDiv clicked")
    console.log(e.type) //click 
    console.log(e.target) //<button></button>
    console.log(e.currentTarget) 
    console.log(e.eventPhase)
},true)

submitButton.addEventListener("click",(e) => { // e is parameter for doing something in function
    console.log("submit button clicked")
    console.log(e.type) //click 
    console.log(e.target) //<button></button>
    console.log(e.currentTarget) 
    console.log(e.eventPhase)
},true)