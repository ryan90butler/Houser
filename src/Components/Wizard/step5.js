import React, { Component } from 'react';
import './wizard.css';
import{Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {updateDesiredRent,clearFields} from '../../Redux/Actions/actions';
import step_active from '../Images/step_active.png';
import step_completed from '../Images/step_completed.png';


class StepFive extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
    this.addProperty = this.addProperty.bind(this)
}

handleChange(e){
  this.props.dispatch(updateDesiredRent(e.target.value));
}

addProperty(e){
  e.preventDefault();
  axios.post(`/api/addProperty`, {
   propertyName: this.props.propertyName,
   propertyDescription: this.props.propertyDescription,
   state: this.props.state,
   zip: this.props.zip,
   address: this.props.address,
   city: this.props.city,
   imgUrl: this.props.imgUrl,
   loanAmount: this.props.loanAmount,
   monthlyMortgage: this.props.monthlyMortgage,
   desiredRent: this.props.desiredRent,
  })
    .then((response)=>{
      if(response.data.success){
        this.props.history.push('/dashboard');
        this.props.dispatch(clearFields());
      }else{
          alert("I broke")
      }
  })
}

  render(){
      return (
         <div className='StepFive' >
         <div className="progress-bar">
          <img alt="progress-pic"src={step_completed}/>
          <img alt="progress-pic"src={step_completed}/>
          <img alt="progress-pic"src={step_completed}/>
          <img alt="progress-pic"src={step_completed}/>
          <img alt="progress-pic"src={step_active}/>
        </div>

         <div className="recommendedRent">
         <p className="recommended-amount">Recommended Rent</p>
        <p className="recommended-amount"> $ {this.props.recommendedRent} </p>
         </div>
           <div className='desired-rent-container'>
              <p>Desired Rent</p>
              <input type="text" value={this.props.desiredRent} onChange={e => this.handleChange(e)} className="desiredRentHolder" />
            </div>
            <div className="button-container">
          <Link className="next-step-button"to='/wizard/4'>Previous Step</Link>
          <button className="complete-button" onClick={this.addProperty}>Complete</button>
         </div>
         </div>
      )
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepFive);