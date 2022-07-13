/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import {Text, useGLTF} from '@react-three/drei'
import { GLTF } from 'three-stdlib'

const VOUCHER_URL = 'https://assets.unegma.net/unegma.work/rain-voucher-sale.unegma.work/voucher.gltf';

type GLTFResult = GLTF & {
  nodes: {
    GoldCoin: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
  }
}

export default function RTKN({ redeemableSymbol, ...props }: any) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(VOUCHER_URL) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <Text
        position={[0, 0.2, 0]}
        rotation={[-1.55,0,-0.7]}
        fontSize={0.7}
        // lineHeight={0.8}
        // material-toneMapped={false}
        color='#444444'
      >
        {redeemableSymbol}
      </Text>

      <mesh castShadow receiveShadow geometry={nodes.GoldCoin.geometry}rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <meshPhysicalMaterial color="gold"/>
      </mesh>

      <Text
        position={[0, -0.2, 0]}
        rotation={[1.55,0,-1.7]}
        fontSize={0.7}
        // lineHeight={0.8}
        // material-toneMapped={false}
        color='#444444'
      >
        {redeemableSymbol}
      </Text>
    </group>
)
}

useGLTF.preload(VOUCHER_URL)
