// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectorItem, setSelectorItem] = useState([])
  function itemClickHandle(item) {
    const newItems = [...selectorItem]
    if (newItems.includes(item)) {
      const index = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(index, 1)
    }
    else {
      newItems.push(item)
    }
    setSelectorItem(newItems)
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map(item => (
            <div 
              className={classNames("item", { active: selectorItem.includes(item)})}
              key={item}
              onClick={e => itemClickHandle(item)}
            >
              {item}
            </div>
          ))
        }
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter