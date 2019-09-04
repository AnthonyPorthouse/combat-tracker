import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EntityRow from './EntityRow';
import AddEntity from './AddEntity';
import { getEntities } from '../store/actions';

class EntityList extends React.PureComponent {
  static get propTypes() {
    return {
      entities: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        initiative: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired).isRequired,

      dispatch: PropTypes.func.isRequired,
    };
  }

  componentDidMount() {
    this.props.dispatch(getEntities());
  }

  renderEntities() {
    return this.props.entities.map(entity => (<EntityRow
      name={entity.name}
      initiative={entity.initiative}
      key={entity.initiative}
    />));
  }

  render() {
    return (
      <ul>
        {this.renderEntities()}
        <AddEntity />
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  entities: state.entities.entities,
  isLoading: state.entities.isFetching,
});

export default connect(mapStateToProps)(EntityList);
