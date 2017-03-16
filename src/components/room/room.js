import React from 'react';
import Mapy from "../map/map";
import user from "../user/user";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

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

    const region = {
      lat: loc[1],
      lng: loc[0],
    };


    return (
      <View
      style={{
          flex:1,
        }}>
        <View style={{
            marginTop : 100,
            position:'relative',
            height:200,
            alignItems:'center',
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

              <TouchableOpacity
                style={{
                position: 'absolute'
              }}
              onPress={() => Actions.user({
                name:user.account.username,
                description:user.account.description,
                photo:user.account.photos[0],
               })}>
                  <Image
                  source={{uri:user.account.photos[0]}}
                  style={{
                    borderRadius:20,
                    width:40,
                    height:40,
                    left:150,
                    top:160,
                    }}/>
                </TouchableOpacity>

                <Mapy style={{
                    height: 200,
                    width:300,
                  }}
                  region={region}
                  />
          </View>
      </View>
    );
  }
}

export default Room;
