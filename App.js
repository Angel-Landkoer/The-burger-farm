import React from 'react';
import { MainNavigation } from './src/navigation/MainNavigation';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, storePersisted } from './src/store/index'

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersisted}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
}
