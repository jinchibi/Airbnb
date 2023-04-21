import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subTitle } = props
  return (
    <HeaderWrapper>
        <div>
            <h2 className='title'>{title}</h2>
            {
                subTitle && <div className='subTitle'>{subTitle}</div>
            }
        </div>
    </HeaderWrapper>
  )
})
SectionHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default SectionHeader