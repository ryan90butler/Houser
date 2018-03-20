import React, { Component } from 'react';
import './dashboard.css';
import Header from '../Header/header';
import{Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

class Dashboard extends Component {

    // componentDidMount(){
    //     this.props.getProperties()
    //     .then(()=>{
    //         this.setState({
    //             isLoaded:true,
    //         });
    //     })
    // }

    render(){
        return (
           <div className='Dashboard' >
             <Header/>
             <div className="dashboard-main-content">
                <Link className="add-property-link"to='/wizard/1'>Add new property</Link>
             <div className="filter-box">
                <p>List properties with "desired rent" greater than: $</p>
            <form>
                <input className="input-box" placeholder="0"></input>
                <button className="filter-button">Filter</button>
                <button className="reset-button">Reset</button>
            </form>
             </div>
             <div className="home-listings">
             <p>Home Listings</p>
            </div>
            </div>
           </div>
        )
    }
}

// function mapStateToProps({products}){
//     return {products};
// }

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({getProperties}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Dashboard;