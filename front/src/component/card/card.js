import { Row, Button} from 'antd';

export default function Card(props) {
    return (
        <div style={{width: "auto", height: "auto", marginBottom: "8%"}}>
            <Row><img src={props.pic} style={{width: "100%"}} /></Row>
            <Row style={{fontSize: "30px", marginTop:"10px", marginLeft: "10px"}}>{props.title}</Row>
            <Row style={{marginTop:"10px", marginLeft: "10px", marginBottom: "10px"}}>{props.desc}</Row>
            <Row style={{marginLeft: "10px", align: "bottom"}}><Button href={props.url} type="primary">了解詳情</Button></Row>
        </div>
    )
}