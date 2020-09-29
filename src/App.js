import React, { Component } from "react"
import "./App.css"

class App extends Component {
  getStuff() {
    return <h1>This is a header</h1>
  }

  getMorningGreeting() {
    return <div>Good morning!</div>
  }

  getEveningGreeting() {
    return <div>Good evening!</div>
  }

  showCompany(name, revenue) {
    return (
      <div id={name}>
        {name} makes {revenue} every year
      </div>
    )
  }

  getClassName(temperature) {
    const weather =
      temperature < 15
        ? "freezing"
        : temperature > 14 && temperature < 31
        ? "fair"
        : "hell-scape"
    return <div id="weatherBox" className={weather}></div>
  }

  render() {
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 },
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className="ex-title">Spot-check 1</h4>
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() < 12
              ? this.getMorningGreeting()
              : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>some text</p>,
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map((c) => {
              return this.showCompany(c.name, c.revenue)
            })}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(30)}
          </div>
        </div>
      </div>
    )
  }
}

export default App
