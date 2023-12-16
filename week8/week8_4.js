// replace negative numbers to zero
const number = [-5, -6, 7, 8, 9, -1, 0]
const replacedNumber = number.map((num) => {  
    return num < 0 ? 0 : num}
    )
    console.log(replacedNumber)

//includes for string
const msg = 'Today is a present'  // case sensitivity
console.log(msg.includes('Re')) //false
console.log(msg.includes('re')) //true
console.log(msg.includes('day')) // true
console.log(msg.includes('present')) //true

const newMsg = msg.split(' ')
console.log(newMsg) //[ 'Today', 'is', 'a', 'present' ]

//includes for array
console.log(newMsg.includes('re')) //false
console.log(newMsg.includes('day')) //false
console.log(newMsg.includes('today')) //false
console.log(newMsg.includes('Today')) //true

//reverse original array
const nums = [-5, -6, 7, 77, 8, 9, -1, 0]
console.log('before', nums)
nums.reverse()
console.log('after', nums) //[  0, -1,  9, 8,  7, -6, -5]

//sort
const numString = nums.join('*') // join array from num with *
console.log(numString)
console.log(nums.sort()) //[  -1, -5, -6, 0,  7, 77,  8, 9] default sorting by string
nums.sort((num1, num2) => num1 - num2) //[-6, -5, -1,  0, 7,  8,  9, 77] ascending number sorting
console.log(nums)
nums.sort((num1, num2) => num2 - num1) //[ 77,  9,  8,  7, 0, -1, -5, -6 ]descending number sorting
console.log(nums)

