import { SvgNodeData } from '@/types'
import { Handle, Position } from '@xyflow/react';
import React from 'react'

const SvgS2T4Node = ({ data }: { data: SvgNodeData }) => {
    const {
        SvgComponent = null,
        label,
        widthClass = "w-24",
        heightClass = "h-28",
    } = data;


    return (
        <div className={` border border-gray-50 rounded p-2 flex flex-col items-center ${widthClass} ${heightClass}`} >
            {/* Target Handles */}
            <Handle
                type="target"
                position={Position.Top}
                id="t1"
                style={{ left: '50%' }}
            />

            <Handle
                type="target"
                position={Position.Left}
                id="t2"
                style={{ top: '25%' }}
            />

            <Handle
                type="target"
                position={Position.Left}
                id="t3"
                style={{ top: '75%' }}
            />

            <Handle
                type="target"
                position={Position.Bottom}
                id="t4"
                style={{ left: '25%' }}
            />
            {/* Source Handle */}
            <Handle
                type="source"
                position={Position.Right}
                id="s2"
                style={{ top: '25%' }}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="s1"
                style={{ left: '75%' }}
            />

            {/* Render the SVG Component */}

            {/* <SvgComponent className="w-full h-full" /> */}

            <div className="text-center uppercase font-semibold text-md mt-1">
                {label}
                <p className='flex text-2xl'>
                    Energy Management System </p>
            </div>
        </div>
    )
}

export default SvgS2T4Node
