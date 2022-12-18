import React, { Component } from 'react'

export default class State extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 1 
    }
  }
  
  render() {
    const {count} = this.state
    return (
      <div>
        <h1> Count: {count}</h1>
      </div>
    )
  }
}
