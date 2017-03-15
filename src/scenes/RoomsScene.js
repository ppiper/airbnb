import React from 'react';
import Api from "../Api";
import room from "../components/room/room";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ListView,
  Dimensions,
  Image,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

let {
  height,
  width,
} = Dimensions.get('window');

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
          <View style={{
              alignItems:'center',
            }}>
            <TouchableOpacity onPress={() => Actions.room({
               price:rowData.price,
               description:rowData.description,
               ratingValue:rowData.ratingValue,
               title:rowData.title,
               user:rowData.user,
               _id:rowData._id,
               reviews:rowData.reviews,
               photos:rowData.photos,
               loc:rowData.loc,
             })} >
             <Image
               source={{uri:rowData.photos[0]}}
               style={{
                 width:345,
                 height:160,
                 bottom:10,
                 }}/>
                </TouchableOpacity>

          </View>
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
            top:180,
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
