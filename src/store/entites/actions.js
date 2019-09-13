import {
  STORE_ENTITY, ENTITY_STORED,
  RECEIVE_ENTITIES, FETCH_ENTITIES,
  REMOVE_ENTITY, ENTITY_REMOVED,
} from './actionTypes';

import dbPromise from '../db';

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

export function receiveEntities(entities, entityOrder) {
  return {
    type: RECEIVE_ENTITIES,
    entities,
    entityOrder,
  };
}

export function getEntities() {
  return async (dispatch) => {
    dispatch(fetchEntities);

    const db = await dbPromise;
    const entities = {};
    const entityOrder = [];

    let cursor = await db.transaction('entities').store.openCursor();

    while (cursor) {
      const entity = cursor.value;
      entity.initiative = Number(entity.initiative);

      entities[entity.id] = entity;
      entityOrder.push(entity.id);

      // eslint-disable-next-line no-await-in-loop
      cursor = await cursor.continue();
    }

    return dispatch(receiveEntities(entities, entityOrder));
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
