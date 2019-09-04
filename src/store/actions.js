import { openDB } from 'idb';
import {
  STORE_ENTITY,
  ENTITY_STORED,
  RECEIVE_ENTITIES,
  FETCH_ENTITIES,
} from './actionTypes';

const dbPromise = openDB('CombatTracker', 1, {
  upgrade(database) {
    database.createObjectStore('entities', {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

export function storeEntity(entity) {
  return {
    type: STORE_ENTITY,
    entity,
  };
}

export function entityStored(entity) {
  return {
    type: ENTITY_STORED,
    entity,
  };
}

export function addEntity(entity) {
  return async (dispatch) => {
    dispatch(storeEntity(entity));

    const db = await dbPromise;

    return db.add('entities', entity)
      .then(storedId => dispatch(entityStored(Object.assign(
        {},
        entity,
        { id: storedId },
      ))));
  };
}

export function fetchEntities() {
  return {
    type: FETCH_ENTITIES,
  };
}

export function receiveEntities(entities) {
  return {
    type: RECEIVE_ENTITIES,
    entities,
  };
}

export function getEntities() {
  return async (dispatch) => {
    dispatch(fetchEntities);

    const db = await dbPromise;

    return db.getAll('entities')
      .then(entities => dispatch(receiveEntities(entities)));
  };
}
