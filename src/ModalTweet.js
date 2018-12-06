import React from 'react';
import { Modal, Button, Input } from 'antd';

const { TextArea } = Input;

export default class ModalTweet extends React.Component {
    state = { visible: false, text_content: "" }

    handleChange = (value) => {
        //if (this.state.text_content.length < 280) {
            this.setState({ text_content: value });
        //}
    }

    salvarTweet = () => {
        this.setState({visible: false});
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