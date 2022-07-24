import Storage from "../Storage.js";

class DoughnutChart {

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
    const transitions = await Storage.getTransition()

    transitions.map(transition => {
      if (transition.category == "Expense") {
        this.doughnutChart.data.labels.push(transition.description)
        this.doughnutChart.data.datasets[0].data.push(transition.amount)
        this.doughnutChart.data.datasets[0].backgroundColor.push(transition.color)
      }
    })

    this.doughnutChart.update()
  }
}

export default DoughnutChart