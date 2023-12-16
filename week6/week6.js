//1. create object by literal{}
const student = {id: 65130500049, firstname: 'Somchai', lastname:'Jaidee'}
console.log(student)
console.log(typeof student)
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.prototype.isPrototypeOf(student))
console.log(Date.prototype.isPrototypeOf(student))

const lecturer ={id: 1001 ,firstname : 'Umaporn',lastname : 'Sup' }
console.log(Object.prototype.isPrototypeOf(lecturer))

// way to get property value
const someoneId = student.id // object.key
const someoneFirstname = student["firstname"] //object["Key"]

// way to assign property value
student.id = 65130500001
student["firstname"] = "John"
console.log(student.id)
console.log(student["firstname"])
 
//dynamic properties
// add email
student.email = ["mookies2004@gmail.com"]
student['address'] = "Bangkok,Thailand"
console.log(student)

// delete existing properties
delete student.address
console.log(student)

//nested
student.advisor = lecturer
console.log(student)

console.log(student.advisor.firstname)
console.log(student['advisor']['firstname'])

student.getFullname = function(){
    return `${this.firstname} ${this.lastname}`
}

console.log(student.getFullname)
console.log(student.getFullname())
console.log('--------------------------------------------------------')

//2. create object with constructure function
function Person(id,firstname,lastname){
    this.id = id
    this.firstname = `${firstname} ${lastname}`
}

const p1 = new Person(111,'Tom','Jerry')
const p2 = new Person(222,'Mook','Jans')
const p3 = new Person(333,'Te', 'Eakha')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Object.prototype.isPrototypeOf(p2))
console.log(Object.prototype.isPrototypeOf(p3))
console.log(Date.prototype.isPrototypeOf(p3))
console.log('--------------------------------------------------------')

//3. create object with class
class Student{
    constructor(id,firstname,lastname){
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
    }
    getFullname(){
        return `${this.firstname} ${this.lastname}`
    }
}

//st1 object-> student prototype -> object prototype (Ancester)
const s1 = new Student(11,'Pitch','K')
const s2 = new Student(22,'Lee','Smith')
const s3 = new Student(33,'Meow','Meaw')
console.log(s1)
console.log(s2.getFullname)
console.log(s3)
console.log(Object.prototype.isPrototypeOf(s1))
console.log(Student.prototype.isPrototypeOf(s1))
console.log('--------------------------------------------------------')

//4. object create
const undergraduate = Object.create(s1) 
console.log(undergraduate)
console.log(undergraduate.id)
console.log(undergraduate.firstname)
console.log(undergraduate.lastname)
console.log(Object.prototype.isPrototypeOf(undergraduate))
console.log(Student.prototype.isPrototypeOf(undergraduate))
undergraduate.project = 'Web Application'
console.log(undergraduate)
