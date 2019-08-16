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
          <h1 className="text-xl">{this.state.name}</h1>
          <h2 className="text-xl">Round {this.state.round}</h2>
        </div>

        <div className="flex flex-auto md:flex-row max-h-full">
          <Tracker />
          <Notes />
        </div>
      </div>
    );
  }
}
