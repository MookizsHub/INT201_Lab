// 1. Array literal
//intial x with empty string 
const x = [] //typeos array is object
console.log(typeof x)

if (x?.length === 0 ) 
console.log('empty array')
else console.log('not empty array')
console.log(x?.[0])

//x[index] , addd new element by using index
x[0] = 1
x[1] =3
x[2] =5
//x = [1,3,5]
//add new element int the end of array by using push function
x.push(7)
x.push(9)
console.log(x)  //1,3,5,7,9

const y = [1,true,'Beginner',2.5]
console.log(y)
console.log(y[0])//1
console.log(y[y.length -1])
console.log(y.length)

// nested array
const z = [
    [2,4,6],
    [true,false],
    ['a','b','c']
]
console.log(z[0])
console.log(z[z.length-1])

const m =[{productId : 1 ,name : 'pen',price :200},
            {productId : 2 ,name : 'notebook',price :100},   
            {productId : 3 ,name : 'pencil',price :10},
]

console.log (m)
console.log(m[0]) // array index 0
console.log (m.length) // all length of array 
console.log (m[m.length -1]) // the last element of the arraylist

const n ={ productId : [1001,1002,1003],productPrice : [100,10,15]}
console.log(n.length)
console.log(typeof n)
console.log(n.productId)
console.log(n.productPrice)

// 2.  ...spread operator
// used to include the another element to be part of the element
const a = [5,7,9]
const b = [...x,11,13,...x]
console.log(a)
console.log(b)
const c = 'to day is a good day'
const d =[...c]
console.log(d)

for (const ch of d) {
    console.log(ch)  
}

for (const value of d){
    console.log(value)
}

//3. Array () consturctor 
const e  = new Array()
console.log(e)
console.log(x.length)

const f = new Array(5)
console.log(f.length)
console.log(f[0]) // undefined

const g = new Array(10 ,'A')
console.log(g.length)
console.log(g[g.length -1])

// 4. create array with Array.of() function
// if we use in the normal array it will bw the size of array 
//but if using if it will be the member 
const h = Array.of(5)
const l = Array.of(1, 5, 7)
const j = Array.of(true, 'A', 'JS')
console.log(h.length) //1
console.log(l.length) //3
console.log(j.length) //3

// 5. create function with Array.from()
const k = [1,3,5]
const o = [2,4,6]
let p = Array.from(k)
const q = [...k,...o]




