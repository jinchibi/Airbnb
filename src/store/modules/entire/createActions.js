import { getEntireRoomList } from '@/services/modules/entire';
import * as actionTypes from './constants';

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOMLIST,
    roomList
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTALCOUNT,
    totalCount
})

export const changeIsLoading = (isLoading) => ({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListAction = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(changeCurrentPageAction(page))
        // const currentPage = getState().entire.currentPage
        dispatch(changeIsLoading(true))
        const res = await getEntireRoomList(page * 20)
        dispatch(changeIsLoading(false))
        // 获取到最新的数据，保存在redux中
        const roomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }  
}