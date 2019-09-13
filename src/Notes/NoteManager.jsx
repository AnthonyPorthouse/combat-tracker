import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import awesomeDebouncePromise from 'awesome-debounce-promise';
import { getNotes, saveNotes } from '../store/notes/actions';
import Notes from './Notes';

const saveNotesDebounced = awesomeDebouncePromise((func, notes) => {
  func(notes);
}, 500);

class NoteManager extends PureComponent {
  static get propTypes() {
    return {
      storedNotes: PropTypes.string.isRequired,
      getNotes: PropTypes.func.isRequired,
      saveNotes: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    props.getNotes();
  }

  state = {
    notes: this.props.storedNotes,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.storedNotes !== this.props.storedNotes) {
      this.setInitialNotes(this.props.storedNotes);
    }
  }

  setInitialNotes(notes) {
    this.setState({
      notes,
    });
  }

  async saveNotes(notes) {
    this.setState({ notes });
    await saveNotesDebounced(this.props.saveNotes, notes);
  }

  render() {
    return (
      <Notes notes={this.state.notes} onChange={notes => this.saveNotes(notes)} />
    );
  }
}

const mapStateToProps = state => ({
  storedNotes: state.notes.notes,
});

const mapDispatchToProps = {
  saveNotes,
  getNotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteManager);
