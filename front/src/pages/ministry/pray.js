import PageLayout from '../../component/layout/layout'
import "../../less/traditional.less"
import { LoadingOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Layout, Row, Col, Table} from 'antd';
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
    history.push(e.key);
    
  };

  const columns = [
    {
      title: '小組名稱',
      dataIndex: 'name'
    },
    {
      title: '聯絡人',
      dataIndex: 'host'
    },
    {
      title: '聯絡方式',
      dataIndex: 'contact'
    },
    {
        title: '活動時間',
        dataIndex: 'time'
    },
  ];
function Pray(props) {
  if (props.loading.effects['card/getRemote'] || props.loading.effects['group/getRemote']) {
    return <div><LoadingOutlined /></div>;
  } else{
    let d = props.card[0].data
    let dataSource = []
    console.log(props.group)
    for (let i in props.group[0].data) {
        console.log(props.group[0].data[i])
        dataSource.push({
            key: i,
            name: props.group[0].data[i].attributes.name,
            host: props.group[0].data[i].attributes.host,
            contact: props.group[0].data[i].attributes.contact,
            time: props.group[0].data[i].attributes.time
        })
    }
    
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
                    selectedKeys={'pray'}
                    items={items}
                />
                </Col>
            <Col span={18}>
            <p className='t5'>禱告小組</p>
            <p>活動時間 :&nbsp;&nbsp;{props.card[0].data[2].attributes.time} </p>
            <p>聯 繫 人 :&nbsp;&nbsp;{props.card[0].data[2].attributes.host}</p>
            <p>聯繫方式 :&nbsp;&nbsp;{props.card[0].data[2].attributes.contact}</p>
            <Row style={{marginTop: "5%", marginBottom: "5%"}}>{props.card[0].data[2].attributes.desc}</Row>
            <Row><img src='/cover7.jpg' style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%", marginBottom: "5%"}} /></Row>
            <p className='t5'>各禱告小組及聯絡人</p>
            <Table columns={columns} dataSource={dataSource} pagination={false} style={{marginBottom: '5%'}} />
            </Col>
            </Row>
        </PageLayout>
    )
  } 
}

export default connect(({ card, group, loading }) => ({
  card, loading, group
}))(Pray);