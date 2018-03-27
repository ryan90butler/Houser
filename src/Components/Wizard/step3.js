import React, { Component } from 'react';
import './wizard.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
import {updateImgUrl} from '../../Redux/Actions/actions';
import step_active from '../Images/step_active.png';
import step_inactive from '../Images/step_inactive.png';
import step_completed from '../Images/step_completed.png';


class StepThree extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(e){
 this.props.dispatch(updateImgUrl(e.target.value));
    }

  render(){
      return (
         <div className='StepThree' >
         <div className="progress-bar">
          <img src={step_completed}/>
          <img src={step_completed}/>
          <img src={step_active}/>
          <img src={step_inactive}/>
          <img src={step_inactive}/>
          </div>
          <div className="imgHolder-box">
         <img src={this.props.imgUrl} className="img-preview" alt="Property Preview"/>
         </div>
          <p>Image URL</p>
          <input type="text" value={this.props.imgUrl} onChange={e => this.handleChange(e)} className="imgHolder" />
          <div className="button-container">
          <Link className="next-step-button"to='/wizard/2'>Previous Step</Link>
          <Link className="next-step-button" to='/wizard/4'>Next Step</Link>
          </div>
         </div>
      )
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepThree);