import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './sidebar/Sidebar'
import All from './All'
import VideoBox from './VideoBox'

export default class MainPageYoutube extends Component {
  render() {
    return (
      <div style={{display:'inline-block'}}>
        <Header/>
        <div style={{display:'flex'}}>
        
        <Sidebar />
        <div style={{display:'', marginLeft:''}}>
        <All />
        <VideoBox />
        </div>
        </div>
      </div>
    )
  }
}
