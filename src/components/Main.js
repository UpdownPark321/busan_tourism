import React from 'react';

import busanImg from '../img/1.jpg';

function Main(){
  return(
    <div className="mainContent">
      <div className='titleBox'>
        <h1 className="title">WELCOME TO OUR WEBSITE</h1>
      </div>
      <div className='imgBox'>
        <img src={busanImg} alt="BusanImg" className='busanImg'/>
      </div>
    </div>
  );
}

export default Main;