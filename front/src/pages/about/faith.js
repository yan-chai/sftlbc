import PageLayout from '../../component/layout/layout'
import "../../less/traditional.less"
import { LoadingOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Layout, Row, Col, Button} from 'antd';
import {history} from 'umi'

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
    getItem('教會簡史', 'about'),
    getItem('教會會章', 'constitution'),
    getItem('信仰宣言', 'faith'),
    getItem('認識我們', 'knowus'),
    getItem('奉獻支持', 'support')
  ];
const onClick = (e) => {
    console.log(e)
    history.push(e.key)
    
  };
export default function Faith() {
    return (
        <PageLayout curr={"about"}>
            <img src='/about.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}} />
            <Row style={{marginTop: "5%"}}>
                <Col span={6}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: "80%"
                    }}
                    mode="inline"
                    selectedKeys={'faith'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>教會會章</p>
            <Row>
                <Col span={10}>
                <img src='/faith.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}} />
                </Col>
                <Col span={12} style={{marginLeft: "30px"}}>
                <Row>
                    我們肯定聖經是神默示的話語。是我們信仰的根據。<br />
                    本教會贊同一九六三年美南浸信會年會所接納的 <br />
                    「浸信會的信仰」。<br />
                    我們在基督耶穌裡受浸的信徒們，誌願聯合起來成為一體， 並且每個人都願意把得救的福音分享和傳遍世人。<br />
                    教會的禮儀，包括信徒的浸禮和主餐。<br />
                    那光是真光，照亮一切生在世上的人。<br />
                </Row>
                <br />
                <Row>(約翰福音1:9)</Row>
                <br />
                <Row style={{fontWeight: "bold"}}>The true light that gives light to every man was coming into the world.</Row>
                <Row>(John 1:9)</Row>
                </Col>
            </Row>
            </Col>
            </Row>
            <div style={{textAlign: 'center', marginTop: "5%"}}>
                <p className='t5'>聯絡我們</p>
                <Row style={{justifyContent: 'center', alignContent: "center"}}>真光浸信會 S.F. True Light Baptist Church</Row>
                <Row style={{justifyContent: 'center', alignContent: "center"}}>地址： 4250 Judah St.  San Francisco, CA 94122</Row>
                <Row style={{justifyContent: 'center', alignContent: "center"}}>電話: 415-681-7687</Row>
                <Row style={{justifyContent: 'center', alignContent: "center"}}>網址：info@sftlbc.org</Row>
            </div>
            <div>
            <a href='https://goo.gl/maps/4SjXUiTadtCTKtpR6' target="_blank"><img src='/map.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%", marginTop: "30px"}} /></a>
            </div>
        </PageLayout>
    )
}