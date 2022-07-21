import React, {Suspense, useEffect} from "react";
import {
  useParams
} from "react-router-dom";
import NavBar from "../layout/NavBar";
import Modal from "./Modal";
import {Canvas} from "@react-three/fiber";
import Vouchers from "../3d/Vouchers";
import {Environment, Html, OrbitControls} from "@react-three/drei";
const CHAIN_NAME = process.env.REACT_APP_CHAIN_NAME; // Mumbai (Polygon Testnet) Chain ID
const BASE_URL = process.env.REACT_APP_BASE_URL;

type saleViewProps = {
  redeemableName: any, redeemableSymbol: any, modalOpen: any, setModalOpen: any, initiateBuy: any, buttonLock: any,
  redeemableTokenAddress: any, staticReservePriceOfRedeemable: any, reserveSymbol: any, consoleData: any,
  consoleColor: any, saleAddress: string, rTKNAvailable: number, saleView: any
  setSaleAddress: any, reserveTokenAddress: string
}

export default function SaleView({
    redeemableName, redeemableSymbol, modalOpen, setModalOpen, initiateBuy, buttonLock, redeemableTokenAddress,
    staticReservePriceOfRedeemable, reserveSymbol, consoleData, consoleColor, saleAddress, saleView,
    rTKNAvailable, setSaleAddress, reserveTokenAddress
  }: saleViewProps )
{

  let {id}: any = useParams();
  // set token address by url instead of t= (check line 80 onwards works in app.tsx for getting the tokenData)
  useEffect(() => {
    setSaleAddress(id);
  }, []);

  // todo add a message in case the indexing is slow
  console.log(`saleView is set to:`, saleView);

  return (
    <>
      { saleView && (
        <>
          <NavBar string={`${redeemableSymbol} Sale (${redeemableName} Collection)`} stringRight={``} />
          <p className='deploy-own'>Must be connected to <a href={`https://chainlist.org/?search=mumbai&testnets=true`} target="_blank"><b className='modalTextRed'>{CHAIN_NAME}</b></a> Testnet. <a href={`${BASE_URL}`}>Deploy Your Own Sale Here!</a></p>

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
              reserveTokenAddress={reserveTokenAddress}
            />

            <Canvas className="the-canvas" camera={{ position: [0, 0, 20], fov: 50 }} performance={{ min: 0.1 }}>
              <ambientLight intensity={0.5} />
              <directionalLight intensity={0.3} position={[5, 25, 20]} />
              <Suspense fallback={<Html className="black">loading..</Html>}>
                <Vouchers modalOpen={modalOpen} setModalOpen={setModalOpen} amount={rTKNAvailable} redeemableSymbol={redeemableSymbol}/>
                <Environment preset="city" />
              </Suspense>
              <OrbitControls autoRotate autoRotateSpeed={1} enableRotate={true} enablePan={false} enableZoom={false} />
            </Canvas>
          </div>
        </>
      )}
    </>
  )
}
