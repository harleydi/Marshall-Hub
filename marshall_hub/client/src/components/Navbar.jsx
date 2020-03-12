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
                    <Link to="/post" className='post'>POST</Link>
                    <Link to="/hub" className='hub'>HUB</Link>
                    <Link to="/profile" className='profile'>PROFILE</Link>
                    <Link to='/signup' className='signupLink'>Signup</Link>
                </nav>
                <div className='divider'></div>
            </div>
        )
    }
}

export default Navbar