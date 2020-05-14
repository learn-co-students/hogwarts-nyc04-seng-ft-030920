import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import DisplayHogs from "./DisplayHogs"

class App extends Component {
   
  state = {
    listOfHogs: hogs,
    hideHogs: true
  }


  handleName = () => {
    const list = [...this.state.listOfHogs]
    const letArray = list.sort((nameA , nameB) =>  nameA.name.localeCompare(nameB.name ))

    this.setState({
      listOfHogs : letArray,
     
      
    })
}

handleGrease = () => {
  const list = [...this.state.listOfHogs]
  const letArray = list.filter((name) => name.greased)

  this.setState({
    listOfHogs : letArray
  })
}
handleWeight = () => {
  const list = [...this.state.listOfHogs]
  const letArray = list.sort((nameA , nameB) => nameA.weight - nameB.weight)
 console.log(letArray)
  this.setState({
    listOfHogs : letArray
  })
}

handleHogs = () => {
    
     this.setState(prevState => ({

        hideHogs : !prevState.hideHogs

     }))

}




  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <button  onClick={this.handleHogs}> {this.state.hideHogs ? "Hide Hogs" : "Show Hogs"} </button>
        <button  onClick={this.handleName}> Sort Name</button>
        <button onClick={this.handleGrease}> Grease </button>
        <button onClick={this.handleWeight}> Sort Weight </button>
        
        { this.state.hideHogs ? <DisplayHogs
          title = {"This is all the hogs"}
          list = {this.state.listOfHogs}
         />
         : null } 
      </div>
    );
  }
}

export default App;
