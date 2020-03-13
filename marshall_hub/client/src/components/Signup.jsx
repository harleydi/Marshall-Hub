import React, { Component } from 'react'
import Navbar from './Navbar'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
                username: "",
                password: "",
                email: ""
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount() {
        this.props.getUsers()
    }
    


    handleSubmit(e) {
        e.preventDefault()
        console.log('Form Submitted')
    }

    handleChange(e) {
        console.log(e.target.value)
        const { name } = e.target.value;
        e.preventDefault()
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <Navbar />
                <form className='signup-form' onSubmit={this.handleSubmit}>
                <label className='labelField'>Username:
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.props.handleInputChange}
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
                        value={this.state.email}
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
                        value={this.state.password}
                        onChange={this.handleInputChange}
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