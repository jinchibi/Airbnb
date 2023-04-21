// import PropTypes from 'prop-types'
import IconLeft from '@/assets/svg/icon_left'
import IconRight from '@/assets/svg/icon_right'
import React, { memo, useEffect, useState, useRef } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
    // 是否显示左侧右侧按钮
    const [showRight, setShowRight] = useState(false)
    const [showLeft, setShowLeft] = useState(false)
    // 组件渲染完毕，是否显示右侧的按钮  
    const scrollContentRef = useRef()
    // 长久的保存totalDistance的值，后面函数会用到  
    const totalDistanceRef = useRef()
    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth
        const clientWidth = scrollContentRef.current.clientWidth
        totalDistanceRef.current = scrollWidth - clientWidth
        setShowRight(totalDistanceRef.current > 0)
    }, [])
    const [posIndex, setPosIndex] = useState(0)

    // 点击右移使最新的button到开头  
    function controlClickHandle(num) {
        const newIndex = posIndex + num
        const newEl = scrollContentRef.current.children[newIndex]
        const newOffsetLeft = newEl.offsetLeft
        scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`
        setPosIndex(newIndex)
        // 是否继续显示右侧的按钮
        setShowRight(totalDistanceRef.current > newOffsetLeft)
        setShowLeft(newIndex > 0)
    }

    return (
        <ViewWrapper>
            {showLeft && (
                <div className='control left' onClick={e => controlClickHandle(-1)}>
                    <IconLeft />
                </div>
            )}
            {showRight && (
                <div className='control right' onClick={e => controlClickHandle(1)}>
                    <IconRight />
                </div>
            )}
            <div className="scroll">
                <div className='slot' ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ViewWrapper>
    )
})

// ScrollView.propTypes = {}

export default ScrollView