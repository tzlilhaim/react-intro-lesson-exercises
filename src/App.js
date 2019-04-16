import React, { Component } from 'react';
import './App.css';


const companies = [
  { name: "Tesla", revenue: 140 },
  { name: "Microsoft", revenue: 300 },
  { name: "Google", revenue: 600 }]


class App extends Component {
  getStuff() {
    // SPOTCHECK-1 CODE HERE...
  }

  getMorningGreeting() {
    // SPOTCHECK-2(&3) CODE HERE... 
  }

  getEveningGreeting() {
    // SPOTCHECK-2(&3) CODE HERE... 
  }

  showCompany(name, revenue) {
    // EXERCISE-1 CODE HERE...
  }

  getClassName(temperature) {
    // EXERCISE-2 CODE HERE...
  }

  render() {
    return (
      <div>
        <div className="exercise" id="spotcheck-1">
          <label>Spot-check: 1</label>
          {/* YOUR CODE HERE */}
        </div>

        <div className="exercise" id="spotcheck-2">
          <label>Spot-check: 2</label>
          {/* YOUR CODE HERE */}
        </div>

        <div className="exercise" id="spotcheck-3">
          <label>Spot-check: 3</label>
          {/* YOUR CODE HERE */}
        </div>

        <div className="exercise" id="ex-1">
          <label>Exercise: 1</label>
          {/* YOUR CODE HERE */}
        </div>

        <div className="exercise" id="ex-2">
          <label>Exercise: 2</label>
          {/* YOUR CODE HERE */}
        </div>
      </div>)
  }
}

export default App;



