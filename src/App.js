import React, { useState } from 'react';
import './index.css';
import Information from './components/Information'; 
import Main from './components/Main';
import axios from 'axios';
import Gpt from './Gpt';
import Login from './components/Login';


const App = () => {
  const [page, setPage] = useState("main");
  const [data,setData] = useState([]);

    const onSelect = (event) => {
      setPage(event.target.value);
      if(event.target.value === 'info')
      {
        axios.get("http://localhost:3001/busan")
        .then((res) => {
          setData([...res.data.getAttractionKr.item]);
          console.log(res);
        }).catch((err) => {
            console.log(err);
        })
      }
    }


  return(
    <div>
      <header className="header">
        <h1>Busan Tourism</h1>
        <select  className="select" value={page} onChange={onSelect}>
          <option value="main">Main Page</option>
          <Login/>
          <option value="info">Information</option>
          <option value="gpt">Q & A</option>
      </select>
      </header>
    
      {page === "main" && <Main />}
      {page === "info" && <Information data={data}/> }
      {page === "gpt" && <Gpt />}
    
  </div>
  );
}

export default App;
