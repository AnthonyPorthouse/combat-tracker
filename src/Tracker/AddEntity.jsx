import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEntity } from '../store/entites/actions';

class AddEntity extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  static get propTypes() {
    return {
      addEntity: PropTypes.func.isRequired,
    };
  }

  initialState = {
    initiative: 0,
    name: '',
  };

  addNewEntity(event) {
    this.props.addEntity(this.state);

    this.resetState();

    event.preventDefault();
  }

  resetState() {
    this.setState(this.initialState);
  }

  handleInitiativeChange(initiative) {
    this.setState(Object.assign({}, this.state, {
      initiative: Number(initiative),
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
          className="flex items-center rounded-sm shadow bg-white mb-2 border-gray-200 pl-1 overflow-hidden"
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
            className="w-1/12 bg-gray-600 text-xl text-white font-bold px-2 h-full block"
          >+
          </button>
        </form>
      </li>
    );
  }
}

export default connect(null, {
  addEntity,
})(AddEntity);
