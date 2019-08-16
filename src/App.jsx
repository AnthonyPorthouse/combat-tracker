import React from 'react';
import './App.css';
import Notes from './Notes';

export default class App extends React.Component {
  state = {
    name: 'Combat Tracker',
  };

  render() {
    return (
      <div className="container mx-auto">
        <h1>Welcome to {this.state.name}</h1>
        <Notes />
      </div>
    );
  }
}
