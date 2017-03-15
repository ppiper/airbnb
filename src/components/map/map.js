import React from 'react';
import Map from 'react-native-maps';

class Mapy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers:this.props.markers,
    }

    this.onRegionChange = this.onRegionChange.bind(this);

  }

onRegionChange(obj) {
  this.setState({
    markers: [
      ...this.state.markers,
      {
        coordinate:obj.nativeEvent.coordinate,
      }
    ]

    });
}

  render() {
    const {
      region,
      markers,
    } = this.props;

    console.log("latitude:",region.lat);
    console.log("longitude:",region.lng);
    return (
      <Map style={this.props.style}
      initialRegion={{
          latitude: region.lat,
          longitude: region.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={this.onRegionChange}
      >

      {markers.map(marker => (
        <Map.Marker {...marker}>

        </Map.Marker>
        ))}

      </Map>
    );
  }
}


Mapy.defaultProps = {
  initialRegion: {
    latitude: 0,
    longitude: 0,

  }
}

export default Mapy;
