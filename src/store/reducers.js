import { combineReducers } from 'redux';
import EntitiesReducer from './entites/reducer';

const combatTracker = combineReducers({
  entities: EntitiesReducer,
});

export default combatTracker;
