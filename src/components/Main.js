import React from "react";
import Login from "./Login";
import "./Main.css";

function Main() {
  return (
    <div>
      <h1 className="title">WELCOME TO OUR WEBSITE </h1>
      <h2>로그인 정보를 입력하세요 :
         <Login/></h2>
     
    </div>
  );
}

export default Main;
