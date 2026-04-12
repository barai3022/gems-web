"use client"
import { BarChartData } from '@/types'
import React from 'react'
import { Bar, BarChart, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const StackedBarChart = ({ data }: { data: BarChartData[] }) => {
    console.log(data)

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 25, right: 10, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="title" tick={{ fontSize: 12 }} />

                    <YAxis
                        unit="%"
                        domain={[0, 100]}
                        tick={{ fontSize: 12 }}
                    />



                    <Tooltip
                        formatter={(v?: number | string) =>
                            v !== undefined ? `${v}%` : ""
                        }
                    />
                    <Legend />

                    {/* 100% line */}
                    <ReferenceLine y={100} stroke="#999" strokeDasharray="4 4" />

                    {/* Stack order: small last */}
                    <Bar dataKey="pv" fill="#0dc506" stackId="total" />

                    <Bar
                        dataKey="dg"
                        fill="#f80404"
                        stackId="total"
                    // label={{ position: "center", fill: "#fff", fontSize: 12 }}
                    />
                    <Bar dataKey="grid" fill="#083cf7" stackId="total" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default StackedBarChart
