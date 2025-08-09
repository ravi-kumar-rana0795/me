import { useEffect, useState } from 'react';

const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = () => setIsSmall(mediaQuery.matches);
    handleChange(); // Check initially

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isSmall;
}

export default useIsSmallScreen;