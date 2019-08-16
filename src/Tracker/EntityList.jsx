import React from 'react';
import EntityRow from './EntityRow';

export default class EntityList extends React.PureComponent {
  state = {
    entities: [
      {
        name: 'Test 1',
        initiative: 20,
      },
      {
        name: 'Test 2',
        initiative: 15,
      },
    ],
  };

  renderEntities() {
    return this.state.entities.map(entity => (<EntityRow
      name={entity.name}
      initiative={entity.initiative}
      key={entity.initiative}
    />));
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderEntities()}
        </ul>
      </div>
    );
  }
}
