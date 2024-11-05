// import logo from './logo.svg';

import './App.css';
import './MyItem';
// import Age from "./MyItem";

import React from 'react';



class StarWars extends React.Component {

  constructor () {
    super()
    this.state  = {
      image: null,
      name: null,
      height: null,
      homeworld: null,
      films: [], 
    }
  }
  
  getNewCharacter() {
    const randomChar = Math.floor(Math.random() * 100)
    const url = `https://corsproxy.io/?https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomChar}.json`;
    
    fetch (url)
      .then (response => response.json())
      .then (data => {
        console.log(data)
        this.setState({
          image: data.image,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
         
        })
      })
    console.log("Get new chracter from a Click Event");
  }
  
  render() {
    return (
      <div>
        {
          this.state.height && 
          
          <div>
            <img src={this.state.image} className='img' alt='somepoto'/>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p>HomeWorld: {this.state.homeworld}</p>
          

          </div>
        }
      
        <button type='button' onClick={() => this.getNewCharacter()} className="btn">Generate Random Character</button>
      </div>

    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
