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
        if (e.target.type === 'checkbox') {
            const { name, checked } = e.target;
            this.setState(prevState => ({
              case: {
                ...prevState.case,
                [name]: checked
              }
            }));
        } else {
            const { name, value } = e.target;
            this.setState(prevState => ({
              case: {
                ...prevState.case,
                [name]: value
              }
            }));
        }
    }

    handleSubmit = async () => {
        let currentUserId = localStorage.getItem('id');
        let newCase = this.state.case
        newCase.user_id = currentUserId;
        newCase.photo_url = 'https://place-hold.it/300'
        await createCase(newCase);
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
                    <h3 className='postHeader'>Victim Info</h3>

                    <label className='postLabel'>Victim Name</label>
                    <input
                        type='text'
                        name='victim_name'
                        value={this.state.case.victim_name}
                        onChange={this.handleChange}
                        placeholder='Victim Name'
                        className='postFeild' 
                    />

                    <label className='postLabel'>Victim Age</label>
                    <input
                        type='text'
                        name='victim_age'
                        value={this.state.case.victim_age}
                        onChange={this.handleChange}
                        placeholder='Age'
                        className='postFeild' 
                    />

                    <label className='postLabel'>Victim Ethnic</label>
                    <input
                        type='text'
                        name='victim_ethnic'
                        value={this.state.case.victim_ethnic}
                        onChange={this.handleChange}
                        placeholder='Ehtnicity'
                        className='postFeild' 
                    />

                    <label>Detained</label>
                    <input
                        type='checkbox'
                        name='detained'
                        value={this.state.case.detained}
                        onChange={this.handleChange} 
                    />

                    <h3 className='postHeader'>Officer Info</h3>

                    <label className='postLabel'>Officer Name</label>
                    <input
                        type='text'
                        name='officer_name'
                        value={this.state.case.officer_name}
                        onChange={this.handleChange}
                        placeholder='Ofiicer Name'
                        className='postFeild' 
                    />

                    <label>Officer Age</label>
                    <input
                        type='text'
                        name='office_age'
                        value={this.state.case.office_age}
                        onChange={this.handleChange} 
                        placeholder='Age'
                        className='postFeild'
                    />

                    <label className='postLabel'>Officer Ethnic</label>
                    <input
                        type='text'
                        name='officer_ethnic'
                        value={this.state.case.officer_ethnic}
                        onChange={this.handleChange}
                        placeholder='Officer Ethnicity'
                        className='postFeild' 
                    />

                    <label className='postLabel'>Officer Nature</label>
                    <input
                        type='text'
                        name='officer_nature'
                        value={this.state.case.officer_nature}
                        onChange={this.handleChange}
                        placeholder='Officer Nature'
                        className='postFeild' 
                    />

                    <h3 className='postHeader'>Case Info</h3>

                    <label className='postLabel'>Charges</label>
                    <input
                        type='text'
                        name='charges'
                        value={this.state.case.charges}
                        onChange={this.handleChange}
                        placeholder='Charges'
                        className='postFeild' 
                    />

                    <label className='postLabel'>Description</label>
                    <input
                        type='text'
                        name='description'
                        value={this.state.case.description}
                        onChange={this.handleChange}
                        placeholder='Description Of Situation'
                        className='postFeild' 
                    />

                    <label>Cops Present</label>
                    <input
                        type='text'
                        name='cops_present'
                        value={this.state.case.cops_present}
                        onChange={this.handleChange} 
                        placeholder='Cops Present'
                        className='postFeild'
                    />

                    <label className='postLabel'>Incident Location</label>
                    <input
                        type='text'
                        name='incident_location'
                        value={this.state.case.incident_location}
                        onChange={this.handleChange}
                        placeholder='Area or Location'
                        className='postFeild' 
                    />

                    <label>Miranda Rights</label>
                    <input
                        type='checkbox'
                        name='miranda_rights'
                        value={this.state.case.miranda_rights}
                        onChange={this.handleChange} 
                    />

                    <input
                        type='submit'
                        className='postSubmit'
                    />
                </form>
            </div>
        )
    }
}

export default Post