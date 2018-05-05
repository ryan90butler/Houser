import React, { Component } from 'react';
import './wizard.css';
import{Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {updateLoanAmount, updateMonthlyMortgage} from '../../Redux/Actions/actions';
import step_active from '../Images/step_active.png';
import step_inactive from '../Images/step_inactive.png';
import step_completed from '../Images/step_completed.png';

class StepFour extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(e, action){
    switch(action){
        case 'loan': this.props.dispatch(updateLoanAmount(e.target.value));
        break;
        case 'mortgage' :  this.props.dispatch(updateMonthlyMortgage(e.target.value));
        break;
        default:
        return
    }
}

  render(){
      return (
         <div className='StepFour' >
          <div className="progress-bar">
          <img alt="progress-pic"src={step_completed}/>
          <img alt="progress-pic"src={step_completed}/>
          <img alt="progress-pic"src={step_completed}/>
          <img alt="progress-pic"src={step_active}/>
          <img alt="progress-pic"src={step_inactive}/>
          </div>
            <p>Loan Amount</p>
            <input type="text" value={this.props.loanAmount} onChange={e => this.handleChange(e, 'loan')} className="nameHolder" />
            <p>Monthly Mortgage</p>
            <input type="text" value={this.props.monthlyMortgage} onChange={e => this.handleChange(e, 'mortgage')} className="nameHolder" />
            <div className="button-container">
          <Link className="next-step-button"to='/wizard/3'>Previous Step</Link>
          <Link className="next-step-button" to='/wizard/5'>Next Step</Link>
          </div>
         </div>
      )
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepFour);