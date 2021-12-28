// Global variables
let description = document.querySelector('#description')
let balance = document.querySelector('#balance')
let transitionDate = document.querySelector('#transitionDate')

let totalBudget = 0
let totalExpense = 0

const transitionBtn = document.querySelector('#transitionBtn')

transitionBtn.addEventListener('click', () => {

  // when both input fields are not empty
  if (budget.value !== "" && expense.value !== ""){

    calculateBudget()
    calculateExpense()

  }

  // when one of them is empty
  else if (budget.value !== "" || expense.value !== "") {

    // when expense is empty and vice versa
    if (expense.value !== "" || expense.value.length > 0 && budget.value == "") {
      calculateExpense()
    }
    else {
      calculateBudget()
    }

  }

  // when both are left empty
  else {
    alert ('Field cannot be left blank')
  }

  // reset the date picker
  transitionDate.value = new Date()

})

function calculateBudget(description = 'Budget added') {
  let budget = document.querySelector('#budget')
  let budgetAmount = document.querySelector('#budgetAmount')

  totalBudget = parseInt(budget.value) + parseInt(budgetAmount.textContent)
  budgetAmount.textContent = totalBudget.toFixed(2)

  balance.textContent = (parseInt(totalBudget) - parseInt(expenseAmount.textContent)).toFixed(2)

  // History
  let transitionHistory = document.querySelector('#transitionHistory')
  let li = document.createElement('li')

  transitionHistory.appendChild(li).innerHTML = `
    <p>${description}</P>
    <div>
      <span>${parseInt(budget.value).toFixed(2)}</span>
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

  totalExpense = parseInt(expense.value) + parseInt(expenseAmount.textContent)
  expenseAmount.textContent = totalExpense.toFixed(2)

  balance.textContent = (parseInt(totalBudget) - parseInt(expenseAmount.textContent)).toFixed(2)

  transitionHistory.appendChild(li).innerHTML = `
    <p>${description.value}</P>
    <div>
      <span>${parseInt(expense.value).toFixed(2)}</span>
      <span>${new Date(transitionDate.value).toLocaleDateString('en-GB')}</span>
    </div>
  `
  li.style.borderLeft = "5px solid red"

  description.value = ""
  expense.value = ""

}