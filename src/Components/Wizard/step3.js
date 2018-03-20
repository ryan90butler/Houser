import React, { Component } from 'react';
import './wizard.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {updateImgUrl} from '../../Redux/Actions/actions'


class StepThree extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(e, action){
 this.props.dispatch(updateImgUrl(e.target.value));
    }

  render(){
      return (
         <div className='StepThree' >
                <p>Property Name:</p>
                <input type="text" value={this.props.propertyName} onChange={e => this.handleChange(e, 'name')} className="nameHolder" />
                <p>Property Description:</p>
                <input type="text" value={this.props.propertyDescription} onChange={e => this.handleChange(e, 'description')} className="nameHolder" />
         </div>
      )
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepThree);