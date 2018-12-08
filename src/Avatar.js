import React from 'react';
import { Upload, Icon, message } from 'antd';

import { bindActionCreators } from 'redux';
import { uploadAvatar } from './actions';
import { connect } from 'react-redux';


class ImageAvatar extends React.Component {
    state = {
        loading: false,
    };

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload = (file) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
            return;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }

    handleChange = (info) => {
        this.getBase64(info.file.originFileObj, imageUrl => this.props.uploadAvatar(imageUrl) && this.setState({ imageUrl: imageUrl }));
       // this.props.refreshAvatar && this.props.refreshAvatar();
    }

    render() {
        const uploadButton = (
            <div style={{ marginTop: "110px" }}>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload Avatar JPG</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <Upload
                name="avatar"
                showUploadList={false}
                action={""}
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} className="imageAvatar" alt="avatar" /> : uploadButton}
            </Upload>
        );
    }
}

const mapStateToProps = store => ({
    url_avatar: store.imageReducer.url_avatar,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ uploadAvatar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImageAvatar);

