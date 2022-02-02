import {Transition} from "./modules/Transition.js"
import {UI} from "./modules/UI.js"
import {Storage} from "./modules/Storage.js"
import {Calculation} from "./modules/Calculation.js"


// Controller: display all items
document.addEventListener('DOMContentLoaded', () => {
  UI.displayTransition()
  UI.displayAmount()
})

// Controller: Add new item
document.querySelector('#new_transition').addEventListener('submit', (event) => {

  // disable form refresh behaviour
  event.preventDefault()

  // get the data from input fields
  let date = document.querySelector('#date').value
  let description = document.querySelector('#description').value
  let amount = parseInt(document.querySelector('#amount').value) // converted to integer
  let category = document.querySelector('.form-select').value
  let id = Calculation.generateID()

  // validate the input fields
  if(!date || !description || !amount || !category || category == "Choose") {

    UI.showReminder()

  } else {

    let newTransition = new Transition(date, description, amount, category, id)

    UI.addTransition(newTransition)

    Storage.storeTransition(newTransition)

    UI.clearField()
    
    UI.displayAmount()
  }
  
})

// Controller: Remove item from the table
document.querySelector('#tableData').addEventListener('click', (element) => {

  UI.removeTransition(element.target)
  Storage.deleteTransition(element.target.parentElement.parentElement.children[0].textContent)
  UI.displayAmount()
  
})