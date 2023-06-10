import React, { useEffect } from 'react';

const { Kakao } = window;

function Kakaomap() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new Kakao.maps.LatLng(33.55321, 126.972613),
    };
    const map = new Kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <div
        id="#map"
        style={{
          width: '400px',
          height: '400px',
        }}
      ></div>
    </div>
  );
}

export default Kakaomap;