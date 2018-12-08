import React, { Component } from 'react';
import './css/main.css';
import 'antd/dist/antd.css'

import { Row, Col, Icon} from 'antd';

import './css/NaviBar.css';

import ModalTweet from './ModalTweet';
import ModalUsuario from './ModalUsuario';

import { connect } from 'react-redux';
import ImageAvatar from './Avatar';
import ImageCover from './Cover';
import { Button } from 'antd/lib/radio';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { tweets: props.initialValue, nome_usuario: ""};
  }


  updateTweets = () => {
    this.setState({ tweets: this.props.tweets });
  }

  refreshAvatar = () => {
    this.setState({url_avatar : this.props.url_avatar});
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({nome_usuario: nextProps.nome_usuario});
  }

  
  render() {
    const { tweets, nome_usuario } = this.state;
    return (
      <div>

        <Row >
          <Col  span={24}><div className="header"><ImageCover/></div> </Col>
        </Row>
        <Row className='naviBar'>
          <Col span={7}>
            <div className="avatarProfile">
              <ImageAvatar refreshAvatar={()=> console.log(this.props)}/>
            </div>
            
          </Col>
          <Col span={1}>
            <a className="ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="tweets" href="/Twitter" data-original-title="8,273 Tweets">
              <span class="ProfileNav-label" aria-hidden="true">Tweets</span>
              <span class="ProfileNav-value" data-count="8273" data-is-compact="false">{this.props.contador_tweets}
              </span>
            </a>
          </Col>
          <Col span={6} style={{marginLeft:"60px"}}>
            <ModalTweet updateTweets={this.updateTweets} />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col className="leftProfile" span={6}>Usuário: {nome_usuario} <ModalUsuario refreshUsuario={this.refreshUsuario}/></Col>
          <Col className="timeLine" span={11}>
            <Row style={{marginLeft: "10px", marginBottom: "10px"}}>
              oi, aqui são listados seus tweets!
            </Row>
            <Row>
              {tweets}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  tweets: store.tweetReducer.tweets,
  contador_tweets: store.tweetReducer.contador_tweets,
  url_avatar : store.imageReducer.url_avatar,
  nome_usuario : store.usuarioReducer.nome_usuario
});

export default connect(mapStateToProps)(Main);
