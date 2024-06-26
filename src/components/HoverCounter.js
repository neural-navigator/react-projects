import React, { Component } from 'react'
import UpdatedComponent from '../WithCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count: 0
    //     }
    //   }
  
    //   incrementCount = () => {
    //       this.setState(prevState => {
    //           return {
    //               count: prevState.count + 1
    //           }
    //       })
    //   }

  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
