import { SvgNodeData } from '@/types'
import { Handle, Position } from '@xyflow/react'
import React from 'react'

const SvgSourceBottomNode = ({
  data,
}: {
  data: SvgNodeData
}) => {
  const {
    SvgComponent,
    label,
    widthClass = 'w-24',
    heightClass = 'h-24',
  } = data

  return (
    <div
      className={`relative border border-gray-300 rounded p-2 flex flex-col items-center 
                  ${widthClass} ${heightClass} select-none`}
    >
      {/* Source Handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="s1"
        className="absolute left-1/2 -translate-x-1/2"
      />

      {/* SVG */}
      <SvgComponent className="w-full h-full pointer-events-none" />

      {/* Label */}
      <div className="text-center uppercase font-semibold text-md mt-1">
        {label}
      </div>
    </div>
  )
}

export default SvgSourceBottomNode
