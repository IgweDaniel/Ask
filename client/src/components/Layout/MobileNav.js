import React from "react";
import styled from "styled-components";

const MobileNavWrapper = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileNav = ({ open }) => {
  return <MobileNavWrapper>MobileNav</MobileNavWrapper>;
};
