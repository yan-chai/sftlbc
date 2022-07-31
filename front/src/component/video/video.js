import React from "react";
import ReactMarkdown from "react-markdown";
import './video.less'
import { Col, Row, Typography } from 'antd';
export default function Video (props) {
    function onReady(event) {
        event.target.pauseVideo();
    }
    function youtube_parser(url){
        console.log(url)
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }
    const { Title } = Typography;
    return (
        <>
        <Row style={{justifyContent: 'center', alignContent: "center"}}>
            <Title level={2} >{props.title}</Title>
        </Row>
        <Row >
            <Col span={4}></Col>
            <Col span={16} >
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: "1%",
                    height: 0
                }}
                >
                <iframe
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/` + youtube_parser(props.url)}
                    frameBorder="0"
                />
            </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row>
        <ReactMarkdown children={props.desc} className="line-break" />
        </Row>
        </>
    )
}