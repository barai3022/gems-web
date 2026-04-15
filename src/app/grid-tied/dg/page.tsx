"use client"
import { dgValues, gridValues, labelValues, pvValues } from '@/libs/data/Chart';
import { dailyDgLoad, monthlyDgLoad } from '@/libs/data/Dg';
import { dailyGridConsumption, monthlyGridImport } from '@/libs/data/Grid';
import { dailySolarCurve, exportData, monthlySolar } from '@/libs/data/Solar';
import { StackedAreaChartData } from '@/types';
import StackedAreaChart from '@/ui/charts/StackedAreaChart';
import PowerFlowDgLoad from '@/ui/nodes/PowerFlowDgLoad';
import PowerFlowGridLoad from '@/ui/nodes/PowerFlowGridLoad';
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
            <h1 className="text-2xl font-bold text-slate-800 mb-4">DG Dashboard</h1>

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
                        <PowerFlowDgLoad />
                    </div>
                    <p className="text-black text-center py-2"> Daily Generation</p>
                    <div className='bg-gray-900  h-80'>
                        <ChartCard title="Real-Time DG Load (kWh)">
                            <BarChartView
                                data={dailyDgLoad}
                                xKey="time"
                                yKey="kwh"
                                name="Daily Generation"
                            />
                        </ChartCard>
                    </div>
                    <p className="text-black text-center py-2"> Monthly DG Consumption</p>
                    <div className='bg-gray-900  h-80'>
                        <ChartCard title="Monthly DG Power Consumption with Average Load (kWh)">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={monthlyDgLoad}>
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



                </div>

                <div className=' col-span-1'>


                    <Card title=" Generator Status ">

                        {/* 🔹  */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <KpiCard title="Running Status" value="ON" />
                            <KpiCard title="Load Factor" value="72%" />
                            <KpiCard title="Available Capacity" value="25 kW" />
                        </div>
                    </Card>
                    <Card title="Energy & Fuel">
                        {/* 🔹  */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            <KpiCard title="Energy Generated (Today)" value="520 kWh" />
                            <KpiCard title="Fuel Consumption (Today)" value="140 L" />
                            <KpiCard title="Fuel Efficiency" value="3.7 kWh/L" />
                        </div>
                    </Card>
                    <Card title="  Performance ">
                        {/* 🔹 */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            <KpiCard title="Runtime (Today)" value="8.5 h" />
                            <KpiCard title="Start Count (Month)" value="18" />
                            <KpiCard title="Peak Load" value="22 kW" />
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
