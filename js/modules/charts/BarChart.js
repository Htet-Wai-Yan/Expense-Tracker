import Storage from "../Storage.js";

class BarChart {

  // extract the respective data from each transition
  static getLabels() {
    let transitions = Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      if (transition.category == "Expense") {
        labels.push(transition.description)
      }
    })

    return labels
  }

  static getData() {
    let transitions = Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      if (transition.category == "Expense") {
        labels.push(transition.amount)
      }
    })

    return labels
  }

  static getColor() {
    let transitions = Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      labels.push(transition.color)
    })

    return labels
  }

  // Setup block
  static data = {
    labels: [],
    datasets: [{
      label: "Expenses",
      data: [],
      backgroundColor: [],
      hoverOffset: 4,
      borderWidth: 0
    }]
  }

  // Config block
  static config = {
    type: 'bar',
    data: this.data,
    options: {

    }
  }

  // Render block
  static barChart = new Chart(
    document.querySelector("#barChart"),
    this.config
  )

  // Update the chart labels and data with updated transitions
  static updateChart() {
    this.barChart.data.labels = this.getLabels()
    this.barChart.data.datasets[0].data = this.getData()
    this.barChart.data.datasets[0].backgroundColor = this.getColor()
    this.barChart.update()
  }
}

export default BarChart