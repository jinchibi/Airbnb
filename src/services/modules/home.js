import jcRequest from "../request";

export function getHomeGoodPriceData() {
    return jcRequest.get({
        url: '/home/goodprice'
    })
}

export function getHomeHighScoreData() {
    return jcRequest.get({
        url: '/home/highscore'
    })
}

export function getHomeDiscountData() {
    return jcRequest.get({
        url: '/home/discount'
    })
}

export function getHotRecommendData() {
    return jcRequest.get({
        url: '/home/hotrecommenddest'
    })
}

export function getHomeLongforData() {
    return jcRequest.get({
        url: '/home/longfor'
    })
}