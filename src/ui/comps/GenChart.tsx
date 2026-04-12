// import { dgValues, gridValues, labelValues, pvValues } from '@/lib/ChartData';
import { StackedAreaChartData } from '@/types';
import React from 'react'
import StackedAreaChart from '../charts/StackedAreaChart';
import { dgValues, gridValues, labelValues, pvValues } from '@/libs/data/Chart';




const GenChart = () => {

    const nullArray: number[] = new Array(289).fill(0);

    const chartData1: StackedAreaChartData[] = labelValues.map((label, i) => ({
        time: label,
        pv: pvValues[i] ?? 0,
        dg: dgValues[i] ?? 0,
        grid: gridValues[i] ?? 0,

    }))

    const chartData2: StackedAreaChartData[] = labelValues.map((label, i) => ({
        time: label,
        pv: pvValues[i] ?? 0,
        dg: nullArray[i],
        grid: nullArray[i]

    }))


    return (
        <div className='flex w-full h-full'>
            <StackedAreaChart data={chartData2} />
            <StackedAreaChart data={chartData1} />
        </div>
    )
}

export default GenChart
