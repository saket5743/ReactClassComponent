import React, { Component } from 'react'

export default class ConstructorExample extends Component {
    constructor(){
        super();

        this.state = {
            count: 0
        }

        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    inc(){
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    dec(){
        this.setState((prevState) => ({count: prevState.count > 0 ? prevState.count - 1 : 0}))
    }

  render() {
    return (
      <div>
        <h1>Learning Constructor</h1>
        <h1>{this.state.count}</h1>
        <button style={{}} onClick={this.inc}>INC</button> <br /> <br />
        <button onClick={this.dec}>DEC</button>
      </div>
    )
  }
}
