import Storage from "../Storage.js";

class BarChart {

  // extract the respective data from each transition
  static async getLabels() {
    let transitions = await Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      if (transition.category == "Expense") {
        labels.push(transition.description)
      }
    })

    return labels
  }

  static async getData() {
    let transitions = await Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      if (transition.category == "Expense") {
        labels.push(transition.amount)
      }
    })

    return labels
  }

  static async getColor() {
    let transitions = await Storage.getTransition()
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
  static async updateChart() {
    this.barChart.data.labels = await this.getLabels()
    this.barChart.data.datasets[0].data = await this.getData()
    this.barChart.data.datasets[0].backgroundColor = await this.getColor()
    this.barChart.update()
  }
}

export default BarChart