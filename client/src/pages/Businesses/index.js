import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
// import BusinessCard from "../../components/BusinessCard";
import API from "../../utils/API";

class Businesses extends React.Component 
{
    state = 
    {
        businessList: []
    }

    componentDidMount = () => 
    {
        API.businesses()
        .then((res) => {
            this.setState({ businessList: res.data.businesses });
            console.log('Business List: ');
            console.log(this.state.businessList);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render = () =>
    {
        return (
            <div className="container-fluid">
                <NavBar />
            
                {/* <BusinessCard
                    businessName={this.state.businessList.length >0? this.state.businessList[0].businessName : this.state.businessList.length}
                /> */}

                <Footer />
            </div>
        )
    }
}

    export default Businesses;
