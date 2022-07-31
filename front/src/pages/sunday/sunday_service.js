import React, {useState, useEffect} from "react";
import PageLayout from "../../component/layout/layout";
import Video from "../../component/video/video";
import axios from "axios";
import {LoadingOutlined } from "@ant-design/icons";

export default function Worship() {
    const url = "http://localhost:1337/api/worships?sort[0]=createdAt:desc&pagination[limit]=1&fields=url,title,description";
    const [video, setvideo] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(url).then(res => {
          setvideo(res.data);
          setIsLoading(false);
        }).catch((error) => {
          setIsLoading(false);
          setIsError(true);
          console.log(error);
        })
      }, [url])
    if (isLoading) {
        return <div><LoadingOutlined /></div>;
    }
    return (
        <PageLayout>
            <Video url={video.data[0].attributes.url} title={video.data[0].attributes.title} desc={video.data[0].attributes.description} />
        </PageLayout>
    )
}