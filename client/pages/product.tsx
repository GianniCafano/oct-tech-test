import { useContext, useState } from "react";
import Layout from "../components/Layout";
import { BasketContext, TUserContext } from "../context/BasketContext";
import { getProducts } from "../services/getProducts";
import { formatPrice } from "../helpers/formatPrice";
import { TProductProps } from "../types/product.types";

import {
  StyledProductImage,
  StyledProductSection,
  StyledProductNameHeader,
  StyledProductSubheadingHeader,
  StyledProductCtaDiv,
  StyledProductPriceBasketDiv,
  StyledProductQuantityDiv,
  StyledProductAddToBasketButton,
  StyledProductPriceSpan,
  StyledProductQuantityControlsDiv,
  StyledProductQuantityTextSpan,
  StyledProductQuantityButton,
  StyledProductQuantityNumberSpan,
  StyledProductMetaDiv,
  StyledProductDescriptionParagraph,
  StyledDescriptionSpecsDiv,
  StyledProductSpecsDl,
  StyledProductMainWrapperDiv,
  StyledProductInformationDiv,
} from "../styles/pages/product.styles";

export default function Product({ productData }: TProductProps) {
  const { setBasketQuantity } = useContext<TUserContext>(BasketContext);

  const [quantity, setQuantity] = useState<number>(1);
  const decreaseQuantityButtonDisabled = quantity <= 1;

  function handleDecreaseQuantityButtonClick(): void {
    setQuantity((prevQuantityAmount) => prevQuantityAmount - 1);
  }

  function handleIncreaseQuantityButtonClick(): void {
    setQuantity((prevQuantityAmount) => prevQuantityAmount + 1);
  }

  function addToBasket(): void {
    setBasketQuantity(quantity);
  }

  return (
    <Layout>
      <StyledProductSection>
        <StyledProductMainWrapperDiv>
          <StyledProductImage
            src={productData.img_url}
            alt={`Image for ${productData.name}`}
          />
          <StyledProductInformationDiv>
            <StyledProductNameHeader>
              {productData.name}
            </StyledProductNameHeader>
            <StyledProductMetaDiv>
              {productData.power} // Packet of {productData.quantity}
            </StyledProductMetaDiv>
            <StyledProductCtaDiv>
              <StyledProductPriceBasketDiv>
                <StyledProductPriceSpan>
                  £{formatPrice(productData.price)}
                </StyledProductPriceSpan>
                <StyledProductQuantityDiv>
                  <StyledProductQuantityTextSpan>
                    Qty.
                  </StyledProductQuantityTextSpan>
                  <StyledProductQuantityControlsDiv>
                    <StyledProductQuantityButton
                      disabled={decreaseQuantityButtonDisabled}
                      onClick={handleDecreaseQuantityButtonClick}
                    >
                      -
                    </StyledProductQuantityButton>
                    <StyledProductQuantityNumberSpan title="Current quantity">
                      {quantity}
                    </StyledProductQuantityNumberSpan>
                    <StyledProductQuantityButton
                      onClick={handleIncreaseQuantityButtonClick}
                    >
                      +
                    </StyledProductQuantityButton>
                  </StyledProductQuantityControlsDiv>
                </StyledProductQuantityDiv>
              </StyledProductPriceBasketDiv>
              <StyledProductAddToBasketButton onClick={() => addToBasket()}>
                Add to cart
              </StyledProductAddToBasketButton>
            </StyledProductCtaDiv>
          </StyledProductInformationDiv>
        </StyledProductMainWrapperDiv>
      </StyledProductSection>
      <StyledProductSection>
        <StyledProductSubheadingHeader>
          Description
        </StyledProductSubheadingHeader>
        <StyledProductDescriptionParagraph>
          {productData.description}
        </StyledProductDescriptionParagraph>
      </StyledProductSection>
      <StyledProductSection>
        <StyledProductSubheadingHeader>
          Specifications
        </StyledProductSubheadingHeader>
        <StyledProductSpecsDl>
          <StyledDescriptionSpecsDiv>
            <dt>Brand</dt>
            <dd>{productData.brand}</dd>
          </StyledDescriptionSpecsDiv>
          <StyledDescriptionSpecsDiv>
            <dt>Item weight (g)</dt>
            <dd>{productData.weight}</dd>
          </StyledDescriptionSpecsDiv>
          <StyledDescriptionSpecsDiv>
            <dt>Dimensions (cm)</dt>
            <dd>
              {productData.height} x {productData.width} x {productData.length}
            </dd>
          </StyledDescriptionSpecsDiv>
          <StyledDescriptionSpecsDiv>
            <dt>Item model number</dt>
            <dd>{productData.model_code}</dd>
          </StyledDescriptionSpecsDiv>
          <StyledDescriptionSpecsDiv>
            <dt>Colour</dt>
            <dd>{productData.colour}</dd>
          </StyledDescriptionSpecsDiv>
        </StyledProductSpecsDl>
      </StyledProductSection>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await getProducts();

    return {
      props: {
        productData: data.allProducts[0],
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
