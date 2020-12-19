import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SettingsScreen from '../../app/screens/settings';

import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const middlewares = [];
const mockStore = configureStore(middlewares);

test('toMatchSnapshot Default', async () => {
  const initialState = {counters: [], activeCounter: 0};
  const store = mockStore(initialState);
  const viewToTest = (
    <Provider store={store}>
      <SettingsScreen />
    </Provider>
  );

  const tree = renderer.create(viewToTest).toJSON();
  expect(tree).toMatchSnapshot();
});
