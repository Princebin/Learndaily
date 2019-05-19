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
  Tabs,
} from 'antd';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
  } from "bizcharts";  
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';
const FormItem = Form.Item;
const {MonthPicker, RangePicker } = DatePicker;
@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class Pay extends PureComponent {
    render(){
        const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;
        const TabPane = Tabs.TabPane;
        function callback(key) {
            console.log(key);
          }
          const data = [
            {
              month: "2015-01-01",
              acc: 84.0
            },
            {
              month: "2015-02-01",
              acc: 14.9
            },
            {
              month: "2015-03-01",
              acc: 17.0
            },
            {
              month: "2015-04-01",
              acc: 20.2
            },
            {
              month: "2015-05-01",
              acc: 55.6
            },
            {
              month: "2015-06-01",
              acc: 56.7
            },
            {
              month: "2015-07-01",
              acc: 30.6
            },
            {
              month: "2015-08-01",
              acc: 63.2
            },
            {
              month: "2015-09-01",
              acc: 24.6
            },
            {
              month: "2015-10-01",
              acc: 14.0
            },
            {
              month: "2015-11-01",
              acc: 9.4
            },
            {
              month: "2015-12-01",
              acc: 6.3
            }
          ];
          const cols = {
            month: {
              alias: "月份"
            },
            acc: {
              alias: "积累量"
            }
          };
        return(
            <PageHeaderWrapper
            title={<FormattedMessage id="app.magement.Pay.title" />}
            content={<FormattedMessage id="app.magement.Pay.description" />}
            wrapperClassName={styles.Home}
          >
            <Card bordered={false}>
            <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="交通银行信用卡" key="1">
              <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
              <FormItem  label={'起止日期:'}>
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
                <FormItem label={'金额：'}>
                  {getFieldDecorator('account')(
                    <InputNumber
                      placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                      min={0}
                    />
                  )}
                  <span className="ant-form-text">元</span>
                </FormItem>
                <FormItem >
                  <Button type="primary" htmlType="submit" loading={submitting}>
                    <FormattedMessage id="form.submit" />
                  </Button>
                </FormItem>
              </Form>
              <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis
            name="month"
            title={null}
            tickLine={null}
            line={{
              stroke: "#E6E6E6"
            }}
          />
          <Axis
            name="acc"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="month*acc"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
              shadowBlur: 60,
              shadowOffsetY: 6
            }}
          />
        </Chart>
      </div>
      </TabPane>
      <TabPane tab="兴业银行信用卡" key="2">
              <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
              <FormItem  label={'起止日期:'}>
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
                <FormItem label={'金额：'}>
                  {getFieldDecorator('account')(
                    <InputNumber
                      placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                      min={0}
                    />
                  )}
                  <span className="ant-form-text">元</span>
                </FormItem>
                <FormItem >
                  <Button type="primary" htmlType="submit" loading={submitting}>
                    <FormattedMessage id="form.submit" />
                  </Button>
                </FormItem>
              </Form>
              <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis
            name="month"
            title={null}
            tickLine={null}
            line={{
              stroke: "#E6E6E6"
            }}
          />
          <Axis
            name="acc"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="month*acc"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
              shadowBlur: 60,
              shadowOffsetY: 6
            }}
          />
        </Chart>
      </div>
      </TabPane>
      <TabPane tab="支付宝" key="3">
              <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
              <FormItem  label={'起止日期:'}>
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
                <FormItem label={'金额：'}>
                  {getFieldDecorator('account')(
                    <InputNumber
                      placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                      min={0}
                    />
                  )}
                  <span className="ant-form-text">元</span>
                </FormItem>
                <FormItem >
                  <Button type="primary" htmlType="submit" loading={submitting}>
                    <FormattedMessage id="form.submit" />
                  </Button>
                </FormItem>
              </Form>
              <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis
            name="month"
            title={null}
            tickLine={null}
            line={{
              stroke: "#E6E6E6"
            }}
          />
          <Axis
            name="acc"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="month*acc"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
              shadowBlur: 60,
              shadowOffsetY: 6
            }}
          />
        </Chart>
      </div>
      </TabPane>
      <TabPane tab="微信" key="4">
              <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
              <FormItem  label={'起止日期:'}>
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
                <FormItem label={'金额：'}>
                  {getFieldDecorator('account')(
                    <InputNumber
                      placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                      min={0}
                    />
                  )}
                  <span className="ant-form-text">元</span>
                </FormItem>
                <FormItem >
                  <Button type="primary" htmlType="submit" loading={submitting}>
                    <FormattedMessage id="form.submit" />
                  </Button>
                </FormItem>
              </Form>
              <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis
            name="month"
            title={null}
            tickLine={null}
            line={{
              stroke: "#E6E6E6"
            }}
          />
          <Axis
            name="acc"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="month*acc"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
              shadowBlur: 60,
              shadowOffsetY: 6
            }}
          />
        </Chart>
      </div>
      </TabPane>
      <TabPane tab="其他" key="5">
              <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
              <FormItem  label={'起止日期:'}>
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
                <FormItem label={'金额：'}>
                  {getFieldDecorator('account')(
                    <InputNumber
                      placeholder={formatMessage({ id: 'form.weight.placeholder' })}
                      min={0}
                    />
                  )}
                  <span className="ant-form-text">元</span>
                </FormItem>
                <FormItem >
                  <Button type="primary" htmlType="submit" loading={submitting}>
                    <FormattedMessage id="form.submit" />
                  </Button>
                </FormItem>
              </Form>
              <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis
            name="month"
            title={null}
            tickLine={null}
            line={{
              stroke: "#E6E6E6"
            }}
          />
          <Axis
            name="acc"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="month*acc"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
              shadowBlur: 60,
              shadowOffsetY: 6
            }}
          />
        </Chart>
      </div>
      </TabPane>
      <TabPane tab="总和" key="6">
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis
            name="month"
            title={null}
            tickLine={null}
            line={{
              stroke: "#E6E6E6"
            }}
          />
          <Axis
            name="acc"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="month*acc"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
              shadowBlur: 60,
              shadowOffsetY: 6
            }}
          />
        </Chart>
      </TabPane>
      </Tabs>
            </Card>
          </PageHeaderWrapper>
        );
    }
}
export default Pay;