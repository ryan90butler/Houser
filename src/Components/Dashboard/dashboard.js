import React, { Component } from 'react';
import './dashboard.css';
import Header from '../Header/header';
import{Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import axios from 'axios';
import deleteButton from '../../Components/Images/delete_icon.png'

class Dashboard extends Component {
    constructor(){
        super();
        this.state={
            properties: [],
            filterProperties: [],
            filterValue: 0,
        }
        this.removeProperty = this.removeProperty.bind(this);
        this.filterProperties = this.filterProperties.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetResults = this.resetResults.bind(this);
    }

    removeProperty(property_id) {
        axios
          .delete('/api/remove/' + property_id)
          .then((r) => {
              this.setState={
                  properties: r.data
              }
              });
          };

    filterProperties(desired_rent){
        axios.get(`/api/filter/` + desired_rent)
        .then((response) =>{
            console.log(response)
        })
    }

    handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({
          [name]: value,
        });
      }
    filerResults(){
        const arr = this.state.properties.filter((p)=>{
            if(p.desired_rent > this.state.filterValue){
                return p
            }
        })
        this.setState({
            filterProperties: arr
        })
    }

    resetResults(e){
        e.preventDefault();
        this.setState={
            filterValue: 0
        }
    }

    componentDidMount(){
        axios.get('/api/properties')
        .then((response)=>{
            this.setState({
                properties: response.data,
                filterProperties:response.data
            });
        })
    }

    render(){
        let properties;
        if(this.state.properties.length > 0){
             properties = this.state.filterProperties
            .map(property => {
                if(this.state.filterValue < property.desired_rent)
                return(
                    <div className="property-list" key={property.property_id}>
                    <p>{property.name}</p>
                    <img src={property.img_url}/>
                    <p>{property.description}</p>
                    <p>{property.desired_rent}</p>
                    <p>{property.state}</p>
                    <button onClick={()=>this.removeProperty(property.property_id)}><img src={deleteButton}/></button>
                    </div>
                );

            });
        }

        return (

           <div className='Dashboard' >
             <Header/>
             <div className="dashboard-main-content">
                <Link className="add-property-link" to='/wizard/1'>Add new property</Link>
             <div className="filter-box">
                <p>List properties with "desired rent" greater than: $</p>
            <form>
            <input name='filterValue' type="text" onChange={this.handleChange} className="input-box" value={this.state.filterValue}/>
                <button className="filter-button">Filter</button>
                <button onClick={()=>this.resetResults} className="reset-button">Reset</button>
            </form>
             </div>
             <div className="home-listings">
             <p>Home Listings</p>
             {properties}
            </div>
            </div>
           </div>
        )
    }
}

export default Dashboard;