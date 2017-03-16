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
import User from './src/components/user/user';
import Login from './src/scenes/LoginScene';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#FF5A5F', // changing navbar color
  },
  navTitle: {
   color: 'white', // changing navbar title color
  },
})

class App extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key={'login'} title={'Login'} component={Login} />
        <Scene key={'rooms'} title={'Rooms'} component={Rooms} />
        <Scene key={'room'} title={'Room'} component={Room} />
        <Scene key={'user'} title={'User'} component={User} />
      </Router>
    );
  }
}

export default App;
