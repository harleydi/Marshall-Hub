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
            <div className='caseDetails'>
            <div>
                <h2 className='roleHeader'>VICTIM</h2>
                <h2>{aCase.victim_name}</h2>
                <h2>{aCase.victim_age}</h2>
                <h2>{aCase.victim_ethnic}</h2>
                {/* -  
                -  
                - Area of incident `incident_location` 
                - Law Broken `charges` string
                - Description `description` text
                - Detained `was_detained` boolesn
                - Number of cops Present `cops_present` integer
                - Photos `photo_url` string */}
            </div>
            <div>
                <h2 className='roleHeader'>OFFICER</h2>
                <h2>{aCase.officer_name}</h2>
                <h2>{aCase.office_age}</h2>
                <h2>{aCase.officer_ethnic}</h2>
            </div>
        </div>
        <div>
            <h2 className='roleHeader'>Details</h2>
            <h2>{aCase.description}</h2>
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