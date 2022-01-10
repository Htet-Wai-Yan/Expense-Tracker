// Model: Transition object
class Transition {

  constructor (_date, _description, _amount, _category) {
    this.date = new Date(_date).toLocaleDateString('en-GB') // convert to dd/mm/yyyy
    this.description = _description
    this.amount = _amount
    this.category = _category == "1" || _category == "Choose" ? "Income" : "Expense"
  }
}

// View: Display the data in the table rows
class UI {

  static displayTransition() {

    // TO-DO: get this from localStorage
    let storedTransition = Storage.getTransition()
    
    storedTransition.forEach(transition => UI.addTransition(transition))

  }

  static addTransition(newTransition) {

    const tableData = document.querySelector('#tableData')
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="align-middle">${newTransition.date}</td>
      <td class="align-middle">${newTransition.description}</td>
      <td class="align-middle">${newTransition.amount} MMK</td>
      <td class="align-middle">${newTransition.category}</td>
      <td class="align-middle">
        <i class="fas fa-minus-circle text-danger deleteBtn btn btn-secondary"></i>
      </td>
    `

    tableData.appendChild(tr)
  }

  static removeTransition(eleTarget) {
    if(eleTarget.classList.contains('deleteBtn')) {
      eleTarget.parentElement.parentElement.remove()
    }
  }

  static showReminder() {
    let alert = document.querySelector('.alert')

    alert.classList.remove('d-none')

    setTimeout(() => alert.classList.add('d-none'), 2000)
  }

  static clearField() {
    document.querySelector('#date').value = ""
    document.querySelector('#description').value =""
    document.querySelector('#amount').value = ""
    document.querySelector('.form-select').value = "Choose"
  }
}

class Storage {
  static getTransition() {
    let transitions = localStorage.getItem('transitions') !== null ? JSON.parse(localStorage.getItem('transitions')) : []

    return transitions
  }

  static storeTransition(newTransition) {
    let transitions = Storage.getTransition()

    transitions.push(newTransition)

    localStorage.setItem('transitions', JSON.stringify(transitions))
  }

  static deleteTransition(eleTarget) {
    let transitions = Storage.getTransition()

    transitions.splice(UI.removeTransition, 1)

    localStorage.setItem('transitions', JSON.stringify(transitions))
  }
}

// Controller: display all items
document.addEventListener('DOMContentLoaded', UI.displayTransition)

// Controller: Add new item
document.querySelector('#new_transition').addEventListener('submit', (event) => {

  // disable form refresh behaviour
  event.preventDefault()

  // get the data from input fields
  let date = document.querySelector('#date').value
  let description = document.querySelector('#description').value
  let amount = parseInt(document.querySelector('#amount').value).toFixed(2) // convert to 2 decimal
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
document.querySelector('#tableData').addEventListener('click', (element) => {
  UI.removeTransition(element.target)
  Storage.deleteTransition(element.target)
})