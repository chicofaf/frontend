import React from 'react';
import { Modal, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {clickButtonSalvar} from './actions';
import Tweet from './Tweet';

const { TextArea } = Input;

class ModalTweet extends React.Component {
    state = { visible: false, text_content: "" }

    
    handleChange = (value) => {
        //if (this.state.text_content.length < 280) {
            this.setState({ text_content: value });
        //}
    }

    generateUUID = () => {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };

    salvarTweet = () => {
        const {
            clickButtonSalvar,
            tweets
        } = this.props;

        tweets.push(<Tweet titulo={this.state.text_content} key={this.generateUUID()}/>);
        clickButtonSalvar({tweets: tweets, contador_tweets: this.props.contador_tweets +1}); 
        this.props.updateTweets && this.props.updateTweets();
        this.setState({text_content: "",visible: false});

    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({ visible: true })} type="primary">Tweet</Button>

                <Modal
                    style={{ zIndex: "10000" }}
                    title="Adicionar Tweet"
                    visible={this.state.visible}
                    onOk={ () => this.salvarTweet()}
                    onCancel={() => this.setState({visible: false})}
                >
                    <TextArea rows={4} value={this.state.text_content} onChange={(e) => this.handleChange(e.target.value)} />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    tweets: store.tweetReducer.tweets,
    contador_tweets: store.tweetReducer.contador_tweets
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButtonSalvar }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(ModalTweet);