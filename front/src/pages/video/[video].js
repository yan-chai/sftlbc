import React, {useState, useEffect} from "react";
import PageLayout from "../../component/layout/layout";
import ReactMarkdown from "react-markdown";
import './video.less'
import { Col, Row, Typography, Button } from 'antd';
import axios from "axios";
import {LoadingOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "umi";

export default function Sunday(props) {
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
    const url = "https://sftlbc-3nphj.ondigitalocean.app/api/worships/"+props.location.query.id;
    const [video, setvideo] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(url).then(res => {
          setvideo(res.data);
          setIsLoading(false);
        }).catch((error) => {
          setIsLoading(false);
          setIsError(true);
          console.log(error);
        })
      }, [url])
    if (isLoading) {
        return <div><LoadingOutlined /></div>;
    }
    return (
        <PageLayout curr={"resource"}>
          <img src='/resource.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}} />
          <Row style={{marginTop: "2%", marginBottom: "2%"}}>
            <Link to={"/resource"}><ArrowLeftOutlined />主日崇拜信息/周報</Link>
          </Row>
        <Row style={{justifyContent: 'center', alignContent: "center"}}>
            <Title level={2} >{video.data.attributes.title}</Title>
        </Row>
        <Row >
            <Col span={24} >
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
                    src={`https://www.youtube.com/embed/` + youtube_parser(video.data.attributes.url)}
                />
            </div>
            </Col>
        </Row>
        <Row>
        <ReactMarkdown children={video.data.attributes.description} className="line-break" />
        </Row>
        <Button href={video.data.attributes.weekly_report} disabled={(video.data.attributes.weekly_report == null)} type="primary">預覽週報</Button>
        </PageLayout>
    )
}