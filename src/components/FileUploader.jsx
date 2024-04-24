import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import React from 'react';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FileUploader = ({ onFileUpload }) => {
  const props = {
    name: 'file',
    action: 'http://193.124.112.59:50052/irt',
    listType: 'picture-card',

    onChange(info) {
      if (info.file.status === 'done') {
        // Handle response from API
        console.log(info.file.response);
        onFileUpload(info.file.response); // Passing response data to the parent component
      }
    },
  };

  return (
    <Form
      labelCol={{
        span: 14,
      }}
      wrapperCol={{
        span: 20,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Upload your test data here" valuePropName="file" getValueFromEvent={normFile} method="post">
        <Upload {...props}>
          <button
            style={{
              border: 0,
              background: 'none',
            }}
            type="button"
          >
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </button>
        </Upload>
      </Form.Item>
    </Form>
  );
};

export default FileUploader;