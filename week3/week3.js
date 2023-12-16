let num = 1
console.log(typeof num)

num = true;
console.log(typeof num)

if(typeof num === 'boolean')
console.log('num is a boolean type')

let a  =  1n
console.log(typeof a)

let b = 3.2
console.log(typeof b)

let c =`A-${b / 2 +1}`
console.log(typeof c)


//implicit typre conversoin (string to boolean)
if ('1') console.log('1 is a boolean true')
else console.log('1 is not a boolean')

if (0) console.log('value is zero')
else console.log('value is not a zero')

if (2) console.log('value is two')
else console.log('value is not a two')

let msg =''

if (msg) console.log('empty string')
else console.log('not empty string')

//object types is mutable
//sample array data types []
const arr = [1,3,4,5]
arr[arr.length - 1] =11 //if don't have .push
//arr.push(9)
e = arr.length
console.log(e)
arr[0] =11
console.log(arr)
console.log(typeof arr)
//sample object datatype : collection odf properties {}
const obj ={id:1,price :100}
//obj = nums //const not allowed
obj.id = 44
console.log(obj)
console.log(typeof obj)

function doSomthing(activity){
    // === check type and values , == check only value
    if (activity === null | activity === undefined)
    return `no activity`
    else 
    return `${activity} is done`
}

console.log(doSomthing())
console.log(typeof doSomthing)

let act1 // undefined
let act2 = null // null
let act3 = "Js learning" // string
console.log(doSomthing(act1)) 
console.log(doSomthing(act2)) 
console.log(doSomthing(act3)) 
console.log(doSomthing()) //undefined

const max  = 12.98 // have to initialized

let aa, 
    bb = 0, 
    cc = null
console.log(aa)
console.log(bb)
console.log(cc)




