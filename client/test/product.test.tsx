import { render, fireEvent } from "@testing-library/react";
import Product from "../pages/product";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.styles";
import { BasketContext } from "../context/BasketContext";
import BasketContextProvider from "../context/BasketContextProvider";
import React from "react";

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(
    <ThemeProvider theme={theme}>
      <Product />
    </ThemeProvider>
  );

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(
    <BasketContextProvider>
      <ThemeProvider theme={theme}>
        <Product />
      </ThemeProvider>
    </BasketContextProvider>
  );

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});
