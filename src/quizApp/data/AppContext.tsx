import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { Data, InitialData } from '../utils/interfaces';

const AppContext = createContext<{
  data: null | Data;
  setData: Dispatch<SetStateAction<null | Data>>;
}>({
  data: null,
  setData: () => {},
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<null | Data>(InitialData);

  const value = {
    data,
    setData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
