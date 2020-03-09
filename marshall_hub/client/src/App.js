import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component{
  constructor() {
    super()
  }
  render(){
    return(
      <div>
        <Header />
        <Footer />
        {/* <h1>Hey</h1> */}
      </div>
    )
  }
}

export default App;
