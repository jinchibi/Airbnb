import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material';
import { Carousel } from 'antd';
import IconLeft from '@/assets/svg/icon_left';
import IconRight from '@/assets/svg/icon_right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const sliderRef = useRef()
  function handleClick(kind, event) {
    kind === 'left' ? sliderRef.current.prev() : sliderRef.current.next()
    let newIndex = kind === 'left' ? selectedIndex - 1 : selectedIndex + 1
    let length = itemData?.picture_urls?.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectedIndex(newIndex)
    // 阻止事件冒泡
    event.stopPropagation()
  }
  function imgClickHandle() {
    // console.log('success')
    if (itemClick) itemClick(itemData)
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" onClick={imgClickHandle}/>
    </div>
  )
  const swiderElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn_left btn" onClick={e => handleClick('left', e)}>
          <IconLeft width={30} height={30} />
        </div>
        <div className="btn_right btn" onClick={e => handleClick('right', e)}>
          <IconRight width={30} height={30} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectedIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className='dot-item' key={index}>
                  <span className={classNames("dot", { active: selectedIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => (
            <div className="cover" key={item} >
              <img src={item} alt="" />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info.text_color}
      itemWidth={itemWidth}
      onClick={imgClickHandle}
    >
      <div className="inner">
        {
          itemData.picture_urls ? swiderElement : pictureElement
        }

        <div className="desc">{itemData.verify_info.messages.join(".")}</div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            readOnly
            sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }}
            precision={0.5}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData?.bottom_info && <span className='extra'>.{itemData?.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem