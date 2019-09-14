import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEntity } from '../store/entites/actions';

class EntityRow extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      initiative: props.initiative,
    };
  }

  static get propTypes() {
    return {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      initiative: PropTypes.number.isRequired,
      dispatch: PropTypes.func.isRequired,
    };
  }

  removeEntity(event) {
    this.props.dispatch(deleteEntity(this.props.id));
    event.preventDefault();
  }

  render() {
    return (
      <li>
        <form
          onSubmit={e => this.removeEntity(e)}
          className="flex items-center rounded-sm shadow bg-white mb-2 border-gray-200 pl-1 overflow-hidden"
        >
          <input
            type="number"
            min="0"
            className="rounded-lg text-xl mr-2 w-2/12"
            placeholder="12"
            value={this.state.initiative}
            readOnly
          />
          <input
            className="flex-grow uppercase"
            placeholder="Swoe"
            value={this.state.name}
            readOnly
          />
          <button
            className="w-1/12 bg-red-500 text-xl text-white font-bold px-2 h-full block"
          >-
          </button>
        </form>
      </li>
    );
  }
}

export default connect(null)(EntityRow);
