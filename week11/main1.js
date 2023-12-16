//head is current node
const headElement = document.head  //go to head
console.log(headElement)
console.log(headElement.childNodes)
//return the children (all node types), node list data type
console.log(headElement.children) 
// return child element (only element type), hTml collection data type
console.log("-------------------------------------------------------")

const headChildNode = headElement.childNodes
headChildNode.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeValue)
    console.log(hc.nodeType)
    console.log("----")
})

console.log("-------------------------------------------------------")

//Html collection is array like (not real array) ,need to
//convert tot arra before using array functions
const headChildren = headElement.children
Array.from(headChildren).forEach((child) => {
    console.log(child.nodeName)
    console.log(child.nodeValue)
    console.log(child.nodeType)
})

console.log("-------------------------------------------------------")
//first child
console.log(headElement.firstElementChild)
console.log(headElement.firstChild)
console.log("----")

//last child
console.log(headElement.lastElementChild)
console.log(headElement.lastChild)
console.log("----")

//parent
console.log(headElement.parentElement)
console.log(headElement.parentNode)
console.log("----")

// previous sibling
console.log(headElement.previousElementSibling)
console.log(headElement.previousSibling)
console.log("----")

//Next sibling
console.log(headElement.nextElementSibling)
console.log(headElement.nextSibling)
console.log("----")

//find attributes
const HeadFirstElement =  headElement.firstElementChild
const HeadFirstElementAttr = HeadFirstElement.attributes
console.log(HeadFirstElementAttr)