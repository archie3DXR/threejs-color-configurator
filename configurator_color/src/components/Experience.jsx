import {
	Stage,
	PresentationControls,
	MeshReflectorMaterial
} from "@react-three/drei"

import Scene from "./Scene"

const Experience = () => {
	return (

		<PresentationControls
			speed={1.5}
			global
			zoom={0.7}
			polar={[-0.1, Math.PI / 4]}
			rotation={[Math.PI / 8, Math.PI * 0.1, 0]}
		>
			<Stage
				preset="portrait"
				intensity={1}
        shadows="accumulative"
				castShadow
			>
			<Scene/>
			</Stage>

      <mesh  receiveShadow
				rotation={[-Math.PI / 2, 0, 0]}
				position-y={-0.8}
			>
				<planeGeometry args={[170, 170]} />
				<MeshReflectorMaterial
					blur={[300, 100]}
					resolution={2048}
					mixBlur={1}
					mixStrength={30}
					roughness={.9}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color="#202020"
					metalness={0.6}
				/>
			</mesh>
		</PresentationControls>
	)
}
export default Experience
