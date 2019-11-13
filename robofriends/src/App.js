import React, {Component} from 'react';
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'


// state needs a robots array
//state is something we can change and affect our app



//we can use extends component vecause we imported component in import react, {component} from react

//only gotta use this.state if its part of state
class App extends Component {
  constructor(){
    super()
    this.state = {
    robots: robots,
    searchField: ''
    }
  }
  onSearchChange(e) {

    const filteredRobots = this.state.robots.filter(robot => {
      return robots.name.toLowercase().includes(this.state.searchField.toLowerCase())
    })
      console.log(filteredRobots);
  }
  render(){

return(
<div className='tc'>
  <h1> RoboFriends </h1>
  <SearchBox searchChange={this.onSearchChange}/>
  <CardList robots={this.state.robots}/>
  </div>
)
}
}


export default App
