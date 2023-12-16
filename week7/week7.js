function arrayStat(arr) {
  //min max sum avg
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum
    sum += arr[i];
    //min
    if (arr[i] < min) {
      min = arr[i];
    }
    //max
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  avg=sum/arr.length;
  return {min:min,max:max,sum:sum,avg:avg}
}
console.log(arrayStat([1, 2, 3, 4, 5]))
console.log(arrayStat([2, 4, 6, 8, 10]))

//destruct
const book = {  isbn: '123456789', 
 title: 'Introduction to JavaScript',  
 author: { firstname: 'Adam', lastname: 'Lee' },  
 publisher: {    name: 'HarperCollins',   
     location: {name: 'Silicon',  country: 'USA' }  }
    }
    const { title } = book //equally to const title=book.title
    console.log(title)//store property value to new variable name
    const { publisher: publisherName, isbn: isbn_book } = book
    console.log(publisherName)
    console.log(isbn_book)
    const {  publisher: {    location: { country }  }} = book
    console.log(country)