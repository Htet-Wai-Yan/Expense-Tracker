import {UI} from "./UI.js"

class Storage {
  // get from local storage
  static getTransition() {
    let transitions = localStorage.getItem('transitions') !== null ? JSON.parse(localStorage.getItem('transitions')) : []

    return transitions
  }

  // store from local storage
  static storeTransition(newTransition) {
    let transitions = Storage.getTransition()

    transitions.push(newTransition)

    localStorage.setItem('transitions', JSON.stringify(transitions))
  }

  // remove from local storage
  static deleteTransition(eleTarget) {
    let transitions = Storage.getTransition()

    transitions.splice(eleTarget, 1)

    localStorage.setItem('transitions', JSON.stringify(transitions))
  }
}

export {Storage}