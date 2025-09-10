import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useWebGL } from "../../hooks/useWebGL";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf", undefined, (error) => {
    console.error("Failed to load computer model:", error);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const { webGLSupported, isChecking } = useWebGL();

  useEffect(() => {
    // More aggressive mobile detection
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                            (typeof window !== "undefined" && window.innerWidth <= 768) ||
                            (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 500px)").matches);
      
      console.log('Mobile detection:', { 
        userAgent: navigator.userAgent, 
        innerWidth: window.innerWidth, 
        isMobileDevice 
      });
      
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
      const mediaQuery = window.matchMedia("(max-width: 500px)");
      
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
    }
  }, []);

  // Timeout fallback for mobile - show fallback after 2 seconds
  useEffect(() => {
    if (isMobile) {
      console.log('Mobile detected, setting 2s timeout for fallback');
      const timer = setTimeout(() => {
        console.log('Timeout reached, showing fallback');
        setShowFallback(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Debug logging
  useEffect(() => {
    console.log('ComputersCanvas state:', { isMobile, webGLSupported, isChecking, showFallback });
  }, [isMobile, webGLSupported, isChecking, showFallback]);

  // TEMPORARY: Show fallback immediately on mobile for testing
  if (isMobile) {
    console.log('Showing fallback immediately for mobile');
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-4xl font-bold">💻</span>
          </div>
          <p className="text-white text-sm opacity-75">Desktop Setup</p>
        </div>
      </div>
    );
  }

  // Show fallback for mobile when WebGL is not supported or timeout reached
  if (isMobile && ((!isChecking && !webGLSupported) || showFallback)) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-4xl font-bold">💻</span>
          </div>
          <p className="text-white text-sm opacity-75">Desktop Setup</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
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
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          enableRotate={!isMobile}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
