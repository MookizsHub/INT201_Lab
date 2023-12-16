const students = [
    {id:1,name: 'John'},
    {id:2,name: 'James'}
]
// sort asc
students.sort((a, b) => a.id - b.id)
//sort desc
students.sort((a, b) => b.id - a.id)
// sort asc
students.sort((a, b) => a.name.localeCompare(b.name))
//sort desc
students.sort((a, b) => b.name.localeCompare(a.name))
