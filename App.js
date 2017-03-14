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
import Room from './src/components/room/room';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'rooms'} title={'Rooms'} component={Rooms} />
        <Scene key={'room'} title={'Room'} component={Room} />
      </Router>
    );
  }
}

export default App;
