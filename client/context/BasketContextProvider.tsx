import { useState } from "react";
import { BasketContext, TUserContext } from "./BasketContext";

export default function BasketContextProvider({ children }) {
  const [basketQuantity, setBasketQuantity] = useState(0);

  return (
    <BasketContext.Provider
      value={{
        basketQuantity,
        setBasketQuantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
