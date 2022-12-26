import React, { Component } from 'react'

class EventHandler extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : ''
      }
    }

    handleOnChange = (e) => {     //es6//
        this.setState({
            changeValue : e.target.value 
        },() => {                             // <== second perameter==//
            console.log(this.state.changeValue)
        })
    }

  render() {
    const {changeValue} = this.state
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p>{changeValue}</p>
      </div>
    )
  }
}
export default EventHandler ;