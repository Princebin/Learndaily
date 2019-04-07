import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Form, Input, Button, Card, Upload, Icon, message, Modal, Select } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
//import styles from './style.less';

const FormItem = Form.Item;
const { TextArea } = Input;
const Search = Input.Search;
const Dragger = Upload.Dragger;
const Option = Select.Option;

const CreateForm = Form.create()(props => {
  const { modalVisible, form, handleAdd, handleModalVisible, handleSearch } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };

  return (
    <Modal
      destroyOnClose
      title="选择设备的型号和安卓版本号"
      visible={modalVisible}
      width="750px"
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <Form onSubmit={() => handleModalVisible()} layout="inline">
        <Row gutter={16}>
          <Col span={6}>
            <FormItem label="设备型号:">
              <Input placeholder="请输入设备型号（多个以逗号隔开）！" />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="安卓版本号:" style={{ width: '100%' }}>
              <Select placeholder="请选择" mode="multiple">
                <Option value="0">Android 6.0</Option>
                <Option value="1">Android 7.0</Option>
                <Option value="1">Android 7.1</Option>
                <Option value="1">Android 8.0</Option>
                <Option value="1">Android 8.1</Option>
                <Option value="1">Android 9.0</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
});

@connect(({ loading }) => ({
  submitting: loading.effects['pack/submitRegularForm'],
}))
@Form.create()
class Foundations extends PureComponent {
  state = {
    modalVisible: false,
  };

  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleAdd = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'rule/add',
      payload: {
        desc: fields.desc,
      },
    });

    message.success('添加成功');
    this.handleModalVisible();
  };

  handleSearch = e => {
    const i = 0;
  };

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'pack/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const { modalVisible } = this.state;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
      handleSearch: this.handleSearch,
    };
    return (
      <PageHeaderWrapper
        title={<FormattedMessage id="app.forms.basic.title" />}
        content={<FormattedMessage id="app.forms.basic.description" />}
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="手机设备：">
              {getFieldDecorator('devices', {})(
                <Search
                  placeholder="选择手机设备"
                  disable="true"
                  onSearch={() => this.handleModalVisible(true)}
                  style={{ width: 200 }}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="签名包：">
              {getFieldDecorator('mdmsys', {})(
                <Dragger>
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company
                    data or other band files
                  </p>
                </Dragger>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="MDM安装包：">
              {getFieldDecorator('mdm', {})(
                <Dragger>
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company
                    data or other band files
                  </p>
                </Dragger>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="两把刷子版本号：">
              {getFieldDecorator('version', {})(<Input placeholder="输入两把刷子版本号" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="两把刷子版本号描述：">
              {getFieldDecorator('versiondes', {})(<Input placeholder="输入两把刷子版本号描述" />)}
            </FormItem>

            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                生成安装包
              </Button>
            </FormItem>
          </Form>
        </Card>
        <CreateForm {...parentMethods} modalVisible={modalVisible} />
      </PageHeaderWrapper>
    );
  }
}

export default Foundations;
