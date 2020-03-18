import React, { Component } from 'react'
import Navbar from './Navbar'
import { readUser } from './Services/api-helper'
import { Link } from 'react-router-dom'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    async componentDidMount() {
        let currentUserId = localStorage.getItem('id');
        let res = await readUser(currentUserId)
        this.setState({ user: res })
        console.log(res)
    }

    renderUser = () => (
        <div className='profileCases'>
            <img className='profileImg' src='https://place-hold.it/300' />
            <h1 className='username'>{this.state.user.username.toUpperCase()}</h1>
            <p className='casenum'>cases: {this.state.user.cases.length}</p>
            {this.state.user.cases.map(Case => (
                <div>
                    <Link to={`/cases/${Case.id}`} className='box-links'>
                        <div className='box box-text'>
                            <h2>{Case.victim_name}</h2>
                            
                        </div>
                    </Link>
                </div>
                    
                
            ))}
        </div>
        
    )


    render() {
        
        return(
            <div>
                <Navbar />
                
                <div>
                    {this.state.user && this.renderUser()}
                </div>
            </div>
            
        )
    }
}

export default Profile