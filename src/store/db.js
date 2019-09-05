import { openDB } from 'idb';

export default openDB('CombatTracker', 2, {
  upgrade(database, oldVersion, newVersion, tx) {
    if (oldVersion < 1) {
      database.createObjectStore('entities', {
        keyPath: 'id',
        autoIncrement: true,
      });
    }

    if (oldVersion < 2) {
      tx.objectStore('entities')
        .createIndex('initiative', 'initiative', { unique: false });
    }
  },
});
