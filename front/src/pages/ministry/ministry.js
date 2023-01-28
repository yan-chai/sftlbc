import PageLayout from '../../component/layout/layout'
import "../../less/traditional.less"
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Layout, Row, Col} from 'antd';
import HCard from '../../component/card/hcard';

const { Sider } = Layout;
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
    getItem('總覽', ''),
    getItem('英語查經小組', 'englishBibleGroup'),
    getItem('成人主日學', 'adule'),
    getItem('禱告小組', 'pray'),
    getItem('團契小組', 'fellowship'),
    getItem('兒童事工', 'kid'),
    getItem('宣教', 'mission'),
  ];
const onClick = (e) => {
    console.log('click', e);
    
  };
export default function Ministry(props) {
    
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
                    selectedKeys={''}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>教會事工總覽</p>
            <HCard pic="/cover8.jpg" title="英語查經小組" time="每周四" person="李佳音 姐妹" contact="12345678" desc="我也不知道写啥"></HCard>
            </Col>
            </Row>
        </PageLayout>
    )
}