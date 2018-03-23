import React, { Component } from 'react';
import './login.css'
import axios from 'axios';
import authLogo from '../Images/auth_logo.png';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password:"",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    registerOrLogin(e, login){
        e.preventDefault();
        axios.post(`/api/${login}`, {email:this.state.email, password:this.state.password})
            .then((response)=>{
                if(response.data.success){
                    this.props.history.push('/dashboard');
                }else{
                    alert("Yo your password or maybe your email (all though I doubt it) is incorrect")
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render(){
        return (
            <div className="login-page">
                <div className="blank-left-space">
                </div>
                <div className="middle-section">
                <img className='auth-logo' src={authLogo} alt="logo" />
                <div className="login-form">
                    <form onSubmit={(event)=>{this.registerOrLogin(event, 'login')}} >
                        <div>
                            <label>Username</label>
                            <br/>
                            <input className="login-input"  name="email" value={this.state.email} onChange={this.handleChange} type="text"/>
                        </div>
                        <br/>
                        <div>
                            <label>Password</label>
                            <br/>
                            <input className="login-input" name="password" value={this.state.password} onChange={this.handleChange} type="text"/>
                        </div>
                        <div className="login-buttons">
                        <button type="submit">Login</button>
                        <button onClick={(event)=>{this.registerOrLogin(event, 'register')}} className="sign-up-button">Register</button>
                        </div>
                    </form>
                </div>
                </div>
                <div className="blank-right-space">
                </div>
            </div>
        )
    }
}
export default Login;