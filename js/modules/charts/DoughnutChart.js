import Storage from "../Storage.js";

class DoughnutChart {

  // extract the respective data from each transition
  static async getLabels() {
    let transitions = await Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      labels.push(transition.description)
    })

    return labels
  }

  static async getData() {
    let transitions = await Storage.getTransition()
    let labels = []

    transitions.map(transition => {
      labels.push(transition.amount)
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
  static async updateChart() {
    this.doughnutChart.data.labels = await this.getLabels()
    this.doughnutChart.data.datasets[0].data = await this.getData()
    this.doughnutChart.data.datasets[0].backgroundColor = await this.getColor()
    this.doughnutChart.update()
  }
}

export default DoughnutChart