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
    this.state = { counter: 0, contador_tweets: 526, tweets: [] };
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.someValue!==this.props.someValue){
      this.setState({tweets: nextProps.tweets });
      this.classMethod();
    }
  }


  render() {
    const { tweets } = this.props;
    console.log(tweets);
    return (
      <div>
        <Row >
          <Col className="header" span={24}></Col>
        </Row>
        <NaviBar/>
        <Row style={{ marginTop: "10px" }}>
          <Col className="leftProfile" span={6}>profile</Col>
          <Col className="timeLine" span={11}>
            
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
