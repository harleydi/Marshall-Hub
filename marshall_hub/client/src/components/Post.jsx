import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { createCase } from './Services/api-helper'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            case: []
        }
    }

    async componentDidMount() {
        // try {
        //     const response = await Axios(`http://localhost:3000/users`)
        //     console.log(response)
        // } catch (error) {
        //     console.error(error)
        // }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          case: {
            ...prevState.case,
            [name]: value
          }
        }));
    }

    handleSubmit = async () => {
        await createCase(this.state.case);
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <Navbar />
                {/* {this.state.users.map(user => (
                    <Link to={`/users/${user.id}`}>
                        <div>
                            {user.id}
                        </div>
                    </Link>
                ))} */}
                <form className='postForm' onSubmit={(e) => {
                    e.preventDefault();
                    this.handleSubmit();}} >
                    <h3>Victim Info</h3>

                    <label>Victim Name</label>
                    <input
                        type='text'
                        name='victim_name'
                        value={this.state.case.victim_name}
                        onChange={this.handleChange} 
                    />

                    {/* <label>Victim Age</label>
                    <input
                        type='text'
                        name='victim_age'
                        value={this.state.case.victim_age}
                        onChange={this.handleChange} 
                    /> */}

                    <label>Victim Ethnic</label>
                    <input
                        type='text'
                        name='victim_ethnic'
                        value={this.state.case.victim_ethnic}
                        onChange={this.handleChange} 
                    />

                    {/* <label>Detained</label>
                    <input
                        type='checkbox'
                        name='detained'
                        value={this.state.case.detained}
                        onChange={this.handleChange} 
                    /> */}

                    <h3>Officer Info</h3>

                    <label>Officer Name</label>
                    <input
                        type='text'
                        name='officer_name'
                        value={this.state.case.officer_name}
                        onChange={this.handleChange} 
                    />

                    {/* <label>Officer Age</label>
                    <input
                        type='text'
                        name='office_age'
                        value={this.state.case.office_age}
                        onChange={this.handleChange} 
                    /> */}

                    <label>Officer Ethnic</label>
                    <input
                        type='text'
                        name='officer_ethnic'
                        value={this.state.case.officer_ethnic}
                        onChange={this.handleChange} 
                    />

                    <label>Officer Nature</label>
                    <input
                        type='text'
                        name='officer_nature'
                        value={this.state.case.officer_nature}
                        onChange={this.handleChange} 
                    />

                    <h3>Case Info</h3>

                    <label>Charges</label>
                    <input
                        type='text'
                        name='charges'
                        value={this.state.case.charges}
                        onChange={this.handleChange} 
                    />

                    <label>Description</label>
                    <input
                        type='text'
                        name='description'
                        value={this.state.case.description}
                        onChange={this.handleChange} 
                    />

                    {/* <label>Cops Present</label>
                    <input
                        type='text'
                        name='cops_present'
                        value={this.state.case.cops_present}
                        onChange={this.handleChange} 
                    /> */}

                    <label>Incident Location</label>
                    <input
                        type='text'
                        name='incident_location'
                        value={this.state.case.incident_location}
                        onChange={this.handleChange} 
                    />

                    {/* <label>Miranda Rights</label>
                    <input
                        type='checkbox'
                        name='miranda_rights'
                        value={this.state.case.miranda_rights}
                        onChange={this.handleChange} 
                    /> */}

                    <input
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}

export default Post