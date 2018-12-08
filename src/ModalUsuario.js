import React from 'react';
import { Modal, Button, Input, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editaUsuario } from './actions';

class ModalUsuario extends React.Component {
    state = { visible: false, text_content: "" }


    handleChange = (value) => {
        this.setState({ text_content: value });
    }

    salvarUsuario = () => {
        const {
            editaUsuario,
        } = this.props;

        editaUsuario(this.state.text_content);
        this.props.refreshUsuario && this.props.refreshUsuario();
        this.setState({ text_content: "", visible: false });
    }

    render() {
        return (
            <div>
                <Icon type="edit" onClick={() => this.setState({ visible: true })} />

                <Modal
                    style={{ zIndex: "10000" }}
                    title="Edita Nome de Usuário"
                    visible={this.state.visible}
                    onOk={() => this.salvarUsuario()}
                    onCancel={() => this.setState({ visible: false })}
                >
                    <Input rows={4} value={this.state.text_content} onChange={(e) => this.handleChange(e.target.value)} />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    nome_usuario: store.usuarioReducer.nome_usuario
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ editaUsuario }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalUsuario);