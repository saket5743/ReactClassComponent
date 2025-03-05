import React, { Component } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default class Contacts extends Component {
       
  render() {
    // console.log(this.props.contacts, 'Contact List');
    const {contacts, removeContact} = this.props;
    console.log(contacts)
    const contactList = contacts.map((val, index) => {
        return(
        <div key={index} style={{backgroundColor:'red', marginTop:'7px', padding:'8px', border:'1px solid', display:'flex'}}>
            <div>{val.name}</div>
            <div style={{marginLeft:'auto'}}>{val.email}</div>
            <span style={{marginLeft:'auto'}} onClick={()=>removeContact(val.id)}><DeleteIcon /></span>
        </div>
        )
    })
    return (
      <div>
        <div style={{backgroundColor:'pink', marginTop:'5px'}}>
         <h1 style={{textAlign:'center', fontWeight:'bold'}}>Contacts</h1>
        </div>
        <div>
            {contactList}
        </div>
      </div>
    )
  }
}

