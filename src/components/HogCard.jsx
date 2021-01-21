import React, { Component } from 'react';

class HogCard extends Component {
    state = {
        clicked : false,
        hide: false
    }

    getImage = hogName => {
        let formattedName = hogName
          .split(" ")
          .join("_")
          .toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    };

    handleClick = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }

    render() { 
        let {hog} = this.props
        return ( 

            <div className='column' onClick={this.handleClick}>

                    {
                    this.state.clicked ? 

                    <div className='ui fluid card'>
                        <div className='header'>
                            {hog.name}
                        </div>
                        <div className='summary'>
                            Specialty: {hog.specialty}
                        </div>
                        <div className='summary'>
                            Greased: {hog.greased ? 'Yes' : 'No'}
                        </div>
                        <div className='summary'>
                            Weight: {hog.weight} lbs
                        </div>
                        <div className='summary'>
                            Highest Medal Achieved: {hog['highest medal achieved']}
                        </div>
                    </div>

                    :
                    <div className='ui fluid card'>
                        <div className='image'>
                            <img src={this.getImage(hog.name)}/>
                        </div>
                        <div className="content">
                            <p class="header">{hog.name}</p> 
                        </div>
                    </div>

                    }
            </div>
         );
    }
}
 
export default HogCard;