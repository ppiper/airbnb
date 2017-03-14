import React from 'react';
import RoomsScene from './RoomsScene';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class HomeScene extends React.Component {
  render() {
    return (
      <View style={{
          marginTop : 100
        }}>
        <Text>hello</Text>
      </View>
    );
  }
}

export default HomeScene;
