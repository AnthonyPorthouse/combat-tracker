import {
  STORE_ENTITY,
  ENTITY_STORED,
  FETCH_ENTITIES,
  RECEIVE_ENTITIES,
  ENTITY_REMOVED,
} from './actionTypes';

export default function entities(state = {
  isFetching: false,
  entities: {},
  entityOrder: [],
}, action) {
  switch (action.type) {
    case STORE_ENTITY:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ENTITY_STORED:
      return Object.assign({}, state, {
        isFetching: false,
        entities: Object.assign({}, state.entities, {
          [action.entity.id]: action.entity,
        }),
        entityOrder: [...state.entityOrder, action.entity.id],
      });
    case FETCH_ENTITIES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_ENTITIES:
      return Object.assign({}, state, {
        isFetching: false,
        entities: action.entities,
        entityOrder: action.entityOrder,
      });
    case ENTITY_REMOVED:
      return Object.assign({}, state, {
        entities: state.entities.filter(entity => entity.id !== action.entityId),
      });
    default:
      return state;
  }
}
