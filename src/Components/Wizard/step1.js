import React, { Component } from 'react';
import './wizard.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
import {updatePropertyName, updatePropertyDescription} from '../../Redux/Actions/actions'


class StepOne extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(e, action){
    switch(action){
        case 'name': this.props.dispatch(updatePropertyName(e.target.value));
        break;
        case 'description' : this.props.dispatch(updatePropertyDescription(e.target.value));
        break;
        default:
        break;
    }
}

  render(){
      return (

         <div className='StepOne' >
                 {/* <div className="progress-bar">
        <img src='.../Images/step_active.png' alt="active" />
        <img src='.../Images/step_inactive.png' alt="active" />
        <img src='.../Images/step_inactive.png' alt="active" />
        <img src='.../Images/step_inactive.png' alt="active" />
        <img src='.../Images/step_inactive.png' alt="active" />
        </div> */}
              <p>Property Name</p>
              <input type="text" value={this.props.propertyName} onChange={e => this.handleChange(e, 'name')} className="name-holder" />
              <p>Property Description</p>
              <input type="text" value={this.props.propertyDescription} onChange={e => this.handleChange(e, 'description')} className="description-holder" />
              <Link className="next-step-button" to='/wizard/2'>Next Step</Link>
         </div>
      )
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepOne);