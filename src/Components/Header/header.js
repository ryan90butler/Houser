import React, { Component } from 'react';
import './header.css';
import headerLogo from '../Images/header_logo.png';

class Header extends Component {
    render(){
        return (
           <div className='header' >
           <div className='header-title'>
           <img className='header-logo' src={headerLogo} />
            <p>Houser</p>
            <p>Dashboard</p>
            </div>
            <div className='logout-button'>
            <p>Logout</p>
            </div>
           </div>
        )
    }
}
export default Header;