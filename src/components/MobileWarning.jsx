import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                            (typeof window !== "undefined" && window.innerWidth <= 768);
      
      setIsMobile(isMobileDevice);
      
      // Show warning if mobile and not dismissed before
      if (isMobileDevice && !localStorage.getItem('mobile-warning-dismissed')) {
        setIsVisible(true);
        // Add padding to body to prevent content overlap
        document.body.style.paddingTop = '80px';
      } else {
        // Remove padding if not mobile or warning dismissed
        document.body.style.paddingTop = '0';
      }
    };

    checkMobile();

    // Listen for resize events
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      // Clean up body padding on unmount
      document.body.style.paddingTop = '0';
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('mobile-warning-dismissed', 'true');
    // Remove body padding when dismissed
    document.body.style.paddingTop = '0';
  };

  if (!isMobile || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.726-1.36 3.491 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">
                <span className="font-bold">⚠️ High-End 3D Graphics Warning:</span> This portfolio contains intensive 3D graphics and animations. For the best experience, please use a laptop or desktop computer.
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 ml-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
            aria-label="Dismiss warning"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileWarning;
