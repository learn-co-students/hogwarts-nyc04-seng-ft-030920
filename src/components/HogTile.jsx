import React from 'react'
import HogDetails from './HogDetails.jsx'

class HogTile extends React.Component{

    state = {
        showInfo: false
    }

    getImage = hogName => {
        let formattedName = hogName
          .split(" ")
          .join("_")
          .toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    }

    handleShowInfo = (evt) => {
        this.setState(prevState => ({
            showInfo: !prevState.showInfo
        }))
    }

    render(){
        return(
            <div onClick={this.handleShowInfo}>
                <p>{this.props.hog.name}</p>
                <img src={this.getImage(this.props.hog.name)} alt=""/>
                {this.state.showInfo? 
                <HogDetails 
                    hogSpecialty={this.props.hog.specialty}
                    hogGrease={this.props.hog.greased}
                    hogWeight={this.props.hog.weight}
                    hogMedal={this.props.hog['highest medal achieved']}
                /> : null}
                <hr></hr>
            </div>
        )
    }
}

export default HogTile