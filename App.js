import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import Rooms from './src/scenes/RoomsScene';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'rooms'} title={'Rooms'} component={Rooms} />
      </Router>
    );
  }
}

export default App;
