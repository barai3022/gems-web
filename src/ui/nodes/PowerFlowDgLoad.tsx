"use client"
import { addEdge, applyEdgeChanges, applyNodeChanges, Connection, Edge, EdgeChange, Node, NodeChange, NodeTypes, ReactFlow } from '@xyflow/react'
import { useCallback, useState } from 'react'

import PvSVG from '../svg/PvSVG'
import House from '../svg/House'
import SvgSourceRightNode from './SvgSourceRightNode'
import SvgTargetLeftNode from './SvgTargetLeftNode'
import SvgTargetTopNode from './SvgTargetTopNode'
import GridLine from '../svg/GridLine'
import Generator from '../svg/Generator'



const nodeTypes: NodeTypes = {
    svgSourceRightNode: SvgSourceRightNode,
    svgTargetLeftNode: SvgTargetLeftNode,
    svgTargetTopNode:SvgTargetTopNode
}


const initialNodes: Node[] = [

    {
        id: "1",
        type: "svgSourceRightNode",
        position: { x: 20, y: 50 },
        data: { label: "PV", widthClass: "w-24", heightClass: "h-28", SvgComponent: Generator },
    },


    {
        id: "2",
        type: "svgTargetLeftNode",

        position: { x: 650, y: 50 },
        data: { label: "Load", widthClass: "w-24", heightClass: "h-28", SvgComponent: House },
    },




    {
        id: "10",
        type: "svgTargetTopNode",
        position: { x: 565, y: 300 },
        data: { label: "", widthClass: "w-4", heightClass: "h-4", SvgComponent: House },
    },

]

const initialEdges: Edge[] = [
    { id: "e2-1", type: "step", source: "1", target: "2", animated: true, style: { stroke: "#4ADE80", strokeWidth: 2 } },
];



const PowerFlowDgLoad = () => {

    const [nodes, setNodes] = useState<Node[]>(initialNodes)
    const [edges, setEdges] = useState<Edge[]>(initialEdges)

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );
    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        []
    );
    return (
        <div className='text-blue-400 relative  w-full ' style={{ height: '100%', width: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                proOptions={{ hideAttribution: true }}
                fitView
            >
            </ReactFlow>

        </div>
    )
}

export default PowerFlowDgLoad
