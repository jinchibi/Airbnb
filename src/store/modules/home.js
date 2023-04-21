import { getHomeGoodPriceData,
    getHomeHighScoreData,
    getHomeDiscountData, 
    getHotRecommendData, 
    getHomeLongforData 
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then((res) => {
        dispatch(changeHighScoreAction(res))
    })
    getHomeDiscountData().then((res) => {
        dispatch(changeDiscountAction(res))
    })
    getHotRecommendData().then((res) => {
        dispatch(changeHotRecommendAction(res))
    })
    getHomeLongforData().then((res) => {
        dispatch(changeLongforAction(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        hotRecommendInfo: {},
        longforInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeHotRecommendAction(state, { payload }) {
            state.hotRecommendInfo = payload
        },
        changeLongforAction(state, { payload }) {
            state.longforInfo = payload
        }
    },
    extraReducers: {
        // [fetchHomeDataAction.fulfilled](state, { payload }) {
        //     console.log(payload)
        //     state.goodPriceInfo = payload
        // }
    }
})

export const { 
    changeGoodPriceInfoAction, 
    changeHighScoreAction, 
    changeDiscountAction, 
    changeHotRecommendAction, 
    changeLongforAction 
} = homeSlice.actions
export default homeSlice.reducer