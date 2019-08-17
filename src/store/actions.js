import { ADD_ENTITY } from './actionTypes';

let nextEntityId = 0;
export const addEntity = entity => ({
  type: ADD_ENTITY,
  payload: {
    id: nextEntityId += 1,
    entity,
  },
});

export default {
  addEntity,
}
