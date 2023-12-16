//destructuring+rest on array
const [a, ...b] = ['a', 'b', 'c', 'd']
console.log(a) //'a'
console.log(b) //[ 'b', 'c', 'd' ]
//destructuring +rest on object
const { id: studentId, ...n } = { id: 1, title: 'js', authors: 'Jame Smiths' } // change name by : and follw by new name
console.log(studentId) //1
console.log(n) //{ id: 1, title: 'js', authors: 'Jame Smiths' }
