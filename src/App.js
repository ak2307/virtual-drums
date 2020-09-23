import React, { Component } from 'react';
import './App.css';
import Box from './Box.js';
import String from './String.js';

class App extends Component {
  constructor(props){
    super();
    this.state =({ 
      key: '',
      sounds : [
        {key: 'Q', mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
        {key: 'W', mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
        {key: 'E', mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
        {key: 'A', mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
        {key: 'S', mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
        {key: 'D', mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
        {key: 'Z', mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
        {key: 'X', mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
        {key: 'C', mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
      ]
    })
  }

    render() {
      const { sounds } = this.state;
      return (
        <div>
          <div id="drum-machine" className="container">
          <h1 id="heading"><span role="img" aria-label="drums">🥁</span> Play The Drums<span role="img" aria-label="drums">🥁</span></h1>  
            <div id="display" className="display">
          
              {sounds.map((sound, index)=> (
                <Box text = {sound.key} key={index}  audio={sound.mp3} parentCallback={(e) => {this.setState({ key: e })}} />
              ))}
              <String  text={this.state.key}  />
            </div>
          </div>
        </div>
    )}
  };




export default App;
