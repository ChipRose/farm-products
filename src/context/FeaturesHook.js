import React, { useContext } from "react";
import featuresData from "/src/mocks/featuresData";

const FeaturesContext = React.createContext();

const useFeatures = () => {
  return useContext(FeaturesContext);
};

function FeaturesHook({ children }) {
  return (
    <FeaturesContext.Provider
      value={{
        features: featuresData
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
}

export { useFeatures, FeaturesHook };
