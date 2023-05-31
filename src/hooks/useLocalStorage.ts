import { useState } from 'react';

interface UseLocalStorageProps<T> {
  key: string;
  initialData: T;
}

const useLocalStorage = <T>({ key, initialData }: UseLocalStorageProps<T>): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialData;
    } catch (error) {
      console.error(error);
      return initialData;
    }
  });

  const setValue = (value: T): void => {
    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
