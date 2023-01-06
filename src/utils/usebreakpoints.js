import { useEffect, useState } from 'react';
import breakpoints from './breakpoints';
const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState('');
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

  
    if (360 < windowSize.width && windowSize.width < 768) {
      setBreakPoint(breakpoints[360]);
    }
    if (768 < windowSize.width && windowSize.width < 1024) {
      setBreakPoint(breakpoints[768]);
    }
    if (1024 < windowSize.width && windowSize.width < 1920) {
      setBreakPoint(breakpoints[1024]);
    }
    if (windowSize.width >= 1920) {
      setBreakPoint(breakpoints[1920]);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;