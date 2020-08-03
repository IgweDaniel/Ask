import React from "react";
import styled from "styled-components";
import { Tabs } from "../";
import { Align } from "../../styles";

const AppStatsWrapper = styled.div`
  border: 1px solid #e4e6e6;
  background: ${({ theme }) => theme.colors.bgColor};

  .action {
    background-color: #fff;
    height: 80px;
    ${Align}
    border-bottom: 2px solid #e4e6e6;
  }
  .stats {
    background: #fff;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 80px;
    margin: 20px;
    text-align: center;
  }
  .stat {
    ${Align}
    flex-direction: column;
    border: 1px solid #e4e6e6;
  }
  .stat .value {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  .action .button {
    width: 90%;
    height: 40px;
  }

  @media (min-width: 768px) {
    .action .button {
      width: 80%;
      height: 40px;
    }
  }
`;

export const AppStats = ({ openQuestionForm }) => {
  return (
    <AppStatsWrapper>
      <div className="action">
        <button className="button" onClick={() => openQuestionForm(true)}>
          Ask A question
        </button>
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
    </AppStatsWrapper>
  );
};
