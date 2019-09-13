import dbPromise from '../db';

import { FETCH_NOTES, NOTES_FETCHED, NOTES_STORED, STORE_NOTES } from './actionTypes';

export function storeNotes(notes) {
  return {
    type: STORE_NOTES,
    notes,
  };
}

export function notesStored(notes) {
  return {
    type: NOTES_STORED,
    notes,
  };
}

export function saveNotes(notes) {
  return async (dispatch) => {
    dispatch(storeNotes(notes));

    const db = await dbPromise;

    await db.put('keyval', notes, 'notes');

    return dispatch(notesStored(notes));
  };
}

export function fetchNotes() {
  return {
    type: FETCH_NOTES,
  };
}

export function notesFetched(notes) {
  return {
    type: NOTES_FETCHED,
    notes,
  };
}

export function getNotes() {
  return async (dispatch) => {
    dispatch(fetchNotes());

    const db = await dbPromise;

    const notes = await db.get('keyval', 'notes');

    return dispatch(notesFetched(notes || ''));
  };
}
