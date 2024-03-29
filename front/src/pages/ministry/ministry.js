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
    getItem('英語查經小組', 'englishBibleGroup'),
    getItem('成人主日學', 'adult'),
    getItem('禱告小組', 'pray'),
    getItem('團契小組', 'fellowship'),
    getItem('兒童事工', 'kid'),
    getItem('宣教', 'mission'),
  ];
const onClick = (e) => {
    console.log('click', e);
    history.push(e.key)
  };
function Ministry(props) {
  if (props.loading.effects['card/getRemote']) {
    return <div><LoadingOutlined /></div>;
  } else{
    let d = props.card[0].data
    console.log(d[1])
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
                    selectedKeys={'ministry'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>教會事工總覽</p>
            <HCard pic="/cover8.jpg" title="英語查經小組" time={d[0].attributes.time} person={d[0].attributes.host} contact={d[0].attributes.contact} desc={d[0].attributes.shortDesc}></HCard>
            <HCard pic="/cover4.jpg" title="成人主日學" time={d[1].attributes.time} person={d[1].attributes.host} contact={d[1].attributes.contact} desc={d[1].attributes.shortDesc}></HCard>
            <HCard pic="/cover7.jpg" title="禱告小組" time={d[2].attributes.time} person={d[2].attributes.host} contact={d[2].attributes.contact} desc={d[2].attributes.shortDesc}></HCard>
            <HCard pic="/cover4.jpg" title="團契小組" time={d[3].attributes.time} person={d[3].attributes.host} contact={d[3].attributes.contact} desc={d[3].attributes.shortDesc}></HCard>
            <HCard pic="/cover3.jpg" title="兒童事工" time={d[4].attributes.time} person={d[4].attributes.host} contact={d[4].attributes.contact} desc={d[4].attributes.shortDesc}></HCard>
            <HCard pic="/cover3.jpg" title="宣教" time={d[5].attributes.time} person={d[5].attributes.host} contact={d[5].attributes.contact} desc={d[5].attributes.shortDesc}></HCard>
            </Col>
            </Row>
        </PageLayout>
    )
  } 
}

export default connect(({ card, loading }) => ({
  card, loading
}))(Ministry);