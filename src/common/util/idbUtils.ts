import type { StateStorage } from 'zustand/middleware';
import { del, get, set } from 'idb-keyval';

export const IDB_MIGRATION_INITIAL = -1;

/**
 * A Zustand state storage implementation that uses IndexedDB as a simple key-value store
 */
export const idbStateStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    const value = await get(name);
    if (value === undefined) {
      return JSON.stringify({
        version: IDB_MIGRATION_INITIAL,
      });
    }
    return value || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};