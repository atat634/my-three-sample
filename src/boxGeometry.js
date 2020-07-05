/** @jsx jsx */
import { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { css, jsx } from "@emotion/core";

const theme = css`
    width: 100vw;
    height: 50vh;
    background-color: #000;
`;

const Thing = () => {
    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={ref} onClick={(e) => console.log("clicked")}>
            <boxGeometry attach="geometry" args={[400, 400, 400]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    );
};

export const Box = () => (
    <div css={theme}>
        <Canvas camera={{ position: [0, 0, 1000] }}>
            <Thing />
        </Canvas>
    </div>
);
