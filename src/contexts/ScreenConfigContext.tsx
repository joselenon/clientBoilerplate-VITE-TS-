import React, { createContext, useContext, useEffect, useState } from 'react';

interface ScreenConfigContextProps {
  isMobile: boolean;
  width: number;
  height: number;
}

const ScreenConfigContext = createContext<ScreenConfigContextProps>({
  isMobile: false,
  width: window.innerWidth,
  height: window.screen.height,
});

export function ScreenConfigProvider({ children }: { children: JSX.Element }) {
  const [screenConfig, setScreenConfig] = useState<ScreenConfigContextProps>({
    isMobile: window.innerWidth <= 800,
    width: window.innerWidth,
    height: window.screen.height,
  });

  const handleResize = () => {
    setScreenConfig({
      isMobile: window.innerWidth <= 800,
      width: window.innerWidth,
      height: window.screen.height,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <ScreenConfigContext.Provider value={screenConfig}>{children}</ScreenConfigContext.Provider>;
}

export function useScreenConfig() {
  return useContext(ScreenConfigContext);
}
