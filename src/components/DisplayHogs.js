import React from 'react'
import Hog from './Hog'

let  DisplayHogs = (props) =>  {
  let displayOfHogs = props.list.map((hog,index) => {
     
    return <Hog 
     hog = {hog}
     length = {props.list.length}
     key = {index}
    /> 
  })
    
    return (
        <div>
        <h2> {props.title} </h2>
          {displayOfHogs} 
        </div>
    )
}


export default DisplayHogs