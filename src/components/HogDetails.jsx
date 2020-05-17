import React from 'react'

class HogDetails extends React.Component {

    handleGreaseBoolean = (boolean) => {
        if (boolean) {
            return "Yes"
        } else {
            return "No"
        }
    }

    render(){


        return(
            <div>
                <ul>
                    <li>Specialty: {this.props.hogSpecialty}</li>
                    <li>Greased? {this.handleGreaseBoolean(this.props.hogGrease)}</li>
                    <li>Weight {this.props.hogWeight}</li>
                    <li>Medal: {this.props.hogMedal}</li>
                </ul>
            </div>
        )
    }
}

export default HogDetails