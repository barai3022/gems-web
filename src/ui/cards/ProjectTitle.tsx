import { ProjectTitleData } from '@/types'
import React from 'react'



const ProjectTitle = ({
    data
}: {
    data: ProjectTitleData
}) => {
    const {title, capacity, cod} = data;
    return (
        <div className='flex flex-col justify-center text-white border-2 h-full w-full'>
            <p className='text-2xl font-semibold w-full text-center'>{title}</p>
            <p className='text-xl w-full text-center'>{capacity} </p>
            <p className='text-xl w-full text-center'>{cod}</p>
        </div>
    )
} 

export default ProjectTitle
