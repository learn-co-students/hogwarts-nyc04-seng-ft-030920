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
          <Filter 
            handleFilterChange={this.handleFilterChange}
            choice={this.state.choice} />
            <Sorting 
            handleSortChange={this.handleSortChange}
            sorting={this.state.sorting} />
        </div>

        <HogContainer
        choice={this.state.choice} 
        sorting={this.state.sorting} />
      </div>
    );
  }
}

export default Main;
