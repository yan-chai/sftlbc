import { Row, Col} from 'antd';
import "../../less/traditional.less"

export default function HCard(props) {
    return (
        <Row>
            <Col span={12}><img src={props.pic} style={{width: "100%"}} /></Col>
            <Col span={8} style={{marginLeft: "15px"}}>
                <Row className='t5' style={{marginBottom: "20px"}}>{props.title}</Row>
                <Row>活动时间  &nbsp;{props.time}</Row>
                <Row>联系人    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.person}</Row>
                <Row style={{marginBottom: "20px"}}>联系方式  &nbsp;{props.contact}</Row>
                <Row>{props.desc}</Row>
            </Col>
        </Row>
    )
}