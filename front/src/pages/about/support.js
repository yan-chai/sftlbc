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
export default function support() {
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
                    selectedKeys={'support'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>奉獻支持</p>
            <Row>
                <Col span={10}>
                <img src='/support.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}} />
                </Col>
                <Col span={12} style={{marginLeft: "30px"}}>
                <Row>
                【奉獻：支票抬頭請寫 SFTLBC】<br/>
                <br/>
                1) 將奉獻 (支票) 寄到朴元俊弟兄家<br/>
                地址：713 24th Ave, SF, CA 94121<br/>
                <br/>
                2) 使用 Zelle 網上即時轉帳到<br/>
                stevequach5@gmail.com<br/>
                (SF True Light Baptist Church 的帳戶)<br/>
                </Row>
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