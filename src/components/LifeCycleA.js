import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Satya"
      }
      console.log("Lifecycle A constructure");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps is called")
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }
    
  render() {
    console.log("Render method in LifecycleA called");
    return (
      <div>
        <h1>LifecycleA</h1>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
