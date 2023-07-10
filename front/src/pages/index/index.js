import React, { useState, useRef, useEffect, useSelector} from 'react';
import {history, connect} from 'umi';
import PageLayout from '../../component/layout/layout'
import Card from '../../component/card/card'
import {Typography, Col, Row, Button } from 'antd';
import {LoadingOutlined, EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.less'
import '../../less/traditional.less'

const cardList = [
  {
    pic: "/cover1.jpg",
    title: "主日崇拜",
    desc: "在敬拜、紀念主的日子，盼望我們每一個人都預備好我們的心將這一天分別出來。",
    url: "/worship"
  },
  {
    pic: "/cover2.jpg",
    title: "團契小組",
    desc: "“追光者青年團契” 簡稱“光青團契”，是由一群追求真光的學生及職業青年組成，我們的目標是行在主耶穌的光中。",
    url: "/worship"
  },
  {
    pic: "/cover3.jpg",
    title: "主日崇拜",
    desc: "每週主日崇拜前舉行，幫助大家透過系統性學習聖經、小組分享來預備敬拜的心。",
    url: "/worship"
  },
  {
    pic: "/cover4.jpg",
    title: "主日崇拜",
    desc: "英文查經在每週四晚上7點半開始，用英語並結合視屏資料學習和討論聖經。適合想要提高英文水平，或以英語作為母語的人參加。",
    url: "/worship"
  },
  {
    pic: "/cover5.jpg",
    title: "主日崇拜",
    desc: "每週日11點與成人主日崇拜同時進行。孩子們通過唱詩歌，學聖經故事，畫畫，做手工等豐富多彩的活動來敬拜神。",
    url: "/worship"
  },
  {
    pic: "/cover6.jpg",
    title: "主日崇拜",
    desc: "每週日11點與成人主日崇拜同時進行。孩子們通過唱詩歌，學聖經故事，畫畫，做手工等豐富多彩的活動來敬拜神",
    url: "/worship"
  }
]
function Index(props) {

  const { Title } = Typography;

  if (props.loading.effects['slider/getRemote'] || props.loading.effects['info/getRemote']) {
    return <div><LoadingOutlined /></div>;
  }
    return (
        <PageLayout curr={""}>
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
          <Row style={{ marginTop: "3%"}} className="text-style">
            <Col span={12}>
              <Row style={{justifyContent: 'center', alignContent: "center"}}><img src='/bible.svg'/></Row>
              <Row style={{justifyContent: 'center', alignContent: "center", color: "#00000099", fontSize: "24px"}}>(約翰福音1:9)</Row>
              <Row style={{justifyContent: 'center', alignContent: "center", fontWeight: "bold", fontSize: "30px", letterSpacing: "2%"}}>那光是真光</Row>
              <Row style={{justifyContent: 'center', alignContent: "center", fontWeight: "bold", fontSize: "30px", letterSpacing: "2%"}}>照亮一切生在世上的人</Row>
              <Row style={{justifyContent: 'center', alignContent: "center"}}></Row>
            </Col>
            <Col span={5}>
              <Row style={{justifyContent: 'center', alignContent: "center"}}><img src='/people.svg' /></Row>
              <Row style={{justifyContent: 'center', alignContent: "center", fontSize: "24px"}}>教會人數</Row>
              <Row style={{justifyContent: 'center', alignContent: "center", fontSize: "30px", fontWeight: "bold"}}>{props.info[0].data[0].attributes.people}人</Row>
            </Col>
            <Col span={5}>
              <Row style={{justifyContent: 'center', alignContent: "center"}}><img src='/group.svg' /></Row>
              <Row style={{justifyContent: 'center', alignContent: "center", fontSize: "24px"}}>團契小組</Row>
              <Row style={{justifyContent: 'center', alignContent: "center", fontSize: "30px", fontWeight: "bold"}}>{props.info[0].data[0].attributes.group}组</Row>
            </Col>
          </Row>
          <Row style={{justifyContent: 'center', alignContent: "center", marginTop: "1%"}} className="text-style">
          <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "3%", fontSize: "46px"}}>
          信仰宣言
          </div>
          </Row>
          <div style={{fontSize: "24px"}}>
          <Row style={{justifyContent: 'center', alignContent: "center"}}>我們肯定聖經是神默示的話語。是我們信仰的根據。</Row>
          <Row style={{justifyContent: 'center', alignContent: "center"}}>本教會贊同一九六三年美南浸信會年會所接納的 「浸信會的信仰」。</Row>
          <Row style={{justifyContent: 'center', alignContent: "center"}}>我們在基督耶穌裡受浸的信徒們，誌願聯合起來成為一體， </Row>
          <Row style={{justifyContent: 'center', alignContent: "center"}}>並且每個人都願意把得救的福音分享和傳遍世人。</Row>
          <Row style={{justifyContent: 'center', alignContent: "center"}}>教會的禮儀，包括信徒的浸禮和主餐。</Row>
          <Row style={{justifyContent: 'center', alignContent: "center"}}>那光是真光，照亮一切生在世上的人。</Row>
          <Row style={{justifyContent: 'center', alignContent: "center", color: "#00000099"}}>(約翰福音1:9)</Row>
          <Row style={{justifyContent: 'center', alignContent: "center"}}>The true light that gives light to every man was coming into the world.</Row>
          <Row style={{justifyContent: 'center', alignContent: "center", color: "#00000099"}}>(John 1:9)</Row>
          </div>
          <Row style={{justifyContent: 'center', alignContent: "center", marginTop: "1%"}}><Button type="primary" size='large' onClick={()=>{}}>了解更多教會信息</Button></Row>
          <Row style={{marginTop: "5%"}}>
            <Col span={8}><img src='/daily.png' style={{width: "auto", height: "auto", maxWidth: "97%", maxHeight: "100%"}} /></Col>
            <Col span={12}>
              <div style={{marginLeft:"5%"}}>
                <Row><Title level={2}>每日靈修</Title></Row>
                <div style={{marginTop: "2%"}}>
                  <Row style={{fontSize: '28px', fontWeight: '500'}}>焉知妳得了王後的位分，不是為現今的機會嗎?</Row>
                  <Row style={{fontSize: '24px', fontWeight: '200'}}>(以斯帖記 4:14)</Row>
                </div>
                <div style={{marginTop: "2%"}}>
                  <Row>在美國伊利諾州的一個小鎮，家庭暴力案件佔該社區所有犯罪事件的四成。據當地一位牧師說，許多信徒對這個問題往往避而不談，因為談論起來總令人不自在。因此，當地的牧者們決定不迴避問題，選擇憑信心勇敢地面對，包括參加課程學習如何辨別暴力跡象，並支持反家暴的非營利組織。一位當地牧者強調信心和行動的力量，他說：「我們深信藉著禱告與關懷，再加上實際的支持，能夠帶來重大的改變。」</Row>
                </div>
                <div style={{marginTop: "5%"}}>
                  <Button style={{alignItems: 'bottum'}} type="primary" size='large'>閱讀全部</Button>
                </div>
              </div>
              
            </Col>
          </Row>
          <div className="site-card-wrapper" style={{marginBottom: "100px"}}>
            <Row gutter={16} style={{marginTop: '3%', justifyContent: 'center', alignContent: "center"}}>
              {cardList.map((o, j) => {
                return (
                  <Col span={8}>
                    <Card pic={o.pic} title={o.title} desc={o.desc} url={o.url} style={{border: "1px"}}></Card>
                  </Col>
                )
              })}
            </Row>
          </div>
        </PageLayout>
    )
}
export default connect(({ slider, loading, info }) => ({
  slider, loading, info
}))(Index);