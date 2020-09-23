import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super();
    
    this.audio = React.createRef();
  }
  
  playSound = () => {
    this.audio.current.play();
    const id = this.audio.current.id;
    this.props.parentCallback(id);
  }



  render() {
    const { text,audio } = this.props;

    return ( 
      <button className = "drum-pad" id={text} onClick={this.playSound} onKeyPress={this.playSound}> 
        {text} 
        <audio ref={this.audio} src={audio} className="clip" id={text}  />
      </button>
    ) 
  }
}


export default Box;


