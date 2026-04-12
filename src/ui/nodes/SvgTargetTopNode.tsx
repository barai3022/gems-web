import { SvgNodeData } from '@/types'
import { Handle, Position } from '@xyflow/react'
import React from 'react'

const SvgTargetTopNode = ({
  data,
}: {
  data: SvgNodeData
}) => {
  const {
    SvgComponent,
    label,
    widthClass = 'w-24',
    heightClass = 'h-28',
  } = data

  return (
    <div
      className={`border  border-gray-50 rounded p-2 flex flex-col items-center 
                  ${widthClass} ${heightClass} select-none`}
    >
      {/* Target Handle */}
      <Handle
        type="target"
        position={Position.Top}
        id="s1"
        className="absolute left-1/2 -translate-x-1/2"
      />

      {/* SVG */}
      <SvgComponent className=" " style={{ height: '100%', width: '100%' }} />

      {/* Label */}
      <div className="text-center uppercase font-semibold text-md mt-3">
        {label}
      </div>
    </div>
  )
}

export default SvgTargetTopNode
