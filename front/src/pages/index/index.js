import React, { useState, useRef, useEffect, useSelector} from 'react';
import { Link } from 'umi';
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

  const url1 = "http://localhost:1337/api/slide-banners?fields=url,description,pic";
  const url2 = "http://localhost:1337/api/card-banners?fields=cover,title,description,url";
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
      setCard(res.data);
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
          >
              {banner.data.map((o, i) => {
                return (
                  <div key={i}>
                  <h3 style={contentStyle} key={i}>
                    <div className="img" key={i}>
                      <a href={"http://"+o.attributes.url} key={i}>
                        <img className="banner_pic" src={o.attributes.pic} alt="" key={i}/>
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
            <Row gutter={16} align='middle' justify='center'>
              {card.data.map((o, i) => {
                return (
                  <Col span={8} >
                    <a href={"http://"+o.attributes.url}>
                    <Card
                      hoverable
                      style={{ width: 360, position: 'relative', left: '15%'}}
                      cover={<img alt="cover" src={o.attributes.cover} />}
                    >
                      <Meta title={o.attributes.title} description={o.attributes.description} />
                    </Card>
                    </a>
                  </Col>
                )
              })}
            </Row>
          </div>
        </PageLayout>
    )
}
export default Index;