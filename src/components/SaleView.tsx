import React, {Suspense, useEffect} from "react";
import {
  useParams
} from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "./Modal";
import {Canvas} from "@react-three/fiber";
import Shoes from "./Shoes";
import {Environment, OrbitControls} from "@react-three/drei";

type saleViewProps = {
  redeemableName: any, redeemableSymbol: any, modalOpen: any, setModalOpen: any, initiateBuy: any, buttonLock: any,
  redeemableTokenAddress: any, staticReservePriceOfRedeemable: any, reserveSymbol: any, consoleData: any,
  consoleColor: any, redeemableInitialSupply: any, saleAddress: string, rTKNAvailable: number, saleView: any
  setSaleAddress: any
}

export default function SaleView({
    redeemableName, redeemableSymbol, modalOpen, setModalOpen, initiateBuy, buttonLock, redeemableTokenAddress,
    staticReservePriceOfRedeemable, reserveSymbol, consoleData, consoleColor, redeemableInitialSupply, saleAddress, saleView,
    rTKNAvailable, setSaleAddress
  }: saleViewProps )
{

  return (
    <>
      { saleView && (
        <>
          <NavBar string={`${redeemableName} (${redeemableSymbol}) Sale!`} stringRight={`Click a Shoe!`} />
          <div className="canvasContainer">
            <Modal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              initiateBuy={initiateBuy}
              buttonLock={buttonLock}
              redeemableTokenAddress={redeemableTokenAddress}
              staticReservePriceOfRedeemable={staticReservePriceOfRedeemable}
              reserveSymbol={reserveSymbol}
              redeemableSymbol={redeemableSymbol}
              consoleData={consoleData}
              consoleColor={consoleColor}
              saleAddress={saleAddress}
              redeemableName={redeemableName}
            />

            <Canvas className="the-canvas" camera={{ position: [0, 0, 20], fov: 50 }} performance={{ min: 0.1 }}>
              <ambientLight intensity={0.5} />
              <directionalLight intensity={0.3} position={[5, 25, 20]} />
              <Suspense fallback={null}>
                <Shoes modalOpen={modalOpen} setModalOpen={setModalOpen} amount={rTKNAvailable} />
                <Environment preset="city" />
              </Suspense>
              <OrbitControls autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>
        </>
      )}
    </>
  )
}
