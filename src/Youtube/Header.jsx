import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import { Search, Mic, Add, NotificationAdd, Menu } from '@mui/icons-material';
import { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <img
            src="https://i.pinimg.com/736x/7a/36/21/7a362162cf12edf96107c11db8077aa2.jpg"
            alt="YouTube"
            style={{ height: '60px', width: '130px' }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search"
              sx={{
                ml: 1,
                flex: 1,
                border: '1px solid',
                borderRadius: '20px',
                pl: 2,
                pr: 2,
              }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <Search />
            </IconButton>
            <IconButton color="inherit">
              <Mic />
            </IconButton>
            <IconButton color="inherit">
              <Add />
            </IconButton>
            <IconButton color="inherit">
              <NotificationAdd />
            </IconButton>
            <IconButton color="inherit">
              <Box
                sx={{
                  bgcolor: '#FF1493',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontWeight: 'bold', color: 'white' }}>S</span>
              </Box>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}
