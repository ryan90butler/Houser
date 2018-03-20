import React, { Component } from 'react';
import './wizard.css';
import Header from '../Header/header';
import{Link} from 'react-router-dom';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {updatePropertyName, updatePropertyDescription,updateAddress, updateCity, updateState, updateImgUrl, updateLoanAmount, updateMonthlyMortgage, updateDesiredRent} from '../../Redux/Actions/actions'


class StepFour extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(e, action){
    switch(action){
        case 'name': this.props.dispatch(updatePropertyName(e.target.value));
        break;
        case 'description' :  this.props.dispatch(updatePropertyDescription(e.target.value));
        break;
    }
}

  render(){
      return (
         <div className='StepFour' >
           <div>
          <p>Add new Listing</p>
           <Link to='/dashboard'>Cancel</Link>
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

export default connect(mapStateToProps)(StepFour);