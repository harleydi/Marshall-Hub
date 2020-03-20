import React, { Component } from 'react'
import Navbar from './Navbar'
import { readCase } from './Services/api-helper'

class Report extends Component {
    constructor(props){
        super(props)
        this.state = {
            case: null
        }
    }

    async componentDidMount() {
        let res = await readCase(this.props.match.params.caseid)
        this.setState({ case: res })
        console.log(res)
    }

    renderData = (aCase) => (
        <React.Fragment>
            <img src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className='reportImg' />
            <div className='caseDetails'>
            <div className='vitcim'>
                <h2 className='roleHeader'>VICTIM</h2>
                <h2 className='reportInfo'>{aCase.victim_name}</h2>
                <h2 className='reportInfo'>{aCase.victim_age}</h2>
                <h2 className='reportInfo'>{aCase.victim_ethnic}</h2>
                {/* -  
                -  
                - Area of incident `incident_location` 
                - Law Broken `charges` string
                - Description `description` text
                - Detained `was_detained` boolesn
                - Number of cops Present `cops_present` integer
                - Photos `photo_url` string */}
            </div>
            <div className='officer'>
                <h2 className='roleHeader'>OFFICER</h2>
                <h2 className='reportInfo'>{aCase.officer_name}</h2>
                <h2 className='reportInfo'>{aCase.office_age}</h2>
                <h2 className='reportInfo'>{aCase.officer_ethnic}</h2>
            </div>
        </div>
        <div className='details'>
            <h2 className='roleHeader'>Details</h2>
            <h2 className='reportInfo'>{aCase.description}</h2>
        </div>
        </React.Fragment>
        
        
    )

    render(){
        console.log(this.state.case)
        
        // const cases = this.props.cases.map(Case => (
        //     <div className='box box-text'>
        //         <h2>{Case.victim_name}</h2>
        //         {/* <h2>{Case.officer_name}</h2> */}
                
        //     </div>
        // ))

        return(
            <div>
                <Navbar />
                <div className='case'>
                    {this.state.case && this.renderData(this.state.case)}

                </div>
            </div>
        )
    }
}

export default Report