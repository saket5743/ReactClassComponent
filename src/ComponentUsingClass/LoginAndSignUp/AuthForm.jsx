import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  render() {
    const inputStyle = {
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px'
  };

  const buttonStyle = {
    padding:'10px',
    backgroundColor:'blue',
    color:'white',
    border:'none',
    borderRadius:'5px',
    cursor:'pointer',
    fontWeight:'bold'
  }

  const aTag = {
    color: 'blue',
    marginBottom: '10px',
    textDecoration: 'none',
    textAlign: 'center'
};

    const { isLogin } = this.state;

    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: "0",
          backgroundColor: "skyblue",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px",
              width: "300px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <button
                onClick={() => this.setState({ isLogin: true })}
                style={
                  isLogin
                    ? {
                        display: "flex",
                        color: "white",
                        backgroundColor: "blue",
                        border: "none",
                        padding: "10px",
                        borderRadius: "5px",
                        fontWeight:'bold'
                      }
                    : {
                        backgroundColor: "transparent",
                        border: "none",
                        padding: "10px",
                        fontWeight:'bold'
                      }
                }
              >
                Login
              </button>
              <button
                onClick={() => this.setState({ isLogin: false })}
                style={
                  !isLogin
                    ? {
                        display: "flex",
                        color: "white",
                        backgroundColor: "blue",
                        border: "none",
                        padding: "10px",
                        borderRadius: "5px",
                        fontWeight:'bold'
                      }
                    : {
                        backgroundColor: "transparent",
                        border: "none",
                        padding: "10px",
                        fontWeight:'bold'
                      }
                }
              >
                SignUp
              </button>
            </div>

            {this.state.isLogin ? <>
            <div style={{display:'flex', flexDirection:'column'}}>
              <h2 style={{marginBottom:'20px', fontWeight:'bold'}}>Login Form</h2>
              <input type="email" placeholder="Email" style={inputStyle} />
              <input type="password" placeholder="Password" style={inputStyle} />
              <a href="#" style={aTag}>Forgot password?</a>
              <button style={buttonStyle}>Login</button>
              <p style={{textAlign:'center', paddingTop:'15px'}}>Not a Member? <a href="#" style={aTag} onClick={()=>this.setState({isLogin:false})}>Signup now</a></p>
            </div>
            </> : <>
            <div style={{display:'flex', flexDirection:'column'}}>
              <h2 style={{marginBottom:'20px', fontWeight:'bold'}}>Signup Form</h2>
              <input type="email" placeholder="Email" style={inputStyle} />
              <input type="password" placeholder="Password" style={inputStyle} />
              <input type="password" placeholder="Confirm Password" style={inputStyle} />
              <a href="#" style={aTag}>Forgot password?</a>
              <button style={buttonStyle}>Signup</button>
            </div>
            </>}

          </div>
        </div>
      </div>
    );
  }
}

