import { useState, useEffect } from 'react';

export const useWebGL = () => {
  const [webGLSupported, setWebGLSupported] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        console.log('WebGL check:', { gl: !!gl, userAgent: navigator.userAgent });
        
        if (gl) {
          setWebGLSupported(true);
        } else {
          setWebGLSupported(false);
        }
      } catch (e) {
        console.error('WebGL check failed:', e);
        setWebGLSupported(false);
      }
      setIsChecking(false);
    };

    // Check immediately
    checkWebGL();

    // Also check after a short delay to handle async loading
    const timeout = setTimeout(checkWebGL, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  return { webGLSupported, isChecking };
};
