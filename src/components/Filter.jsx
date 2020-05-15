import React from "react";

class Filter extends React.Component {
    render(){
        return(
            <div id="filter-form">
                <form>
              <b>Filter Hogs: </b>
              <div id="grease-radio">
                <input type="radio" name="filter" id="greased" value="greased" 
                        checked={this.props.choice === 'greased'} 
                        onChange={this.props.handleFilterChange} />
                <label htmlFor="greased"> Greased</label>
              </div> 
              <div id="grease-radio">
                <input type="radio" name="filter" id="not-greased" value="not-greased" 
                        checked={this.props.choice === 'not-greased'} 
                        onChange={this.props.handleFilterChange} />
                <label htmlFor="not-greased"> Not Greased</label>
              </div> 
              <div id="grease-radio">
                <input type="radio" name="filter" id="all-hogs" value="all" 
                          checked={this.props.choice === 'all'} 
                          onChange={this.props.handleFilterChange} />
                  <label htmlFor="all-hogs"> All</label> 
                  </div>
              </form> 
            </div>
        );
    }
}


export default Filter;