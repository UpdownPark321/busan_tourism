import React, { useState } from 'react';
import './index.css';
import Information from './components/Information'; 
import Question from './components/Question'; 
import Main from './components/Main';
import axios from 'axios';

// import busanImg from './project/0.jpg';

const App = () => {
  const [index, setIndex] = useState("main");
  const [data,setData] = useState([]);

    const onSelect = (event) => {
      setIndex(event.target.value);
      axios.get("http://localhost:3001/busan")//메뉴 선택 이벤트 수행 시 데이터를 받아옴, Information 컴포넌트에 데이터를 props로 넘겨줌
      .then((res) => {
        setData([...res.data.getAttractionKr.item]);
        console.log(res);
      }).catch((err) => {
          console.log(err);
      })
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
      {index === "0" ? <Information data={data}/> : null}
      {index === "1" ? <Question /> : null}
    
  </div>
  );
}

export default App;