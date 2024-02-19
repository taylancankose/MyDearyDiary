import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/Rooter';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
