import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload, } from 'antd';




const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const FileUploader = () => {

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Upload your test data here" valuePropName="file" getValueFromEvent={normFile} method="post">
          <Upload action="http://193.124.112.59:50052/irt" listType="picture-card">
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
    </>
  );
};

export default FileUploader;