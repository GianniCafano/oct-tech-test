import styled from 'styled-components'

export const StyledBasketDiv = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
`

export const StyledBasketImg = styled.img`
    max-width: 100%;
`

export const StyledBasketBadgeSpan = styled.span`
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${props => props.theme.colors.sohoLights};
    top: -6px;
    left: -7px;
    text-align: center;
    border-radius: 100%;
    padding: 0.2rem;
    color: black;
`