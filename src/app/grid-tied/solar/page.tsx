"use client"
import { dgValues, gridValues, labelValues, pvValues } from '@/libs/data/Chart';
import { dailySolarCurve, exportData, monthlySolar } from '@/libs/data/Solar';
import { StackedAreaChartData } from '@/types';
import StackedAreaChart from '@/ui/charts/StackedAreaChart';
import PowerFlowSourceLoad from '@/ui/nodes/PowerFlowSolarLoad';
import React, { ReactNode } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';



// Alerts
const alerts = [
    "High consumption in Apartment 201",
    "Lift maintenance due tomorrow",
    "Generator fuel level low",
    "Solar system offline"
];


const page = () => {

    return (
        <div className="p-6 bg-gray-50 min-h-screen space-y-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Solar Dashboard</h1>

            {/* Alerts */}
            <p className="text-black text-center py-2">Alert Panel</p>
            <div className="overflow-x-auto flex space-x-4 p-2 bg-yellow-50 rounded">
                {alerts.map((a, i) => <div key={i} className="bg-red-200 p-2 rounded whitespace-nowrap">{a}</div>)}
            </div>


            {/* Main Grid */}
            <div className="grid gap-6 grid-cols-2">
                <div className=' col-span-1'>
                    <p className="text-black text-center py-2">Power Flow Diagram</p>
                    <div className='bg-gray-900 col-span-1 h-125'>
                        <PowerFlowSourceLoad />
                    </div>
                    <p className="text-black text-center py-2"> Daily Generation</p>
                    <div className='bg-gray-900  h-80'>
                        <ChartCard title="Real-Time Daily Solar Generation (kWh)">
                            <BarChartView
                                data={dailySolarCurve}
                                xKey="time"
                                yKey="kwh"
                                name="Daily Generation"
                            />
                        </ChartCard>
                    </div>
                    <p className="text-black text-center py-2"> Monthly Generation</p>
                    <div className='bg-gray-900  h-80'>
                        <ChartCard title="Day-wise Monthly Generation with Average Line">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={monthlySolar}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={36} />
                                    <Bar dataKey="gen" fill="#3b82f6" name="Generation" />
                                    <Line
                                        type="monotone"
                                        dataKey="avg"
                                        stroke="#10b981"
                                        strokeDasharray="4 4"
                                        name="Average"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>

                    <p className="text-black text-center py-2"> Yearly Export</p>

                    <ChartCard title="Solar Energy Export to Grid (kWh)">
                        <BarChartView
                            data={exportData}
                            xKey="month"
                            yKey="export"
                            name="Exported Energy"
                        />
                    </ChartCard>


                </div>


                <div className=' col-span-1'>


                    <Card title="Solar Data">

                        <div className="grid grid-cols-4 gap-4">


                            <KpiCard title="Full Capacity Hours" value="5.6 h" />
                            <KpiCard title="Avg. Full Capacity Hours" value="4.6 h" />
                            <KpiCard title="Solar Performance Ratio" value="85%" />
                            <KpiCard title="Today Generation" value="300 kWh" />
                            <KpiCard title="This Month Generation" value="300 kWh" />
                            <KpiCard title="Cumulative Generation" value="300 kWh" />
                            <KpiCard title="Today Savings" value="50 BDT" />
                            <KpiCard title="This Month Savings" value="250 BDT" />
                            <KpiCard title="Avg Monthly Savings" value="230 BDT" />
                            <KpiCard title="Cumulative Savings" value="5000 BDT" />
                        </div>
                    </Card>

                </div>
            </div>

        </div>
    )
}

export default page

function Card({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold mb-2 text-slate-700">{title}</h3>
            {children}
        </div>
    );
}

function KpiCard({ title, value }: { title: string, value: string }) {
    return (
        <div className="p-4 bg-white rounded shadow flex flex-col justify-center items-start">
            <p className="text-xs text-slate-500">{title}</p>
            <p className="mt-1 text-xl font-bold text-slate-800">{value}</p>
        </div>
    );
}


function BarChartView({
    data,
    xKey,
    yKey,
    name,
}: {
    data: any[];
    xKey: string;
    yKey: string;
    name?: string;
}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xKey} />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar dataKey={yKey} fill="#3b82f6" name={name || yKey} />
            </BarChart>
        </ResponsiveContainer>
    );
}

function ChartCard({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-slate-700">{title}</h3>
            <div className="h-64">{children}</div>
        </div>
    );
}
