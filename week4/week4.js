/*function doSomething(msg) {
  console.log(x);
  if (msg === null || msg === undefined) {
    let someone = "guest";
  }
  let x = 1;
  //   console.log(someone)
  return `hello, ${msg}`;
}
doSomething();
// console.log(msg)

// conditional operator
letx = 1;
let y = x === 1 ? 1 : 0;
console.log(x === 1 ? 1 : 0);

// ไม่มีค่าอะไรเลย ไม่มีตัวตน จะให้ไปทำอย่างอื่นได้อย่างไร
// cannot read property 
let m = null 
console.log(m?.charAt(0))

//nullish
let n = m ?? 0 // equal to m!== null && m!== undefined ? m:0
console.log(n)

let s = [] //array initialization with empty array
let z = {} //object initialization with empty array
console.log(s) //empty array (not null or not undefined)
console.log(z) //empty object (not null or not undefined)

let a
a =a ?? y
console.log(a)


// random number in a range 25 to 100
// Math.random() randoms in a range of  0  to 0.99999*

// function for random
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min +1)+min)
}

let n1 = 25,n2=100
const rand = Math.floor(Math.random() * (n2 -n1 +1) + n1);
console.log(rand)
console.log('-------')

console.log(Math.PI)
console.log(Math.pow(2,5))
console.log(Math.sqrt(9))
*/

let str1 = "ant";
let str2 = "Ant";
let str3 = "ANT";
let str4 = "ant";

console.log(str1 === str2); //false
console.log(str1 !== str3); //true
console.log(str2 === str3); //false
console.log(str1 === str4); //true
console.log(str1 < str2); //false
console.log(str3 < str1); //true
console.log("-----");
console.log(str1.includes("nt"));
console.log(str1.includes("Nt"));
console.log(str1.toLowerCase().includes("nt".toLowerCase()));
console.log(str1.toUpperCase().includes("nt".toUpperCase()));
console.log(str1.includes("ant"));

//primitive = boolean string number
//compare object types including object and array data types
let x = [1, 3, true, "unknown"];
let y = [1, 3, true, "unknown"];
let z = x; //give memory addefss from x to z
console.log(x === y); // false memory address of x === memory address of y
console.log(x === z); //  true memory address of x === memory  address of z

z[0] = "A";
x[0] = "B";
y[0] = "A";

console.log(x); //['B',3,true,'unknown']
console.log(y); //['A',3,true,'unknown']
console.log(z); //['B',3,true,'unknown']

//object datatypes
let m = { id: 1, title: "pen" };
let n = { id: 1, title: "pen" };
let o = m; //give memory addefss from m to o
console.log(m === n); //false memory address of m === memory address of n
console.log(o === m); // true memory address of o === memory address of m
o.id = 888;
console.log(m); //? {id :1 ,title:'pen'},{id :888,title:'pen'}
console.log(o); //? {id :888,title:'pen'}

//primitive type
let a = 5;

// loops
let scores = 20;
let grade = "F"; //<40 'F, 41-70 'Good', 71-100 'Very Good'
if (scores < 0 || scores > 100) grade = "invalid scores";
else if (scores > 70) grade = "Very Good";
else if (scores > 40) grade = "Good";
console.log(grade);
const month = 1;
let monthName = "";
switch (month // 1===1
) {
  case 1:
    monthName = "Jan";
    break;
  case 2:
    monthName = "Feb";
    break;
  case 3:
    monthName = "Mar";
}
console.log(monthName); //Febconst ch = 'b'
let isVowel = false;
switch (ch) {
  case "A":
  case "a":
  case "E":
  case "e":
  case "I":
  case "i":
  case "O":
  case "o":
  case "U":
  case "u":
    isVowel = true;
    break;
  case "*":
    isVowel = "star";
    break;
  default:
    isVowel = false;
}
console.log(isVowel);
for (let i = 1; i <= 10; i++) console.log(i); //array data typelet x = [1, 3, true, 'unknown']
console.log("----"); //print element in X
//1. for...ifor (let i = 0; i < x.length; i++) console.log(x[i])
//2. for...offor (const data of x) {  console.log(data)}
//3. for...eachx.forEach((element) => {  console.log(element)})
//object data typelet m = { id: 1, title: 'pen' }
//for..infor (const key in m) {  console.log(key)
//print  property name  console.log(m[key])
//print  property value}
