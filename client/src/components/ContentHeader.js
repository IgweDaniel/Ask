import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { VerticalAlign } from "../styles";

import { TiHome } from "react-icons/ti";

const ContentHeaderWrapper = styled.div`
  ${VerticalAlign}
  height: 70px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin: 0 0 10px;
  .container {
    height: 100%;
  }
  .nav-info {
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
    /* font-size: 13px; */
    height: 100%;
    color: ${({ theme }) => theme.colors.grey};
  }
  .nav-info .icon {
    height: 100%;
  }
  .nav-info .text {
    display: block;
    padding: 2px 5px 0;
    ${VerticalAlign}
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
    <ContentHeaderWrapper>
      <div className="container">
        <div className="nav-info">
          <span className="icon">
            <TiHome size={15} />
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
