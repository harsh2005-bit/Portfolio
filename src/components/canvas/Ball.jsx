import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useWebGL } from "../../hooks/useWebGL";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl], undefined, (error) => {
    console.error("Failed to load ball texture:", error);
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const { webGLSupported, isChecking } = useWebGL();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Safari < 14 uses addListener/removeListener
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleMediaQueryChange);
      return () => mediaQuery.removeListener(handleMediaQueryChange);
    }
  }, []);

  // Timeout fallback for mobile - show fallback after 3 seconds
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setShowFallback(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Show fallback for mobile when WebGL is not supported or timeout reached
  if (isMobile && ((!isChecking && !webGLSupported) || showFallback)) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">⚡</span>
          </div>
          <p className="text-white text-xs opacity-75">Tech</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      gl={{ 
        preserveDrawingBuffer: false, 
        powerPreference: "high-performance", 
        antialias: !isMobile,
        alpha: true,
        failIfMajorPerformanceCaveat: false
      }}
      onCreated={({ gl }) => {
        // Additional mobile optimizations
        if (isMobile) {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          enableRotate={!isMobile}
          enablePan={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
