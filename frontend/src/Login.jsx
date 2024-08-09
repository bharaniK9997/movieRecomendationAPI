import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Import the CSS file

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                toast(result.data);
                if (result.data === "success") {
                    navigate('/home');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary'>
            <div className='box'>
                <h2 className='login'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong className='login'>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            autoComplete='on'
                            name="email"
                            className='form'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>
                            <strong className='login'>Password</strong>
                        </label>
                        <input 
                            type='password'
                            placeholder='Enter Password'
                            autoComplete='on'
                            name="password"
                            className='form'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Login
                    </button>
                </form>
                <p className='login'>Don't Have an account?</p>
                <Link to='/' className='btn btn-deafault border w-100 bg-light rounded-0 text-decoration-none'>
                    Register
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
