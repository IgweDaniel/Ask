import React from "react";
import styled from "styled-components";
import { Feed, Tabs } from "../components";
import { useViewport } from "../hooks";

const HomeWrapper = styled.div`
  border: 1px solid #e4e6e6;

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const Home = ({ className }) => {
  const { width } = useViewport();
  const breakpoint = 769;

  const isDesktop = breakpoint < width;

  return (
    <HomeWrapper className={className}>
      {isDesktop ? (
        <Tabs>
          <div label="Recent Questions">
            <Feed />
          </div>
          <div label="Most Answered">
            After 'while, <em>Crocodile</em>!
          </div>
        </Tabs>
      ) : (
        <Feed />
      )}
    </HomeWrapper>
  );
};
