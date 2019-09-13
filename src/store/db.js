import { openDB } from 'idb';

export default openDB('CombatTracker', 3, {
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

    if (oldVersion < 3) {
      database.createObjectStore('keyval');
    }
  },
});
