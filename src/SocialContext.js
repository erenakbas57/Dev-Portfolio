import React, { createContext, useState } from 'react';

const SocialContext = createContext({
  isEmailFlipped: false,
  setIsEmailFlipped: () => {},
  isPhoneFlipped:false,
  setIsPhoneFlipped: () => {}
});

export const SocialProvider = ({ children }) => {
  const [isEmailFlipped, setIsEmailFlipped] = useState(false);
  const [isPhoneFlipped, setIsPhoneFlipped] = useState(false);

  return (
    <SocialContext.Provider value={{ isEmailFlipped, setIsEmailFlipped, isPhoneFlipped, setIsPhoneFlipped }}>
      {children}
    </SocialContext.Provider>
  );
};

export const useSocialContext = () => React.useContext(SocialContext);
