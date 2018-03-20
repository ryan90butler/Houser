import React, { Component } from 'react';
import './wizard.css';
import{Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/header';
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'
import { bindActionCreators} from 'redux';
import {updatePropertyName, updatePropertyDescription,updateAddress, updateCity, updateState, updateImgUrl, updateLoanAmount, updateMonthlyMortgage, updateDesiredRent} from '../../Redux/Actions/actions'

class Wizard extends Component {
    // constructor(){
    //     super()
    //     this.handleChange = this.handleChange.bind(this);
    // }

// handleChange(e, action){
//     switch(action){
//         case 'name': this.props.dispatch(updatePropertyName(e.target.value));
//         break;
//         case 'description' :  this.props.dispatch(updatePropertyDescription(e.target.value));
//         break;
//     }
// }
    render(){
        console.log(this.props)
        return (
           <div className='Wizard' >
             <Header/>
           <div>
          <p>Add new Listing</p>
           <Link to='/dashboard'>Cancel</Link>
           <Step1 />
         <Step2 />
           {/* <Step3 />
           <Step4 />
           <Step5 /> */}
                <p>Property Name:</p>
                <input type="text" value={this.props.propertyName} onChange={e => this.handleChange(e, 'name')} className="nameHolder" />
                <p>Property Description:</p>
                <input type="text" value={this.props.propertyDescription} onChange={e => this.handleChange(e, 'description')} className="nameHolder" />
            </div>
           </div>
        )
    }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(Wizard);