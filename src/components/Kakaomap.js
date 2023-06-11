import React from 'react';
import { Map } from 'react-kakao-maps-sdk';

function Kakaomap() {

  return (
    <div>
      <Map center={{lat:37.5665, lng:126.9780}} style = {{ width:'500px', height:'500px', position : 'absolute', left : '30%', top:'30%'}} level={3}>

      </Map>
    </div>
  );
}

export default Kakaomap;