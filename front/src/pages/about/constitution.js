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
export default function Testimony() {
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
                    selectedKeys={'constitution'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>教會會章</p>
            <Row>
                <Col span={10}>
                <img src='/history.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}} />
                </Col>
                <Col span={13} style={{marginLeft: "30px"}}>
                <Row style={{fontWeight: "bold"}}>前言</Row>
                <Row>我們訂此會章，是為了確定並保持我們的信仰原則， 並有秩序地管理會眾的事務。本會章旨在確保 每位會友從神領受之自由， 及本教會與其他教會之間的相關性和獨立性。</Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第一條：定名</Row>
                <Row>教會定名為“真光浸信會”，設立在加州三藩市，是一個非營利的團體。</Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第二條：會章目的</Row>
                <Row>本會章目的在提供教會基本的指導方針。細則部份則是根據會章的精神及原則訂定詳細的規則條例。</Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第三條：教會宗旨</Row>
                <Row>本教會宗旨乃是藉著敬拜、傳道、見證、教育、事工、訓練和團契，在聖靈中，經由基督耶穌高舉真神。</Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第四條：信仰宣言</Row>
                <Row>我們肯定聖經是神默示的話語。是我們信仰的根據。本教會贊同一九六三年美南浸信會年會所接納的 “浸信會的信仰”。我們在基督耶穌裡受浸的信徒們，志願聯合起來成為一體， 並且每個人都願意把得救的福音分享和傳遍世人。教會的禮儀，包括信徒的浸禮和主餐。</Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第五條：理事會</Row>
                <Row>有關本教會法律的事務，由理事會來處理。他們包括主席、秘書和財務。</Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第六條：長執會</Row>
                <Row>有關本教會的事工，由長執會來帶領。長執會包含選出的執事及按立的執事和聘任的牧師及傳道， 共同推進教會的宗旨與發展。</Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第七條：教會公約</Row>
                <Row>藉著聖靈的引導，我們接受基督耶穌為我們的救主，公開承認這信仰，並奉聖父、聖子、聖靈的名受浸。 我們現在，在神面前和在會眾面前莊嚴和喜樂地互訂這個公約，成為基督的身體。 我們藉著聖靈的幫助，樂意在基督的愛裡同行；為著教會的增長而努力；我們樂意經常奉獻， 支援教會的事工，將福音傳佈到各國。
                    我們願意維持家庭並個人的靈修，把我們的子女帶領到基督耶穌裡，並關懷我們親戚朋友的救恩。 我們願意謹慎地活在這個世界裡，熱烈並努力地擴展基督的國度。
                    我們承諾，若遷離此地時，我們會儘快地加入一個遵照聖經原則的教會。
                </Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第八條：修正</Row>
                <Row>本會章之修正，另訂細則規定之。</Row>
                <br/>
                <Row style={{fontWeight: "bold"}}>第五條：理事會</Row>
                <Row>有關本教會法律的事務，由理事會來處理。他們包括主席、秘書和財務。</Row>
                <br/>
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