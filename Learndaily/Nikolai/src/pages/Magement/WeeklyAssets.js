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
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class WeeklyAssets extends PureComponent {
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
        title: '日期',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '现金',
        dataIndex: 'cash',
        key: 'cash',
      },
      {
        title: '银行卡',
        dataIndex: 'bankcard',
        key: 'bankcard',
      },
      {
        title: '支付宝',
        key: 'alipay',
        dataIndex: 'alipay ',
      },
      {
        title: '理财通',
        key: 'caitong',
        dataIndex: 'caitong',
      },
      {
        title: '基金',
        key: 'fund',
        dataIndex: 'fund',
      },
      {
        title: '股票',
        key: 'shares',
        dataIndex: 'shares',
      },
      {
        title: '其他理财',
        key: 'Otherfinancialmanagement',
        dataIndex: 'Otherfinancialmanagement',
      },
      {
        title: '其他',
        key: 'Other',
        dataIndex: 'Other',
      },
      {
        title: '总和',
        key: 'total',
        dataIndex: 'total',
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
            <FormItem {...formItemLayout} label={'起止日期:'}>
              {getFieldDecorator('date', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'validation.date.required' }),
                  },
                ],
              })(
                <RangePicker
                  style={{ width: '100%' }}
                  placeholder={[
                    formatMessage({ id: 'form.date.placeholder.start' }),
                    formatMessage({ id: 'form.date.placeholder.end' }),
                  ]}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label={'现金'}>
              {getFieldDecorator('cash')(
                <InputNumber
                  placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                  min={0}
                />
              )}
              <span className="ant-form-text">元</span>
            </FormItem>
            <FormItem {...formItemLayout} label={'银行卡'}>
              {getFieldDecorator('bankcard')(
                <InputNumber
                  placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                  min={0}
                />
              )}
              <span className="ant-form-text">元</span>
            </FormItem>
            <FormItem {...formItemLayout} label={'支付宝'}>
              {getFieldDecorator('alipay')(
                <InputNumber
                  placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                  min={0}
                />
              )}
              <span className="ant-form-text">元</span>
            </FormItem>
            <FormItem {...formItemLayout} label={'理财通'}>
              {getFieldDecorator('caitong')(
                <InputNumber
                  placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                  min={0}
                />
              )}
              <span className="ant-form-text">元</span>
            </FormItem>
            <FormItem {...formItemLayout} label={'基金'}>
              {getFieldDecorator('fund')(
                <InputNumber
                  placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                  min={0}
                />
              )}
              <span className="ant-form-text">元</span>
            </FormItem>
            <FormItem {...formItemLayout} label={'股票'}>
              {getFieldDecorator('shares')(
                <InputNumber
                  placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                  min={0}
                />
              )}
              <span className="ant-form-text">元</span>
            </FormItem>
            <FormItem {...formItemLayout} label={'其他理财'}>
              {getFieldDecorator('Otherfinancialmanagement')(
                <InputNumber
                  placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                  min={0}
                />
              )}
              <span className="ant-form-text">元</span>
            </FormItem>
            <FormItem {...formItemLayout} label={'其他'}>
              {getFieldDecorator('Other')(
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
          <div>每周资金统计表<a href="">(统计图)</a></div>
          
          <Table columns={columns} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default WeeklyAssets;
