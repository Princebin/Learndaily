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
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

const FormItem = Form.Item;
const {MonthPicker, RangePicker } = DatePicker;
@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class Salary extends PureComponent {
    render(){
        const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;
    const data = [
        {
          year: "1951 年",
          sales: 38
        },
        {
          year: "1952 年",
          sales: 52
        },
        {
          year: "1956 年",
          sales: 61
        },
        {
          year: "1957 年",
          sales: 145
        },
        {
          year: "1958 年",
          sales: 48
        },
        {
          year: "1959 年",
          sales: 38
        },
        {
          year: "1960 年",
          sales: 38
        },
        {
          year: "1962 年",
          sales: 38
        }
      ];
      const cols = {
        sales: {
          tickInterval: 20
        }
      };
        return(
            <PageHeaderWrapper
            title={<FormattedMessage id="app.magement.Salary.title" />}
            content={<FormattedMessage id="app.magement.Salary.description" />}
            wrapperClassName={styles.Home}
          >
            <Card bordered={false}>
              <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
                <Form.Item  label="月份：">
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
                  })(<MonthPicker  placeholder="Select Month" />)}
                </Form.Item>
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
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="year*sales" />
        </Chart>
      </div>
            </Card>
          </PageHeaderWrapper>
        );
    }
}
export default Salary;