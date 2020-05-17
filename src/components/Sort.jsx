import React from 'react'

class Sort extends React.Component {

handleChange = (evt) => {
    this.props.handleSort(evt.target.value)
}

render(){
    return(
        <div>
            <label>Sort by</label>
            <select onChange={this.handleChange}>
                <option value="all">All</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}
}

export default Sort