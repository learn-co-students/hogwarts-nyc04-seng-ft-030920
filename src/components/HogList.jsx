import React from 'react'
import HogTile from './HogTile.jsx'


class HogList extends React.Component{
    render(){
        let arrayOfHog = this.props.hogList.map((singleHog) => {
            return <HogTile 
                hog={singleHog}
                key={singleHog.name}
            />
        })

        return(
            <div>
                {arrayOfHog}
            </div>
        )
    }
}

export default HogList;