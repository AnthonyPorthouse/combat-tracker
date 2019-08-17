import React from 'react';
import './App.css';
import Notes from './Notes';
import Tracker from './Tracker';

export default class App extends React.Component {
  state = {
    name: 'Combat Tracker',
    round: 0,
  };

  render() {
    return (
      <div className="container mx-auto md:h-screen">
        <div className="flex justify-between">
          <h1 className="text-xl pl-3">{this.state.name}</h1>
          <h2 className="text-xl pr-3">Round {this.state.round}</h2>
        </div>

        <div className="flex flex-auto flex-col md:flex-row">
          <Tracker />
          <Notes />
        </div>
      </div>
    );
  }
}
