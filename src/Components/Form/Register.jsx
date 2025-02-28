import React, { useEffect, useState } from 'react'

const Register = () => {

  const [inputData, setInputData] = useState({name:'', email:'', password:'', c_password:''});
    const [flag, setFlag] = useState(false);

    useEffect(()=>{
        console.log('Registered')
    }, [flag])

    const handleData = (e) => {
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }


    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password || !inputData.c_password) {
            alert('All fields are required');
        } else if (inputData.password !== inputData.c_password) {
            alert('Password and confirm password do not match.');
        } else {
            fetch('http://localhost:5454/api/v1/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setFlag(true);
                    window.location.href = '/login';
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };
  return (
    <div>
      <div className='bg-blue-300 h-[94vh] flex p-[2rem] justify-center'>
        <div className='bg-white w-[40rem] h-[70vh] rounded-lg'>
            <div className='font-bold flex justify-center mt-6'>
                <h1 className='text-2xl'>Registration Form</h1>
            </div>

            <div>
                <pre>{(flag) ? <h2>Hello, {inputData.name} is registered successfully.</h2>:""}</pre>
                <form onSubmit={handleSubmitForm}>
                    <div className='w-[40rem] flex text-center mt-6 space-y-3 flex-col rounded h-[25rem]'>
                        <div>
                            <label className='font-bold'>Enter Name : </label>
                            <input type="text" placeholder='Enter Name' name='name' value={inputData.name} onChange={handleData} className='border-2 p-1 rounded-lg w-[15rem]' />
                        </div>
                        <div>
                            <label className='font-bold'>Enter Email : </label>
                            <input type="email" placeholder='Enter Email' name='email' value={inputData.email} onChange={handleData} className='border-2 p-1 rounded-lg w-[15rem]' />
                        </div>
                        <div>
                            <label className='font-bold'>Enter Password : </label>
                            <input type="password" placeholder='Enter Password' name='password' value={inputData.password} onChange={handleData} className='border-2 p-1 rounded-lg w-[15rem]' />
                        </div>
                        <div>
                            <label className='font-bold'>Enter Confirm Password : </label>
                            <input type="password" placeholder='Enter Confirm Password' name='c_password' value={inputData.c_password} onChange={handleData} className='border-2 p-1 rounded-lg w-[15rem]' />
                        </div>
                        <div>
                            <button className='bg-green-500 px-3 py-1 text-white rounded-lg'>Submit</button>
                        </div>
                        <div className='py-16 font-bold'>
                            <h1><a href="/login" className='text-blue-700'>Existing User? Log in</a></h1>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register