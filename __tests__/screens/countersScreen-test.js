import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CountersScreen from '../../app/screens/counters';
import Counter from '../../app/models/Counter';

const middlewares = [];
const mockStore = configureStore(middlewares);

test('toMatchSnapshot No Data', async () => {
  const initialState = {counters: [], activeCounter: 0};
  const store = mockStore(initialState);
  const viewToTest = (
    <Provider store={store}>
      <CountersScreen />
    </Provider>
  );

  const tree = renderer.create(viewToTest).toJSON();
  const treeRoot = renderer.create(viewToTest).root;

  expect(tree).toMatchSnapshot();
  expect(treeRoot.findByProps({testId: 'textNoData'}).props.children).toEqual(
    'NO COUNTERS FOUND',
  );
});

test('toMatchSnapshot Default', async () => {
  const initialState = {counters: [new Counter(0)], activeCounter: 0};
  const store = mockStore(initialState);
  const viewToTest = (
    <Provider store={store}>
      <CountersScreen />
    </Provider>
  );

  const tree = renderer.create(viewToTest).toJSON();

  expect(tree).toMatchSnapshot();
});
