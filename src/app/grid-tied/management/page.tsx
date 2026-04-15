"use client"
import { dgValues, gridValues, labelValues, pvValues } from '@/libs/data/Chart';
import { dailySolarCurve, exportData, gridEnergyFlow, monthlySolar } from '@/libs/data/Solar';
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

                    <p className="text-black text-center py-2"> Daily Generation</p>
                    <div className='bg-gray-900  h-80'>
                        <ChartCard title="Real-Time Daily Solar Generation (kWh)">
                            <BarChartView
                                data={dailySolarCurve}
                                xKey="time"
                                yKey="kwh"
                                name="Daily Solar Generation"
                            />
                        </ChartCard>
                    </div>
                    <p className="text-black text-center py-2"> Monthly Generation</p>
                    <div className='bg-gray-900  h-80'>
                        <ChartCard title="Day-wise Monthly Consumtion with Sanction Load (kWh)">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={monthlySolar}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={36} />
                                    <Bar dataKey="gen" fill="#3b82f6" name="Consumption" />
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

                    <ChartCard title="Monthly Solar Generation with Average Line (kWh)">
                        <BarChartView
                            data={exportData}
                            xKey="month"
                            yKey="export"
                            name="Solar Generation Energy"
                        />
                    </ChartCard>
                    <ChartCard title="Monthly Power Consumption with Average Line (kWh)">
                        <BarChartView
                            data={gridEnergyFlow}
                            xKey="month"
                            yKey="export"
                            name="Consumed Energy"
                        />
                    </ChartCard>


                </div>


                <div className=' col-span-1'>
<p className="text-black text-center py-2">Project Brief</p>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                        <Card title="Project Details">
                            <div className="gap-2 ">
                                <div>Client Name</div>
                                <div>Address</div>
                                <div>XX.XX kWp</div>
                                <div>COD: 01/01/2026</div>
                            </div>
                        </Card>
                        <Card title="Company Logo & Time">
                            <div className="gap-2 ">
                                <div>Company(GPL) Logo</div>
                                <div>Time</div>
                            </div>
                        </Card>
                        <Card title="Weather Data">
                            <div className="gap-2 ">
                                <div>32.0°C (58%)</div>
                                <div>Wind: 3.09 m/s (170°)</div>
                                <div>Dhaka, Bangladesh</div>
                            </div>
                        </Card>
                    </div>
                    <Card title="Solar Generation">
                        <div className="grid grid-cols-4 gap-4">
                            <KpiCard title="Today" value="50 kWh" />
                            <KpiCard title="This Month" value="150 kWh" />
                            <KpiCard title="Monthly Average" value="130 kWh" />
                            <KpiCard title="Cumulative" value="1300 kWh" />
                        </div>
                    </Card>
                    <Card title="Saving From Solar">
                        <div className="grid grid-cols-4 gap-4">
                            <KpiCard title="Today" value="50 BDT" />
                            <KpiCard title="This Month" value="150 BDT" />
                            <KpiCard title="Monthly Average" value="130 BDT" />
                            <KpiCard title="Cumulative" value="1300 BDT" />
                        </div>
                    </Card>
                    <Card title="Grid Consumption">
                        <div className="grid grid-cols-4 gap-4">
                            <KpiCard title="Today" value="50 kWh" />
                            <KpiCard title="This Month" value="150 kWh" />
                            <KpiCard title="Monthly Average" value="130 kWh" />
                            <KpiCard title="Cumulative" value="1300 kWh" />
                        </div>
                    </Card>
                    <Card title="BESS Uses">
                        <div className="grid grid-cols-4 gap-4">
                            <KpiCard title="Today" value="50 kWh" />
                            <KpiCard title="This Month" value="150 kWh" />
                            <KpiCard title="Monthly Average" value="130 kWh" />
                            <KpiCard title="Cumulative" value="1300 kWh" />
                        </div>
                    </Card>
                    <Card title="DG Power Uses">
                        <div className="grid grid-cols-4 gap-4">
                            <KpiCard title="Today" value="50 kWh" />
                            <KpiCard title="This Month" value="150 kWh" />
                            <KpiCard title="Monthly Average" value="130 kWh" />
                            <KpiCard title="Cumulative" value="1300 kWh" />
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
