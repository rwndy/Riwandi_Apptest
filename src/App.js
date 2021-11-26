import * as React from 'react';
import Router from './routing';
import { Provider } from 'react-redux';
import store from './redux/store';

const AppNavigation = () => {
  return (
    <>
      <Router />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
