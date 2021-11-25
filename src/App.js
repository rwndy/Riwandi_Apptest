import * as React from 'react';
import {View} from 'react-native';
import Router from './routing';

const AppNavigation = () => {
  return (
    <>
      <Router />
    </>
  );
};

const App = () => {
  return (
    <>
      <AppNavigation />
    </>
  );
};

export default App;
