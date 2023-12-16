//Attribute
const firstDiv = document.body.firstElementChild
console.log(firstDiv)
const firstDivAttributes = firstDiv.attributes //get all attribute of any element
console.log(firstDivAttributes) //length=2, id and class attributes
Array.from(firstDivAttributes).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(firstDiv.getAttribute('id')) //return value of specified attribute 'id'
console.log(firstDiv.getAttribute('class'))
//return value of specified attribute 'name'
const firstAttribute = firstDivAttributes[0]
console.log(firstAttribute.ownerDocument)
console.log(firstAttribute.ownerElement)

//create a new attribute named 'owner' with value 'Patcharanun'
firstDiv.setAttribute('owner','Patcharanun')

console.log("--------------------------------")
//step add element 
//1.create element
//2.create attribute
//3.add child element to div
const newPEle = document.createElement('p') 
//newPEle.textContent ='<span style="color:red">Client Web programming 2'

//when exam use textContent
newPEle.innerHTML ='<span style="color:red">Client Web programming 2'
newPEle.setAttribute('id','int203')
newPEle.setAttribute('class','courses')

const divCoursesPEle =document.getElementById('bscit-courses')
divCoursesPEle.appendChild(newPEle)