import React, { Component } from 'react'


class Hog extends Component {
    
    state = {
      
    status: false


    }

   handleDeatails = () => {
       
        this.setState(prevState => ({
            status: !prevState.status
        }))


    }
    

    render() {
        let pigName = this.props.hog.name.replace(/[" "]/g, "_")
        const {specialty , weight ,'highest medal achieved': highestMedal} = this.props.hog
        let pigImage = require(`../hog-imgs/${pigName.toLowerCase()}.jpg`)
        return (
        
            <div className="ui card" style= {{display:"inline-block"}}>
            <div className="image">
              <img src={pigImage}
                alt = {this.props.hog.name}
              />
            </div>
            <div className="content">
              <a className="header">{this.props.hog.name}</a>
              <div className="meta">
                <span className="date">Joined in 2020</span>
              </div>
              <div className="description">
             <button onClick = {this.handleDeatails}>
                 display Details
             </button>

              {this.state.status ? 
              
              <div> Specialty: {specialty} 
              
              <br/> Weight: {weight}lbs <br/> 
              
              Heighest Medal: {highestMedal} </div> 
              
              : null }
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                {this.props.length - 1}
              </a>
            </div>
          </div>
        )
    }
}

export default Hog
