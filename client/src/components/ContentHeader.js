import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { VerticalAlign } from "../styles";
import { AiTwotoneHome } from "react-icons/ai";

const ContentHeaderWrapper = styled.div`
  ${VerticalAlign}
  height: 70px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin: 0 0 10px;
  .nav-info {
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
  }
  .nav-info .text {
    margin: 0 5px;
    font-size: 12px;
  }
`;

export const ContentHeader = ({
  className,
  sortUrl,
  searchUrl,
  onSort,
  onSearch,
}) => {
  const { pathname } = useLocation();
  const page = pathname.split("/")[1];

  return (
    <ContentHeaderWrapper className={className}>
      <div className="container">
        <div className="nav-info">
          <span className="icon">
            <AiTwotoneHome size={15} />
          </span>
          <span className="text">
            <Link to="/">Home</Link> / {page}
          </span>
        </div>
      </div>
    </ContentHeaderWrapper>
  );
};

ContentHeader.defaultProps = {
  onSort: () => null,
  onSearch: () => null,
};
