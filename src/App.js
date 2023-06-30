import logo from './logo.svg';
import './App.css';
// import { robots } from './robots';
import CardList from './CardList'
import Searchbox from './Searchbox'
import React, {Component, useState, useEffect} from 'react';
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'


function App(){
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchField] = useState('')

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))    
  },[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  
  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <Searchbox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
        
      </div>    
    )

}
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       robots: [],
//       searchfield : ' '
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({robots: users}))
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value})
//   }

//   render(){
//     const filteredRobots = this.state.robots.filter(robots => {
//       return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
//     })
//     return (
//       <div className='tc'>
//         <h1 className='f1'>Robofriends</h1>
//         <Searchbox searchChange={this.onSearchChange}/>
//         <Scroll>
//           <ErrorBoundry>
//             <CardList robots={filteredRobots} />
//           </ErrorBoundry>
//         </Scroll>
        
//       </div>    
//     )
//   }
// }

export default App;
