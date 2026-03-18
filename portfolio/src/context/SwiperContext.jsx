import React, { createContext, useContext, useState } from 'react';

const SwiperContext = createContext({
  mainSwiper: null,
  setMainSwiper: () => {},
});

export const SwiperProvider = ({ children }) => {
  const [mainSwiper, setMainSwiper] = useState(null);

  return (
    <SwiperContext.Provider value={{ mainSwiper, setMainSwiper }}>
      {children}
    </SwiperContext.Provider>
  );
};

export const useMainSwiper = () => useContext(SwiperContext);
