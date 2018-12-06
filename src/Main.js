import React, { Component } from 'react';
import './css/main.css';
import 'antd/dist/antd.css'
import { Tweet } from './components/tweet';

import { Row, Col, Button } from 'antd';

import { NaviBar } from './components/NaviBar';

import ModalTweet from './ModalTweet';

//import './twitter_core.bundle.css';
//import './twitter_more_2.bundle.css';
//import './twitter_more_1.bundle.css';
//import './twitter_profile_editing.bundle.css';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, contador_tweets: 526, tweets: [] };
  }


  adicionarTweet = () => {
    const { tweets } = this.state;
    this.setState({showModalTweet: true});
    //tweets.push(<Tweet />);
    //this.setState({ ...tweets });
  }

  handleOk = () => {
    this.setState({showModalTweet: false});
  }
  handleCancel = () => {
    this.setState({showModalTweet: false})
  }

  renderModalTweet = () => {
    return this.state.showModalTweet && 
      <ModalTweet 
        handleCancel={this.handleCancel}
        handleOk={this.handleOk} 
        visible={this.state.showModalTweet}
      />
  }



  render() {
    const { tweets } = this.state;
    return (
      <div>
        {this.renderModalTweet()}
        <Row >
          <Col className="header" span={24}></Col>
        </Row>
        <NaviBar/>
        <Row style={{ marginTop: "10px" }}>
          <Col className="leftProfile" span={6}>profile</Col>
          <Col className="timeLine" span={11}>
            
            {tweets.map(tweet => tweet)}
          </Col>
          <Col className="rightSidebar" span={6}>right</Col>
        </Row>
      </div>
    );
  }
}

export default Main;
