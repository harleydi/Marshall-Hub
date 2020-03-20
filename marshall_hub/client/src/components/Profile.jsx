import React, { Component } from 'react'
import Navbar from './Navbar'
import { readUser, destroyCase } from './Services/api-helper'
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

    handleDelete = async () => {
        await destroyCase(this.props.match.params.caseid)
        this.props.history.push('/profile') 
    }

    renderUser = () => (
        <div className='profileCases'>
            <Link className='profileEdit'>Edit Profile</Link>
            <img className='profileImg' src='https://images.pexels.com/photos/2814239/pexels-photo-2814239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            <h1 className='username'>{this.state.user.username.toUpperCase()}</h1>
            <p className='casenum'>Total Cases: {this.state.user.cases.length}</p>
            {this.state.user.cases.map(Case => (
                <div className='profileList'>
                    <Link to={`/cases/${Case.id}`} className='box-links'>
                        <div className='box box-text'>
                            <h2 className='casename'>{Case.victim_name}</h2>
                            <div className='adminButtons'>
                                <Link to={`/cases/${Case.id}/edit`} className='editBtn'><i class="fas fa-edit"></i></Link>
                                <Link to={`/cases/${Case.id}/delete`} onClick={this.handleDelete} className='dltBtn'><i class="fas fa-trash-alt"></i></Link>
                            </div>
                            
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