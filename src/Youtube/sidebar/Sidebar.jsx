import React, { Component } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SchoolIcon from '@mui/icons-material/School';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from 'react-router';

export default class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      hoveredItem:null
    }
  }

  handleMouseEnter = (item) => {
    this.setState({ hoveredItem: item });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredItem: null });
  };


  render() {
    return (
      <div style={{width: "250px", position:'fixed', marginTop:'63px', paddingTop: "5px", paddingBottom:'100px', height: "100vh", overflowY: 'auto', backgroundColor:''}}>
        <div style={{ width:'230px', paddingTop:'20px', paddingLeft:'10px'}}>
          <div style={{cursor:'pointer', paddingLeft:'15px'}}>
            <div style={{display:'flex', backgroundColor:this.state.hoveredItem === 'home' ? "gray" : "transparent"}} onMouseEnter={()=>this.handleMouseEnter('home')} onMouseLeave={this.handleMouseLeave}>
              <div><HomeIcon /></div>
              <div style={{paddingLeft:'20px'}} ><h1><Link>Home</Link></h1></div>
            </div>

            <div style={{display:'flex', marginTop:'5px', backgroundColor:this.state.hoveredItem === 'shorts' ? "gray" : "transparent"}} onMouseEnter={()=>this.handleMouseEnter('shorts')} onMouseLeave={this.handleMouseLeave}>
              <div><AppShortcutIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1><Link>Shorts</Link></h1></div>
            </div>
            <div style={{display:'flex',marginTop:'5px', backgroundColor:this.state.hoveredItem === 'subscriptions' ? "gray" : "transparent"}} onMouseEnter={()=>this.handleMouseEnter('subscriptions')} onMouseLeave={this.handleMouseLeave}>
              <div><SubscriptionsIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Subscriptions</h1></div>
            </div>
          </div>
          <br />
          <hr style={{color:'black'}} />
           <div style={{marginTop:'12px'}}>
            <div style={{display:'flex',paddingLeft:'15px'}}>
              <div><h1 style={{fontWeight:'bold'}}>You</h1></div>
              <div><KeyboardArrowRightIcon /></div>
            </div>
            <div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'5px'}}>
              <div><HistoryIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>History</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><PlaylistPlayIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Playlists</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><SlideshowIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Your Videos</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><SchoolIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Your Courses</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><WatchLaterIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Watch Later</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><ThumbUpOffAltIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Liked Videos</h1></div>
            </div>
            </div>
           </div>
           <br />
           <hr />

           <div style={{marginTop:'12px'}}>
           <div style={{display:'flex',paddingLeft:'15px'}}>
              <div><h1 style={{fontWeight:'bold'}}>Subscriptions</h1></div>
            </div>
            <div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><img src='https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png' alt="Aaj tak" style={{height:'18px', marginTop:'5px'}} /></div>
              <div style={{paddingLeft:'20px'}}><h1>Aaj Tak</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><img src='https://www.financialexpress.com/wp-content/uploads/2020/12/ABP-LIVE.jpg' alt="Abp News" style={{height:'18px', marginTop:'5px'}} /></div>
              <div style={{paddingLeft:'20px'}}><h1>ABP NEWS</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><img src='https://yt3.googleusercontent.com/ytc/AIdro_nvukPiKytmmvpXJ4vx2V6V9t-pgUbaStgqFxbN1M4eD9g=s900-c-k-c0x00ffffff-no-rj' alt="Alter" style={{height:'22px', marginTop:'5px'}} /></div>
              <div style={{paddingLeft:'22px'}}><h1>Alter</h1></div>
            </div>
            </div>
           </div>
           <br />
           <hr />
          
          <div style={{marginTop:'12px'}}>
           <div style={{display:'flex',paddingLeft:'15px'}}>
              <div><h1 style={{fontWeight:'bold'}}>Explore</h1></div>
            </div>
            <div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><LocalFireDepartmentIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Trending</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><LocalMallIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Shopping</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><MusicVideoIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Music</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><MovieCreationIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Movies</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><SensorsIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>live</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><SportsEsportsIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Gaming</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><NewspaperIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>News</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><EmojiEventsIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Sports</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><SchoolIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Courses</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><DryCleaningIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Fashion & Beauty</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'10px'}}>
              <div><PodcastsIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1>Podcasts</h1></div>
            </div>
            </div>
           </div>
           <br />
           <hr />
         
         <div style={{marginTop:'12px'}}>
            <div style={{display:'flex',paddingLeft:'15px'}}>
              <div><h1 style={{fontWeight:'bold'}}>More from Youtube</h1></div>
            </div>
            <div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'5px'}}>
              <div><img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0wOS5wbmc.png" alt="YouTube Premium" style={{height:'22px', marginTop:'5px'}} /></div>
              <div style={{paddingLeft:'20px'}}><h1>YouTube Premium</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'5px'}}>
              <div><img src="https://ih1.redbubble.net/image.5215699135.4123/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="YouTube Studio" style={{height:'22px', marginTop:'5px'}} /></div>
              <div style={{paddingLeft:'20px'}}><h1>YouTube Studio</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'5px'}}>
              <div><img src="https://ih1.redbubble.net/image.715147935.4129/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg" alt="YouTube Music" style={{height:'22px', marginTop:'5px'}} /></div>
              <div style={{paddingLeft:'26px'}}><h1>YouTube Music</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'5px'}}>
              <div><img src="https://ih1.redbubble.net/image.5215681355.3599/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="YouTube kids" style={{height:'22px', marginTop:'5px'}} /></div>
              <div style={{paddingLeft:'27px'}}><h1>YouTube kids</h1></div>
            </div>
            </div>
           </div>
           <br />
           <hr />
         
           <div style={{marginTop:'12px'}}>
            <div style={{display:'flex',paddingLeft:'15px'}}>
            </div>
            <div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'5px'}}>
              <div><img src="https://c8.alamy.com/comp/2R2HFW5/setting-icon-vector-cog-settings-icon-symbol-2R2HFW5.jpg" alt="Settings" style={{height:'28px', marginTop:'5px'}} /></div>
              <div style={{paddingLeft:'20px'}}><h1 style={{paddingTop:'5px'}}>Settings</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'7px'}}>
              <div><OutlinedFlagIcon /></div>
              <div style={{paddingLeft:'20px'}}><h1 style={{paddingTop:'5px'}}>Report History</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'7px'}}>
              <div><HelpOutlineIcon /></div>
              <div style={{paddingLeft:'26px'}}><h1 style={{paddingTop:'5px'}}>Help</h1></div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'7px'}}>
              <div><FeedbackIcon /></div>
              <div style={{paddingLeft:'27px'}}><h1 style={{paddingTop:'5px'}}>Send feedback</h1></div>
            </div>
            </div>
           </div>
           <br />
           <hr />

           <div style={{marginTop:'12px'}}>
            <div style={{display:'flex',paddingLeft:'15px'}}>
            </div>
            <div>
            <div style={{paddingLeft:'15px', paddingTop:'5px'}}>
              <div><small>About Press Copyright</small> <br />
                                  <small>Contact us Creators</small><br />
                                   <small>Advertise Developers</small>
              </div>
              <div style={{marginTop:'7px'}}><small>TermsPrivacyPolicy & Safety</small> <br />
                                  <small>How YouTube works</small><br />
                                   <small>Test new features</small>
              </div>
            </div>
            <div style={{display:'flex',paddingLeft:'15px', paddingTop:'5px'}}>
              <div><small>© 2025 Google LLC</small></div>
            </div>
            </div>
           </div>
        </div>
      </div>
    )
  }
}










