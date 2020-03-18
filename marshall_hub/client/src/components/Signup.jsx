import React, { Component } from 'react'
import Navbar from './Navbar'
import { registerUser } from './Services/api-helper'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {
                username: "",
                password: "",
                email: ""
            }
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    // componentDidMount() {
    //     this.props.getUsers()
    // }
    


    async handleSubmit() {
        // e.preventDefault()
        console.log('Form Submitted')
        console.log(this.state)
        const currentUser = await registerUser(this.state.user);
        // this.setState({ currentUser });
        this.props.history.push('/')
    }

    // handleChange(e) {
    //     console.log(e.target.value)
    //     const { name } = e.target.value;
    //     e.preventDefault()
    //     this.setState({
    //         [name]: e.target.value
    //     })
    // }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          user: {
            ...prevState.user,
            [name]: value
          }
        }));
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <Navbar />
                <form className='signup-form' onSubmit={(e) => {
                    e.preventDefault();
                    this.handleSubmit();}} >
                <label className='labelField'>Username:
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        className='inputFeild'
                        required
                    />
                </label>
                <br />
                <label className='labelField'>Email Address:
                    <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={this.state.user.email}
                        onChange={this.handleChange}
                        className='inputFeild'
                    />
                </label>
                <br />
                <label className='labelField'>Password:
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        className='inputFeild'
                    />
                </label>
                <input 
                    type='submit'  
                    className='signupSubmit'
                />
            </form>
            </div>
        )
    }
}

export default Signup