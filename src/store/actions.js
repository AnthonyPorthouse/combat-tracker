import {
  STORE_ENTITY,
  ENTITY_STORED,
  RECEIVE_ENTITIES,
  FETCH_ENTITIES,
  REMOVE_ENTITY, ENTITY_REMOVED,
} from './actionTypes';

import dbPromise from './db';

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
    entities: entities.map(entity => Object.assign(
      {},
      entity,
      { initiative: Number(entity.initiative) },
    )),
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

export function removeEntity(entityId) {
  return {
    type: REMOVE_ENTITY,
    entityId,
  };
}

export function entityRemoved(entityId) {
  return {
    type: ENTITY_REMOVED,
    entityId,
  };
}

export function deleteEntity(entityId) {
  return async (dispatch) => {
    dispatch(removeEntity(entityId));

    const db = await dbPromise;

    return db.delete('entities', entityId)
      .then(() => dispatch(entityRemoved(entityId)));
  };
}
