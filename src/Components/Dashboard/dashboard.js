import React, { Component } from 'react';
import './dashboard.css';
import Header from '../Header/header';
import{Link} from 'react-router-dom';
import axios from 'axios';
import deleteButton from '../../Components/Images/delete_icon.png';

class Dashboard extends Component {
    constructor(){
        super();
        this.state={
            properties: [],
            filterProperties: [],
            filterValue: 0,
        }
        this.removeProperty = this.removeProperty.bind(this);
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

    handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({
          [name]: value,
        });
      }

    filterResults(){
        const arr = this.state.properties.filter((p)=>{
            if(p.desired_rent > this.textInput.value){
                return p
            }
        })
        this.setState({
            filterProperties: arr
        });
    }

    resetResults(e){
        this.textInput.value = '';
        this.setState({
            filterProperties: this.state.properties
        })
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
                    <div className="imgBox-container">
                    <img className="imgBox" src={property.img_url}/>
                    </div>

                    <div className="nameBox">
                    <p>{property.name}</p>
                    <p className="property-description-text">{property.description}</p>
                    </div>
                    <div className="propertyDetailBox">
                    <p>Desired Rent: ${property.desired_rent}</p>
                    <p>Monthly Mortgage: ${property.monthly_mortgage}</p>
                    <p>Address: {property.address}</p>
                    <p>City: {property.city}</p>
                    <p>State: {property.state}</p>
                    <p>Zip: {property.zipcode}</p>
                    </div>
                    <div className="deleteButtonBox">
                    <button className="deleteButton" onClick={()=>this.removeProperty(property.property_id)}><img src={deleteButton}/></button>
                    </div>
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

            <form onSubmit={(e)=>e.preventDefault()}>
            <input name='filterValue' type="text" ref={(input)=>{this.textInput = input}} className="input-box"/>

                <button onClick={()=>this.filterResults()} className="filter-button">Filter</button>
                <button onClick={(e)=>this.resetResults(e)} className="reset-button">Reset</button>

            </form>
             </div>
             <div className="home-listings">
             <p className="home-listings-text">Home Listings</p>
             {properties}
            </div>
            </div>
           </div>
        )
    }
}

export default Dashboard;