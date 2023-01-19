import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { StyledLayoutMain } from "../styles/Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <>
      <Header />
      <StyledLayoutMain>{children}</StyledLayoutMain>
      <Footer />
    </>
  );
}
