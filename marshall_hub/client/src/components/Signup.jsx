import React, { Component } from 'react'
import Navbar from './Navbar'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: {
                username: "",
                password: ""
            }
        }
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <Navbar />
                <form className='signup-form'>
                <label>
                    Name:
                    <input
                    type='text'
                    name='victim_name'
                    // value=''
                    onChange={this.props.handleInputChange}
                    />
                </label>
                <br />
                <label>Age:
                    <input 
                        type='text'
                        name='age'
                    />
                </label>
                <br />
                <label>Username:
                    <input 
                        type='text'
                        name='username'
                    />
                </label>
                <br />
                <label>Email Address:
                    <input 
                        type='text'
                        name='email'
                    />
                </label>
                <br />
                <label>Password:
                    <input 
                        type='text'
                        name='password'
                    />
                </label>
                <input 
                    type='submit'  
                />
            </form>
            </div>
        )
    }
}

export default Signup