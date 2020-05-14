import React, { Fragment } from "react";

import HogTile from "./HogTile";
import hogs from "../porkers_data";

class HogContainer extends React.Component {
  render() {
    return (
      <div>
          { hogs.map((hog) => {
                return <HogTile 
                key={ hog.name }
                name={ hog.name }
                speciality={ hog.speciality }
                greased={ hog.greased }
                weight={ hog.weight }
                  />
          })  }
      </div>
   
    );
  }
}

export default HogContainer;
