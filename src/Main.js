import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './main.css';
import 'antd/dist/antd.css'
import { Timeline } from 'react-twitter-widgets'

import { Row, Col, Button } from 'antd';

import ImageHeader from './ImageHeader';




class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }


  render() {
    return (
      <div>
        <Row >
          <Col className="header" span={24}>aqui deve ter uma imagem de capa</Col>
        </Row>
        <Row >
          <Col className="naviBar" span={8}>
            <div className="avatarProfile">
              <img src={"https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_400x400.jpg"} className="imageAvatar" alt="avatar" />
            </div>
          </Col>
          <Col className="naviBar" span={16}>
            <a href="https://www.google.com">
              <span className="btnNaviBar">Tweets</span>
              <br/>
              <span className="btnNaviBar">3444</span>
            </a>
          </Col>

        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col className="leftProfile" span={6}>profile</Col>
          <Col className="timeLine" span={11}>dsd</Col>
          <Col className="rightSidebar" span={6}>right</Col>
        </Row>
      </div>
    );
  }
}

export default Main;
