import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.siphon};
    padding: 1rem 1.5rem 1rem 1.5rem;
`

export const StyledHeaderContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 93rem;
    margin: 0 auto;
`

export const StyledHeaderLogoImg = styled.img`
    width: 20rem;

    @media screen and (min-width: ${props => props.theme.screens.sizes.m}) {
        width: 30rem;
    }
`


