/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native';
import DetailContact from '../src/screens/DetailContact';

import {create, act} from 'react-test-renderer';

it('renders contact detail', () => {
  const page = create(<DetailContact />);
  expect(page).toMatchSnapshot();
});