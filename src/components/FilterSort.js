import React, { Component } from 'react'

export default class FilterSort extends Component {
    handleSortChange = (evt) => {
        this.props.handleSort(evt.target.value)
    }
    handleFilterChange = () => {
        this.props.handleFilter()
    }
    render() {
        return (
            <div className="navWrapper">
                <div>
                    <label>Sort the Hogs:</label>
                    <select value={this.props.sortBy} onChange={this.handleSortChange}>
                        <option value="None">None</option>
                        <option value="Name">Name</option>
                        <option value="Weight">Weight</option>
                    </select>
                </div>
                <div>
                    <label>Filter Greased?:</label>
                    <input type="checkbox" value={this.props.filter} onChange={this.handleFilterChange}></input>
                </div>
            </div>
        )
    }
}
