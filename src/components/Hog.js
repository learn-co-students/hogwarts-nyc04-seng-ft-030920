import React, { Component } from 'react'

export default class Hog extends Component {
    state={
        details: false
    }

    handlePigClick = () => {
        let toggleShow = !this.state.details
        this.setState({
            details: toggleShow
        })
    }

    render() {
        let {name, ["highest medal achieved"]: medal, specialty, greased, weight} = this.props.hog
        let pigImgFile = name.toLowerCase().split(" ").join("_")
        let pigImg = require(`../hog-imgs/${pigImgFile}.jpg`)


        return (
            <li
            className="ui eight wide column card"
            onClick={this.handlePigClick}>
                <h3>{this.props.hog.name}</h3>
                <img src={pigImg} alt={name}/>
                {
                this.state.details 
                ?
                <div>
                    <p>Greased: {greased ? "Greased" : "Not Greased"}</p>
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    <p>Highest Medal: {medal}</p>
                </div>
                :
                null
                }
            </li>
        )
    }
}
