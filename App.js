import React from 'react';
import { MainNavigation } from './src/navigation/MainNavigation';
import { Provider } from 'react-redux'
import store from './src/store/index'

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
