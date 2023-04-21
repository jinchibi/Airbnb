import PropTypes from 'prop-types'
import IconLeft from '@/assets/svg/icon_left'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props
  let message = "显示全部"
  if (name) {
    message = `显示更多${name}房源`
  }
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }
  return (
    <SectionFooterWrapper color={name ? '#00848A' : '#000'}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{message}</span>
        <IconLeft />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter