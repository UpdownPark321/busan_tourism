import React, { Component } from "react";
import Input from "./Input";
import "./Login.css";
import './Main';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.loginRequestHandler = this.loginRequestHandler.bind(this);
  }
  onChange(key, value) {
    this.setState({
      [key]: value,
    });
  }
  loginRequestHandler() {
    let userId;
    let email;
    if (this.state.username === "busan" && this.state.password === "1234") {
      userId = "busan";
      email = "busan@naver.com";
      window.confirm(`사용자 정보, 아이디: ${userId}  이메일: ${email}`);
    } else {
      alert("사용자 정보가 틀렸습니다");
    }
  }
  render() {
    return (
      
      <div
      style = {{
        padding: '20px',
        position : 'absolute',
        left : '83%',
        top : '40%',
      }}>
        
        <Input
          label="Username"
          name="username"
          type="text"
          onChange={this.onChange}
          autoFocus
        />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={this.onChange}
        />
        <button onClick={this.loginRequestHandler}>Login</button>
      </div>
    );
  }
}

export default Login;
