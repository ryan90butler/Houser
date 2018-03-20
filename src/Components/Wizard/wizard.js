import React, { Component } from 'react';
import './wizard.css';
import{Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/header';
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'
import { bindActionCreators} from 'redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import step1 from './step1';

class Wizard extends Component {
    // constructor(){
    //     super()
    //     this.handleChange = this.handleChange.bind(this);
    // }

renderChange(id){
    switch(id){
        case '2': this.props.match.id
        break;
        case '3': this.props.match.id
        break;
        case '4': this.props.match.id
        break;
        case '5' : this.props.match.id
        break;
    }
}
    render(){
        console.log(this.props)
        return (
           <div className='Wizard' >
             <Header/>
             <div className='wizard-container'>
            <div className="left-blank-space">
            </div>
            <div className="middle-render-space">
          <p>Add new Listing</p>
           <Link to='/dashboard'>Cancel</Link>

           <div>Step {this.props.match.params.id}</div>

           <Switch>
            <Route path={`/wizard/1`} component={Step1}/>
            <Route path={`/wizard/2`} component={Step2}/>
            <Route path={`/wizard/3`} component={Step3}/>
            <Route path={`/wizard/4`} component={Step4}/>
            <Route path={`/wizard/5`} component={Step5}/>
          </Switch>

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