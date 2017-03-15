import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

class Room extends React.Component {
  render() {
    // console.log('room/Room#render', this.props);
    const {
      name,
      description,
      photo,
    } = this.props;
    return (
      <View
      style={{
          flex:1,
        }}>
        <View style={{
            marginTop : 100,
            height:200,
            alignItems:'center',
          }}>
          <Image
          source={{uri:photo}}
          style={{
            width:200,
            height:200,
            right:30,
            }}/>
              <Text>{name}</Text>
              <Text>{description}</Text>
          </View>
      </View>
    );
  }
}

export default Room;
