import { Stage, PresentationControls } from '@react-three/drei'

const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.3}
      polar={[-0.1, Math.PI / 4]}
    >
      ;
      <Stage
        intensity={0.5}
        preset='rembrandt'
        shadows={{
          color: 'skyblue',
          colorBlend: 1,
          opacity: 1
        }}
        adjustCamera={1.75}
        environment='city'
      >
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Stage>
    </PresentationControls>
  )
}
export default Experience
