import PageLayout from "../../component/layout/layout";
import React, {useState, useEffect} from "react";
import { history, connect } from 'umi';
import {LoadingOutlined, DownOutlined } from "@ant-design/icons";
import {Button, Image, Typography, Row, Col, List, Space, Menu, DatePicker} from 'antd'

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('主日崇拜信息/週報', 'resource'),
    getItem('每日靈修', 'dailybread'),
    getItem('其他靈修資源', 'other')
  ];
const onClick = (e) => {
    console.log('click', e);
    history.push(e.key)
  };
function onChange(value, dateString) {
    console.log('Formatted Selected Time: ', dateString);
    history.push('dailybread?date1=' + dateString[0] + '&date2=' + dateString[1])
}
function DailyBread(props) {
    const { RangePicker } = DatePicker;
    if (false) {
        return <div><LoadingOutlined /></div>;
      }
    return (
        <PageLayout curr={"resource"}>
            <img src='/resource.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}} />
            <Row style={{marginTop: "5%"}}>
                <Col span={6}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: "80%"
                    }}
                    mode="inline"
                    selectedKeys={'dailybread'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>每日靈修</p>
            <Row style={{marginBottom: '3%'}}>
            <Space direction="vertical" size={12}>
                <RangePicker onChange={onChange}/>
            </Space>
            </Row>
            </Col>
            </Row>
        </PageLayout>
    )
}

export default connect(({ loading }) => ({
    loading
  }))(DailyBread);