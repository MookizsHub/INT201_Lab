//event propagation
//1. select HTML objects
const outerDiv = document.getElementById('outer-div')
const innerDiv = document.getElementById('inner-div')
const submitButton = document.querySelector('button')


// multiple functions handling on the same element and event types
function doSomething() {
    console.log('doSomething')
}
submitButton.addEventListener('click', () =>{
    console.log('submitButton clicked')
})

submitButton.addEventListener('click', doSomething)

//remove function handlers

submitButton.removeEventListener('click', doSomething)

submitButton.removeEventListener('click', () =>{  // dosen't work
    console.log('removeButton clicked')
})