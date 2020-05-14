import React, { Fragment } from "react";
import mudblood from "../hog-imgs/mudblood.jpg";
import porkchop from "../hog-imgs/porkchop.jpg";
import cherub from "../hog-imgs/cherub.jpg";
import piggysmalls from "../hog-imgs/piggy_smalls.jpg";



class HogTile extends React.Component {

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
      </div>
    );
  }
}

export default HogTile;
