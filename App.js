import React from 'react';
import { NavigationDrawer } from './src/navigation/NavigationDrawer'
import { Provider } from 'react-redux'
import store from './src/store/index'

export default function App() {

  return (
    <Provider store={store}>
      <NavigationDrawer />
    </Provider>
  );
}
