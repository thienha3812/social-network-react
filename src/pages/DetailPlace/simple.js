/* eslint-disable */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAJt0ih7Z69qEouhyDXRbJUGfV-2c6GuMQ'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;