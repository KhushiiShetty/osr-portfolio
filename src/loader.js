import React, { useEffect, useState } from 'react';
import './index.scss';

const Loader = () => {
  const [isLoaderActive, setIsLoaderActive] = useState(true);

  useEffect(() => {
    // Set a timeout to change the loader state after 3 seconds
    const timer = setTimeout(() => {
      setIsLoaderActive(false);
    }, 3000); // 3 seconds to match the animation duration

    // Clear the timeout if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isLoaderActive ? 'loader loader-active' : 'loader loader-hidden'} />
  );
};

export default Loader;
