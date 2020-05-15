import React from "react";

import HogTile from "./HogTile";
import hogs from "../porkers_data";

class HogContainer extends React.Component {


  render() {

    let compareName = (a, b) => {
      
      const nameA = a.name
      const nameB = b.name
      
      let comparison = 0
      
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    } 

   let compareWeight = (a, b) => {

     const weightA = a.weight
     const weightB = b.weight 

     let endcompare = 0

      if (weightA > weightB) {
        endcompare = 1;
      } else if (weightA < weightB) {
        endcompare = -1;
      }
      return endcompare;
    }

    if (this.props.sorting === 'by-weight') {
      hogs.sort(compareWeight)
    } else {
     hogs.sort(compareName)
    }
    

    let greased = hogs.filter(hog => hog.greased === true)
    let notGreased = hogs.filter(hog => hog.greased === false)

    if(this.props.choice === 'greased') {
      return (
        <div id="hog-container">
            { greased.map((hog) => {
  
                  return <HogTile 
                  key={ hog.name }
                  name={ hog.name }
                  speciality={ hog.speciality }
                  greased={ hog.greased }
                  weight={ hog.weight }
                  medal={ hog['highest medal achieved'] }
            /> }
            )  }
        </div>
    
      );
    } else if(this.props.choice === 'not-greased') {

      return (
        <div>
            { notGreased.map((hog) => {
  
                  return <HogTile 
                  key={ hog.name }
                  name={ hog.name }
                  speciality={ hog.speciality }
                  greased={ hog.greased }
                  weight={ hog.weight }
                  medal={ hog['highest medal achieved'] }
            /> }
            )  }
        </div>
    
      );

    }

    else {

    return (
      <div>
          { hogs.map((hog) => {
                return <HogTile 
                key={ hog.name }
                name={ hog.name }
                speciality={ hog.speciality }
                greased={ hog.greased }
                weight={ hog.weight }
                medal={ hog['highest medal achieved'] }
          /> }
          )  }
      </div>
  
    );
          }
    // end render
        }



  }

export default HogContainer;
