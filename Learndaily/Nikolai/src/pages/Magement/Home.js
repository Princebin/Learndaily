import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Calendar, Card, Upload, Icon, message, Modal } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

class Home extends PureComponent {
  render() {
    return (
      <PageHeaderWrapper
        title={<FormattedMessage id="app.magement.home.title" />}
        content={<FormattedMessage id="app.magement.home.description" />}
        wrapperClassName={styles.Home}
      >
        <Card bordered={false}>
          <Row type="flex" justify="space-around" align="middle">
            <Col className={styles.Home} align="left">
              欢迎你，Binnie
            </Col>
          </Row>
          <Row type="flex" justify="space-around" align="top">
            <Col span={4}>
              <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false} />
              </div>
              ,
            </Col>
            <Col span={12}>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={8} align="right" className={styles.Home}>
                  现有资金：
                </Col>
                <Col span={8} className={styles.Home}>
                  <div align="left">5000000</div>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={8} align="right" className={styles.Home}>
                  现有债务：
                </Col>
                <Col span={8} className={styles.Home}>
                  <div>50000</div>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={8} align="right" className={styles.Home}>
                  本月工作收入：
                </Col>
                <Col span={8} align="left" className={styles.Home}>
                  <div>50000</div>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={8} align="right" className={styles.Home}>
                  本月其他收入：
                </Col>
                <Col span={8} align="left" className={styles.Home}>
                  <div>50000</div>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={8} align="right" className={styles.Home}>
                  年收入：
                </Col>
                <Col span={8} align="left" className={styles.Home}>
                  <div>50000</div>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={8} align="right" className={styles.Home}>
                  本月支出：
                </Col>
                <Col span={8} align="left" className={styles.Home}>
                  <div>50000</div>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={8} align="right" className={styles.Home}>
                  年支出：
                </Col>
                <Col span={8} align="left" className={styles.Home}>
                  <div>50000</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Home;
