import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import './App.css'

export default function App () {
  return (
    <Canvas>
      <color attach='background' args={['#15151a']} />
      <Experience />
    </Canvas>
  )
}
