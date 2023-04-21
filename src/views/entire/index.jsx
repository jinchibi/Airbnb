import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter';
import EntirePagination from './c-cpns/entire-pagination';
import EntireRooms from './c-cpns/entire-rooms';

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  return (
    <div>
      <div className="filter">
        <EntireFilter />
      </div>
      <div className="rooms">
        <EntireRooms />
      </div>
      <div className="pagination">
        <EntirePagination />
      </div>
    </div>
  )
})

export default Entire