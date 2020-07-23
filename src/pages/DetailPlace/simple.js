/* eslint-disable */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Map = ({lat,lng}) =>{
  return ( 
    <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="300" id="gmap_canvas" src={"https://maps.google.com/maps?q=" + lat + "%2C" + lng + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">nordvpn coupon</a></div></div>
  )
}
 
export default Map;