function doSomething(msg) {
    return msg
}

console.log(doSomething('Hello'))
console.log(doSomething('hi'))
console.log(doSomething('hey'))

console.log(typeof doSomething)

//1. create function with function declaration
function concat(str1,str2){
    return str1+str2
}
//2. create function with function expression 
const toUpper = function (str1){
    return str1.toUpperCase()
}

//3. create function with name function expression
const reverse =function rev(str1){
    return [...str1].reverse().join('')
}
console.log(concat('js','beginner'))
console.log(toUpper('hello world'))
console.log(reverse('hello world'))

//dosomething is a higher function because it accept op function as its parameter
const doSomething = function (str1,op){
    return op(str1)
}
console.log(doSomething('hey',toUpper)) // only send to work don't have parameter
console.log(doSomething('hey',reverse))

const doIt = function(){
    return concat // !== return concat('1' ,'2')
}