import React from 'react';
import { Map } from 'react-kakao-maps-sdk';

function Kakaomap() {

  return (
    <div>
      <Map center={{lat: 33.5563, lng: 126.79581}} style = {{ width:'600px', height:'600px', position : 'absolute', left : '20%', top:'30%'}} level={3}>

      </Map>
    </div>
  );
}

export default Kakaomap;