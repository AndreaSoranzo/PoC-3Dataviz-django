/* import React, { useEffect, useRef } from 'react';*/
import { rawData, tabData } from '../App';
import { Canvas } from '@react-three/fiber';
import { GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei';
import BarChart from './BarChart';
import CameraLogger from './CameraLogger';

type CustomCanvasProps = {
    fetched_data: rawData[];
    filteredData: tabData[];
    allData: tabData[];
    showAveragePlane: boolean;
};

function CustomCanvas({ fetched_data, filteredData, allData, showAveragePlane }: CustomCanvasProps) {

    return (
        <Canvas

            data-cy="cy-canvas"
            data-testid="cy-canvas"
            gl={{ preserveDrawingBuffer: true }}
            camera={{ 
                position: [3.4301854408067705,13.60071277758357,-32.28290921318735], 
                rotation: [-3.025, -0.38, 3.2],
                fov: 75,
                near: 0.1,
                far: 1000
            }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <BarChart fetched_data={fetched_data} filteredData={filteredData} allData={allData} showAveragePlane={showAveragePlane}></BarChart>
            <OrbitControls makeDefault
                target={[25, 0, 10]}
            />
            <GizmoHelper
                alignment='top-left'
                margin={[60, 60]}>
                <GizmoViewport
                    axisColors={['red', 'green', 'blue']}
                    labelColor='black' />
            </GizmoHelper>
            <CameraLogger/>
        </Canvas>
    );
}

export default CustomCanvas;