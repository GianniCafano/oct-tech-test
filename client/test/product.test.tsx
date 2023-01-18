import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Product from "../pages/product";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.styles";
import BasketContextProvider from "../context/BasketContextProvider";
import { productDataMock } from "./productData.mock";

describe("The product page", () => {
  it("should be able to increase and decrease product quantity", async () => {
    const { getByText, getByTitle } = render(
      <ThemeProvider theme={theme}>
        <Product productData={productDataMock} />
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

  it("should be able to add items to the basket", async () => {
    const { getByText, getByTitle } = render(
      <BasketContextProvider>
        <ThemeProvider theme={theme}>
          <Product productData={productDataMock} />
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

  describe("The getStaticprops function", () => {
    it("Should return product data if api call is successful", () => {});

    it("Should be redirected if api call is successful", () => {});
  });
});
