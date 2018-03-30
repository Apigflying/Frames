import React, {Component} from 'react';
import {Layout, Row, Col, Divider,Icon,Dropdown,Button} from 'antd';
import Nav from './nav';
class MainHeader extends Component {
  render() {
    return (
      <Layout.Header>
        <Row>
          <Col md={6} xs={24}>
            <h1 id="logo">cNode</h1>
          </Col>
          <Col md={18} xs={0}>
            <Divider type="vertical" className="headerDivider"/>
            <Nav mode="horizontal" id="nav"/>
          </Col>
          <Col md={0} xs={24} className="xsNav">
            <Dropdown overlay={
              <Nav mode="vertical" id="nav"/>
            }
            tirgger={['click','touchend']}
            >
              <Button>
                <Icon type="bars" />
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}
export default MainHeader;