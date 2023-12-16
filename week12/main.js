const bodychild = document.body.childNodes // nodelist : array like (implemented for-each)
console.log(bodychild)

const bodychildren = document.body.children // Html collection :array like (not implemented for-each)
console.log(bodychildren)

bodychild.forEach((bcd) => 
{
    console.log(bcd)
})

console.log("--------------------------------")

Array.from(bodychildren).forEach((bcn)=> {
    console.log(bcn)
})

console.log("-------")
console.log(document.body.firstChild)
console.log(document.body.firstElementChild)
console.log(document.body.lastChild)
console.log(document.body.lastElementChild)

console.log("-------")
console.log(document.body.firstChild === document.body.firstElementChild)
console.log(document.body.lastChild === document.body.lastElementChild)
console.log("-------")

console.log(document.documentElement === document.firstElementChild)
console.log(document.documentElement === document)

console.log(document.documentElement) //html
console.log(document)//rootnode