import { combineReducers } from 'redux';
import EntitiesReducer from './entites/reducer';
import NotesReducer from './notes/reducer';

const combatTracker = combineReducers({
  entities: EntitiesReducer,
  notes: NotesReducer,
});

export default combatTracker;
