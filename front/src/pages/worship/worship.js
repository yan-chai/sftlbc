import PageLayout from "../../component/layout/layout";
import React, {useState, useEffect} from "react";
import { history } from 'umi';
import {LoadingOutlined,  LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import {Button, Image, Typography, Row, Col, List, Space} from 'antd'
import axios from "axios";

export default function Worship(props) {
    let year = 0;
    let isSpeacial = false;
    let page = 1;
    const size = 10;
    const [isError, setIsError] = useState(false);
    const[buttons, setButtons] = useState(null);
    const [buttonIsLoading, setIsButtonLoading] = useState(true);
    const[info, setInfo] = useState(null);
    const [isInfoLoading, setIsInfoLoading] = useState(true);
    const url1 = "http://localhost:1337/api/year-filters?fields=year&sort[0]=year:desc";
    if (props.location.query.year != null) {
        year = props.location.query.year;
    }
    if (props.location.query.isSpeacial == 'true') {
        isSpeacial = true;
    }
    if (props.location.query.page != null) {
        page = props.location.query.page;
    }
    let url2 = 'http://localhost:1337/api/worships?fields=title,description,date,weekly_report,scripture,hoster&sort[0]=date:desc&pagination[pageSize]=10';
    if (year != 0) {
        //url2 = 'http://localhost:1337/api/worships?fields=title,description,date,weekly_report,scripture,hoster&filters[date][$gte]=' + year + '-01-01&filters[date][$lte]=' + year + '-12-31&pagination[page]=1&pagination[pageSize]=100&sort[0]=date:desc';
        url2 = url2 + '&filters[date][$gte]=' + year + '-01-01&filters[date][$lte]=' + year + '-12-31';
    }
    if (isSpeacial == true) {
        url2 = url2 + '&filters[isSpecial][$eq]=true'
    }
    if (page != 1) {
        url2 =  url2 + '&pagination[page]=' + page + '&sort[0]=date:desc';
    }
    useEffect(() => {
        axios.get(url1).then(res => {
          setButtons(res.data);
          setIsButtonLoading(false);
        }).catch((error) => {
            setIsButtonLoading(false);
          setIsError(true);
          console.log(error);
        })
        axios.get(url2).then(res => {
            setInfo(res.data);
            setIsInfoLoading(false);
          }).catch((error) => {
            setIsInfoLoading(false);
            setIsError(true);
            console.log(error);
          })
    }, [url1, url2])
    
    const { Title } = Typography;
    if (buttonIsLoading || isInfoLoading) {
        return <div><LoadingOutlined /></div>;
      }
    return (
        <PageLayout>
            <div style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center', width: "100%", display: 'flex', height: '30%', position: "relative"}}>
            <Image src="http://localhost:1337/uploads/_02379fbd8a.png?updated_at=2022-07-23T22:31:52.381Z" style={{maxHeight: '100%'}} preview={false} />
            <Title level={1} style={{position: 'absolute', top: "30%"}} key="title">主日崇拜信息与连接</Title>
            <Button type="primary" style={{position: 'absolute', left: "30%", top: "70%"}} shape='round' size="large" key={"zoom"}>&nbsp;&nbsp;Zoom&nbsp;&nbsp;</Button>
            <Button type="primary" style={{position: 'absolute', top: "70%"}} shape='round' size="large" key={"facebook"}>&nbsp;&nbsp;Facebook&nbsp;&nbsp;</Button>
            <Button type="primary" style={{position: 'absolute', right: "30%", top: "70%"}} shape='round' size="large" key={"youtube"}>&nbsp;&nbsp;Youtube&nbsp;&nbsp;</Button>
            </div>
            <div >
            <Row gutter={16} align='middle' justify='center' key={"sunday"}><Title level={1} key="sunday">主日证道</Title></Row>
            <Row gutter={16} align='middle' justify='center' key={"list"}>
            <Col span={2} />
            <Col span={2}>
                <Button type="primary" shape="round" onClick={() => {history.push('/worship')}} key="all">All</Button>
            </Col>
            {buttons.data.map((o, i) => {
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
                pagination={{
                onChange: (page) => {
                    history.push("worship?year=" + year + "&isSpeacial=" + isSpeacial + "&page=" + page)
                },
                showSizeChanger: false,
                pageSize: 10,
                total: info.meta.pagination.total,
                current: info.meta.pagination.page
                }}
                dataSource={info.data}
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