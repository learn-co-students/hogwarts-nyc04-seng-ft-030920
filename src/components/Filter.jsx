  
import React, { Component } from 'react'

export default class Filter extends Component {

    handleChange = (evt) => {
        this.props.handleFilter(evt.target.value)
    }

    render() {
        return (
            <div>
                <label>Greased? </label>
                    <select onChange={this.handleChange}>
                        <option value="indifferent">Indifferent</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                     </select>
            </div>
        )
    }
}