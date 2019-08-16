import React from 'react';

export default class Notes extends React.Component {
  state = {
    notes: 'Default notes',
  };

  render() {
    return (
      <div className="Notes">
        <textarea>{ this.state.notes }</textarea>
      </div>
    );
  }
}
