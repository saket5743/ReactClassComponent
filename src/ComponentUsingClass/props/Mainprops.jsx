import React, { Component } from "react";
import ChildAprops from "./ChildAprops";

export default class Mainprops extends Component {
  state = {
    name: "",
    count: 0,
    // prevName: ""
    show:true
  };

  // inc = () => this.setState((prevState) => ({count:prevState.count + 1}))
  // or
  inc = () => this.setState({ count: this.state.count + 1 });

//   componentDidMount() {
//     console.log("Component created");
//     this.setState({ count: 10 });
//   }

//   componentDidUpdate(prevProps, prevStates) {
//     console.log("Did update called");
//     if (this.state.count < 50) {
//       this.setState((prevState) => ({ count: prevState.count + 10 }));
//     }

//     if (prevStates.name !== this.state.name) {
//       this.setState({ prevName: prevStates.name });
//     }
//   }

  render() {

    let child;
    if(this.state.show){
        child = <ChildAprops />
    }

    return (
      <div>
        <h1>Main Props</h1>
        <h3>{this.state.name}</h3>
        {/* <h3>{this.state.prevName}</h3>
        <h3>{this.state.count}</h3> */}
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />{" "}
        <br />
        <button onClick={this.inc}>INC</button>
        {/* <ChildAprops name={"Saket"} /> */}
        {child}
        <button onClick={() => this.setState({show : false})}>Delete Comp</button>
      </div>
    );
  }
}
