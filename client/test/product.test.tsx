import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { setupServer } from "msw/node";
import { graphql } from "msw";
import Product from "../pages/product";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.styles";
import BasketContextProvider from "../context/BasketContextProvider";
import { productDataMock } from "./productData.mock";
import { getStaticProps } from "../pages/product";

const server = setupServer(
  graphql.query("getProducts", (req, res, ctx) => {
    return res(
      ctx.data({
        allProducts: [
          {
            id: "1",
            name: "Energy saving light bulb",
            power: "25W",
            description:
              "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
            price: 1299,
            quantity: 4,
            brand: "Philips",
            weight: 77,
            height: 12.6,
            width: 6.2,
            length: 6.2,
            model_code: "E27 ES",
            colour: "Cool daylight",
            img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
          },
        ],
      })
    );
  })
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

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

  describe("The getStaticProps function", () => {
    it("Should return product data if api call is successful", async () => {
      const mockGetStaticPropsResponse = {
        props: {
          productData: productDataMock,
        },
      };
      const getStaticPropsResponse = await getStaticProps();

      console.log(getStaticPropsResponse);
      console.log(mockGetStaticPropsResponse);

      expect(getStaticPropsResponse).toEqual(mockGetStaticPropsResponse);
    });

    it("Should be redirected if api call is unsuccessful", async () => {
      server.use(
        graphql.query("getProducts", (req, res, ctx) => {
          return res(ctx.status(404));
        })
      );
      const mockRejectedGetStaticPropsResponse = {
        notFound: true,
      };

      const rejectedGetStaticPropsResponse = await getStaticProps();

      expect(rejectedGetStaticPropsResponse).toEqual(
        mockRejectedGetStaticPropsResponse
      );
    });
  });
});
