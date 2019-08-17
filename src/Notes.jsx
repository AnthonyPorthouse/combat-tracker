import React from 'react';

export default class Notes extends React.PureComponent {
  state = {
    notes: 'Default notes',
  };

  updateNotes = (value) => {
    this.setState(() => ({
      notes: value,
    }));
  };

  render() {
    return (
      <div className="w-full md:w-1/2 p-2">
        <textarea className="w-full resize-none" value={this.state.notes} onChange={e => this.updateNotes(e.target.value)} />
      </div>
    );
  }
}
