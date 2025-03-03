import React, { Component } from "react";
import ManageContacts from "./ManageContacts";
import Contacts from "./Contacts";
import uuid4 from "uuid4";

export default class MainContacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      localStorageKey: "contacts",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  addContact = (data) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: uuid4(), ...data }],
    }));
  };

  removeContact = (id) => {
    const updatedList = this.state.contacts.filter((val) => {
      return val.id !== id;
    });
    this.setState({ contacts: updatedList });
  };

  render() {
    return (
      <div>
        <ManageContacts addContact={this.addContact} />
        <Contacts
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
