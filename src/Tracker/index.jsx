import React from 'react';
import EntityList from './EntityList';

export default class Tracker extends React.PureComponent {
  render() {
    return (
      <div className="w-1/2 p-2 bg-gray-400">
        <EntityList />
      </div>
    );
  }
}
