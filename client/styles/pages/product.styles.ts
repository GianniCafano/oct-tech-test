import styled from 'styled-components'

export const StyledProductImage = styled.img`
    max-width: 100%;
    margin-bottom: 1.5rem;

    @media screen and (min-width: ${props => props.theme.screens.sizes.m}) {
        max-width: 70rem;
    }
`

export const StyledProductMainSection = styled.section`
    display: flex;
    flex-direction: column;
`

export const StyledProductNameHeader = styled.header`
    font-size: 3.2rem;
`