/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/assets/scene.gltf --transform 
Files: public/assets/scene.gltf [17.08KB] > scene-transformed.glb [1.58MB] (-9170%)
Author: AtTheSpeedOf (https://sketchfab.com/AtTheSpeedOf)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/some-furniture-403f2737ce9e466092242169a813676d
Title: some furniture
*/

import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "/contexts/Customization.jsx";

const Scene = (props) => {
	const { nodes, materials } = useGLTF("./assets/scene.gltf")
  const color = useTexture("public/assets/textures/Metal041A_1K_Color.jpg")
  const roughness = useTexture("public/assets/textures/Metal041A_1K_Roughness.jpg")
  const metalness = useTexture("public/assets/textures/Metal041A_1K_Metalness.jpg")

  const {
    material,
    setMaterial, 
  } = useCustomization();

  console.log("scene material:", material)

  let fieldProps;
  switch (material) {
    case "metal":
      fieldProps = {
        "material-roughness": 0.5 ,
        "material-roughnessMap": roughness,
        "material-metalness":0.5,
        "material-metalnessMap":metalness        
      }
      break;
    default:
      fieldProps = {
        "material-roughness": 0 ,
        "material-roughnessMap": null,
        "material-metalness":0,
        "material-metalnessMap":null            
      }
      break;
  }

	return (
		<group
			{...props}
			dispose={null}
		>
			<mesh
				geometry={nodes.chairlegs_low001_chair1_0.geometry}
				position={[1.9, 0.361, 4.027]}
				rotation={[-Math.PI / 2, 0, -0.776]}
				scale={0.249}       
				material={materials.chair1}
        {...fieldProps}
        >
      </mesh>


     
			<mesh
				geometry={nodes.endtable1_top__low_endtable1_0.geometry}
				material={materials.endtable1}
				position={[1, 0.011, 3.795]}
				rotation={[-Math.PI / 2, 0, 0]}                
			/>
			<mesh
				geometry={nodes.lampscrew_low001_lamp01_0.geometry}
				material={materials.lamp01}
				position={[1, 1.584, 3.8]}
				rotation={[-Math.PI / 2, 0, 0]}
        
			/>
		</group>
	)
}

useGLTF.preload("./assets/scene.gltf")

export default Scene
