import React from 'react';
import './css/tweet.css';
import { Row, Col } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButtonSalvar } from './actions';


class Tweet extends React.Component {
    state = { visible: false, text_content: "", uuid: "" }

    render() {
        let date = new Date();
        date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        console.log(this.props.uuid);
        return (
            <div className="tweet">
                <Row>
                    <Col span={2}>
                        <div>
                            <img src={this.props.url_avatar || ""} className="imageAvatarTweet" alt="avatar" />
                        </div>
                    </Col>
                    <Col span={4}>
                        <span>{date}</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} style={{ marginLeft: "20px" }}>
                        <span>{this.props.titulo}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    tweets: store.tweetReducer.tweets,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButtonSalvar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
