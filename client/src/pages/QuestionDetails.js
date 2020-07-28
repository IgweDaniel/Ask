import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ContentHeader, Avatar, Tabs, Answer } from "../components";
import { VerticalAlign, HorizontalAlign } from "../styles";
import { questions, answers as fullAnswers } from "../data";
import { parseStats } from "../utils";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";

import { GiClick } from "react-icons/gi";
import { useEffect } from "react";

const QuestionDetailsWrapper = styled.div`
  .question {
    background: #fff;
    border-bottom: 1px solid #e4e6e6;

    ${HorizontalAlign}
    padding: 20px;
    flex-direction: column;
  }
  .answer.button {
    margin-left: auto;
  }
  .meta {
    width: 20%;
    /* background: red; */
    ${HorizontalAlign}
  }
  .body {
    width: 100%;
    padding: 0 5px;
  }
  .tags {
    margin: 20px 0;
  }
  .tag {
    display: inline-block;
    margin-right: 5px;
    border: 1px solid #e4e6e6;
    padding: 0 5px;
    font-size: 12px;
    text-transform: capitalize;
  }
  .button-group {
    margin-right: 10px;
  }
  .footer {
    background-color: #f5f5f5;
    height: 60px;
    ${VerticalAlign}
    padding: 10px;
    margin: 10px 0;
  }
  .detail {
    line-height: 1.8;
  }

  .action {
    flex-direction: column;
    ${VerticalAlign}
    margin: 40px 0;
    font-size: 25px;

    color: ${({ theme }) => theme.colors.grey};
  }
  .votes {
    font-size: 18px;
    font-weight: bold;
    margin: 2px 0;
  }
  .answers .tabs {
    justify-content: flex-end;
    height: 40px;
  }
  .answers {
    background: #fff;
    min-height: 300px;
  }
  .section-title {
    padding: 0 20px;
    margin: 0;
    height: 50px;
    ${VerticalAlign}
    position: relative;
    bottom: -20px;
    width: 30%;
  }
  @media (min-width: 768px) {
    .question {
      flex-direction: row;
      justify-content: center;
      padding: 20px;
    }
    .meta {
      max-width: 50px;

      ${VerticalAlign}
      flex-direction: column;
      justify-content: flex-start;
    }

    .body {
      width: 90%;
      padding: 0 10px;
    }
  }
  @media (min-width: 1024px) {
    .meta {
      width: 10%;
      max-width: 50px;
    }
  }
`;

export const QuestionDetails = ({ className }) => {
  const { questionId } = useParams();
  const question = questions.find((ques) => ques.id === Number(questionId));

  const {
    id,
    user,
    title,
    full_detail,
    tags,
    views,
    answers,
    votes,
    time,
  } = question;

  useEffect(() => {
    console.log(id);
    return () => {};
  }, [id]);
  return (
    <QuestionDetailsWrapper>
      <ContentHeader />
      {question && (
        <div className="question">
          <div className="meta">
            <Avatar user={user} size={50} />

            <div className="action">
              <span className="icon clickable">
                <AiFillCaretUp />
              </span>
              <span className="votes">{votes}</span>
              <span className="icon clickable">
                <AiOutlineCaretDown />
              </span>
            </div>
          </div>
          <div className="body">
            <div className="header">
              <span className="username">{user.name}</span>
              <span className="date">Asked at {time}</span>
            </div>
            <h3 className="title">{title}</h3>
            <p className="detail">{full_detail}</p>

            <ul className="tags">
              {tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
            <div className="footer">
              <div className="button-group comment">
                <span className="icon">
                  <MdQuestionAnswer size={15} />
                </span>
                <span className="text">{parseStats(answers)} answers</span>
              </div>

              <div className="button-group view">
                <span className="icon">
                  <GiClick size={15} />
                </span>
                <span className="text">{parseStats(views)} views</span>
              </div>

              <button className="button answer">Answer</button>
            </div>
          </div>
        </div>
      )}

      <h4 className="section-title">{parseStats(answers)} Answers</h4>
      <div className="answers">
        <Tabs
          tabsClassName="tabs"
          tabClassName="tab"
          activeTabClassName="tab-active"
        >
          <div label="Voted">
            {fullAnswers.map((answer) => (
              <Answer key={answer.id} {...answer} />
            ))}
          </div>
          <div label="Oldest">
            After 'while, <em>Crocodile</em>!
          </div>
        </Tabs>
      </div>
    </QuestionDetailsWrapper>
  );
};
