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
  }

  handleChange = changeEvent => {
    console.log('hi gabby')
    this.setState({
      [changeEvent.target.name]: changeEvent.target.value
    })
  }

  render() {

    return (
      <div>
         <div id="current-choices">Currently displaying <b>{ this.state.choice.split("-").join(" ") }</b> hogs and sorting them <b>{ this.state.sorting.split('-').join(' ') }</b>. </div>
        <div id="change-display">
          <Filter 
            handleFilterChange={this.handleChange}
            choice={this.state.choice} /> 
            <Sorting 
            handleSortChange={this.handleChange}
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
