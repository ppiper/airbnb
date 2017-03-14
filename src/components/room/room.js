import React from 'react';
import {
  View,
  Text,
  Button,
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
      loc,
      photos,
    } = this.props;


    return (
      <View>
        {photos.map((photo, index) => {
          return (
            <img key={index} src={photo} />
          );
        })}
        <Text>{title}</Text>
        <Text>{ratingValue}</Text>
        <Text>{reviews}</Text>
        <View
          style={{
            height: 500,
            width: 500,
          }}>
        </View>
      </View>
    );
  }
}

export default Room;
