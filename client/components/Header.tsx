import React from "react";
import Link from "next/link";

import {
  StyledHeader,
  StyledHeaderLogoImg,
  StyledHeaderContainerDiv,
} from "../styles/Header.styles";
import Basket from "./Basket";

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContainerDiv>
        <Link href="/">
          <a>
            <StyledHeaderLogoImg
              src="/octopus-logo.svg"
              alt="Octopus Energy logo"
            />
          </a>
        </Link>
        <Basket />
      </StyledHeaderContainerDiv>
    </StyledHeader>
  );
}
