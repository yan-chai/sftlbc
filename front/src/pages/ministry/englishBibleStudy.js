import PageLayout from '../../component/layout/layout'
import "../../less/traditional.less"
import { LoadingOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Layout, Row, Col} from 'antd';
import HCard from '../../component/card/hcard';
import {connect, history} from 'umi';

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
    getItem('總覽', 'ministry'),
    getItem('英語查經小組', 'englishBibleStudy'),
    getItem('成人主日學', 'adule'),
    getItem('禱告小組', 'pray'),
    getItem('團契小組', 'fellowship'),
    getItem('兒童事工', 'kid'),
    getItem('宣教', 'mission'),
  ];
const onClick = (e) => {
    console.log('click', e);
    history.push(e.key);
    
  };
function EnglishBibleStudy(props) {
  if (props.loading.effects['card/getRemote']) {
    return <div><LoadingOutlined /></div>;
  } else{
    let d = props.card[0].data
    return (
        <PageLayout curr={"ministry"}>
            <img src='/ministry.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}} />
            <Row style={{marginTop: "5%"}}>
                <Col span={6}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: "80%"
                    }}
                    mode="inline"
                    selectedKeys={'englishBibleStudy'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>英文查經小組</p>
            <p>活動時間</p>
            <p>聯繫人</p>
            <p>聯繫方式</p>
            <Row style={{marginTop: "5%", marginBottom: "5%"}}>内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字</Row>
            <img src='/cover8.jpg' />
            </Col>
            </Row>
        </PageLayout>
    )
  } 
}

export default connect(({ card, loading }) => ({
  card, loading
}))(EnglishBibleStudy);