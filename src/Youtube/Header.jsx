import React, { Component } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import AddIcon from '@mui/icons-material/Add';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MenuIcon from '@mui/icons-material/Menu';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div style={{backgroundColor:"white", position:'fixed', height:'85px', width:'1535px' }}>
            <div style={{display:'flex'}}>
            <div style={{paddingLeft:'20px', paddingTop:'26px', cursor:'pointer'}}>
                <MenuIcon />
            </div>
            <div style={{marginTop:'18px', marginLeft:'15px'}}>
                <img src="https://i.pinimg.com/736x/7a/36/21/7a362162cf12edf96107c11db8077aa2.jpg" alt="YouTube" style={{height:'60px', width:'130px'}} />
            </div>
            <div style={{ width:'150px', marginLeft:'240px', marginTop:'20px'}}>
                <input type="text" placeholder='Search' style={{width:'550px', padding:'10px', borderTopLeftRadius:'40px', borderBottomLeftRadius:'40px', border:'1px solid'}} />
            </div>
            <div>
            <div style={{backgroundColor:'whitesmoke', height:'45px', paddingTop:'7px', paddingLeft:'6px', width:'50px', marginLeft:'400px', marginTop:'20px', borderBottomRightRadius:'40px', borderTopRightRadius:'40px', border:'1px solid'}}>
              <SearchIcon />
            </div>
            </div>
            <div style={{ marginTop:'12px', marginLeft:'15px'}}>
             <div style={{padding:'5px', marginTop:'10px', backgroundColor:'whitesmoke', borderRadius:'20px', width:'35px', cursor:'pointer'}}>
             <MicIcon />
             </div>
            </div>
            <div style={{marginTop:'15px', marginLeft:'155px'}}>
                <div style={{display:'flex', backgroundColor:'whitesmoke', padding:'10px',  borderRadius:'20px', height:'50px', width:'105px'}}>
                <div style={{paddingTop:'3px'}}>
                <AddIcon /> 
                </div>
                <div style={{paddingTop:'3px'}}>
                <h1 style={{fontWeight:'bold'}}>Create</h1>
                </div>
                </div>
            </div>
            <div>
                <div style={{marginTop:'22px', marginLeft:'40px'}}>
                    <NotificationAddIcon />
                </div>
            </div>
            <div style={{ marginTop: '20px', marginLeft: '35px', backgroundColor: '#FF1493', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <h1 style={{ fontWeight: 'bold', margin: 0 }}>S</h1>
            </div>

            </div>
        </div>
      </div>
    )
  }
}

