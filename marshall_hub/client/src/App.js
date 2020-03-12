import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Main from './components/Main';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';

class App extends Component{
  constructor() {
    super()
    this.state = {
      users: {
        username: "",
        password: ""
      },
      cases: [],
      comments: []
    }

    // componentDidMount() {

    // }

    
  }
  handleInputChange = e => {
    e.preventDefault()
    const { value, name } = e.target;
    console.log(value)
  }
  render(){
    return(
      <React.Fragment>
        <Switch>
          <Route exact path='/signup' component={props => <Signup {...props} handleChange={this.handleInputChange} />}  />
          <Route exact path='/' component={Main} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
