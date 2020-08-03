import React from "react";
import styled from "styled-components";
import { communities } from "../data";
import { IoIosPeople } from "react-icons/io";
import { parseStats } from "../utils";
import { VerticalAlign, HorizontalAlign } from "../styles";
import { ContentHeader } from "../components";
import { MdLibraryAdd } from "react-icons/md";

const CommunitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 110px;
  padding: 20px;
  grid-gap: 20px;
  background: #fff;
  height: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .community {
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
    background-color: #fff;
    /* box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 5px; */
    /* box-shadow: rgba(0, 0, 0, 0.03) 0px 21px 16px; */

    height: 100%;
    width: 100%;
    flex-direction: column;
    ${HorizontalAlign}
  }

  .desc {
  }
  .name,
  .followers,
  .desc {
    padding: 0 20px;
    ${VerticalAlign}
  }
  .name {
    height: 50%;
  }
  .followers {
    height: 50%;
  }

  .name {
    font-weight: bold;
    ${VerticalAlign}
  }
  .name .text {
    margin: 0 10px;
  }
  .thumb {
    height: 20px;
    width: 20px;
    display: block;
  }
  .thumb img {
    height: 100%;
    width: 100%;
  }
  .button,
  .button-group {
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.lightGrey} !important;
    color: ${(props) => props.theme.colors.grey};
  }
  .button {
    margin-left: auto;
  }
  .button-group {
    width: 130px;

    border: none;
  }

  .button-group .text {
    font-size: 12px;
  }
`;

export const Communities = ({ className }) => {
  return (
    <>
      <ContentHeader />
      <CommunitiesWrapper>
        {communities.map(({ name, followers, thumb }) => (
          <div className="community shadow" key={name}>
            <div className="name">
              <span className="thumb">
                <img src={thumb} alt="" />
              </span>
              <span className="text">{name}</span>
            </div>
            {/* <span className="desc">Prigramming and all related.</span> */}
            <div className="followers">
              <div className="button-group views">
                <span className="icon">
                  <IoIosPeople size={16} />
                </span>
                <span className="text">{parseStats(followers)} followers</span>
              </div>

              <div className="button">
                <MdLibraryAdd />
              </div>
            </div>
          </div>
        ))}
      </CommunitiesWrapper>
    </>
  );
};
