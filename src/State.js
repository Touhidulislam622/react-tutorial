import React, { Component } from 'react'

export default class State extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 2 
    }
  }

  handleSwitch = () => {
    this.setState({
      count : this.state.count + 1
    })
  }
         //====??//

  decSwitch = () => {
    this.setState({
      count : this.state.count -1
    })
  }

  //===========??//
  
  intoSwitch = () => {
    this.setState({
      count : this.state.count*2
    })
  }
                  //==========??//
  
  render() {
    const {count} = this.state
    return (
      <div>
        <h1> serial No:  {count}</h1>
        <button  onClick={this.handleSwitch}>+</button>

        <button style= {{ margin: "10px"}} onClick={this.decSwitch}>-</button>
        <button style= {{ margin: "10px"}} onClick={this.intoSwitch}>*</button>

      </div>
    )
  }
}
