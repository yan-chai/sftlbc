import PageLayout from "../../component/layout/layout";
import React, {useState, useEffect} from "react";
import {Button, Image} from 'antd'

export default function Worship() {
    return (
        <PageLayout>
            <div style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center', width: "100%", display: 'flex', height: '30%', position: "relative"}}>
            <Image src="http://localhost:1337/uploads/_02379fbd8a.png?updated_at=2022-07-23T22:31:52.381Z" style={{maxHeight: '100%'}} preview={false} />
            <Button type="primary" style={{position: 'absolute', left: "30%", top: "70%"}} shape='round' size="large">&nbsp;Zoom&nbsp;</Button>
            <Button type="primary" style={{position: 'absolute', top: "70%"}} shape='round' size="large">&nbsp;Facebook&nbsp;</Button>
            <Button type="primary" style={{position: 'absolute', right: "30%", top: "70%"}} shape='round' size="large">&nbsp;Youtube&nbsp;</Button>
            </div>
            <div>hello</div>
        </PageLayout>
    )
}