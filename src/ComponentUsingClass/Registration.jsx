import React, { Component } from 'react'

export default class Registration extends Component {

  state = {
    inputValue : {name:'', email:'', password:''},
    flag : false
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.flag !== this.state.flag && this.state.flag){
       console.log("Registered")
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: {...this.state.inputValue, [e.target.name]:e.target.value}
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = this.state.inputValue;
    if(!name || !email || !password){
      alert("All fields are required")
    }else{
      this.setState({flag:true})
    }
  }

  render() {
    return (
      <div>
        <div className='flex p-[2rem] flex'>
          <div className='w-[50rem] h-[90vh] bg-blue-300'>
          <div className='flex justify-center h-[2rem] mt-4 font-bold'>
            <h1 className='text-2xl'>Registration Form</h1>
          </div>
          <pre className='text-center mt-4'>{this.state.flag ? <h2>Hello, {this.state.inputValue.name}, you're registered successfully.</h2> : "" }</pre>
          <div className='mt-3 p-4'>
            <form onSubmit={this.handleSubmit}>
             <div className='text-center mt-3 space-y-3'>
              <div>
              <label className='font-bold'>Enter Name : </label>
              <input type="text" placeholder='Enter Name' name='name' value={this.state.inputValue.name} onChange={this.handleChange} className='border-2 rounded-lg w-[20rem] p-1' />
              </div>
              <div>
              <label className='font-bold'>Enter Email : </label>
              <input type="email" placeholder='Enter Email' name='email' value={this.state.inputValue.email} onChange={this.handleChange} className='border-2 rounded-lg w-[20rem] p-1' />
              </div>
              <div>
              <label className='font-bold'>Enter Password : </label>
              <input type="password" placeholder='Enter Password' name='password' value={this.state.inputValue.password} onChange={this.handleChange} className='border-2 rounded-lg w-[20rem] p-1' />
              </div>
              <div>
              <button className='bg-green-700 text-white mt-2 px-3 py-1 rounded-lg'>Submit</button>
              </div>
             </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    )
  }
}




