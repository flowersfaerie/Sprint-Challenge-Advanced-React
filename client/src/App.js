import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Player from './components/Player';

class App extends React.Component {
  state = {
      playerName: [],
      playerCountry: country,
      playerSearched: searches
    };
 
  // componentDidMount() {
  //   fetch("http://localhost:5000/api/players")
  //     .then(res => res.json())
  //     .then(players => {
  //       console.log("sf: App.js: CDM: .then: res: ", players);
  //       this.state({
  //         playerName: players.name,
  //         playerCountry: players.country,
  //         playerSearched: players.searches
  //       });
  //     })
  //     .catch(err => console.error(err));
  // }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("sf: App.js: CDM: .then: res: ", res)
        this.setState({ 
          playerName: res.name,
          playerCountry: res.country,
          playerSearched: res.searches})
      })
      .catch(err => console.error(err));
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          {this.state.playerName.map(player => {
            return <Player key={playerName} playerName={playerName} />
          })}
        </header>
      </div>
    )
  }
}

export default App;
