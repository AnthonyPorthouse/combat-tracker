import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EntityRow from './EntityRow';
import AddEntity from './AddEntity';
import { getEntities } from '../store/entites/actions';

class EntityList extends React.PureComponent {
  static get propTypes() {
    return {
      entities: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        initiative: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired).isRequired,

      entityOrder: PropTypes.arrayOf(PropTypes.number).isRequired,

      dispatch: PropTypes.func.isRequired,
    };
  }

  componentDidMount() {
    this.props.dispatch(getEntities());
  }

  renderEntities() {
    return this.props.entityOrder.map(entityId => (<EntityRow
      id={this.props.entities[entityId].id}
      name={this.props.entities[entityId].name}
      initiative={this.props.entities[entityId].initiative}
      key={this.props.entities[entityId].id}
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
  entityOrder: state.entities.entityOrder,
  isLoading: state.entities.isFetching,
});

export default connect(mapStateToProps)(EntityList);
