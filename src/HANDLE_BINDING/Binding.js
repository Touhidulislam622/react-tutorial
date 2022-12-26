import React, { Component } from 'react'

export default class Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count : 0
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick.bind()}  disabled = {this.state.count === 10 ? true : false  
        // ??? bind()===  using bind() for remove error  //
         }>increase1</button>
      </div>
    )
  }
}
