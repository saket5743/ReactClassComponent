import React, { Component } from 'react'

export default class ChildAprops extends Component {

    componentWillUnmount(){
        alert("Component is going to be removed")
    }
  render() {
    return (
      <div>
        <h1>ChildAprops</h1>
        {/* <p>{this.props.name}</p> */}
      </div>
    )
  }
}
