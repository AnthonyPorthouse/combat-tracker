import React from 'react';
import EntityList from './EntityList';

export default class Tracker extends React.PureComponent {
  render() {
    return (
      <div className="w-full md:w-1/2 p-2 bg-gray-200">
        <EntityList />
      </div>
    );
  }
}
