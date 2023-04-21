import React, { memo } from 'react'
import { LeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function imgClickHandle() {
    navigate('/home')
  }
  return (
    <LeftWrapper>
      <img alt='' onClick={imgClickHandle} style={{width: '200px', padding: '0 40px', cursor: 'pointer'}} src="https://z1.muscache.cn/pictures/carson/carson-1679478687466-5517d573/original/acf9627c-88c2-420c-a4ad-c2da40626afa.png" data-original-uri="https://z1.muscache.cn/pictures/carson/carson-1679478687466-5517d573/original/acf9627c-88c2-420c-a4ad-c2da40626afa.png"></img>
    </LeftWrapper>
  )
})

export default HeaderLeft