import React, { useState, useEffect } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      onLoginSuccess();
    }
  }, [onLoginSuccess]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.email || !inputData.password) {
      alert('Both fields are required.');
    } else {
      fetch('http://localhost:5454/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setIsLoggedIn(true);
            setInputData({ email: '', password: '' });
            onLoginSuccess();
            localStorage.setItem('user', JSON.stringify(data.data.user));
          } else {
            alert('Invalid email or password.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred during login.');
        });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    // Optionally, you can call a logout handler passed via props
    // onLogout();
  };

  return (
    <div className='bg-blue-300 flex p-[2rem] h-[94vh] justify-center'>
      <div className='bg-white w-[40rem] h-[62vh] rounded-lg'>
        <div className='flex justify-center font-bold mt-6'>
          <h1 className='text-2xl'>Login Form</h1>
        </div>
        <div>
          {isLoggedIn ? (
            <div className='text-center'>
              <h2>Logged in successfully.</h2>
              <button
                onClick={handleLogout}
                className='bg-red-500 px-3 py-1 rounded-lg text-white mt-6'
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className='w-[40rem] text-center mt-6 space-y-3 flex-col rounded h-[25rem]'>
                <div>
                  <label className='font-bold'>Email: </label>
                  <input
                    type='text'
                    placeholder='Enter email'
                    name='email'
                    value={inputData.email}
                    onChange={handleData}
                    className='border-2 p-1 rounded-lg w-[15rem]'
                  />
                </div>
                <div>
                  <label className='font-bold'>Password: </label>
                  <input
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    value={inputData.password}
                    onChange={handleData}
                    className='border-2 p-1 rounded-lg w-[15rem]'
                  />
                </div>
                <div>
                  <button className='bg-green-500 px-3 py-1 rounded-lg text-white mt-6'>
                    Submit
                  </button>
                </div>
                <div className='py-32'>
                  <a href='/register' className='text-blue-700'>
                    New to Flipkart? Create an account
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;




