import React, { Component } from 'react';
import * as SpaceRadio from './SpaceRadio';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      synth: null
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.setSynth = this.setSynth.bind(this);
    this.renderRadioButtons = this.renderRadioButtons.bind(this);
  }

  start() {
    SpaceRadio.start(this.state.synth);
  }

  stop() {
    SpaceRadio.stop();
  }

  setSynth(e) {
    const id = parseInt(e.target.value, 10);
    this.setState({
      synth: SpaceRadio.synths.find(s => s.id === id).synth,
    });
  }

  renderRadioButtons() {
    return SpaceRadio.synths.map((synth) => {
      return (
        <label key={`synth-${synth.id}`} className="synth-radio">
          <input
            type="radio"
            name="synth"
            onClick={this.setSynth}
            value={synth.id}
          />
          {synth.name}
        </label>
      )
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://res.freestockphotos.biz/pictures/16/16617-illustration-of-a-red-rocket-pv.png" className="App-logo" alt="logo" />
          <h2>Bleeps &amp; Boops!</h2>
        </div>
        <p>
          {this.renderRadioButtons()}
        </p>
        <p>
          <button 
            className="App-button"
            onMouseDown={this.start}
            onMouseUp={this.stop}
            disabled={!this.state.synth}
          >
            Make some noise
          </button>
        </p>
      </div>
    );
  }
}

export default App;
