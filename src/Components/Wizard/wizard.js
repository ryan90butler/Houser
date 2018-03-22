import React, { Component } from 'react';
import './wizard.css';
import{Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/header';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import {BrowserRouter as Switch, Route} from 'react-router-dom';

class Wizard extends Component {
    render(){
        return (
           <div className='Wizard' >
             <Header/>
             <div className='wizard-container'>
            <div className="left-blank-space">
            </div>
            <div className="middle-render-space">
            <div className="render-header">
          <p className="add-new-listing">Add new listing</p>
           <Link className="cancel-button" to='/dashboard'>Cancel</Link>
           </div>

           <div className="step-counter">Step {this.props.match.params.id}</div>

           <div>
            <Route path={`/wizard/1`} component={Step1}/>
            <Route path={`/wizard/2`} component={Step2}/>
            <Route path={`/wizard/3`} component={Step3}/>
            <Route path={`/wizard/4`} component={Step4}/>
            <Route path={`/wizard/5`} component={Step5}/>
          </div>

            </div>
            <div className="right-blank-space">
            </div>
            </div>
           </div>
        )
    }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(Wizard);