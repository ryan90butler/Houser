import React, { Component } from 'react';
import './wizard.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
import {updateAddress, updateCity, updateState, updateZip} from '../../Redux/Actions/actions'


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
          <p>Address</p>
          <input type="text" value={this.props.address} onChange={e => this.handleChange(e, 'address')} className="nameHolder" />
          <p>City</p>
          <input type="text" value={this.props.city} onChange={e => this.handleChange(e, 'city')} className="nameHolder" />    <p>Zip</p>
          <input type="text" value={this.props.zip} onChange={e => this.handleChange(e, 'zip')} className="nameHolder" />
          <p>State</p>
          <input type="text" value={this.props.state} onChange={e => this.handleChange(e, 'state')} className="nameHolder" />
          <Link to='/wizard/3'>Next</Link>
          <Link to='/wizard/1'>Back</Link>
         </div>
      )
  }
}
function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepTwo);