import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Calendar, Input, Button, Card, Upload, Icon, message, Modal, Select } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
class Home extends PureComponent {
    render(){
        return(
            <PageHeaderWrapper
        title={<FormattedMessage id="app.forms.basic.title" />}
        content={<FormattedMessage id="app.forms.basic.description" />}
      >
            <Card bordered={false}>
            <Row type="flex" justify="space-around" align="middle">
      <Col span={4}>
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false}  />
  </div>,
      </Col>
      <Col span={12}>
      <Row type="flex" justify="space-around" align="middle">
      <Col span={6} align="right">
        总数：
      </Col>
      <Col span={6} align="left">
        <div>50000</div>
      </Col>
    </Row>
      </Col>
    </Row>
            </Card>
            </PageHeaderWrapper>
        )
    }

}

export default Home;