import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Typography } from 'antd';
import {layout} from '../../component/layout'
import './index.less'
import { Breadcrumb, Layout, Menu, Input, Carousel} from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const items = [
    {
      label: (<a href="/about">关于我们</a>),
      key: 'about',
    },
    {
      label: (<a href="/worship">主日崇拜</a>),
      key: 'worship',
    },
    {
      label: (<a href="/ministry" style={{color: 'rgba(0, 0, 0, 0.65)'}}>教会事工</a>),
      key: 'ministry',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
      ],
    },
    {
        label: (<a href="/resource" style={{color: 'rgba(0, 0, 0, 0.65)'}}>教会资源</a>),
        key: 'resource',
        children: [
          {
            type: 'group',
            label: 'Item 2',
            children: [
              {
                label: 'Option 3',
                key: 'setting:3',
              },
              {
                label: 'Option 4',
                key: 'setting:4',
              },
            ],
          },
        ],
      },
    {
        label: (<a href="activate">教会活动</a>),
        key: 'activate',
    },
    {
        label: (<a href="new">新人指南</a>),
        key: 'new',
    },
    {
        label: (<Search placeholder="input search text" onSearch={onSearch} enterButton style={{width: '200px', verticalAlign: "middle"}}/>),
        key: 'search',
    },
  ];

function onSearch(value) {
    console.log(value);
}

function Index() {
    
    return (
        <Layout className="layout">
            <Header style={{backgroundColor: "white"}}>
            <div style={{float: "left", verticalAlign: "middle"}}>
            <img src="favicon.ico" />
            </div>
            <Menu
                style={{backgroundColor: "white", float: 'right'}}
                mode="horizontal"
                items={items}
            />
            <div style={{float: 'right', verticalAlign: "middle"}}>
                
            </div>
            
            </Header>
            <Content
            style={{
                padding: '0 50px',
            }}
            >
            <div className="site-layout-content" style={{margin: '16px 0'}}>
            content
            </div>
            </Content>
            <Footer
            style={{
                textAlign: 'center',
            }}
            >
            CopyRight ©2022 , San Francisco True Light Baptist Church.  All Rights Reserved.<br/>
            Created by Haoyu Yan
            </Footer>
        </Layout>
    )
}
export default Index;