import HogCard from './HogCard'
import React, { Component } from 'react';

class HogContainer extends Component {
    state = { hogs : [] }

    sortByName = () => {
        this.setState(prevState => ({
            hogs: prevState.hogs.sort(
                function(a, b){
                    const nameA = a.name.toUpperCase()
                    const nameB = b.name.toUpperCase()
                    if(nameA < nameB){
                        return -1
                    }
                    if(nameA > nameB){
                        return 1
                    }
                    return 0
                }
            )
        }));
    }

    filterGreased = () => {
        this.setState(prevState => ({hogs : prevState.hogs.filter(hog => hog.greased)  }));
    }

    sortByWeight = () => {
        this.setState(prevState => ({
            hogs: prevState.hogs.sort(
                function(a, b){
                    const weightA = a.weight
                    const weightB = b.weight
                    if(weightA < weightB){
                        return -1
                    }
                    if(weightA > weightB){
                        return 1
                    }
                    return 0
                }
            )
        }));
    }

    componentDidMount() {
        this.setState({ hogs: this.props.hogs });
    }

    render() { 
        return ( 
            <div>
            <button onClick={this.filterGreased}>Greased</button>
            <button onClick={this.sortByName}>Sort by Name</button>
            <button onClick={this.sortByWeight}>Sort by Weight</button>
            <div className='ui three column grid'>
                {this.state.hogs.map(hog => <HogCard hog={hog}/>)}
            </div>
            </div>
         );
    }
}
 
export default HogContainer;