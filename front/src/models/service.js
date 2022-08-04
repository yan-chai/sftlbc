import {request} from 'umi'

const host = "http://localhost:8000"

export async function getSlider() {
    console.log("call")
    return request(host + "/api/slide-banners?fields=url,description,pic", {
        method: 'get',
    }).then((res) => {
        return res;
    }).catch((error) => {
        console.log(error)
    })
}

export async function getCard() {
    console.log("call")
    return request(host + "/api/card-banners?fields=cover,title,description,url&sort[0]=id", {
        method: 'get',
    }).then((res) => {
        return res;
    }).catch((error) => {
        console.log(error)
    })
}