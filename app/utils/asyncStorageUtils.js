import AsyncStorage from '@react-native-community/async-storage';
import * as constants from '../res/constants';

export function setData(data: []): Promise<boolean> {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(constants.ASYNC_STORAGE_COUNTERS, JSON.stringify(data))
      .then(() => {
        alert('Data saved');
        return resolve(true);
      })
      .catch(() => {
        return reject(false);
      });
  });
}

export function getData(): Promise<> {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(constants.ASYNC_STORAGE_COUNTERS)
      .then((data) => {
        alert('Data recovered');
        return resolve(data);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}
