import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Satya"
      }
      console.log("Lifecycle B constructure");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps is called- LifecycleB")
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }
    
  render() {
    console.log("Render method in LifecycleB called");
    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    )
  }
}

export default LifeCycleB
