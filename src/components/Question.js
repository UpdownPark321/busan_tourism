import React from 'react';

function Question(){
  return(
    <div style={{textAlign:"center"}}>
      <input className="chatGpt" type='text'></input>
      <button className="gptBtn">click</button>
      <div>Answer: </div>
    </div>
  );
}

export default Question;