import React from "react";

class Sorting extends React.Component {
    render(){
        return(
            <div id="sort-form">
              <form>
            <b>Sort By: </b>
            <div id="grease-radio">
              <input type="radio" name="sorting" id="by-name" value="by-name" 
                        checked={this.props.sorting === 'by-name'}
                        onChange={this.props.handleSortChange} />
              <label htmlFor="by-name"> By Name</label>
            </div>
            <div id="grease-radio">
              <input type="radio" name="sorting" id="by-weight" value="by-weight"
                          checked={this.props.sorting === 'by-weight'}
                          onChange={this.props.handleSortChange} />
              <label htmlFor="by-weight"> By Weight</label>
            </div>
          </form>
            </div>
        );
    }
}


export default Sorting;