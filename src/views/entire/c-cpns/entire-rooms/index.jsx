// import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const { roomList, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading
  }), shallowEqual) 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClick = useCallback((item) => {
    console.log('itemClick')
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  }, [navigate, dispatch])
  return (
    <RoomsWrapper>
      {
        roomList.map((item, index) => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={index} itemClick={itemClick}/>
          )
        })
      }
      {
        isLoading && <div className="mask"></div>
      }

    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms