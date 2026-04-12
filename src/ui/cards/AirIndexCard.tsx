import { AirDataObject } from '@/types'
import React from 'react'

const AirIndexCard = ({
  data
}:{
  data:AirDataObject
}) => {
  const {title, unit, val, limit} = data;

  return (
    <div className='w-full'>
       <div className={`air_title_class`}>
            <div >{title}</div>
            <div className={`air_unit_class`}>{unit}</div>
        </div>
            <div className={`air_value_class`}>
            <div className='text-center item-center'> {val} </div>
            <div className={`air_limit_class`}>  {limit} </div>
        </div>
    </div>
  )
}

export default AirIndexCard
