import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        

    }
    render(){
        console.log(this.props)
        const cases = this.props.cases.map(Case => (
            <div className='box'>
                <p>Work</p>
                <h2>{Case.victim_name}</h2>
                {/* <h2>{Case.officer_name}</h2> */}
                
            </div>
        ))
        // this.props.map(case => console.log(case.name))
        return(
            <div className='home_page'>
                <h1 className='reports_header'>REPORTS</h1>
                <div className='divider'></div>
                <div className='boxes'>
                    <div className='box'>
                        {cases}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home