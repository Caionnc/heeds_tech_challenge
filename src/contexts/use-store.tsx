import React, {createContext, useContext, useState} from 'react';
import {LatLng} from 'react-native-maps';

type Stores = {
  title: string;
  description: string;
  latlng: LatLng;
};

type StoresContextData = {
  stores: Stores[];
  pushStore: (Store: Stores) => void;
};

const StoresContext = createContext<StoresContextData>({} as StoresContextData);

const StoresProvider: React.FC = ({children}) => {
  const [stores, setStores] = useState<Stores[]>([]);

  function pushStore(store: Stores) {
    setStores([...stores, store]);
  }

  return (
    <StoresContext.Provider value={{stores, pushStore}}>
      {children}
    </StoresContext.Provider>
  );
};

function useStores(): StoresContextData {
  const context = useContext(StoresContext);

  if (!context) {
    throw new Error('useStores must be used within an StoresProvider.');
  }
  return context;
}

export {useStores, StoresProvider, StoresContext};
