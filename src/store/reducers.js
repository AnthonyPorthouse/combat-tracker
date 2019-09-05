import { combineReducers } from 'redux';
import {
  STORE_ENTITY,
  ENTITY_STORED,
  FETCH_ENTITIES,
  RECEIVE_ENTITIES,
  ENTITY_REMOVED,
} from './actionTypes';

function entities(state = {
  isFetching: false,
  entities: [],
}, action) {
  switch (action.type) {
    case STORE_ENTITY:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ENTITY_STORED:
      return Object.assign({}, state, {
        isFetching: false,
        entities: [
          ...state.entities,
          action.entity,
        ],
      });
    case FETCH_ENTITIES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_ENTITIES:
      return Object.assign({}, state, {
        isFetching: false,
        entities: action.entities,
      });
    case ENTITY_REMOVED:
      return Object.assign({}, state, {
        entities: state.entities.filter(entity => entity.id !== action.entityId),
      });
    default:
      return state;
  }
}

const combatTracker = combineReducers({
  entities,
});

export default combatTracker;
