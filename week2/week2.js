//synchronous programming
function greeting (someone){
     return 'hello, ' + someone
}     
let $myName = 'Patcharanun Jansiri'
$myName = 10 //weakly and dynamic data type
console.log('starting...')
//asynchronous programming
setTimeout(()=>{
     console.log("more complex task finish...")
},10000)
console.log(greeting($myName))
setTimeout(()=>{
     console.log("simple task finish...")
},2000)
console.log('Good bye...')

let msg = "I'm developer"
console.log(msg)


let a = null
console.log(a)
let total
console.log(total)
if (total === undefined) console.log('variable does not have initial value')
if (a === null) console.log('variable has null value')

//backtick
if ('2' == 2) console.log (`'2'==2' :${'2' == 2}`)
if ('2' === 2) console.log (`'2'=== 2' :${'2' == 2}`)

//object sample
const obj = {id:100, name: 'pen', price: 100}
const obj2 = {id:200, name: 'pencil',price: 30}
// obj = obj2 cannot change reference value
console.log(obj)
obj.id = 101 //but obj can update its properties