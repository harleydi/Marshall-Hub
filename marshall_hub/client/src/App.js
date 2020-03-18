import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Main from './components/Main';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import axios from 'axios'
import Login from './components/Login';
import Post from './components/Post'


import {
  createUser,
  readAllUsers,
  updateUser,
  destroyUser,
  loginUser,
  registerUser,
  verifyUser
} from './components/Services/api-helper'
import Report from './components/Report';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      cases: [],
      comments: [],
      userForm: {
        username: "",
        password: ""
      },
      currentUser: null
    }

    
    
  }

  getUsers = async () => {
    const users = await readAllUsers();
    this.setState({
      users
    })
  }

  async componentDidMount () {
    try {
        const response = await axios(`http://localhost:3000/cases`)
        this.setState({ cases: response.data })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
  

  // async componentDidMount () {
  //   // try {
  //   //   const response = await axios(`http://localhost:3000/users`);
  //   //   this.setState({ users: response.data.users })
  //   //   console.log(response)
  //   // } catch (error) {
  //   //   console.log(error)
  //   // }
  //   // console.log(response.data) 
  //   this.getUsers();
  //   // const currentUser = await verifyUser();
  //   if (currentUser) {
  //     this.setState({ currentUser })
  //   }
  // }

  handleInputChange = e => {
    e.preventDefault()
    const { value, name } = e.target;
    this.setState(prevState => ({
      userForm: {
        ...prevState.userForm,
        [name]: value
      }
    }));
    // console.log(value)
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.userForm);
    this.setState({ currentUser })
  }


  render(){
    // console.log(response)
    return(
      <React.Fragment>
        <Switch>
          <Route exact path='/signup' render={(props) => (
            <Signup 
              {...props}
              handleRegister={this.handleRegister}
              handleChange={this.handleInputChange}
              userForm={this.state.userForm}
            />
          )}  />
          <Route exact path='/login' component={props => <Login {...props} /> } />
          <Route exact path='/' component={Main} />
          <Route exact path='/profile' component={props => <Profile {...props} /> } />
          <Route exact path='/post' component={props => <Post {...props} /> } />
          <Route exact path='/cases/:caseid' component={props => <Report {...props} />} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
