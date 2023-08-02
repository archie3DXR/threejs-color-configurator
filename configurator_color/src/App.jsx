import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import "./App.css"
import Configurator from "./components/Configurator"
import { CustomizationProvider } from "../contexts/Customization.jsx"

export default function App() {
	return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#32363f"]} />
          <fog attach="fog" args={["#32363f", -5, 15]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
	)
}
