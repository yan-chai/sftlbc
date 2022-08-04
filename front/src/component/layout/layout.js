import React, { useState } from 'react';
import { Link, history} from 'umi';
import { Typography } from 'antd';
import './layout.less'
import {SearchOutlined} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Input, Carousel} from 'antd';
const { Header, Content, Footer } = Layout;

const items = [
    {
      label: (<Link to={'/'}>首页</Link>),
      key: 'index',
    },
    {
      label: (<Link to={"/about"}>关于我们</Link>),
      key: 'about',
    },
    {
      label: (<Link to={"/worship"}>主日崇拜</Link>),
      key: 'worship',
    },
    {
      label: (<div style={{color: 'rgba(0, 0, 0, 0.65)'}}>教会事工</div>),
      key: 'ministry',
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
        label: (<div style={{color: 'rgba(0, 0, 0, 0.65)'}}>教会资源</div>),
        key: 'resource',
        children: [
          {
            label: (<Link to={'/article'}>每日灵修</Link>),
            key: 'article'
          },
          {
            label: (<Link to={'/form'}>表格下载</Link>),
            key: 'form'
          },
        ],
      },
    {
        label: (<Link to={"activate"}>教会活动</Link>),
        key: 'activate',
    },
    {
        label: (<Link to={"new"}>新人指南</Link>),
        key: 'new',
    },
    {
      label: (<Link to={"/search"}>搜索</Link>),
      key: 'search',
      icon: <SearchOutlined />,
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
            <Link to={"/"}><img src="/favicon.ico" style={{height: '50px'}} /></Link>
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
            <div className="site-layout-content" style={{marginTop: '1%', marginBottom: "1%"}}>
            {props.children}
            </div>
            </Content>
            <Footer
            style={{
                textAlign: 'center',
            }}
            >
            CopyRight ©2022 , San Francisco True Light Baptist Church.  All Rights Reserved.<br/>
            Designed by Lian, Zheng Wei. Created by Haoyu Yan
            </Footer>
        </Layout>
    )
}
export default PageLayout;