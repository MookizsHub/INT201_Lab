//foreach
// const fruits = ['apple', 'orange', 'mango'];
// fruits.forEach((fruit) => console.log(fruit.charAt(0)))

// let allFruits = ''
// fruits.forEach((fruit) => (allFruits +=fruit+ ''))
// console.log(allFruits)

const students = [
  {id: 1, firstname: 'Somsak', lastname: 'Jaidee' },
  { id: 2, firstname: 'Somchai', lastname: 'Dee' },
  {id: 3, firstname: 'Somying', lastname: 'Jai'}
]
//filter method
const jaiStudents = students.filter((student) =>
  student.lastname.toLowerCase().startsWith('jai')
)
console.log(jaiStudents)
//students who has firstname or lastname include 'de' with case insensitive
const deStudents = students.filter(
  (student) =>
    student.firstname.toLowerCase().includes('de') ||
    student.lastname.toLowerCase().includes('de')
)
console.log(deStudents)
//map method
const ids = students.map((student) => student.id)
console.log(ids)
//return all students' fullname, fullname format is "lastname, firstname"
const fullnames = students.map(
  (student) => `${student.lastname}, ${student.firstname}`
)
console.log(fullnames)
//return all student ids in the format current year follows with student id, for examples,
// {​​ id: 1, firstname: 'Somsak', lastname: 'Jaidee' }​​ => 20231
const currentYear = new Date(Date.now()).getFullYear()
const newIds = students.map((student) =>{
  return currentYear + '' + student.id})
console.log(newIds)

//find method
//find the first student who starts the lastname with 'jai'
const jaiFirstStudent = students.find((student) =>
  student.lastname.toLowerCase().startsWith('jai')
)
console.log(jaiFirstStudent) //{​​ id: 1, firstname: 'Somsak', lastname: 'Jaidee' }​​
const jaiFirstStudentIndex = students.findIndex((student) =>
  student.lastname.toLowerCase().startsWith('jai')
)
console.log(jaiFirstStudentIndex) //0
//return boolean that check all student ids whether have id value more than zero
console.log(students.every((student) => student.id > 0))
//return boolean that check at least one student firstname ends with 'sak'
console.log(
  students.some((student) => student.firstname.toLowerCase().endsWith('sak'))
)

