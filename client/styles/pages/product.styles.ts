import styled from 'styled-components'

export const StyledProductImage = styled.img`
    max-width: 100%;
    border-radius: 0.8rem;

    @media screen and (min-width: ${props => props.theme.screens.sizes.s}) {
        max-width: 35rem;
        margin: 0 auto;
    }

    @media screen and (min-width: ${props => props.theme.screens.sizes.m}) {
        margin: 0;
    }
`

export const StyledProductSection = styled.section`
    padding: 1.5rem;
    &:nth-child(even) {
        background-color: ${props => props.theme.colors.hemocyanin};
    }

    h1,
    h2 {
        margin: 0 0 1rem 0;
    }

`

export const StyledProductMainWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: ${props => props.theme.screens.sizes.m}) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const StyledProductInformationDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    @media screen and (min-width: ${props => props.theme.screens.sizes.s}) {
        align-self: flex-start;
    }

    @media screen and (min-width: ${props => props.theme.screens.sizes.m}) {
        align-self: flex-end;
    }
`

export const StyledProductCtaDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledProductPriceBasketDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`

export const StyledProductPriceSpan = styled.span`
    font-size: 1.6rem;
    align-self: flex-end;
`

export const StyledProductQuantityTextSpan = styled.span`
    display: block;
    text-align: center;
`

export const StyledProductQuantityDiv = styled.div`
    tect-align: center;
`

export const StyledProductQuantityControlsDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`

export const StyledProductQuantityButton = styled.button`
    background-color: ${props => props.theme.colors.sohoLights};
    border: 0.2rem solid ${props => props.theme.colors.sohoLights};
    border-radius: 0.5rem;
    width: 25px;
    height: 25px;

    &:disabled {
        opacity: 0.5;
    }

`

export const StyledProductQuantityNumberSpan = styled.span`
    display: block;
    margin: 0 .6rem;
    font-size: 1.8rem;
    width: 20px;
    height: 20px;
    text-align: center;
`

export const StyledProductAddToBasketButton = styled.button`
    background-color: ${props => props.theme.colors.sohoLights};
    border: 0.2rem solid ${props => props.theme.colors.sohoLights};
    padding: 1.4rem;
    border-radius: 0.8rem;
    width: 100%;
    font-size: 1.6rem;
    cursor: pointer;
    
    @media screen and (min-width: ${props => props.theme.screens.sizes.sm}) {
        width: 26.5rem;
    }
`

export const StyledProductNameHeader = styled.h1`
    font-size: 3.2rem;
`

export const StyledProductSubheadingHeader = styled.h2`
    font-size: 2.4rem;
`

export const StyledProductMetaDiv = styled.div`
    color: ${props => props.theme.colors.purpleHaze};
    font-size: 1.2rem;
`

export const StyledProductDescriptionParagraph = styled.p`
    font-size: 1.4rem;
    margin: 0;
`

export const StyledProductSpecsDl = styled.dl`
    font-size: 1.4rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`

export const StyledDescriptionSpecsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`