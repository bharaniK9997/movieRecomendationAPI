import React from 'react';
import { Link } from 'react-router-dom';
import './Home1.css'; // Import the CSS file

function Home1() {
    return (
        <div className='home-container'>
            <div className='content'>
                <h1>Welcome to Movie Magic</h1>
                <p>
                    Discover and explore the latest movies with Movie Magic. 
                   
                </p>
                <div className='button-container'>
                    <Link to='/login' className='btn btn-primary'>
                        Login
                    </Link>
                    <Link to='/register' className='btn btn-secondary'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home1;
