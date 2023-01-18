import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.siphon};
    padding: 1rem 1.5rem 1rem 1.5rem;
`

export const StyledHeaderLogoImg = styled.img`
    width: 20rem;

    @media screen and (min-width: ${props => props.theme.screens.sizes.m}) {
        width: 28rem;
    }
`


