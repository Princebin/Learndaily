import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Row,
  Col,
  DatePicker,
  Card,
  Icon,
  message,
  Modal,
  InputNumber,
  Button,
  Form,
  Table,
  Input,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class Debt extends PureComponent {
  render() {
    const { submitting } = this.props;
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
    const columns = [
      {
        title: '姓名',
        dataIndex: 'person',
        key: 'person',
      },
      {
        title: '金额',
        dataIndex: 'account',
        key: 'account',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        ),
      },
    ];

    return (
      <PageHeaderWrapper
        title={<FormattedMessage id="app.magement.weeklyAssets.title" />}
        content={<FormattedMessage id="app.magement.weeklyAssets.description" />}
        wrapperClassName={styles.Home}
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <Form.Item {...formItemLayout} label="名字：">
              {getFieldDecorator('person', {
                rules: [
                  {
                    type: 'person',
                    message: 'The input is not valid name!',
                  },
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <FormItem {...formItemLayout} label={'金额：'}>
              {getFieldDecorator('account')(
                <InputNumber
                  placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                  min={0}
                />
              )}
              <span className="ant-form-text">元</span>
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="form.submit" />
              </Button>
            </FormItem>
          </Form>
          <Table columns={columns} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Debt;
