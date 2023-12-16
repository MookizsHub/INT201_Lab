// //common js
// const sum = require('./lib/utils')

//  //es module
//  import {sum} from './lib/utils.js';
//  console.log(sum(1,2))
//  console.log(section)

const rootNode =document //rootnode
console.log(rootNode) 
console.log(rootNode.nodeName)
console.log(rootNode.nodeType)
console.log(rootNode.nodeValue)
console.log("----------------------------------------------------------------")
console.log(document.documentElement)//root element = html
console.log(document.documentElement.nodeType)
console.log("----------------------------------------------------------------")

console.log(document.body)//html > body
console.log(document.head)//html > head
console.log(document.title) //html > head > title
console.log("----------------------------------------------------------------")

console.log(document.body.nodeType) //1
console.log(document.head.nodeType) //1
console.log(document.title.nodeType) //1