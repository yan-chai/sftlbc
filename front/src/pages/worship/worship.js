import PageLayout from "../../component/layout/layout";
import React, {useState, useEffect} from "react";
import { history, connect } from 'umi';
import {LoadingOutlined,  LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import {Button, Image, Typography, Row, Col, List, Space} from 'antd'
import axios from "axios";

function Worship(props) {
    console.log()
    
    const { Title } = Typography;
    if (props.loading.effects['years/getRemote'] || props.loading.effects['worship_list/getRemote']) {
        return <div><LoadingOutlined /></div>;
      }
    return (
        <PageLayout>
            <div style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center', width: "100%", display: 'flex', height: '30%', position: "relative"}}>
            <Image src="http://localhost:1337/uploads/_02379fbd8a.png?updated_at=2022-07-23T22:31:52.381Z" style={{maxHeight: '100%'}} preview={false} />
            <Title level={1} style={{position: 'absolute', top: "30%"}} key="title">主日崇拜信息与连接</Title>
            <a href="https://www.facebook.com/sftlbc" target="_blank"><Button type="primary" style={{position: 'absolute', left: "30%", top: "70%"}} shape='round' size="large" key={"zoom"}>&nbsp;&nbsp;Zoom&nbsp;&nbsp;</Button></a>
            <a href="https://www.facebook.com/sftlbc" style={{position: 'absolute', top: "70%"}} target="_blank"><Button type="primary" shape='round' size="large" key={"facebook"}>&nbsp;&nbsp;Facebook&nbsp;&nbsp;</Button></a>
            <a href="https://www.youtube.com/channel/UC503mIKA9hNXYgM-TGi8BnQ" target="_blank"><Button type="primary" style={{position: 'absolute', right: "30%", top: "70%"}} shape='round' size="large" key={"youtube"}>&nbsp;&nbsp;Youtube&nbsp;&nbsp;</Button></a>
            </div>
            <div >
            <Row gutter={16} align='middle' justify='center' key={"sunday"}><Title level={1} key="sunday">主日证道</Title></Row>
            <Row gutter={16} align='middle' justify='center' key={"list"}>
            <Col span={2} />
            <Col span={2}>
                <Button type="primary" shape="round" onClick={() => {history.push('/worship')}} key="all">All</Button>
            </Col>
            {props.years[0].data.map((o, i) => {
                return (
                    <Col span={2}>
                        <Button type="primary" shape="round" key={i} onClick={()=>{history.push("/worship?year="+o.attributes.year)}}>{o.attributes.year}</Button>
                    </Col>
                )
            })}
            <Button type="primary" shape="round" key="special" onClick={()=>{history.push("/worship?isSpeacial=true")}}>Special</Button>
            <Col span={2} />
            </Row>
            </div>
            <List
                itemLayout="horizontal"
                size="large"
                loading={props.loading.effects['worship_list/getRemote']}
                pagination={{
                onChange: (page) => {
                    if (history.location.query.isSpeacial == 'true') {
                        history.push("worship?isSpeacial=true&page=" + page)
                    } else if (history.location.query.year != null){
                        history.push("worship?year=" + history.location.query.year + "&page=" + page)
                    } else {
                        history.push("worship?page=" + page)
                    }
                    
                },
                showSizeChanger: false,
                pageSize: 10,
                total: props.worship_list.meta.pagination.total,
                current: props.worship_list.meta.pagination.page
                }}
                dataSource={props.worship_list.data}
                footer={
                <div>
                    <b>ant design</b> footer part
                </div>
                }
                header={
                    <List.Item
                    key={"header"}
                >
                    <Row gutter={16} align='middle' justify='center' style={{width: "100%"}}>
                    <Col span={3} />
                    <Col span={6} align='middle' justify='center'>
                    <Title level={3}>时间/讲员</Title>
                    </Col>
                    <Col span={6} align='middle' justify='center'>
                    <Title level={3}>主题与经文</Title>
                    </Col>
                    <Col span={6} align='middle' justify='center'>
                    <Title level={3}>周报</Title>
                    </Col>
                    <Col span={3} />
                    </Row>
                </List.Item>
                }
                renderItem={(item) => (
                <List.Item
                    key={item.title}
                >
                    <Row gutter={16} align='middle' justify='center' style={{width: "100%"}}>
                    <Col span={3} />
                    <Col span={6} align='middle' justify='center'>
                    <p>{item.attributes.date}</p>
                    <p>{item.attributes.hoster}</p>
                    </Col>
                    <Col span={6} align='middle' justify='center'>
                    <p>{item.attributes.title}</p>
                    <p>{item.attributes.scripture}</p>
                    </Col>
                    <Col span={6} align='middle' justify='center'>
                    <p><a href={item.attributes.weekly_report}><Button type="primary" shape="round" disabled={(item.attributes.weekly_report == null)}>查看周报</Button></a></p>
                    <p><a href={"/video/?id="+item.id}><Button type="primary" shape="round" >观看视频</Button></a></p>
                    </Col>
                    <Col span={3} />
                    </Row>
                </List.Item>
                )}
            />
        </PageLayout>
    )
}

export default connect(({ years, loading, worship_list }) => ({
    years, loading, worship_list
  }))(Worship);