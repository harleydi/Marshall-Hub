import React from 'react'
import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Signup from './Signup';


class Navbar extends Component {
    constructor() {
        super()
    }
    render(){
        return(
            <div>
                <nav className='nav'>
                    <div className='mainNav'>
                        <Link to="/post" className='post'>POST</Link>
                        <Link to="/" className='hub'>HUB</Link>
                        <Link to="/profile" className='profile'>PROFILE</Link>
                    </div>
                    <div className='signuplogin'>
                        <Link to='/signup' className='signupLink'>Signup</Link>
                        <Link to='/login' className='loginLink'>Login</Link>
                    </div>
                    
                </nav>
                <div className='divider'></div>
            </div>
        )
    }
}

export default Navbar