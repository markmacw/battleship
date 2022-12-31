import { name, age, blingBLing } from './library.js'

function sayHello() {
  console.log(`hello ${name}!`)
}

function giveAge() {
  console.log(`you are this old: ${age}`)
}

window.addEventListener('DOMContentLoaded', event => {
  document.querySelector('button').addEventListener('click', sayHello)
})
window.addEventListener('DOMContentLoaded', event => {
  document.querySelector('button:nth-child(2)').addEventListener('click', giveAge)
})
window.addEventListener('DOMContentLoaded', event => {
  document.querySelector('button:nth-child(3)').addEventListener('click', blingBLing)
})
