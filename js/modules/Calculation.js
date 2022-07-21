import Storage from "./Storage.js"

class Calculation {

  // generate random number with preceeding 0s
  static generateID() {

    let id = Math.floor(Math.random() * 10000)

    if (id >= 100 && id < 1000) {
      id = `0${id}`
      return id

    } else if (id >= 10 && id < 100) {
      id = `00${id}`
      return id

    } else if (id < 10) {
      id = `000${id}`
      return id

    } else {
      return id

    }
  }

  static calculateAmount() {
    let transitions = Storage.getTransition()
    let incomeArray = [0]
    let expenseArray = [0]
    let budgetBalance = 0

    transitions.map(transition => {
      if (transition.category == "Income") {
        incomeArray.push(transition.amount)
      } else {
        expenseArray.push(transition.amount)
      }
    })

    let totalIncome = incomeArray.reduce((total, nextValue) => total + nextValue)
    let totalExpense = expenseArray.reduce((total, nextValue) => total + nextValue)

    budgetBalance = (totalIncome - totalExpense)

    return [totalIncome.toLocaleString('en-US'), totalExpense.toLocaleString('en-US'), budgetBalance.toLocaleString('en-US')]
  }

  static generateColors() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color
  }

}

export default Calculation