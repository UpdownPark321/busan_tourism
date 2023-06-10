import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
//npm i react-kakao-maps-sdk 하세요

function Kakaomap() {

  return (
    <div>
      <Map center={{lat: 33.5563, lng: 126.79581}} style={{ width:'400px', height:'400px'}} level={3}>

      </Map>
    </div>
  );
}

export default Kakaomap;