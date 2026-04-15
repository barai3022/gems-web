
import { dgValues, gridValues, labelValues, pvValues } from '@/libs/data/Chart';
import { StackedAreaChartData } from '@/types';
import StackedAreaChart from '@/ui/charts/StackedAreaChart';
import PowerFlowNode from '@/ui/nodes/PowerFlowNode';
import React from 'react'
import BarChart from '@/ui/comps/BarChart';


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
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Residential EMS Dashboard</h1>

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







                    <Card title="Solar Data">
                        <div className="grid grid-cols-4 gap-4">
                            <KpiCard title="Solar Generation" value="200kWh" />
                            <KpiCard title="Solar Performance Ratio" value="85%" />
                            <KpiCard title="Solar Savings" value="৳ 2000" />
                        </div>
                    </Card>

                    <Card title="BESS Data">
                        <div className="grid grid-cols-4 gap-4">
                            <KpiCard title="BESS SOC" value="78%" />
                            <KpiCard title="BESS Charging/Discharging Rate" value="12kWh" />
                            <KpiCard title="Estimated BESS Backup" value="2h" />
                        </div>
                    </Card>
                    <Card title="BESS Data">
                        <div className="grid grid-cols-4 gap-4">
                            <KpiCard title="DG Generation" value="kWh" />
                            <KpiCard title="Total Apartment Consumption" value="1250 kWh" />
                            <KpiCard title="Common Area Consumption" value="450 kWh" />
                            <KpiCard title="Estimated Monthly Bill" value="৳ 15,000" />

                        </div>
                    </Card>




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
// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 p-4 space-y-6">

//       {/* ================= KPI BAR ================= */}
//       <div className="grid grid-cols-6 gap-4">

//         <div className="bg-white rounded-2xl p-4 shadow-md border">
//           <p className="text-sm text-gray-500">Total Savings</p>
//           <p className="text-2xl font-bold text-green-600">$12,500</p>
//         </div>

//         <div className="bg-white rounded-2xl p-4 shadow-md border">
//           <p className="text-sm text-gray-500">Solar Generation</p>
//           <p className="text-2xl font-bold text-yellow-500">450 kW</p>
//         </div>

//         <div className="bg-white rounded-2xl p-4 shadow-md border">
//           <p className="text-sm text-gray-500">Load Demand</p>
//           <p className="text-2xl font-bold text-gray-800">820 kW</p>
//         </div>

//         <div className="bg-white rounded-2xl p-4 shadow-md border">
//           <p className="text-sm text-gray-500">BESS SOC</p>
//           <p className="text-2xl font-bold text-green-500">78%</p>
//         </div>

//         <div className="bg-white rounded-2xl p-4 shadow-md border">
//           <p className="text-sm text-gray-500">Green Power</p>
//           <p className="text-2xl font-bold text-emerald-500">65%</p>
//         </div>

//         <div className="bg-white rounded-2xl p-4 shadow-md border">
//           <p className="text-sm text-gray-500">Grid Status</p>
//           <p className="text-2xl font-bold text-blue-500">ONLINE</p>
//         </div>

//       </div>


//       {/* ================= MAIN GRID ================= */}
//       <div className="grid grid-cols-12 gap-4">

//         {/* Power Flow Diagram */}
//         <div className="col-span-8 bg-white rounded-2xl p-4 shadow-md border">
//           <h2 className="text-lg font-semibold mb-3">⚡ Power Flow Diagram</h2>

//           <div className="h-72 border rounded-xl flex items-center justify-around text-sm bg-gray-50">

//             <div className="text-center">
//               <p>☀️ Solar</p>
//               <p className="text-yellow-500 font-semibold">450 kW</p>
//             </div>

//             <div className="animate-pulse text-green-500">➡</div>

//             <div className="text-center">
//               <p>🔋 BESS</p>
//               <p className="text-gray-700">Discharging</p>
//             </div>

//             <div className="animate-pulse text-blue-500">➡</div>

//             <div className="text-center">
//               <p>🏭 Load</p>
//               <p className="text-gray-800 font-semibold">820 kW</p>
//             </div>

//           </div>
//         </div>


//         {/* Project Brief */}
//         <div className="col-span-4 bg-white rounded-2xl p-4 shadow-md border">
//           <h2 className="text-lg font-semibold mb-3">📄 Project Brief</h2>

//           <ul className="space-y-2 text-sm text-gray-600">
//             <li>Solar Capacity: 1.2 MWp</li>
//             <li>BESS Capacity: 2 MWh</li>
//             <li>Hybrid Inverter</li>
//             <li>Peak Shaving Enabled</li>
//           </ul>
//         </div>


//         {/* Solar Generation Curve */}
//         <div className="col-span-6 bg-white rounded-2xl p-4 shadow-md border">
//           <h2 className="text-lg font-semibold mb-3">☀️ Solar Generation Curve</h2>

//           <div className="h-64 border rounded-xl flex items-center justify-center text-gray-400 bg-gray-50">
//             Chart Area
//           </div>
//         </div>


//         {/* Day Load Curve */}
//         <div className="col-span-6 bg-white rounded-2xl p-4 shadow-md border">
//           <h2 className="text-lg font-semibold mb-3">📊 Day Load Curve</h2>

//           <div className="h-64 border rounded-xl flex items-center justify-center text-gray-400 bg-gray-50">
//             Load Graph Area
//           </div>
//         </div>


//         {/* ELDC Panel */}
//         <div className="col-span-8 bg-white rounded-2xl p-4 shadow-md border">
//           <h2 className="text-lg font-semibold mb-3">
//             ⚙️ Economic Load Dispatch Center (ELDC)
//           </h2>

//           <div className="grid grid-cols-4 gap-4 text-center">

//             <div className="bg-gray-100 p-3 rounded-xl">
//               <p className="text-sm text-gray-600">Solar Priority</p>
//               <p className="text-green-600 font-bold">ACTIVE</p>
//             </div>

//             <div className="bg-gray-100 p-3 rounded-xl">
//               <p className="text-sm text-gray-600">BESS Mode</p>
//               <p className="text-green-600 font-bold">DISCHARGING</p>
//             </div>

//             <div className="bg-gray-100 p-3 rounded-xl">
//               <p className="text-sm text-gray-600">Grid Mode</p>
//               <p className="text-blue-600 font-bold">IMPORT</p>
//             </div>

//             <div className="bg-gray-100 p-3 rounded-xl">
//               <p className="text-sm text-gray-600">Generator</p>
//               <p className="text-red-500 font-bold">OFF</p>
//             </div>

//           </div>
//         </div>


//         {/* Project Location */}
//         <div className="col-span-4 bg-white rounded-2xl p-4 shadow-md border">
//           <h2 className="text-lg font-semibold mb-3">📍 Project Location</h2>

//           <div className="h-48 border rounded-xl flex items-center justify-center text-gray-400 bg-gray-50">
//             Map Area
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }