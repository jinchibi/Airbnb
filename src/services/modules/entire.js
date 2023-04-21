import jcRequest from "../request";

export function getEntireRoomList(offset = 0, size = 20) {
    return jcRequest.get({
        url: 'entire/list',
        params: {
            offset,
            size
        }
    })
}