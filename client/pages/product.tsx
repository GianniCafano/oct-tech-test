import {
  StyledProductImage,
  StyledProductMainSection,
  StyledProductNameHeader,
} from "../styles/pages/product.styles";

export default function Product() {
  return (
    <>
      <StyledProductMainSection>
        <StyledProductImage src="https://via.placeholder.com/150" />
        <StyledProductNameHeader>Product name</StyledProductNameHeader>
      </StyledProductMainSection>
    </>
  );
}
