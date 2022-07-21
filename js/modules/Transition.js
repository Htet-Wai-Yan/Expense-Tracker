// Model: Transition object
class Transition {

  constructor(_date, _description, _amount, _category, _id, _color) {
    this.date = new Date(_date).toLocaleDateString('en-GB') // convert to dd/mm/yyyy
    this.description = _description
    this.amount = _amount
    this.category = _category == "1" || _category == "Choose" ? "Income" : "Expense"
    this.id = _id
    this.color = _color
  }

}

export default Transition