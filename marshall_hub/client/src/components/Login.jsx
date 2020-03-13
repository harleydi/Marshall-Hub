import React, { Component } from 'react'
import Navbar from './Navbar'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            users: {
                username: "",
                password: ""
            }
        }
    }
    render(){
        return(
            <div>
                <Navbar />
                <form className='loginForm'>
                    <label className='labelField'>
                        Username
                        <input
                            type='text'
                            name='username'
                            value={this.state.users.username}
                            placeholder='Username'
                            className='inputFeild'
                        />
                    </label>
                    <br />
                    <label className='labelField'>
                        Password
                        <input
                            type='text'
                            name='password'
                            value={this.state.users.username}
                            placeholder='Password'
                            className='inputFeild'
                        />
                    </label>
                    <br/>
                    <input type='submit' placeholder='Login' className='loginSubmit' />
                </form>
            </div>
        )
    }
}

export default Login