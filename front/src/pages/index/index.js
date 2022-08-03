import React, { useState, useRef, useEffect, useSelector} from 'react';
import {history} from 'umi';
import PageLayout from '../../component/layout/layout'
import { Carousel, Button, Typography, Card, Col, Row } from 'antd';
import { LeftOutlined, RightOutlined, LoadingOutlined } from "@ant-design/icons";
import './index.less'
import axios from 'axios'

function Index() {
  const contentStyle = {
    height: "400px",
    lineHeight: "400px",
    textAlign: "center",
    background: "#364d79",
  };


  const carouselEL = useRef(null);
  const { Title } = Typography;
  const { Meta } = Card;

  const url1 = "http://localhost:8000/api/slide-banners?fields=url,description,pic";
  const url2 = "http://localhost:8000/api/card-banners?fields=cover,title,description,url&sort[0]=id";
  const [banner, setBanner] = useState(null);
  const [card, setCard] = useState(null);
  const [isSilderLoading, setIsSilderLoading] = useState(true);
  const [isCardLoading, setIsCardLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios.get(url1).then(res => {
      setBanner(res.data);
      setIsSilderLoading(false);
    }).catch((error) => {
      setIsSilderLoading(false);
      setIsError(true);
      console.log(error);
    })
    axios.get(url2).then(res => {
      var result = [];
      for(var i=0,len=res.data.data.length;i<len;i+=3){
        result.push(res.data.data.slice(i,i+3));
      }
      setCard(result);
      setIsCardLoading(false);
    }).catch((error) => {
      setIsCardLoading(false);
      setIsError(true);
      console.log(error);
    })
  }, [url1, url2])
  if (isSilderLoading || isCardLoading) {
    return <div><LoadingOutlined /></div>;
  }
    return (
        <PageLayout>
          <Button
            className="leftButton"
            style={{ left: '10%' }}
            onClick={() => {
              carouselEL.current.prev();
            }}
            icon={<LeftOutlined />}
          ></Button>
          <Button
            className="rightButton"
            style={{ right: '10%' }}
            onClick={() => {
              carouselEL.current.next();
            }}
            icon={<RightOutlined />}
          ></Button>
          <Carousel
            autoplay
            ref={carouselEL}
            adaptiveHeight={true}
            slidesToShow={2}
            slidesToScroll={1}
            initialSlide={0}
            responsive={[
              {
                breakpoint: '1600px',
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]}
          >
              {banner.data.map((o, i) => {
                return (
                  <div key={i}>
                  <h3 style={contentStyle} key={i}>
                    <div className="img" key={i}>
                      <a href={o.attributes.url}>
                        <img className="banner_pic" src={o.attributes.pic} alt="" key={i} style={{objectFit: 'cover'}} />
                      </a>
                    </div>
                  </h3>
                  </div>
                );
              })}
          </Carousel>
          <Title level={2} style={{padding: '30px', paddingLeft: '10%', paddingRight: "10%"}}>
            每個主日 11: 00 AM 我們將會在教會舉行實體聚會。同时在Zoom和YouTube 直播，請大家在 YouTube 上 subscribe( 訂閱)“ S.F. True Light Baptist Church 真光浸信會” 以便參與敬拜。
          </Title>
          <div className="site-card-wrapper">
              {card.map((obj, i) => {
                return (
                  <Row gutter={16} style={{marginTop: '3%', justifyContent: 'center', alignContent: "center"}}>
                  {obj.map((o, j) => {
                    return (
                      <Col span={8}>
                        <Card
                          hoverable
                          style={{ position: 'relative', height: "100%", width: "90%", left: "5%"}}
                          cover={<img alt="cover" src={o.attributes.cover} />}
                          onClick={() => {history.push(o.attributes.url)}}
                        >
                          <Meta title={o.attributes.title} description={o.attributes.description} />
                        </Card>
                      </Col>
                    )
                  })}
                  </Row>
                )
              })}
          </div>
        </PageLayout>
    )
}
export default Index;