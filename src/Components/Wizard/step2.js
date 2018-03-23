import React, { Component } from 'react';
import './wizard.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
import {updateAddress, updateCity, updateState, updateZip} from '../../Redux/Actions/actions';
import step_active from '../Images/step_active.png';
import step_inactive from '../Images/step_inactive.png';
import step_completed from '../Images/step_completed.png';


class StepTwo extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(e, action){
    switch(action){
        case 'address': this.props.dispatch(updateAddress(e.target.value));
        break;
        case 'city':  this.props.dispatch(updateCity(e.target.value));
        break;
        case 'state': this.props.dispatch(updateState(e.target.value));
        break;
        case 'zip':  this.props.dispatch(updateZip(e.target.value));
        break;
    }
}

  render(){
      return (
         <div className='StepTwo' >
          <div className='StepOne' >
          <div className="progress-bar">
          <img src={step_completed}/>
          <img src={step_active}/>
          <img src={step_inactive}/>
          <img src={step_inactive}/>
          <img src={step_inactive}/>
        </div>

         <div className="address-container">
          <p>Address</p>
          <input type="text" value={this.props.address} onChange={e => this.handleChange(e, 'address')} className="addressHolder" />
          </div>
          <div className="city-state-container">
          <p>City</p>
          <input type="text" value={this.props.city} onChange={e => this.handleChange(e, 'city')} className="cityHolder" />
          <p>State</p>
          <input type="text" value={this.props.state} onChange={e => this.handleChange(e, 'state')} className="stateHolder" />
          </div>
          <div className="zip-container">
          <p>Zip</p>
          <input type="text" value={this.props.zip} onChange={e => this.handleChange(e, 'zip')} className="zipHolder" />
          </div>
          <div className="button-container">
          <Link className="next-step-button"to='/wizard/1'>Previous Step</Link>
          <Link className="next-step-button" to='/wizard/3'>Next Step</Link>
          </div>
         </div>
         </div>
      )
  }
}
function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepTwo);