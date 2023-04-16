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
export default function Knowus() {
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
                    selectedKeys={'knowus'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>認識我們</p>
            <Row>
                <Col style={{marginLeft: "30px"}}>
                <Row>
                焉知妳得了王后的位分，不是為現今的機會嗎？—以斯帖記4章14節<br />
在美國伊利諾州的一個小鎮，家庭暴力案件佔該社區所有犯罪事件的四成。據當地一位牧師說，許多信徒對這個問題往往避而不談，因為談論起來總令人不自在。因此，當地的牧者們決定不迴避問題，選擇憑信心勇敢地面對，包括參加課程學習如何辨別暴力跡象，並支持反家暴的非營利組織。一位當地牧者強調信心和行動的力量，他說：「我們深信藉著禱告與關懷，再加上實際的支持，能夠帶來重大的改變。」
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