import React, { Component } from 'react';
import './wizard.css';
import{Link} from 'react-router-dom';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {updateLoanAmount, updateMonthlyMortgage} from '../../Redux/Actions/actions'

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
    }
}

  render(){
      return (
         <div className='StepFour' >
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