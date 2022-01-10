import {Storage} from "./Storage.js"

// View: Display the data in the table rows
class UI {

  // Transitions
  static displayTransition() {

    // Get the data from localStorage
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
        <i class="fas fa-minus-circle text-danger delete btn btn-secondary" id="deleteBtn"></i>
      </td>
    `

    tableData.appendChild(tr)
    
  }

  static removeTransition(eleTarget) {
    if(eleTarget.classList.contains('delete')) {
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

export {UI}