import React from "react";
import HogDetails from './HogDetails';

class HogTile extends React.Component {

    constructor(){
        super()
        this.state = {
            detailsVisible: false
        }
    }

    hogImg = () => {
        let updatedName = this.props.name
        let nameEdit = updatedName
            .split(' ')
            .join('_')
            .toLowerCase();
        let hogPics = require(`../hog-imgs/${nameEdit}.jpg`);
        return hogPics
    }

    render() {

    return (
        <div id="hog-tile">
        <h1> { this.props.name } </h1>
        <img id="hog-img" src={ this.hogImg() } alt={this.props.name} />
       <HogDetails 
    greased={ this.props.greased }
    weight={ this.props.weight}
    specialty={ this.props.specialty }
    medal={ this.props.medal }
    />

      </div>
    );
  }
}

export default HogTile;
