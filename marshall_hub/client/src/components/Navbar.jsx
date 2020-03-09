import React from 'react'
import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'


class Navbar extends Component {
    constructor() {
        super()
    }
    render(){
        return(
            <div>
                <nav className='nav'>
                    <Link className='post'>POST</Link>
                    <Link className='hub'>HUB</Link>
                    <Link className='profile'>PROFILE</Link>
                </nav>
                <div className='divider'></div>
            </div>
        )
    }
}

export default Navbar