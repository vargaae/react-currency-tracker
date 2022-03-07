import React, { createContext, useContext, useEffect, useState } from "react";

const Currency = createContext();

const CurrencyContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("Ft");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "HUF") setSymbol("Ft");
  }, [currency]);

  return <Currency.Provider value={{currency,symbol, setCurrency}}>{children}</Currency.Provider>;
};

export default CurrencyContext;

export const CurrencyState = () => {
  return useContext(Currency);
};
