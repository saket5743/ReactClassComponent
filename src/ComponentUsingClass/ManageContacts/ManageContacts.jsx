import React, { Component } from 'react'

export default class ManageContacts extends Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      contactData : {name:'', email:''}
    }
  }

  handleChange = (e) => {
   this.setState({
    contactData:{...this.state.contactData, [e.target.name]:e.target.value}
   })
  }

  handleAdd = () => {
    if(this.state.contactData.name === '' || this.state.contactData.email === ''){
      alert('Please fill both the details')
      return;
    }
    this.props.addContact(this.state.contactData)
    this.setState({ contactData: { name: '', email: '' } });
  }

  

  render() {
    return (
      <div>
        <div style={{backgroundColor:'maroon',}}>
            <h1 style={{color:'white', fontSize:'30px'}}>Manage Contacts</h1>
        </div>
        <div style={{backgroundColor:'greenyellow', marginTop:'30px'}}>
          <h1 style={{fontWeight:'bold', fontSize:'30px'}}>Add Contact</h1>
          <form style={{marginTop:'10px'}}>
          <div style={{marginTop:'5px'}}>
            <label style={{fontWeight:'bold'}}>Name : </label>
            <input type="text" placeholder='Enter Name' name='name' value={this.state.contactData.name} onChange={this.handleChange} style={{borderRadius:'5px', width:'full'}} />
          </div>
          <div style={{marginTop:'12px'}}>
            <label style={{fontWeight:'bold'}}>Email : </label>
            <input type="email" placeholder='Enter Email' name='email' value={this.state.contactData.email} onChange={this.handleChange} style={{borderRadius:'5px', width:'full'}} />
          </div>
          </form>
          <div style={{marginTop:'12px'}}>
            <button style={{backgroundColor:'blue', padding:'7px', borderRadius:'10px'}} onClick={this.handleAdd}>Add Contact</button>
          </div>
          
        </div>
      </div>
    )
  }
}
