import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ value: data });
      });
  }

  render() {
    return (
      <div>
        <div className="bg-green-500 h-[100vh] py-3 px-5">
          <div className="h-[6vh] font-bold">
            <h1 className="text-center text-2xl py-1 px-3 text-white italic">
              Feature Products
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {this.state.value.slice(0, 15).map((item, index) => (
              <div
                key={index}
                className="border-bold bg-red-500 h-[20vh] w-[15rem] m-auto mt-5 py-5 text-center"
              >
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
