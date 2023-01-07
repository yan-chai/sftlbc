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

export async function getWorshipList(year, isSpeacial, page) {
    let url;
    console.log(isSpeacial )
    if (isSpeacial) {
        url = "/api/worships?fields=title,description,date,weekly_report,scripture,hoster&sort[0]=date:desc&pagination[pageSize]=10&filters[isSpecial][$eq]=true&pagination[page]=" + page;
    } else if (year != 0) {
        url = "/api/worships?fields=title,description,date,weekly_report,scripture,hoster&sort[0]=date:desc&pagination[pageSize]=10&filters[date][$gte]=" + year + '-01-01&filters[date][$lte]=' + year + '-12-31&pagination[page]=' + page;
    } else {
        url = "/api/worships?fields=title,description,date,weekly_report,scripture,hoster&sort[0]=date:desc&pagination[pageSize]=10&&pagination[page]=" + page;
    }
    return request(url, {
        method: 'get',
    }).then((res) => {
        return res;
    }).catch((error) => {
        console.log(error)
    })
    
}

export async function getYears() {
    return request(host + "/api/year-filters?fields=year&sort[0]=year:desc", {
        method: 'get',
    }).then((res) => {
        return res;
    }).catch((error) => {
        console.log(error)
    })
}