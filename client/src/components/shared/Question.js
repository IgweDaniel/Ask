import React, { useRef } from "react";
import styled from "styled-components";
import { Avatar } from ".";
import { Link } from "react-router-dom";
import { parseStats } from "../../utils";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";

import { GiClick } from "react-icons/gi";

const QuestionContent = styled.div`
  background: #fff;
  border-bottom: 1px solid #e4e6e6;
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
 
  }
  .meta {
    width: 20%;
    /* background: red; */
    display: flex;
    justify-content: center;
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
    font-size: 13px;
  }
  .answer.button {
    margin-left: auto;
  }
  .comment.answered {
    background: ${({ theme }) => theme.colors.sucess};
    color: #fff;
  }
  .footer {
    background-color: #f5f5f5;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
  }

  .action {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
    font-size: 25px;

    color: ${({ theme }) => theme.colors.grey};
  }
  .votes {
    font-size: 18px;
    font-weight: bold;
    margin: 2px 0;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 20px;

    .meta {
      max-width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
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
      /* background: red; */
    }
  }
`;

const QuestionWrapper = styled.div`
  position: relative;
`;

export const Question = ({ ...props }) => {
  // eslint-disable-next-line
  const nodeRef = useRef(null);

  const {
    id,
    user,
    title,
    short_detail,
    tags,
    views,
    answers,
    votes,
    has_answered,
    time,
  } = props;

  return (
    <>
      <QuestionWrapper>
        <QuestionContent>
          <div className="meta">
            <div className="user-image">
              <Avatar user={user} size={50} />
            </div>

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
            <h3 className="title">
              <Link to={`/question/${id}`}>{title}</Link>
            </h3>
            <p className="short-detail">{short_detail}</p>
            <ul className="tags">
              {tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
            <div className="footer">
              <div
                className={`button-group comment ${
                  has_answered ? "answered" : ""
                }`}
              >
                <span className="icon">
                  <MdQuestionAnswer size={16} />
                </span>
                <span className="text">{parseStats(answers)} answers</span>
              </div>

              <div className="button-group views">
                <span className="icon">
                  <GiClick size={16} />
                </span>
                <span className="text">{parseStats(views)} views</span>
              </div>

              <button className="button answer">
                <Link to={`/question/${id}`}>Answer</Link>
              </button>
            </div>
          </div>
        </QuestionContent>
      </QuestionWrapper>
    </>
  );
};
