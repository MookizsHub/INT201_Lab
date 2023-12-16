const submitButton = document.getElementById('submit-btn-01')
submitButton.addEventListener('click', (e) => {
   e.preventDefault()
    console.log('submit clicked')
})

let submitBtn = document.getElementById("submitBtn");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("submit clicked");
  const input = document.getElementsByTagName("input");
  let bothValid = Array.from(input).every((a) => a.value.length > 0);
  if (bothValid) {
    document.querySelector("p").textContent = "success";
  } else {
    document.querySelector("p").textContent = "fail empty";
  }
});

// const submitButton = document.getElementById('submit-btn-01')
// submitButton.addEventListener('click', (e) => {
//    e.preventDefault()
//     console.log('submit clicked')
//     const inputelement = document.querySelectorAll('input')

//     console.log(inputelement[0].value)
//     console.log(inputelement[1].value)
// const pElement = document.querySelector('p')
// if (
//   inputElements[0].value.length === 0 ||
//   inputElements[1].value.length === 0
// ) {
//   pElement.textContent = 'some values are missing, please check'
// } else {
//   pElement.textContent = 'Your input are complete'
// }
// })