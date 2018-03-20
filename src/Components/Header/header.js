import React, { Component } from 'react';
import './header.css';
import headerLogo from '../Images/header_logo.png';

class Header extends Component {
    render(){
        return (
           <div className='header' >
           <div className='header-title'>
           <img className='header-logo' src={headerLogo} />
            <p className='header-text'>Houser</p>
            <p className='header-text'>Dashboard</p>
            </div>
            <div className='logout-button'>
            <p classname='header-logout'>Logout</p>
            </div>
           </div>
        )
    }
}
export default Header;