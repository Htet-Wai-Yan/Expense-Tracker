import Storage from "../Storage.js";

class BarChart {

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
    const transitions = await Storage.getTransition()

    transitions.map(transition => {
      if (transition.category == "Expense") {

        this.barChart.data.labels.push(transition.description)
        this.barChart.data.datasets[0].data.push(transition.amount)
        this.barChart.data.datasets[0].backgroundColor.push(transition.color)

      }
    })

    this.barChart.update()
  }
}

export default BarChart