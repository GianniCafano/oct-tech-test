import { useState } from "react";
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
} from "../styles/pages/product.styles";

type TProductProps = {
  productData: TProduct;
};

type TProduct = {
  id: string;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
  img_url: string;
};

export default function Product() {
  const [quantity, setQuantity] = useState<number>(1);
  const decreaseQuantityButtonDisabled = quantity <= 1;

  function handleDecreaseQuantityButtonClick(quantityAmount: number): void {
    setQuantity(quantityAmount - 1);
  }

  function handleIncreaseQuantityButtonClick(quantityAmount: number): void {
    setQuantity(quantityAmount + 1);
  }
  return (
    <>
      <StyledProductSection>
        <StyledProductImage src="https://via.placeholder.com/500" />
        <StyledProductNameHeader>Product name</StyledProductNameHeader>
        <StyledProductMetaDiv>25W // Packet of 4</StyledProductMetaDiv>
        <StyledProductCtaDiv>
          <StyledProductPriceBasketDiv>
            <StyledProductPriceSpan>£12.99</StyledProductPriceSpan>
            <StyledProductQuantityDiv>
              <StyledProductQuantityTextSpan>
                Qty.
              </StyledProductQuantityTextSpan>
              <StyledProductQuantityControlsDiv>
                <StyledProductQuantityButton
                  disabled={decreaseQuantityButtonDisabled}
                  onClick={() => handleDecreaseQuantityButtonClick(quantity)}
                >
                  -
                </StyledProductQuantityButton>
                <StyledProductQuantityNumberSpan title="Current quantity">
                  {quantity}
                </StyledProductQuantityNumberSpan>
                <StyledProductQuantityButton
                  onClick={() => handleIncreaseQuantityButtonClick(quantity)}
                >
                  +
                </StyledProductQuantityButton>
              </StyledProductQuantityControlsDiv>
            </StyledProductQuantityDiv>
          </StyledProductPriceBasketDiv>
          <StyledProductAddToBasketButton>
            Add to cart
          </StyledProductAddToBasketButton>
        </StyledProductCtaDiv>
      </StyledProductSection>
      <StyledProductSection>
        <StyledProductSubheadingHeader>
          Description
        </StyledProductSubheadingHeader>
        <StyledProductDescriptionParagraph>
          Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb
          switches on instantly, no wait around warm start and flicker free
          features make for a great all purpose bulb
        </StyledProductDescriptionParagraph>
      </StyledProductSection>
      <StyledProductSection>
        <StyledProductSubheadingHeader>
          Specifications
        </StyledProductSubheadingHeader>
        <StyledProductSpecsDl>
          <StyledDescriptionSpecsDiv>
            <dt>Brand</dt>
            <dd>Phillips</dd>
          </StyledDescriptionSpecsDiv>
          <StyledDescriptionSpecsDiv>
            <dt>Item weight (g)</dt>
            <dd>77</dd>
          </StyledDescriptionSpecsDiv>
          <StyledDescriptionSpecsDiv>
            <dt>Dimensions (cm)</dt>
            <dd>12.6 x 6.2 x 6.2</dd>
          </StyledDescriptionSpecsDiv>
          <StyledDescriptionSpecsDiv>
            <dt>Item model number</dt>
            <dd>E27 ES</dd>
          </StyledDescriptionSpecsDiv>
          <StyledDescriptionSpecsDiv>
            <dt>Colour</dt>
            <dd>Cool daylight</dd>
          </StyledDescriptionSpecsDiv>
        </StyledProductSpecsDl>
      </StyledProductSection>
    </>
  );
}
