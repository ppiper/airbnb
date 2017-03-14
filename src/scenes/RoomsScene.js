import React from 'react';
import Api from "../Api";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ListView,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

class RoomsScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }

  componentDidMount() {
    const CITY_ID = 'paris';
      Api.getRooms(CITY_ID, (rooms) => {
        console.log(rooms.rooms);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rooms.rooms)
        });
      });

    }

    renderItem(rowData) {
      return (
        <View style={{
            marginTop : 100,
            flex:1,
            position:'relative',
          }}>
          <Image
            source={{uri:rowData.photos[0]}}
            style={{
              width:345,
              height:200,
              }}/>
          <Text>{rowData.title}</Text>
          <Text>{rowData.ratingValue}</Text>
          <Text>{rowData.reviews}</Text>
          <Image
          source={{uri:rowData.user.account.photos[0]}}
          style={{
            borderRadius:20,
            position:'absolute',
            width:40,
            height:40,
            right:30,
            top:200,
            }}/>
        </View>
      );
    }


  render() {

    if (this.state.dataSource.getRowCount() === 0) {
      return (
        <View
          style={styles.container}>
        </View>
      );
    }

    return (
      <View
        style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem} />
      </View>
    );
  }
}

export default RoomsScene;
