"use client"
import { addEdge, applyEdgeChanges, applyNodeChanges, Connection, Edge, EdgeChange, Node, NodeChange, NodeTypes, ReactFlow } from '@xyflow/react'
import { useCallback, useState } from 'react'
import Bess from '../svg/Bess'
import Generator from '../svg/Generator'
import GridLine from '../svg/GridLine'
import PvSVG from '../svg/PvSVG'
import House from '../svg/House'
import SvgSourceRightNode from './SvgSourceRightNode'
import SvgSourceLeftNode from './SvgSourceLeftNode'
import SvgSourceBottomNode from './SvgSourceBottomNode'
import SvgTargetLeftNode from './SvgTargetLeftNode'
import SvgSourceTopNode from './SvgSourceTopNode'
import SvgTargetTopNode from './SvgTargetTopNode'
import SvgS2T4Node from './SvgS2T4Node'


const nodeTypes: NodeTypes = {
    svgSourceRightNode: SvgSourceRightNode,
    svgSourceLeftNode: SvgSourceLeftNode,
    svgSourceBottomNode: SvgSourceBottomNode,
    svgSourceTopNode: SvgSourceTopNode,
    svgTargetLeftNode: SvgTargetLeftNode,
    svgTargetTopNode: SvgTargetTopNode,
    svgS2T4Node: SvgS2T4Node
}


const initialNodes: Node[] = [
    {
        id: "1",
        type: "svgS2T4Node",
        position: { x: 250, y: 100 },
        data: { label: "EMS", widthClass: "w-54", heightClass: "h-72", SvgComponent: null },
    },
    {
        id: "2",
        type: "svgSourceRightNode",
        position: { x: 20, y: 10 },
        data: { label: "PV", widthClass: "w-24", heightClass: "h-28", SvgComponent: PvSVG },
    },

    {
        id: "3",
        type: "svgSourceRightNode",
        position: { x: 20, y: 150 },
        data: { label: "BESS", widthClass: "w-24", heightClass: "h-28", SvgComponent: Bess },
    },
    {
        id: "4",
        type: "svgSourceRightNode",
        position: { x: 20, y: 300 },
        data: { label: "Grid", widthClass: "w-24", heightClass: "h-28", SvgComponent: GridLine },
    },
    {
        id: "5",
        type: "svgSourceRightNode",
        position: { x: 20, y: 450 },
        data: { label: "Generator", widthClass: "w-28", heightClass: "h-28", SvgComponent: Generator },
    },
    {
        id: "6",
        type: "svgTargetLeftNode",

        position: { x: 650, y: 150 },
        data: { label: "Load", widthClass: "w-24", heightClass: "h-28", SvgComponent: House },
    },
    {
        id: "7",
        type: "svgTargetTopNode",
        position: { x: 420, y: 500 },
        data: { label: "Critical", widthClass: "w-16", heightClass: "h-16", SvgComponent: House },
    },
    {
        id: "8",
        type: "svgTargetTopNode",
        position: { x: 490, y: 500 },
        data: { label: "", widthClass: "w-16", heightClass: "h-16", SvgComponent: House },
    },
    {
        id: "9",
        type: "svgTargetTopNode",
        position: { x: 560, y: 500 },
        data: { label: "Loads", widthClass: "w-16", heightClass: "h-16", SvgComponent: House },
    },


    // {
    //     id: "8",
    //     type: "svgTargetTopNode",

    //     position: { x: 400, y: 450 },
    //     data: { label: "Loads ", widthClass: "w-16", heightClass: "h-16", SvgComponent: House },
    // },
    // {
    //     id: "9",
    //     type: "svgTargetTopNode",
    //     position: { x: 475, y: 450 },
    //     data: { label: "", widthClass: "w-16", heightClass: "h-16", SvgComponent: House },
    // },

    {
        id: "10",
        type: "svgTargetTopNode",
        position: { x: 565, y: 600 },
        data: { label: "", widthClass: "w-4", heightClass: "h-4", SvgComponent: House },
    },

]

const initialEdges: Edge[] = [

    { id: "e2-1", type: "step", source: "2", target: "1", targetHandle: "t1", animated: true, style: { stroke: "#4ADE80", strokeWidth: 2 } },
    { id: "e3-1", type: "step", source: "3", target: "1", targetHandle: "t2", animated: true, style: { stroke: "#A3E635", strokeWidth: 2 } },
    { id: "e4-1", type: "step", source: "4", target: "1", targetHandle: "t3", animated: true, style: { stroke: "#EAB308", strokeWidth: 2 } },
    { id: "e5-1", type: "step", source: "5", target: "1", targetHandle: "t4", animated: true, style: { stroke: "#EA580C", strokeWidth: 2 } },

    { id: "e5-6", type: "step", source: "1", target: "6", sourceHandle: "s2", animated: true, style: { stroke: "#ffffff", strokeWidth: 2 } },
    { id: "e5-7", type: "step", source: "1", target: "7", sourceHandle: "s1", animated: true, style: { stroke: "#ffffff", strokeWidth: 2 } },
    { id: "e5-8", type: "step", source: "1", target: "8", sourceHandle: "s1", animated: true, style: { stroke: "#ffffff", strokeWidth: 2 } },
    { id: "e5-9", type: "step", source: "1", target: "9", sourceHandle: "s1", animated: true, style: { stroke: "#ffffff", strokeWidth: 2 } },



];



const PowerFlowNode = () => {

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

export default PowerFlowNode
