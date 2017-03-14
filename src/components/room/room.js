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
      price,
      description,
      ratingValue,
      title,
      user,
      _id,
      reviews,
      photos,
    } = this.props;
    return (
      <View>
        <View style={{
            marginTop : 100,
            position:'relative',
            height:200,
          }}>
            <Image
            source={{uri:photos[0]}}
            style={{
              width:345,
              height:160,
              bottom:10,
              }}/>
              <Text>{title}</Text>
              <Text>{ratingValue}</Text>
              <Text>{price}</Text>
              <Text>{description}</Text>
              <Text>{reviews}</Text>
          </View>
      </View>
    );
  }
}

export default Room;
