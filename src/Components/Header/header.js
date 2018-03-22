import React, { Component } from 'react';
import './header.css';
import headerLogo from '../Images/header_logo.png';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class Header extends Component {
    constructor(){
        super()
        this.sessionDestroy = this.sessionDestroy.bind(this);
    }

    sessionDestroy(){
        axios.get(`/api/logout`)
        .then((response) => {
            if(response.data.success){
            this.props.history.push('/');
        }else{
            alert("unable to logout")
        }
    })
    }
    render(){
        return (
           <div className='header' >
           <div className='header-title'>
           <img className='header-logo' src={headerLogo} />
            <p className='header-text'>Houser</p>
            <p className='header-text'>Dashboard</p>
            </div>
            <div className='logout-button'>
            <p className='header-logout' onClick={this.sessionDestroy}>Logout</p>
            </div>
           </div>
        )
    }
}
export default withRouter(Header);