//State change
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded')
  })
  window.addEventListener('load', () => {
    console.log('Load')
  })
  window.addEventListener('beforeunload', () => {
    console.log('before unload')
    localStorage.setItem('myCat', 'Tom')
  })

const inputElements = document.querySelectorAll('input')
inputElements[0].addEventListener('focus', () => {
  console.log('input focused')
})
inputElements[0].addEventListener('blur', () => {
  console.log('input blured')
})


//keyup on password input
const pElement = document.querySelector('p')
const inputUsername = document.querySelector('input')
inputUsername.addEventListener('keyup', (event) => {
  pElement.textContent = event.target.value
})