//query selecting by id
const course201Ele = document.getElementById('int201')
console.log(course201Ele)

//return the first node that have been found *return only one
const course101Ele = document.querySelector('#int101')
console.log(course101Ele)

const bscitCourses = document.querySelector('#int101,#bscit-courses') //id
console.log(bscitCourses)

const progCourses = document.querySelector('.programming')//class
console.log(progCourses) 

console.log("--------------------------------")
//select a collection of elements
//find by selector
const progEle =document.querySelectorAll('#int201, .programming')
console.log(progEle)

const liEle = document.querySelectorAll('li')
console.log(liEle) //nodelist

//find with tagnames
const  liEle2 = document.getElementsByTagName('li')
console.log(liEle2) //html collection

//find with classname
const coursesEle = document.getElementsByClassName('courses')
console.log(coursesEle) 

console.log("--------------------------------")
const divLectElement = document.querySelector('.lecturers')
//get <li> under div.lecterer
const liDivLect =divLectElement.querySelectorAll('li')
console.log(liDivLect)

const allLi =document.querySelectorAll('li')
console.log(allLi)

