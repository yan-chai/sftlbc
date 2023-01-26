import React, { useState } from 'react';
import { Link, history} from 'umi';
import {Typography, Card, Col, Row } from 'antd';
import './layout.less'
import {FacebookFilled, YoutubeFilled, UpCircleFilled} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Input, Carousel} from 'antd';
const { Header, Content, Footer } = Layout;

const items = [
    {
      label: (<Link to={'/'}>首頁</Link>),
      key: 'index',
    },
    {
      label: (<Link to={"/about"}>教會事工</Link>),
      key: 'about',
    },
    {
      label: (<Link to={"/worship"}>活動見證</Link>),
      key: 'worship',
    },
    {
      label: (<div style={{color: 'rgba(0, 0, 0, 0.65)'}}>新人指南</div>),
      key: 'ministry',
    },
    {
        label: (<div style={{color: 'rgba(0, 0, 0, 0.65)'}}>教會資源</div>),
        key: 'resource',
      },
    {
        label: (<Link to={"/about"}>關於真光</Link>),
        key: 'activate',
    },
    {
      label: (<div style={{color: 'rgba(0, 0, 0, 0.65)'}}><img src="/language.svg" /></div>),
      key: 'ministry',
      children: [
        {
          type: 'group',
          label: 'English',
        },
        {
          type: 'group',
          label: '简体中文',
        },
      ],
    },
  ];

function onSearch(value) {
    console.log(value);
}

function PageLayout(props) {
    
    return (
        <Layout className="layout">
            <Header style={{backgroundColor: "white"}}>
            <div style={{float: "left", verticalAlign: "middle", marginLeft:'2%'}}>
            <Link to={"/"} style={{color: "black", fontSize: "large"}}><img src="/favicon.svg" style={{height: '50px'}} />&nbsp;&nbsp;真光浸信會</Link>
            </div>
            <Menu
              style={{justifyContent: 'right', alignContent: "center"}}
                mode="horizontal"
                items={items}
            />
            <div style={{float: 'right', verticalAlign: "middle"}}>
                
            </div>
            
            </Header>
            <Content
            style={{
              backgroundColor: "white"
            }}
            >
            <div className="site-layout-content" style={{marginTop: '1%', marginBottom: "1%", marginLeft: "7%", marginRight: "7%"}}>
            {props.children}
            </div>
            </Content>
            <Footer
            style={{
                textAlign: 'center',
                backgroundColor: "#873800",
                color: "white"
            }}
            >
            <Row style={{opacity: "75%"}}>
              <Col span={8}><Link to={"/"} style={{color: "#FFFFFF", fontSize: "large"}}><img src="/favicon.svg" style={{height: '50px'}} />&nbsp;&nbsp;真光浸信會</Link></Col>
              <Col span={6}>
                <Row> 4250 Judah St.</Row>
                <Row> San Francisco, CA 94122</Row>
                <Row> 415-681-7687</Row>
                <Row> info@sftlbc.org</Row>
              </Col>
              <Col span={4}>
                <Row> 教會事工</Row>
                <Row> 活動見證</Row>
                <Row> 新人指引</Row>
                <Row> 教會資源</Row>
                <Row> 關於真光</Row>
              </Col>
              <Col span={4}>
                <Row> Facebook&nbsp;&nbsp;<FacebookFilled style={{fontSize: "24px"}} /></Row>
                <Row> YouTube&nbsp;&nbsp;&nbsp;<YoutubeFilled style={{fontSize: "24px"}} /></Row>
              </Col>
              <Col span={2}>
                <Row> <UpCircleFilled style={{fontSize: "300%"}} onClick={()=>{scrollTo(0,0);}} /></Row>
              </Col>
            </Row>
            <Row style={{marginTop: "2%"}}> 
              <Col span={14}></Col>
              <p style={{opacity: "60%"}}>© 2022 All rights reserved</p>
            </Row>
            
            </Footer>
        </Layout>
    )
}
export default PageLayout;