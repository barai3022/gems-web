"use client"
import { StackedAreaChartData } from '@/types'
import {
    Area,
    AreaChart,
    CartesianGrid,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Legend
} from "recharts"

const StackedAreaChart = ({
    data
}: {
    data: StackedAreaChartData[]
}) => {

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} unit=" kW" />

                    <Tooltip
                        formatter={(value?: number | string) =>
                            value !== undefined ? `${value} kW` : ""
                        }
                        labelStyle={{ fontWeight: "normal" }}
                    />

                    {/* Legend */}
                    <Legend
                        verticalAlign="top"
                        height={36}
                        wrapperStyle={{ fontSize: "12px" }}
                    />

                    <Area type="natural" dataKey="pv" stackId="1" stroke="#4cf802ff" fill="#63f800ff" fillOpacity={0.8} />
                    <Area type="natural" dataKey="dg" stackId="1" stroke="#fb1313ff" fill="#fb1919ff" fillOpacity={0.8} />
                    <Area type="natural" dataKey="grid" stackId="1" stroke="#f9f106ff" fill="#1989deff" fillOpacity={0.8} />

                    {/* Sanction Load Line */}
                    <ReferenceLine
                        y={75}
                        stroke="red"
                        strokeWidth={2}
                        strokeDasharray="6 3"
                        label={{ value: "Sanction Load", position: "top", fill: "red" }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default StackedAreaChart
