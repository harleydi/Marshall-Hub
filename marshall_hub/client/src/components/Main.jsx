import React, { Component } from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cases: []
        }
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
    
    render() {
        // console.log(users)
        return (
            <div>
                <Header />
                <Home cases={this.state.cases} />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Main