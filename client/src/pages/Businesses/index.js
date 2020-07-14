import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BusinessCard from "../../components/BusinessCard";
import API from "../../utils/API";

class Businesses extends React.Component 
{
    state = 
    {
        businesses: []
    }

    componentDidMount = () =>
    {
        API.businesses();
    }

    render = () =>
    {
        return (
            <div className="container-fluid">
                <NavBar />
                <BusinessCard 
                    businessName={1}
                />
                <Footer />
            </div>
        )
    }
}

    export default Businesses;
