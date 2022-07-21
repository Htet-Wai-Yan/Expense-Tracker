import Storage from "../Storage.js";

class DoughnutChart {

  // extract the respective data from each transition
  static getLabels() {
    let transitions = Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      labels.push(transition.description)
    })

    return labels
  }

  static getData() {
    let transitions = Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      labels.push(transition.amount)
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
  static doughnutConfig = {
    type: 'doughnut',
    data: this.data,
    options: {

    }
  }

  // Render block
  static doughnutChart = new Chart(
    document.querySelector("#doughnutChart"),
    this.doughnutConfig
  )

  // Update the chart labels and data with updated transitions
  static updateChart() {
    this.doughnutChart.data.labels = this.getLabels()
    this.doughnutChart.data.datasets[0].data = this.getData()
    this.doughnutChart.data.datasets[0].backgroundColor = this.getColor()
    this.doughnutChart.update()
  }
}

export default DoughnutChart