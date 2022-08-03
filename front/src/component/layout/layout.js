import React, { useState } from 'react';
import { Link, history} from 'umi';
import { Typography } from 'antd';
import './layout.less'
import { Breadcrumb, Layout, Menu, Input, Carousel} from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

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
      label: (<Link to={"/ministry"} style={{color: 'rgba(0, 0, 0, 0.65)'}}>教会事工</Link>),
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
        label: (<Link to={"/resource"} style={{color: 'rgba(0, 0, 0, 0.65)'}}>教会资源</Link>),
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
        label: (<Link to={"activate"}>教会活动</Link>),
        key: 'activate',
    },
    {
        label: (<Link to={"new"}>新人指南</Link>),
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

function PageLayout(props) {
    
    return (
        <Layout className="layout">
            <Header style={{backgroundColor: "white"}}>
            <div style={{float: "left", verticalAlign: "middle"}}>
            <Link to={"/"}><img src="/favicon.ico" /></Link>
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
                padding: '10px 50px',
                backgroundColor: "white"
            }}
            >
            <div className="site-layout-content" style={{margin: '16px 0'}}>
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