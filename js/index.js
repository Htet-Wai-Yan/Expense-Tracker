// Global variables
let totalBudget = 0
let totalExpense = 0

let description = document.querySelector('#description')
let balance = document.querySelector('#balance')
let transitionDate = document.querySelector('#transitionDate')

// set default date to current date
let currentDate = new Date()
currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`

transitionDate.value = currentDate

const addTransition = document.querySelector('.addTransition')

addTransition.addEventListener('submit', (e) => {

  // disable page refresh on submit
  e.preventDefault()

  // when both input fields are not empty
  if (budget.value !== "" && expense.value !== "") {

    calculateBudget()
    calculateExpense()

  }

  // when one of them is empty
  else if (budget.value !== "" || expense.value !== ""){

    // when expense is empty and vice versa
    if (expense.value !== "" || expense.value.length > 0 && budget.value == "") {
      calculateExpense()
    }
    else {
      calculateBudget()
    }

  }

  else {
    alert ('Fields cannot be left blank')
  }

  transitionDate.value = currentDate

})

function calculateBudget(description = 'Budget added') {
  let budget = document.querySelector('#budget')
  let budgetAmount = document.querySelector('#budgetAmount')

  totalBudget = parseFloat(budget.value) + parseFloat(budgetAmount.textContent)

  budgetAmount.textContent = totalBudget.toFixed(2)

  balance.textContent = (parseFloat(totalBudget) - parseFloat(expenseAmount.textContent)).toFixed(2)

  // History
  let transitionHistory = document.querySelector('#transitionHistory')
  let li = document.createElement('li')

  transitionHistory.appendChild(li).innerHTML = `
    <p>${description}</P>
    <div>
      <span>${parseFloat(budget.value).toFixed(2)}</span>
      <span>${new Date(transitionDate.value).toLocaleDateString('en-GB')}</span>
    </div>
  `
  li.style.borderLeft = "5px solid green"

  budget.value = ""

}

function calculateExpense() {

  let expense = document.querySelector('#expense')
  let expenseAmount = document.querySelector('#expenseAmount')

  // transition
  let transitionHistory = document.querySelector('#transitionHistory')
  let li = document.createElement('li')

  totalExpense = parseFloat(expense.value) + parseFloat(expenseAmount.textContent)
  expenseAmount.textContent = totalExpense.toFixed(2)

  balance.textContent = (parseFloat(totalBudget) - parseFloat(expenseAmount.textContent)).toFixed(2)

  transitionHistory.appendChild(li).innerHTML = `
    <p>${description.value}</P>
    <div>
      <span>${parseFloat(expense.value).toFixed(2)}</span>
      <span>${new Date(transitionDate.value).toLocaleDateString('en-GB')}</span>
    </div>
  `
  li.style.borderLeft = "5px solid red"

  description.value = ""
  expense.value = ""

}