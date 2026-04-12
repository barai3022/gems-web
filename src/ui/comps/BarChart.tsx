import React from 'react'
import StackedBarChart from '../charts/StackedBarChart'
import { barChartData } from '@/libs/data/Chart'

const BarChart = () => {
    return (
        <div className='h-full'>
            <StackedBarChart data={barChartData} />
        </div>
    )
}

export default BarChart
