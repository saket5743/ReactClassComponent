// import MainPageYoutube from "./Youtube/MainPageYoutube";
import React, { Component } from 'react'
import MainContacts from './ComponentUsingClass/ManageContacts/MainContacts'
// import MainLoginAndSignUp from './ComponentUsingClass/LoginAndSignUp/MainLoginAndSignUp'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <MainPageYoutube /> */}
        {/* <MainLoginAndSignUp /> */}
        <MainContacts />
      </div>
    )
  }
}

