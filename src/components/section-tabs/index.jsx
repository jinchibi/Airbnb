import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabWrapper } from './style'

const SectionTab = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currenIndex, setCurrentIndex] = useState(0)
  function changeCurrentIndex(index, name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }
  return (
    <TabWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => (
            <div
              className={classNames("item", currenIndex === index ? 'active' : '')}
              key={item}
              onClick={e => changeCurrentIndex(index, item)}
            >
              {item}
            </div>
          ))
        }
      </ScrollView>
    </TabWrapper>
  )
})

SectionTab.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTab