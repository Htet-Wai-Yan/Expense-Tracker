import {Transition} from "./modules/Transition.js"
import {UI} from "./modules/UI.js"
import {Storage} from "./modules/Storage.js"

// Controller: display all items
document.addEventListener('DOMContentLoaded', UI.displayTransition)

// Controller: Add new item
document.querySelector('#new_transition').addEventListener('submit', (event) => {

  // disable form refresh behaviour
  event.preventDefault()

  // get the data from input fields
  let date = document.querySelector('#date').value
  let description = document.querySelector('#description').value
  let amount = parseInt(document.querySelector('#amount').value) // converted to integer
  let category = document.querySelector('.form-select').value

  // validate the input fields
  if(!date || !description || !amount || !category || category == "Choose") {

    UI.showReminder()

  } else {

    let newTransition = new Transition(date, description, amount, category)

    UI.addTransition(newTransition)

    Storage.storeTransition(newTransition)

    UI.clearField()
    
  }

})

// Controller: Remove item from the table
document.addEventListener('click', (element) => {

  // assign event to dynamically created HTML element
  if(element.target && element.target.id == 'deleteBtn') {
    UI.removeTransition(element.target)
    Storage.deleteTransition(element.target)
  }
})