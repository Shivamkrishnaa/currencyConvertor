import React, { Component } from 'react'
import { Uploader } from 'rsuite';
import { Button } from 'rsuite';
import 'rsuite/lib/styles/index.less';
class DmarcXml extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            postUrl: 'http://localhost:4000/api/v1/upload',
            image: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleReupload = this.handleReupload.bind(this);
    }

    handleChange(value) {
    console.log(value);
    this.setState({ value });
    }

    handleUpload() {
        this.uploader.start();
    }
    handleReupload(file) {
        this.uploader.start(file);
    }

    render() {
        const styles = {
            lineHeight: '200px'
        };
        const fileList = [];
        return (
            <div className="contentbar card">
               
                <Uploader
                    draggable
                    accept={[".csv"]}
                    defaultFileList={fileList}
                    action= {this.state.postUrl}
                    onChange={this.handleChange}
                    onUpload={this.up}
                    ref={ref => {
                        this.uploader = ref;
                    }}
                > 
                <div style={styles}>Click or Drag files to this area to upload</div>
                    </Uploader>
                <Button disabled={!this.state.value.length} onClick={this.handleUpload}>
                    Start Upload
        </Button>
            </div>
        )
    }
}

export default DmarcXml
