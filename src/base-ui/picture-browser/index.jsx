import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import IconRight from '@/assets/svg/icon_right'
import IconLeft from '@/assets/svg/icon_left'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Indicator from '../indicator'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeBtn } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direct, setDirect] = useState('left')
  const [showList, setShowList] = useState(true)
  // 控制浏览器窗口是否可以滚动
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
        document.body.style.overflow = 'auto'
    }
  }, [])
  function closeBtnClickHandle() {
    if (closeBtn) closeBtn()
  }
  function currentChangeClick(direction) {
    let newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setDirect(direction)
  }
  function bottomClickHandle(index) {
    setDirect(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
  }
  return (
    <BrowserWrapper direct={direct} showList={showList}>
        <div className="top">
            <div className="close-btn" onClick={closeBtnClickHandle}>
                <IconRight width={20} height={20}/>
            </div>
        </div>
        <div className="slider">
            <div className="control">
                <div className="btn left" onClick={e => currentChangeClick('left')}>
                    <IconLeft width="77" height="77" />
                </div>
                <div className="btn right" onClick={e => currentChangeClick('right')}>
                    <IconRight width="77" height="77" />
                </div>
            </div>
            <div className="picture">
                <SwitchTransition mode='in-out'>
                    <CSSTransition key={pictureUrls[currentIndex]} classNames='pic' timeout={200}>
                        <img src={pictureUrls[currentIndex]} alt="" />
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
        <div className="preview">
            <div className="info">
                <div className="desc">
                    <div className="toggle" onClick={e => setShowList(!showList)}>
                        <span>隐藏照片列表</span>
                    </div>
                </div>
                <div className="list">
                    <Indicator selectIndex={currentIndex}>
                        {
                            pictureUrls.map((item, index) => {
                                return (
                                    <div 
                                        className={classNames("item", { active: currentIndex === index })} 
                                        key={item}
                                        onClick={e => bottomClickHandle(index)}
                                    >
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Indicator>
                </div>
            </div>
        </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser