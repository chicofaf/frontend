import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './css/main.css';
import 'antd/dist/antd.css'
import { Timeline } from 'react-twitter-widgets'
import {Tweet} from './tweet';

import { Row, Col, Button } from 'antd';

import ImageHeader from './ImageHeader';
import {NaviBar} from './NaviBar';

//import './twitter_core.bundle.css';
//import './twitter_more_2.bundle.css';
//import './twitter_more_1.bundle.css';
//import './twitter_profile_editing.bundle.css';





class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, contador_tweets: 526, tweets:[]};
  }


  adicionarTweet = () => {
    const {tweets} = this.state;
    tweets.push(<Tweet/>);
    this.setState({...tweets});
  }

  render() {
    const {tweets} = this.state;
    return (
      <div>
        <Row >
          <Col className="header" span={24}></Col>
        </Row>
        <NaviBar contador_tweets={3343} contador_following={567} contador_followers={4588} contador_likes={21} contador_lists={100} contador_moments={332}/>
        <Row style={{ marginTop: "10px" }}>
          <Col className="leftProfile" span={6}>profile</Col>
          <Col className="timeLine" span={11}><Button onClick={() => this.adicionarTweet()} type="primary">Tweet</Button>{tweets.map(tweet=> tweet)}</Col>
          <Col className="rightSidebar" span={6}>right</Col>
        </Row>
      </div>
    );
  }
}

export default Main;
