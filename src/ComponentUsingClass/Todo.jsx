import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      data: [],
      isUpdate: false,
      currentIndex: null,
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAdd = () => {
    if (!this.state.inputValue.trim()) return;
    this.setState((prevState) => ({
      data: [...prevState.data, prevState.inputValue],
      inputValue: "",
    }));
  };

  handleEdit = (index) => {
    this.setState({
      inputValue: this.state.data[index],
      isUpdate: true,
      currentIndex: index,
    });
  };

  handleUpdate = () => {
    if (!this.state.inputValue.trim()) return;
    this.setState((prevState) => ({
      data: prevState.data.map((item, i) =>
        i === prevState.currentIndex ? prevState.inputValue : item
      ),
      isUpdate: false,
      currentIndex: null,
      inputValue: "",
    }));
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((_, i) => i !== index),
      isUpdate: false,
      currentIndex: null,
      inputValue: "",
    }));
  };

  render() {
    return (
      <div className="bg-orange-500 flex h-[94vh] gap-10 p-[6rem]">
        <div className="bg-white w-[40rem] h-full rounded-lg flex flex-col">
          <div className="flex justify-center mt-8 h-[5rem] font-bold text-lg">
            <h1>TODO LIST</h1>
          </div>
          <div className="flex justify-center gap-2 p-4">
            <input
              type="text"
              placeholder="Add Item"
              value={this.state.inputValue}
              onChange={this.handleChange}
              className="border-2 p-2 rounded-lg w-full"
            />
            {this.state.isUpdate ? (
              <button
                className="bg-yellow-500 rounded-lg px-4 py-2 text-white"
                onClick={this.handleUpdate}
              >
                Update
              </button>
            ) : (
              <button
                className="bg-red-500 rounded-lg px-4 py-2 text-white"
                onClick={this.handleAdd}
              >
                Add
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-4">
            {this.state.data.map((item, index) => (
              <div key={index} className="flex justify-between p-2 border-b">
                <p>{item}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => this.handleEdit(index)}
                    className="bg-yellow-500 rounded-lg px-4 py-2 text-white"
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 rounded-lg px-4 py-2 text-white"
                    onClick={() => this.handleDelete(index)}
                    disabled={
                      this.state.isUpdate && this.state.currentIndex === index
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
