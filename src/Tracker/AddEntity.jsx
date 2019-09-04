import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEntity } from '../store/actions';

class AddEntity extends React.PureComponent {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
    };
  }

  state = {
    initiative: '',
    name: '',
  };

  addNewEntity(event) {
    this.props.dispatch(addEntity(this.state));

    this.setState({
      initiative: '',
      name: '',
    });

    event.preventDefault();
  }

  handleInitiativeChange(initiative) {
    this.setState(Object.assign({}, this.state, {
      initiative,
    }));
  }

  handleNameChange(name) {
    this.setState(Object.assign({}, this.state, {
      name,
    }));
  }

  render() {
    return (
      <li>
        <form
          onSubmit={e => this.addNewEntity(e)}
          className="flex items-center rounded-sm shadow bg-white mb-2 border-gray-200 pl-1 pr-1"
        >
          <input
            type="number"
            min="0"
            className="rounded-lg text-xl mr-2 w-2/12"
            placeholder="12"
            onChange={e => this.handleInitiativeChange(e.target.value)}
            value={this.state.initiative}
          />
          <input
            className="flex-grow uppercase"
            placeholder="Swoe"
            onChange={e => this.handleNameChange(e.target.value)}
            value={this.state.name}
          />
          <button
            className="w-1/12 bg-transparent text-gray-400 font-semibold border border-gray-400 rounded px-2"
          >+
          </button>
        </form>
      </li>
    );
  }
}

export default connect(null)(AddEntity);
