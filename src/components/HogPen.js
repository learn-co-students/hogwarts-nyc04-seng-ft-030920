import React from 'react'
import Hog from './Hog'

const HogPen = (props) => {
    let hogArrray = props.hogList.map((singleHog) => {
        return <Hog
            hog={singleHog}
            key={singleHog.name}
        />
    })

        return (
            <div>
                <ul className = 'ui grid container'>
                    {hogArrray}
                </ul>
            </div>
        )
    }
export default HogPen
