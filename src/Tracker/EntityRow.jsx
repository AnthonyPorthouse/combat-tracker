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
      <li>
        ({this.state.initiative}) {this.state.name}
      </li>
    );
  }
}
