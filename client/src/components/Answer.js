import React from "react";
import styled from "styled-components";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import { MdReply } from "react-icons/md";
import { VerticalAlign, HorizontalAlign } from "../styles";
import { Avatar } from "./shared";

const AnswerWrapper = styled.div`
  background: #fff;
  border-bottom: 1px solid #e4e6e6;
  ${HorizontalAlign}
  padding: 20px;
  flex-direction: column;

  .meta {
    width: 20%;

    ${HorizontalAlign}
  }
  .content {
    width: 100%;
    padding: 0 5px;
  }

  .actions {
    height: 20px;
    ${VerticalAlign}
    margin: 5px 0;
  }

  .actions .vote-action {
    ${VerticalAlign}
    flex-direction: row;
    margin: 40px 0;
    font-size: 20px;

    color: ${({ theme }) => theme.colors.grey};
  }
  .actions .vote-action .clickable {
  }
  .actions .reply-action {
    color: ${({ theme }) => theme.colors.grey};
    margin: 0 10px;
    ${VerticalAlign}
  }
  .reply-action .action-text {
  }
  .detail {
    line-height: 1.4;
  }
  .actions .text {
    font-size: 15px;
    font-weight: bold;
    margin: 2px 5px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 20px;

    .meta {
      max-width: 50px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
    }

    .content {
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

export const Answer = ({ user, votes, time, text }) => {
  return (
    <AnswerWrapper>
      <div className="user">
        <Avatar user={user} size={50} />
      </div>
      <div className="content">
        <div className="header">
          <span className="username">{user.name}</span>
          <span className="date">Asked at {time}</span>
        </div>
        <p className="detail">{text}</p>

        <div className="actions">
          <div className="vote-action">
            <span className="icon clickable">
              <AiFillCaretUp />
            </span>
            <span className="text">{votes}</span>
            <span className="icon clickable">
              <AiOutlineCaretDown />
            </span>
          </div>
          <div className="reply-action clickable">
            <span className="icon">
              <MdReply size={18} />
            </span>
            <span className="action-text">Reply</span>
          </div>
        </div>
      </div>
    </AnswerWrapper>
  );
};
