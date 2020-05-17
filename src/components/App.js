import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from './HogList.jsx'
import Filter from './Filter.jsx'
import Sort from './Sort.jsx'


class App extends Component {

  state = {
    hogList: hogs,
    sort: "all",
    filter: "indifferent"
  }

  handleFilter = (filterValue) => {
    this.setState({filter: filterValue})
  }

  handleSort = (sortValue) => {
    this.setState({sort: sortValue})
  }

  filterAndSort = () => {
    let {filter, sort, hogList: hogs} = this.state

    if (filter === "indifferent") {
      return hogs
    }

    if (filter === "yes") {
      return hogs.filter((hog) => {return hog.greased})
    }
    if (filter === "no") {
      return hogs.filter((hog) => {return !hog.greased})
    }

    if (sort === "all"){
      return hogs
    }

    if (sort === "alphabetical") {
      return [...hogs].sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name)
      })
    }

    if (sort === "weight") {
      return [...hogs].sort((hogA, hogB) => {
        return hogA.weight - hogB.weight
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter handleFilter={this.handleFilter} />
        <Sort handleSort={this.handleSort}/>
        <HogList hogList ={this.filterAndSort()} />
      </div>
    );
  }
}

export default App;
