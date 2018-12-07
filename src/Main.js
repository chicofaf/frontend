import React, { Component } from 'react';
import './css/main.css';
import 'antd/dist/antd.css'

import { Row, Col, Button } from 'antd';

import { NaviBar } from './components/NaviBar';
import {Tweet} from './components/tweet';

import ModalTweet from './ModalTweet';

import { connect } from 'react-redux';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {tweets: props.initialValue};
  }


  updateTweets = () => {
    this.setState({tweets: this.props.tweets});
  }

  render() {
    const {tweets} = this.state;
    console.log(tweets);
    return (
      <div>
        <ModalTweet updateTweets={this.updateTweets}/>
        <Row >
          <Col className="header" span={24}></Col>
        </Row>
        <NaviBar/>
        <Row style={{ marginTop: "10px" }}>
          <Col className="leftProfile" span={6}>profile</Col>
          <Col className="timeLine" span={11}>
          {tweets}  
          </Col>
          <Col className="rightSidebar" span={6}>right</Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  tweets: store.tweetReducer.tweets
});

export default connect(mapStateToProps)(Main);
