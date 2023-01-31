import PageLayout from '../../component/layout/layout'
import "../../less/traditional.less"
import { LoadingOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Layout, Row, Col, Button} from 'antd';
import {connect} from 'umi';

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
    getItem('见证分享', ''),
    getItem('活动照片墙', 'picwall')
  ];
const onClick = (e) => {
    console.log('click', e);
    
  };
export default function Testimony() {
    return (
        <PageLayout curr={"testimony"}>
            <img src='/testimony.png' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}} />
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
            <p className='t5'>见证分享</p>
            <p>
              内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
              内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
              内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
              内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
              内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
            </p>
            <Button type='primary' size='large'>查閱更多</Button>
            </Col>
            </Row>
        </PageLayout>
    )
}