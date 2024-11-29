import React from 'react'
import'./Register.css';
import { BsFillPersonFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";


const Register = () => {
   
  return (
    <div className='content'>
        <div className='form-box login'>
            <form action=''>
            <h1>sign up</h1>
            <div className='input-box'>
                <input type='text' 
                id="name"
                className='form-control'
                placeholder='Enter your name...'
                />
                <BsFillPersonFill className='icon' />
                
            </div>
            <div className='input-box'>
                <input type='text' 
                id="email"
                className='form-control'
                placeholder='Enter your email...'
                />
                <TfiEmail className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' 
                id="password"
                className='form-control'
                placeholder='Enter your password...'
                />
                <RiLockPasswordLine className='icon' />
               
            </div>
            <button>Sign up</button>
                
            

            </form>
      

        </div>
        
       
    </div>
  )
}

export default Register