/*let x=1
{
     let x=2
     console.log(x)
}
console.log(x)
*/
 const x =1
 {
    const x=2
    console.log(x)
 }

 function doIt(x){
    console.log(x)
 }

 //console.log(y) cannot because it is in function scope
 console.log(x)
 doIt(100)
 console.log(x)

 let msg ="hello"
 console.log(msg.charAt(0))
 let msgs = [...msg] //spread operation
 console.log(msgs)

 let n ='2'
 console.log(typeof n)
 console.log(typeof Number(n)) //explicit , implicit is such a if 

 //----------------
 //optional chaining?
 let a  //undefined
 // array
 console.log(a?.[0])

 // object
 let b
 //1.use . before property name
 console.log(b?.id)
 //2. use ['property name']
 console.log(b['id'])
