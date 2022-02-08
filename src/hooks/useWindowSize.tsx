import { useCallback, useEffect, useState } from 'react';
import { throttle } from 'lodash';

export default function useWindowWidth() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', throttle(handleSize, 200));

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [handleSize]);

  return windowSize;
}
