import PageLayout from '../../component/layout/layout'
import "../../less/traditional.less"
import { LoadingOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Layout, Row, Col} from 'antd';
import HCard from '../../component/card/hcard';
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
function Ministry(props) {
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
                    selectedKeys={''}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>教會事工總覽</p>
            <HCard pic="/cover8.jpg" title="英語查經小組" time={d[0].time} person="李佳音 姐妹" contact="12345678" desc="我也不知道写啥"></HCard>
            <HCard pic="/cover4.jpg" title="成人主日学" time="每周四" person="李佳音 姐妹" contact="12345678" desc="我也不知道写啥"></HCard>
            <HCard pic="/cover7.JPG" title="祷告小组" time="每周四" person="李佳音 姐妹" contact="12345678" desc="我也不知道写啥"></HCard>
            <HCard pic="/cover4.jpg" title="团契小组" time="每周四" person="李佳音 姐妹" contact="12345678" desc="我也不知道写啥"></HCard>
            <HCard pic="/cover3.jpg" title="儿童事工" time="每周四" person="李佳音 姐妹" contact="12345678" desc="我也不知道写啥"></HCard>
            <HCard pic="/cover3.jpg" title="宣教" time="每周四" person="李佳音 姐妹" contact="12345678" desc="我也不知道写啥"></HCard>
            </Col>
            </Row>
        </PageLayout>
    )
  } 
}

export default connect(({ card, loading }) => ({
  card, loading
}))(Ministry);