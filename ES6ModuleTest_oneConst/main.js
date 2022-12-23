import { name } from './library.js'

function sayHello() {
  console.log(`hello ${name}!`)
}

window.addEventListener('DOMContentLoaded', event => {
  document.querySelector('button').addEventListener('click', sayHello)
})
