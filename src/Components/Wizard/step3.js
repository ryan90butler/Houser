import React, { Component } from 'react';
import './wizard.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
import {updateImgUrl} from '../../Redux/Actions/actions';


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
         <img src={this.props.imgUrl} alt="Image Preview"/>
          <p>Image URL</p>
          <input type="text" value={this.props.imgUrl} onChange={e => this.handleChange(e)} className="nameHolder" />
          <Link to='/wizard/4'>Next</Link>
          <Link to='/wizard/2'>Back</Link>
         </div>
      )
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(StepThree);