import React from "react";

import HogContainer from "./HogContainer";

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      choice: 'all',
      sorting: 'by-name'
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleFilterChange = changeEvent => {
    let val = changeEvent.target.value;
    this.setState({
      choice: val
    });
    console.log(val)
  }

  handleSortChange = changeEvent => {
    let val = changeEvent.target.value;
    this.setState({
      sorting: val
    });
    console.log(val)
  }

  render() {

    return (
      <div>

        <div>
          <form>
              <b>Filter Hogs: </b>
              <div id="grease-radio">
                <input type="radio" name="filter" id="greased" value="greased" 
                        checked={this.state.choice === 'greased'} 
                        onChange={this.handleFilterChange} />
                <label htmlFor="greased"> Greased</label>
              </div> 
              <div id="grease-radio">
                <input type="radio" name="filter" id="not-greased" value="not-greased" 
                        checked={this.state.choice === 'not-greased'} 
                        onChange={this.handleFilterChange} />
                <label htmlFor="not-greased"> Not Greased</label>
              </div> 
              <div id="grease-radio">
                <input type="radio" name="filter" id="all-hogs" value="all" 
                          checked={this.state.choice === 'all'} 
                          onChange={this.handleFilterChange} />
                  <label htmlFor="all-hogs"> All</label> 
                  </div>
              </form> 
        </div>
        <div>
          <form>
            <b>Sort By: </b>
            <div id="grease-radio">
              <input type="radio" name="sort" id="by-name" value="by-name" 
                        checked={this.state.sorting === 'by-name'}
                        onChange={this.handleSortChange} />
              <label htmlFor="by-name">By Name</label>
            </div>
            <div id="grease-radio">
              <input type="radio" name="sort" id="by-weight" value="by-weight"
                          checked={this.state.sorting === 'by-weight'}
                          onChange={this.handleSortChange} />
              <label htmlFor="by-weight">By Weight</label>
            </div>
          </form>
        </div>

        <HogContainer
        choice={this.state.choice} 
        sorting={this.state.sorting} />
      </div>
    );
  }
}

export default Main;
