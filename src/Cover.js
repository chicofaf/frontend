import React from 'react';
import { Upload, Icon, message } from 'antd';

import { bindActionCreators } from 'redux';
import { uploadCover } from './actions';
import { connect } from 'react-redux';


class ImageCover extends React.Component {
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
        
        return isJPG;
    }

    handleChange = (info) => {
        this.getBase64(info.file.originFileObj, imageUrl => this.props.uploadCover(imageUrl) && this.setState({ imageUrl: imageUrl }));
       // this.props.refreshAvatar && this.props.refreshAvatar();
    }

    render() {
        const uploadButton = (
            <div style={{ marginTop: "110px" }}>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload Cover JPG</div>
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
                {imageUrl ? <img src={imageUrl} className="imageCover" alt="avatar" /> : uploadButton}
            </Upload>
        );
    }
}

const mapStateToProps = store => ({
    url_cover: store.imageReducer.url_cover,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ uploadCover }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImageCover);

