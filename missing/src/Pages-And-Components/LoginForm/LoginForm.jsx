import React from 'react';

import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='main-div'>
        <div className='wrapper'>
            <form action=''>
           <h1>Login</h1>
           <div className="input-box">
              <input type='text' placeholder='Username' required />
              <FaUser className='icon' />
           </div>
           <div className="input-box">
              <input type='Password' placeholder='Password' required />
              <FaLock className='icon' />
           </div>

           <div className="remember-forgot">
                <label><input type='checkbox' />Remember me</label>
                <a href='#'>Forgot Password?</a>
           </div>

           <a href="/Dashboard">Login</a>
      </form>
        </div>
      
    </div>
  );
};

export default LoginForm;