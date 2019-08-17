import React from 'react';
import PropTypes from 'prop-types';

export default class EntityRow extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      initiative: props.initiative,
    };
  }

  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      initiative: PropTypes.number.isRequired,
    };
  }

  render() {
    return (
      <li className="flex items-center rounded-sm shadow bg-white mb-2 border-gray-200 pl-1 pr-1">
        <span className="rounded-lg text-xl mr-2">
          {this.state.initiative}
        </span>
        <span className="uppercase">
          {this.state.name}
        </span>
      </li>
    );
  }
}
