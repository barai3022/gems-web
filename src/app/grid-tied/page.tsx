
import { dgValues, gridValues, labelValues, pvValues } from '@/libs/data/Chart';
import { StackedAreaChartData } from '@/types';
import StackedAreaChart from '@/ui/charts/StackedAreaChart';
import BarChart from '@/ui/comps/BarChart';
import PowerFlowNode from '@/ui/nodes/PowerFlowNode';
import React from 'react'



// Alerts
const alerts = [
    "High consumption in Apartment 201",
    "Lift maintenance due tomorrow",
    "Generator fuel level low",
    "Solar system offline"
];


const page = () => {

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
        <div className="p-6 bg-gray-50 min-h-screen space-y-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Grid Tie Dash Board</h1>

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
                        <PowerFlowNode />
                    </div>
                    <p className="text-black text-center py-2"> Solar Generation</p>
                    <div className='bg-gray-900  h-80'>
                        <StackedAreaChart data={chartData2} />
                    </div>

                    <p className="text-black text-center py-2">Load Curve</p>
                    <div className='bg-gray-900  h-80'>
                        <StackedAreaChart data={chartData1} />

                    </div>
                    <p className="text-black text-center py-2">Bar Chart</p>
                    <div className='bg-gray-900  h-80 w-100'>
                        <BarChart />
                    </div>
                </div>

                <div className='col-span-1 h-125'>
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




                    <div className="grid grid-cols-4 gap-4">


                        <KpiCard title="Solar Generation" value="200kWh" />
                        <KpiCard title="Solar Performance Ratio" value="85%" />
                        <KpiCard title="Solar Savings" value="৳ 2000" />
                        <KpiCard title="BESS SOC" value="78%" />
                        <KpiCard title="BESS Charging/Discharging Rate" value="12kWh" />
                        <KpiCard title="Estimated BESS Backup" value="2h" />
                        <KpiCard title="DG Generation" value="kWh" />

                        <KpiCard title="Total Apartment Consumption" value="1250 kWh" />
                        <KpiCard title="Common Area Consumption" value="450 kWh" />
                        <KpiCard title="Estimated Monthly Bill" value="৳ 15,000" />

                    </div>


                    <Card title="Weather Data">

                        <div className="grid grid-cols-3 gap-4">
                            <KpiCard title="PM 1.0" value="25 ug/m3" />
                            <KpiCard title="PM 2.5" value="36ug/m3" />
                            <KpiCard title="PM 10" value="50ug/m3" />
                            <KpiCard title="Humidity" value="50%" />
                        </div>
                    </Card>

                    <Card title="Social Benefits">

                        <div className="grid grid-cols-3 gap-4">
                            <KpiCard title="Standard Coal saving" value="25 kg" />
                            <KpiCard title="Reduction CO2 emission" value="30 kg" />
                            <KpiCard title="Reduce sulfur dioxide emission" value="50 kg" />
                            <KpiCard title="Nitrogen oxide reduction" value="50 kg" />
                            <KpiCard title="Carbon powder reduction" value="50 kg" />
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
