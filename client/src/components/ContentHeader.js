import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { VerticalAlign } from "../genericStyle";

const ContentHeader = ({ className, sortUrl, searchUrl, onSort, onSearch }) => {
  const { pathname } = useLocation();
  const page = pathname.split("/")[1];

  return (
    <div className={className}>
      <div className="container">
        <div className="nav-info">
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
          <span className="text">Home / {page}</span>
        </div>
      </div>
    </div>
  );
};

ContentHeader.defaultProps = {
  onSort: () => null,
  onSearch: () => null,
};

export const StyledContentHeader = styled(ContentHeader)`
  ${VerticalAlign}
  height: 70px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
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
