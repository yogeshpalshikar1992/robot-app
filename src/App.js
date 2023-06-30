import logo from './logo.svg';
import './App.css';
import { robots } from './robots';
import CardList from './CardList'
import Searchbox from './Searchbox'
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield : ' '
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>    
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
