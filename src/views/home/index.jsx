import SectionV2 from '@/views/home/c-cpns/home-section-v2'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
// import SectionTab from '@/components/section-tabs'
import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyObj } from '@/utils'
import React, { memo, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeLongfor from './c-cpns/home-longfor'

const Home = memo(() => {
  // 获取数据
  const { goodPriceInfo, 
    highScoreInfo, 
    discountInfo, 
    hotRecommendInfo,
    longforInfo 
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo
  }), shallowEqual)

  // 发送异步请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* <div className="mt discount">
          <SectionHeader title={discountInfo.title} subTitle={discountInfo.subtitle}/>
          <SectionTab tabNames={tabNames} tabClick={tabClickHandle} />
          <SectionRooms roomList={discountInfo.dest_list?.[cityName]} itemWidth="33.33%" />
        </div> */}
        {isEmptyObj(discountInfo) && <SectionV2 infoData={discountInfo} />}
        {isEmptyObj(hotRecommendInfo) && <SectionV2 infoData={hotRecommendInfo} />}
        { isEmptyObj(longforInfo)  && <HomeLongfor infoData={longforInfo} />}
        <div className="mt good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
        <div className="mt high-score">
          <SectionHeader title={highScoreInfo.title} subTitle={highScoreInfo.subTitle} />
          <SectionRooms roomList={highScoreInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home