// destructuring array
// create array named nums
const nums = [1,3,5,7,9]
 
//destruturing
const [a,b,c] = nums
console.log(a)
console.log(b)
console.log(c)

 console.log(typeof a)
 console.log(typeof b)
 console.log(typeof c)

 const [x] =nums
 console.log(x)

 const [, , , f, , e] = [5,10,15,20,25,30,35,40,45,50]
 const [, , , y, , ...z] = [5,10,15,20,25,30,35,40,45,50]
 console.log(y)
 console.log(z)
 console.log(f)
 console.log(e)

 const [...m] = nums
 console.log(m)
 console.log('--------------')


 const n = nums //memory address of num to n
n[0] = 999
console.log(nums)
console.log(n)
 //destructuring
 const [o] = nums //999
 const [,p] = nums // 3
 const [...q] = nums // [999,3,5,7,9]
console.log(o)
console.log(p)
console.log(q)

const r = [...'Hello World']
console.log(r)
// [//   'H', 'e', 'l', 'l',
//   'o', ' ', 'W', 'o',
//   'r', 'l', 'd'// ]
//destructuring array result [index, element] from entries()
for (const [index, value] of r.entries()) {  
    console.log(index)  
    console.log(value)
}