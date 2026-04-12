import { airIndexValues, dataValues, projectTitleInfo } from '@/libs/data/Project'
import AirIndexCard from '@/ui/cards/AirIndexCard'
import DataCard from '@/ui/cards/DataCard'
import ProjectTitle from '@/ui/cards/ProjectTitle'
import BarChart from '@/ui/comps/BarChart'
import CurrentDateTime from '@/ui/comps/CurrentDateTime'
import GenChart from '@/ui/comps/GenChart'
import WeatherData from '@/ui/comps/WeatherData'
import PowerFlowNode from '@/ui/nodes/PowerFlowNode'
import Image from 'next/image'

const page = () => {
    return (
        <div className="flex flex-col h-screen w-full p-1 bg-linear-to-r from-slate-950 via-indigo-950 to-slate-950">
            <div className='flex flex-row border border-white rounded-t-md w-full h-5/7'>
                <div className='w-1/4  border border-white h-full'>
                    <div className='h-1/6 w-full'>
                        <ProjectTitle data={projectTitleInfo} />
                    </div>
                    <div className='border-2 w-full h-1/6 border-white'>
                        <WeatherData />
                    </div>
                    <div className='w-full h-2/3 '>
                        <BarChart />
                    </div>
                </div>
                <div className='flex flex-col w-2/4 border border-white h-full'>
                    <div className='flex-none bg-white font-semibold text-2xl text-center'>
                        Main Power Flow Overview
                    </div>
                    <div className='grow'>
                        <PowerFlowNode />
                    </div>

                </div>
                <div className='flex flex-col justify-top w-1/4 '>
                    <div className='flex flex-col w-full items-center justify-center  h-2/12 border-2 border-white '>
                        <div className="relative w-32 h-24">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                fill={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain"
                            />
                        </div>
                        <CurrentDateTime />
                    </div>
                    <div className='grid grid-cols-2'>
                        {
                            dataValues.map((card, i) => {
                                return (
                                    <DataCard data={card} key={i} />
                                )
                            })
                        }
                    </div>
                    <div className='w-full grow'></div>
                    <div className='grid grid-cols-2 items-end  p-2 gap-2'>
                        {
                            airIndexValues.map((card, i) => {
                                return (
                                    <AirIndexCard data={card} key={i} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='border border-white rounded-b-md w-full h-2/7'>
                <GenChart />
            </div>
        </div>
    )
}

export default page
