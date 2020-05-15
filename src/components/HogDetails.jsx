import React from "react";

class HogDetails extends React.Component {

    constructor(){
        super()
        this.state = {
            visible: false
        }
    }

    detailsBtn = () => {
        if (this.state.visible === true) {
            this.setState({
                visible: false
            })
        }
        else { 
            this.setState({
                visible: true
            })
        }
    }

    render() {

        if (this.state.visible === true) {
            return (
                <div>
            <div id="center"><button onClick={ this.detailsBtn } id="view-details">View Details</button></div>
            <div id="details">
            <div><b>{ this.props.greased === false ? "Not Greased" : "Greased" }</b></div>
            <div><b>Weight: </b> { this.props.weight } lbs </div>
            <div id="medal"><b>Highest Medal Achieved: </b> {this.props.medal} </div>
            </div>
            </div>
            ); 
            }
            return (
                <div id="center">
                <button 
                onClick={ this.detailsBtn } 
                id="view-details">View Details</button>
            </div>
            );
        }
    
        
        
      }
    
    export default HogDetails;