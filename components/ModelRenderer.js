import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, useGLTF } from '@react-three/drei'
import AsciiRenderer from '../src/AsciiRenderer'
import { useMemo } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import * as THREE from 'three';


// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
//   const gltf = useLoader(GLTFLoader, './scene.gltf')
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <primitive object={gltf.scene} materials />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

function Model(props) {
  // THREE.MeshWireframeMaterial
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/gigachad/scene.gltf')
  const colorMapTex = useLoader(TextureLoader, '/gigachad/textures/Material_diffuse.png')
  const material = useMemo(() => new THREE.MeshBasicMaterial({ wireframe: true }), [])
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane_Material_0.geometry}>
        <meshLambertMaterial ambientLight={0} color="lightgreen" colorMap={colorMapTex} />
        {/* <meshStandardMaterial ambientLight={0.1} color={"green"} colorMap={colorMap} material={material} /> */}
      </mesh>
    </group>
  )
}

export default function ModelRenderer() {
  const [time, setTime] = useState(0.0);

  useFrame((state, delta, xrFrame) => {
    // This function runs at the native refresh rate inside of a shared render-loop
    setTime(time+1.0);
  });

  // const [time, setTime] = useState(0);

  // useEffect(() => {
  //   //Implementing the setInterval method
  //   const interval = setInterval(() => {
  //         setTime(time+1);
  //       }, 1.0/24.0); // 24 frames per second

  //       //Clearing the interval
  //       // return () => clearInterval(interval);
  //   }, [time]);

  // const gltf = useLoader(GLTFLoader, './scene.gltf')
  // const { nodes, materials } = useGLTF('/scene.gltf')
  // console.log(JSON.stringify(nodes))
  // console.log(JSON.stringify(materials))
  

  // const material = MeshBasicMaterial({ wireframe: true })
  // const { nodes, materials } = useGLTF('/scene.gltf')
  const t = time*(1.0/60.0);
  const pi = 3.14159;
  const pi_2 = pi / 2.0;
  window.f = () => {
    console.log(t);
  }

  return (
    <>
      {/* <ambientLight intensity={Math.PI / 2} /> */}
      {/* <spotLight position={[10, 0, 0]} angle={0.015} penumbra={1} decay={0} intensity={Math.PI} /> */}
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {/* <primitive object={gltf.scene} materials /> */}
      {/* <Environment preset="sunset" background /> */}
      {/* <Model rotation={[-180, 90,time*3.14*0.01]} position={[0,0,-30]} /> */}
      <Model rotation={[1.45, 0, 4.1+t]} position={[0,-14.5,-20]} onMouseDown={() => {console.log('down')}} />
      {/* z = 4.7 is face on if x = 1.45 rot */}
      {/* <OrbitControls /> */}
      <AsciiRenderer fgColor="#66ff66" bgColor="black" />
    </>
  )
}
