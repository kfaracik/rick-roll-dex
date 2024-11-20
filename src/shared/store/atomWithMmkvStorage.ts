import {atomWithStorage} from 'jotai/utils';
import {storage} from './storage';

export const atomWithMmkvArrayStorage = <T>(key: string, initialValue: T[]) =>
  atomWithStorage(
    key,
    initialValue,
    {
      getItem(key, initialValue: T[]) {
        const storedValue = storage.getString(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
      },
      setItem: (key, newValue) => {
        storage.set(key, JSON.stringify(newValue));
      },
      removeItem: key => {
        storage.delete(key);
      },
    },
    {getOnInit: true},
  );
