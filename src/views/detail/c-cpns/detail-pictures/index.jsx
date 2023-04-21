// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { DetailPictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'


const DetailPictures = memo((props) => {
  const [showBtn, setShowBtn] = useState(false)
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  return (
    <DetailPictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setShowBtn(!showBtn)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item" key={item} onClick={e => setShowBtn(!showBtn)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={e => setShowBtn(!showBtn)}>更多</div>

      { showBtn && 
        <PictureBrowser 
          pictureUrls={detailInfo.picture_urls}
          closeBtn={e => setShowBtn(false)}
        />
      }
    </DetailPictureWrapper>
  )
})

DetailPictures.propTypes = {}

export default DetailPictures