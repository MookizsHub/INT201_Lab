// every and some
const names =  ['alice', 'Mook','Pim']
const isStaterWithALetter = names.some( (names) => names.toLowerCase().startsWith('a'))
console.log(isStaterWithALetter)

// reduce
//return total of all nums
const nums = [5, 2, 3, 4, 7]
const total = nums.reduce((sum, num) => sum + num, 0)
console.log(total)

//return value that contain the first character of all names
const namess = ['Alice', 'Bob', 'Ann', 'Cath'] //'ABAC'
const first = namess.reduce((acc, str) => acc + str.charAt(0),'')
console.log(first)
//return the total pricec
const buyProducts = [  
    { price: 50, quantity: 2 },  
    { price: 299, quantity: 10 }, 
     { price: 15, quantity: 5 }]
const totalPrice = buyProducts.reduce(  (total, current) => total + current.price * current.quantity,  0)
console.log(totalPrice)