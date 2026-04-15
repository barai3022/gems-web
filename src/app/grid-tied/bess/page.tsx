"use client"
import { dailyBESSPower, monthlyBESSPower } from '@/libs/data/BESS';
import { dailyDgLoad, monthlyDgLoad } from '@/libs/data/Dg';
import PowerFlowBessLoad from '@/ui/nodes/PowerFlowBessLoad';
import PowerFlowDgLoad from '@/ui/nodes/PowerFlowDgLoad';
import React, { ReactNode } from 'react';
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
            <h1 className="text-2xl font-bold text-slate-800 mb-4">BESS Dashboard</h1>

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
                        <PowerFlowBessLoad />
                    </div>
                    <p className="text-black text-center py-2"> Daily Generation</p>
                    <div className='bg-gray-900  h-80'>
                        <ChartCard title="Real-Time BESS Power uses (kWh)">
                            <BarChartView
                                data={dailyBESSPower}
                                xKey="time"
                                yKey="kwh"
                                name="Daily Generation"
                            />
                        </ChartCard>
                    </div>
                    <p className="text-black text-center py-2"> Monthly BESS Consumption/USES</p>
                    <div className='bg-gray-900  h-80'>
                        <ChartCard title="Monthly BESS Consumption/USES with Average Line (kWh)">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={monthlyBESSPower}>
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


                    <Card title="Battery Status">

                        {/* 🔹  */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <KpiCard title="State of Charge (SOC)" value="68%" />
                            <KpiCard title="State of Health (SOH)" value="96%" />
                            <KpiCard title="Available Capacity" value="320 kWh" />
                        </div>
                    </Card>
                    <Card title="Energy Flow">
                        {/* 🔹  */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            <KpiCard title="Charge Rate" value="25 kW" />
                            <KpiCard title="Discharge Rate" value="20 kW" />
                            <KpiCard title="Duration at Current Loade" value="2.5 h" />
                            <KpiCard title="Charge Energy (Today)" value="120 kWh" />
                            <KpiCard title="Discharge Energy (Today)" value="110 kWh" />
                            <KpiCard title="Net Energy (Today)" value="-10 kWh" />
                        </div>
                    </Card>
                    <Card title=" Performance">
                        {/* 🔹 */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            <KpiCard title="Round Trip Efficiency" value="92%" />
                            <KpiCard title="Cycle Count(this month)  " value="45 cycles" />
                            <KpiCard title="Cumulative Cycle Count  " value="4565 cycles" />
                            <KpiCard title="Peak Power" value="25 kW" />
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
