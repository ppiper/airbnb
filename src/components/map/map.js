import React from 'react';
import Map from 'react-native-maps';

class Mapy extends React.Component {

  constructor(props) {
    super(props);
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const {
      region,
      markers,
    } = this.props;

    return (
      <Map style={this.props.style}
      region={region}
      onRegionChange={this.onRegionChange}>

      {markers.map(marker => (
        <Map.Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}/>
        ))}

      </Map>
    );
  }
}


Mapy.defaultProps = {
  region: {
    lat: 0,
    lng: 0,
  }
}

export default Mapy;
