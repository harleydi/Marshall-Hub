import React, { Component } from 'react'
import Navbar from './Navbar'
import { loginUser } from './Services/api-helper'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            user: {
                username: "",
                password: ""
            }
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          user: {
            ...prevState.user,
            [name]: value
          }
        }));
    }

    handleLogin = async () => {
        const currentUser = await loginUser(this.state.user);
        this.setState({ currentUser });
        this.props.history.push('/')
    }



    render(){
        return(
            <div>
                <Navbar />
                <form className='loginForm' onSubmit={(e) => {
                    e.preventDefault();
                    this.handleLogin();}} >
                    <label className='labelField'>
                        Username
                        <input
                            type='text'
                            name='username'
                            value={this.state.user.username}
                            placeholder='Username'
                            className='inputFeild'
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label className='labelField'>
                        Password
                        <input
                            type='text'
                            name='password'
                            value={this.state.user.password}
                            placeholder='Password'
                            className='inputFeild'
                            onChange={this.handleChange}
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