import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Hogs from "../porkers_data";
import HogPen from './HogPen'
import FilterSort from "./FilterSort";

class App extends Component {
  
  state={
    filterGreased: false,
    sortBy: "None"
  }

  handleSort = (newSortBy) => {
    this.setState({
      sortBy: newSortBy
    })
  }

  handleFilter = () => {
    this.setState(prevState => {return {filterGreased: !prevState.filterGreased}})
  }

  sortHogs = () => {
    let {sortBy} = this.state

    switch(sortBy) {
      case 'Name':
        return [...Hogs].sort((hogA, hogB) => {return hogA.name.localeCompare(hogB.name)})
      case 'Weight':
        return [...Hogs].sort((hogA, hogB) => {return hogB.weight - hogA.weight})
      default:
        return [...Hogs]
    }
  }

  filterHogs = (sortedHogs) => {
    return (this.state.filterGreased ?  sortedHogs.filter(hog => hog.greased) : sortedHogs)
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <FilterSort 
          sortBy={this.state.sortBy}
          filter={this.state.filterGreased}
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
        />
        <HogPen hogList={this.filterHogs(this.sortHogs())}/>
      </div>
    );
  }
}

export default App;
