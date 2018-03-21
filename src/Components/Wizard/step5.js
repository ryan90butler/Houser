import React, { Component } from 'react';
import './wizard.css';
import{Link} from 'react-router-dom';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import {updateDesiredRent} from '../../Redux/Actions/actions'


class StepFive extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
    this.recommendedRent = this.recommendedRent.bind(this);
    this.addProperty = this.addProperty.bind(this)
}

handleChange(e){
  this.props.dispatch(updateDesiredRent(e.target.value));
}

recommendedRent(rent){
  (this.props.desiredRent * 0.025);
}

addProperty(e){
  e.preventDefault();
  axios.post(`//localhost:8000/api/addProperty`, {
   propertyName: this.props.propertyName,
   propertyDescription: this.props.propertyDescription,
   state: this.props.state,
   zip: this.props.zip,
   address: this.props.address,
   city: this.props.city,
   imgUrl: this.props.imgUrl,
   loanAmount: this.props.loanAmount,
   monthlyMortgage: this.props.monthlyMortgage,
   desiredRent: this.props.desiredRent
  })
    .then((response)=>{
      if(response.data.success){
          this.props.history.push('/dashboard');
      }else{
          alert("Yo your password or maybe your email (all though I doubt it) is incorrect")
      }
  })
}

  render(){
      return (
         <div className='StepFive' >
         <div className="recommendedRent">
         <p>Recommended Rent</p>
         </div>
           <div>
              <p>Desired Rent</p>
              <input type="text" value={this.props.desiredRent} onChange={e => this.handleChange(e)} className="nameHolder" />
            </div>
            <div className="button-container">
          <Link className="next-step-button"to='/wizard/4'>Previous Step</Link>
          <button onClick={this.addProperty}>Submit</button>
         </div>
         </div>
      )
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepFive);