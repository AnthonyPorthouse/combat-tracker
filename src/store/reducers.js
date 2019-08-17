import { combineReducers } from 'redux';
import { ADD_ENTITY } from './actionTypes';

function entities(state = [], action) {
  switch (action.type) {
    case ADD_ENTITY:
      return Object.assign({}, state, {
        entities: [
          ...state.entities,
          action.entity,
        ],
      });
    default:
      return state;
  }
}

const combatTracker = combineReducers({
  entities,
});

export default combatTracker;
