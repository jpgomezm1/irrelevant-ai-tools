import { useState, useEffect } from 'react';

interface UseLeadMagnetTimerProps {
  delayInSeconds?: number;
  storageKey?: string;
}

export const useLeadMagnetTimer = ({ 
  delayInSeconds = 10, 
  storageKey = 'leadMagnetShown' 
}: UseLeadMagnetTimerProps = {}) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if modal has been shown today
    const lastShown = localStorage.getItem(storageKey);
    const today = new Date().toDateString();
    
    if (lastShown === today) {
      setHasBeenShown(true);
      return;
    }

    // Set timer to show modal
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setShouldShow(true);
      }
    }, delayInSeconds * 1000);

    return () => clearTimeout(timer);
  }, [delayInSeconds, storageKey, hasBeenShown]);

  const handleClose = () => {
    setShouldShow(false);
    setHasBeenShown(true);
    // Store that modal was shown today
    const today = new Date().toDateString();
    localStorage.setItem(storageKey, today);
  };

  const reset = () => {
    setShouldShow(false);
    setHasBeenShown(false);
    localStorage.removeItem(storageKey);
  };

  return {
    shouldShow: shouldShow && !hasBeenShown,
    handleClose,
    reset // útil para testing
  };
};