import PageLayout from "../../component/layout/layout";
import React, {useState, useEffect} from "react";
import { history, connect } from 'umi';
import {LoadingOutlined,  LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import {Button, Image, Typography, Row, Col, List, Space, Menu} from 'antd'

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
  function youtube_parser(url){
    console.log(url)
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
function Worship(props) {
    const { Title } = Typography;
    if (props.loading.effects['years/getRemote'] || props.loading.effects['worship_list/getRemote']) {
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
                    selectedKeys={'resource'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>主日崇拜信息/週報</p>
            <Row style={{marginBottom: '3%'}}>
                類別： 
                <Col span={2}>
                    <Button type="primary" href='/resource'>全部</Button>
                </Col>
                {props.years[0].data.map((o, i) => {
                return (
                    <Col span={2}>
                        <Button type="primary" key={i} href={"/resource?year="+o.attributes.year}>{o.attributes.year}</Button>
                    </Col>
                )
            })}
            <Button type="primary" href="/worship?isSpeacial=true">特别聚会</Button>
            </Row>
            
            <List
                itemLayout="horizontal"
                size="large"
                bordered="true"
                loading={props.loading.effects['worship_list/getRemote']}
                pagination={{
                onChange: (page) => {
                    if (history.location.query.isSpeacial == 'true') {
                        history.push("resource?isSpeacial=true&page=" + page)
                    } else if (history.location.query.year != null){
                        history.push("resource?year=" + history.location.query.year + "&page=" + page)
                    } else {
                        history.push("resource?page=" + page)
                    }
                },
                showSizeChanger: false,
                pageSize: 10,
                total: props.worship_list.meta.pagination.total,
                current: props.worship_list.meta.pagination.page
                }}
                dataSource={props.worship_list.data}
                header={
                    <List.Item
                    key={"header"}
                >
                    <Row gutter={24} align='middle' justify='center' style={{width: "100%"}}>
                    <Col span={8} align='middle' justify='center'>
                    <Title level={3}>時間/講員</Title>
                    </Col>
                    <Col span={8} align='middle' justify='center'>
                    <Title level={3}>主題經文</Title>
                    </Col>
                    <Col span={8} align='middle' justify='center'>
                    <Title level={3}>視頻 & 週報</Title>
                    </Col>
                    </Row>
                </List.Item>
                }
                renderItem={(item) => (
                <List.Item
                    key={item.title}
                >
                    <Row gutter={24} align='middle' justify='center' style={{width: "100%"}}>
                    <Col span={8} align='middle' justify='center'>
                    <Row>
                        <Col span={12}>
                        <img src={"https://img.youtube.com/vi/"+ youtube_parser(item.attributes.url)+ "/0.jpg"} style={{borderRadius: "50%", width: "88px", height: "88px", overflow: "hidden", objectFit: "cover"}} />
                        </Col>
                        <Col span={12}>
                        <p>{item.attributes.date}</p>
                        <p>{item.attributes.hoster}</p>
                        </Col>
                        
                    </Row>
                    </Col>
                    <Col span={8} align='middle' justify='center'>
                    <p>{item.attributes.title}</p>
                    <p>{item.attributes.scripture}</p>
                    </Col>
                    <Col span={8} align='middle' justify='center'>
                    <p><a href={"/video/?id="+item.id}><Button type="primary" >觀看視頻</Button></a></p>
                    <p><a href={item.attributes.weekly_report}><Button disabled={(item.attributes.weekly_report == null)}>預覽周報</Button></a></p>
                    </Col>
                    </Row>
                </List.Item>
                )}
            />
            </Col>
            </Row>
        </PageLayout>
    )
}

export default connect(({ years, loading, worship_list }) => ({
    years, loading, worship_list
  }))(Worship);