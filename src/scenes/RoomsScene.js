import React from 'react';
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
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rooms)
        });
      });
    }

    renderItem(rowData) {
      return (
        <View>
          <Text>{rowData.title}</Text>
          <Text>{rowData.description}</Text>
          <Text>{rowData.ratingValue}</Text>
          <Text>{rowData.reviews}</Text>
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
