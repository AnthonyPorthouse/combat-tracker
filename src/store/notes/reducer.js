import { NOTES_FETCHED, NOTES_STORED } from './actionTypes';

const initialState = {
  notes: '',
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case NOTES_FETCHED:
    case NOTES_STORED:
      return Object.assign({}, state, {
        notes: action.notes,
      });
    default:
      return state;
  }
}
