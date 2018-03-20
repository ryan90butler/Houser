import React, { Component } from 'react';
import './wizard.css';
import Header from '../Header/header';
import{Link} from 'react-router-dom';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {updateDesiredRent} from '../../Redux/Actions/actions'


class StepFive extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
    this.recommendedRent = this.recommendedRent.bind(this);
}

handleChange(e){
  this.props.dispatch(updateDesiredRent(e.target.value));
}

recommendedRent(rent){
  (this.props.desiredRent * 0.025);
}

  render(){
      return (
         <div className='StepFive' >
         <div className="recommendedRent">
         <p>Recommended Rent</p>
         <recommendedRent/>
         </div>
           <div>
              <p>Desired Rent</p>
              <input type="text" value={this.props.desiredRent} onChange={e => this.handleChange(e)} className="nameHolder" />
            </div>
            <Link to='/wizard/4'>Back</Link>
            <button>Submit</button>
         </div>
      )
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepFive);