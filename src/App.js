import React from 'react';
import './index.css';
import Information from './components/Information'; 
import Question from './components/Question'; 
import Main from './components/Main'; 

// import busanImg from './project/0.jpg';

const App = () => {
  const [index, setIndex] = React.useState("main");
    const onSelect = (event) => {
      setIndex(event.target.value);
    }

  return(
    <div>
      {/* <img src={busanImg} alt="BusanImg" className='busanImg'/> */}
      <header className="header">
        <h1>Busan Tourism</h1>
        <select  className="select" value={index} onChange={onSelect}>
          <option value="main">Main Page</option>
          <option value="0">Information</option>
          <option value="1">Q & A</option>
      </select>
      </header>
      <hr />
      {index === "main" ? <Main /> : null}
      {index === "0" ? <Information /> : null}
      {index === "1" ? <Question /> : null}
    
  </div>
  );
}

export default App;