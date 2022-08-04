import React, { useState, useRef, useEffect, useSelector} from 'react';
import {history, connect} from 'umi';
import PageLayout from '../../component/layout/layout'
import {Typography, Card, Col, Row } from 'antd';
import {LoadingOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.less'

function Index(props) {

  const { Title } = Typography;
  const { Meta } = Card;

  if (props.loading.effects['card/getRemote'] || props.loading.effects['slider/getRemote']) {
    return <div><LoadingOutlined /></div>;
  }
    return (
        <PageLayout>
          <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop useKeyboardArrows>
          {props.slider[0].data.map((o, i) => {
            return (
              <div>
                <a href={o.attributes.url} style={{height: '100%'}}>
                <div><img src={o.attributes.pic} alt="" key={i} /></div>
                </a>
              </div>
                );
              })}
          </Carousel>
          <Title level={2} style={{padding: '30px', paddingLeft: '10%', paddingRight: "10%"}}>
            每個主日 11: 00 AM 我們將會在教會舉行實體聚會。同时在Zoom和YouTube 直播，請大家在 YouTube 上 subscribe( 訂閱)“ S.F. True Light Baptist Church 真光浸信會” 以便參與敬拜。
          </Title>
          <div className="site-card-wrapper">
              {props.card[0].map((obj, i) => {
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
export default connect(({ slider, loading, card }) => ({
  slider, loading, card
}))(Index);