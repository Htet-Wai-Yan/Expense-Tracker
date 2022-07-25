class Storage {
  // get from local storage
  static getTransition() {
    let transitions = localStorage.getItem('transitions') !== null ? JSON.parse(localStorage.getItem('transitions')) : []

    return transitions
  }

  // store from local storage
  static async storeTransition(newTransition) {
    let transitions = await this.getTransition()

    transitions.push(newTransition)

    localStorage.setItem('transitions', JSON.stringify(transitions))
  }

  // remove from local storage
  static async deleteTransition(id) {
    let transitions = await this.getTransition()

    transitions.forEach((transition, index) => {
      if (transition.id == id) {
        transitions.splice(index, 1)
      }
    })

    localStorage.setItem('transitions', JSON.stringify(transitions))
  }

}

export default Storage