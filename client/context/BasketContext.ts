import { createContext, Dispatch, SetStateAction } from "react";

export type TUserContext = {
    basketQuantity: number;
    setBasketQuantity: Dispatch<SetStateAction<number>>
}

export const BasketContext = createContext<TUserContext>({
    basketQuantity: 0,
    setBasketQuantity: () => {throw new Error('BasketContext not instantiated')}
});