import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { useViewport } from "../../hooks";
import { Tabs } from "../";

import { ReactComponent as FeedIcon } from "../../assets/svg/feed.svg";
import thumb1 from "../../assets/images/thumb1.jpeg";
import thumb2 from "../../assets/images/thumb2.jpeg";
import { Align, HorizontalAlign, VerticalAlign } from "../../genericStyle";
const ICON_SIZE = 15;

const Layout = ({ className, children }) => {
  const { width } = useViewport();
  const breakpoint = 769;

  const isDesktop = breakpoint < width;
  return (
    <>
      <Header />
      <div className="page-reset"></div>
      <div className={className}>
        <div className="container">
          <div className="wall">
            <section className="quickNav">
              <ul className="quick-links">
                <li className="active">
                  <div className="content">
                    <span className="icon">
                      <FeedIcon height={ICON_SIZE} width={ICON_SIZE} />
                    </span>
                    <span className="text">Feed</span>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <span className="icon">
                      <i className="fas fa-people-carry"></i>
                    </span>
                    <span className="text">Communities</span>
                  </div>
                  <ol className="subLink">
                    <li>
                      <span className="icon">
                        <img src={thumb1} alt="ux" />
                      </span>
                      <span className="text">UX</span>
                    </li>
                    <li>
                      <span className="icon">
                        <img src={thumb2} alt="ux" />
                      </span>
                      <span className="text">Progressive Web App</span>
                    </li>
                  </ol>
                </li>
                <li>
                  <div className="content">
                    <span className="icon">
                      <i className="fas fa-book-open"></i>
                    </span>
                    <span className="text">Questions</span>
                  </div>
                  <ol className="subLink">
                    <li>Latest Questons</li>
                    <li>Hot Questions</li>
                    <li>Hot Answers</li>
                  </ol>
                </li>

                <li>
                  <div className="content">
                    <span className="icon">
                      <i className="fas fa-poll"></i>
                    </span>
                    <span className="text">Polls</span>
                  </div>
                </li>
              </ul>
            </section>
            <section className="mainContent">{children}</section>
            <section className="misc">
              <div className="action">
                <button className="button">Ask A question</button>
              </div>
              <div className="stats">
                <div className="stat question">
                  <span className="title">Questions</span>
                  <span className="value">22</span>
                </div>
                <div className="stat answer">
                  <span className="title">Answers</span>
                  <span className="value">71</span>
                </div>
                <div className="stat best-answer">
                  <span className="title">Best Answers</span>
                  <span className="value">13</span>
                </div>
                <div className="stat user">
                  <span className="title">Users</span>
                  <span className="value">22</span>
                </div>
              </div>

              <div className="ranking">
                <Tabs
                  tabsClassName="tabs"
                  tabClassName="tab"
                  activeTabClassName="tab-active"
                >
                  <div label="Popular">Hello</div>
                  <div label="Answers">
                    After 'while, <em>Crocodile</em>!
                  </div>
                </Tabs>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export const StyledLayout = styled(Layout)`
  .mainContent {
    border: 1px solid #e4e6e6;
  }
  .misc {
    display: none;
    border: 1px solid #e4e6e6;
    background-color: #fff;
    background-color: rgb(241, 242, 242);
  }

  .misc .action {
    background-color: #fff;
    height: 80px;
    ${Align}
    border-bottom: 2px solid #e4e6e6;
  }

  .quickNav {
    display: none;
  }

  .misc .stats {
    background: #fff;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 80px;
    margin: 20px;
  }
  .misc .stat {
    ${Align}
    flex-direction: column;
    border: 1px solid #e4e6e6;
  }
  .misc .stat .value {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  .ranking {
    background: #fff;
    min-height: 300px;
  }

  @media (min-width: 768px) {
    .wall {
      display: grid;
      gap: 20px;
      grid-template-columns: 2fr 1fr;
    }
    .misc {
      display: block;
    }
    .misc .action .button {
      width: 80%;
      height: 40px;
    }
  }
  @media (min-width: 1024px) {
    .quickNav {
      display: block;
    }

    .quickNav ul.quick-links > li {
      cursor: pointer;
      ${HorizontalAlign}
      flex-direction: column;
      margin: 5px 0;
      padding: 10px;
      font-weight: bold;
    }
    ol.subLink {
      width: 100%;
      margin-left: 20px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.grey};
    }
    ol.subLink li {
      margin: 5px 0;
      font-weight: normal;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .quickNav ul.quick-links > li .content {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .subLinks li {
      padding: 0px;
    }
    .quickNav ul.quick-links > li.active {
      background-color: ${(props) => props.theme.colors.lightGrey};
    }
    .quickNav .icon img {
      height: 20px;
      width: 20px;
      object-fit: cover;
      object-position: center;
    }
    .quickNav .icon {
      margin-right: 5px;
    }
    .quickNav ul.quick-links > li.all .icon {
      background-color: ${(props) => props.theme.colors.primary};
      max-width: 30px;
      height: 20px;
      width: 20px;
    }
    .wall {
      grid-template-columns: 200px 2.5fr 1fr;
    }
  }
`;
