import React, { useContext, useEffect } from "react";
import { BasketContext } from "../context/BasketContext";
import {
  StyledBasketDiv,
  StyledBasketImg,
  StyledBasketBadgeSpan,
} from "../styles/Basket.styles";

export default function Basket() {
  const { basketQuantity } = useContext(BasketContext);
  //   useEffect(() => {
  //     console.log(basketQuantity);
  //   }, [basketQuantity]);
  return (
    <StyledBasketDiv>
      <StyledBasketImg src="/basket.svg" />
      {basketQuantity >= 1 ? (
        <StyledBasketBadgeSpan title="Basket items">
          {basketQuantity}
        </StyledBasketBadgeSpan>
      ) : null}
    </StyledBasketDiv>
  );
}
