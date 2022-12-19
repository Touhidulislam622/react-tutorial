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
   //===========??//
  
   divSwitch = () => {
    this.setState({
      count : this.state.count/3
    })
  }
                  //==========??//
  
  render() {
    const {count} = this.state
    return (
      <div>
        <h1> serial No:  {count}</h1>
        <button  onClick={this.handleSwitch} disabled ={count === 10 ? true: false}>+</button>
        <button onClick={this.decSwitch} disabled ={count === 0 ? true: false}>- 
        </button>
        <button style= {{ margin: "10px"}} onClick={this.intoSwitch}>*</button>
        <button style= {{ margin: "10px"}} onClick={this.divSwitch}>/</button>


      </div>
    )
  }
}
