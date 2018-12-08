import React from 'react';
import '../css/tweet.css';
import { Row, Col} from 'antd';

import { connect } from 'react-redux';


class Tweet extends React.Component {
    state = { visible: false, text_content: "" }
    render() {
        let date = new Date();
        date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        return (
            <div className="tweet">
                <Row>
                    <Col span={2}>
                        <div>
                            <img src={this.props.url_avatar} className="imageAvatarTweet" alt="avatar" />
                        </div>
                    </Col>
                    <Col span={4}>
                        <span>{date}</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} style={{marginLeft: "20px"}}>
                        <span>{this.props.titulo}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    url_avatar: store.imageReducer.url_avatar,
});

export default connect(mapStateToProps)(Tweet);
