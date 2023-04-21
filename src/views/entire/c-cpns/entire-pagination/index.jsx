// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }))
  const pageCount = Math.ceil(totalCount / 20)
  const stateCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function changePageHandle(event, pageCount) {
      window.scrollTo(0, 0)
      dispatch(fetchRoomListAction(pageCount - 1))
  }
  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <Pagination count={pageCount} color="primary" onChange={changePageHandle} />
            <div className="desc">
              第{stateCount}-{endCount}房源,共{totalCount}个
            </div>
          </div>)
      }


    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination