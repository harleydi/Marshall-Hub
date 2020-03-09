import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

class Header extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Navbar />
            </div>
        )
    }
}

export default Header