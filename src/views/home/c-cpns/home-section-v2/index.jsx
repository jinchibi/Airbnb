import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTab from '@/components/section-tabs'
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const SectionV2 = memo((props) => {
    const { infoData } = props
    // 数据转换
    const tabNames = infoData.dest_address?.map(item => item.name)
    const initialName = Object.keys(infoData.dest_list)[0]
    const [cityName, setCityName] = useState(initialName)
    const tabClickHandle = useCallback((index, name) => {
        setCityName(name)
    }, [])
    return (
        <SectionV2Wrapper>
            <div className="mt discount">
                <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
                <SectionTab tabNames={tabNames} tabClick={tabClickHandle} />
                <SectionRooms roomList={infoData.dest_list?.[cityName]} itemWidth="33.33%" />
                <SectionFooter name={cityName}/>
            </div>
        </SectionV2Wrapper>
    )
})

SectionV2.propTypes = {
    infoData: PropTypes.object
}

export default SectionV2