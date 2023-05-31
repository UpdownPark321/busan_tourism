import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ShowInfo = () => {
    const [data,setData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3001/busan")
        .then((res) => {
            setData([...res.data.getAttractionKr.item]);
            //console.log(data);
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <button onClick={getData}>데이터 받아오기 확인</button>
            {/* <span>{data[0].ADDR1}</span> */}
            {/* {makeJsxEle(data)} */}
        </div>
    );
};

export default ShowInfo;