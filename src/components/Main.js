import React from "react";
import HogContainer from "./HogContainer";
import Filter from "./Filter";
import Sorting from "./Sorting";

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
    console.log('hi gabby')
    let val = changeEvent.target.value;
    this.setState({
      choice: val
    });
  }

  handleSortChange = changeEvent => {
    console.log('hi gabby')
    let val = changeEvent.target.value;
    this.setState({
      sorting: val
    });
  }

  render() {

    return (
      <div>
         <div id="current-choices">Currently displaying <b>{ this.state.choice }</b> hogs and sorting them <b>{ this.state.sorting.split('-').join(' ') }</b>. </div>
        <div id="change-display">
          <Filter 
            handleFilterChange={this.handleFilterChange}
            choice={this.state.choice} /> 
            <Sorting 
            handleSortChange={this.handleSortChange}
            sorting={this.state.sorting} />
            </div>

            <div id="spacer"> </div>
        <HogContainer
        choice={this.state.choice} 
        sorting={this.state.sorting} />
      </div>
    );
  }
}

export default Main;
