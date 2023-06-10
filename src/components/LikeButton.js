import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  const [plusCounter, setPlusCounter] = React.useState(0);
  const onPlusClick = () => {
    setPlusCounter(plusCounter + 1);
  };
 
  return (
    <div className="LikeClickContainer">
        <div  onClick={onPlusClick} class="likeClick"> <FontAwesomeIcon icon={faHeart} size="lg" /></div>
        <h1 class="likeText">{plusCounter}</h1>
    </div>
  );
}

export default LikeButton;
