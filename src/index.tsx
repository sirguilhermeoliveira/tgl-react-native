import React from 'react';
import MyStack from './navigation/index';
import { store } from './store/index';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}
