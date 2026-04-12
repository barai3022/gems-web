"use client"
import { addEdge, applyEdgeChanges, applyNodeChanges, Connection, Edge, EdgeChange, Node, NodeChange, ReactFlow } from '@xyflow/react'
import { useCallback, useState } from 'react'
import House from '../svg/House'
import { SvgS1T4Node } from "@/ui/nodes"


const nodeTypes = {
    svgS1T4Node: SvgS1T4Node
}

const initialNodes: Node[] = [
    {
        id: "1",
        type: "svgS1T4Node",
        position: { x: 350, y: 100 },
        data: { label: "EMS", widthClass: "w-54", heightClass: "h-72", SvgComponent: House },
    },
]

const initialEdges: Edge[] = [

]


const PowerFlowNodeV1 = () => {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

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
        <div className="w-full h-[calc(56vh)]">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >

            </ReactFlow>
        </div>
    )
}

export default PowerFlowNodeV1
