import React from "react";
import styled from "styled-components";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import { MdReply } from "react-icons/md";
import { VerticalAlign, HorizontalAlign } from "../styles";
import { Avatar } from "./shared";
import { QuestionHeader } from "./shared/Question";
import { useViewport } from "../hooks";

const AnswerWrapper = styled.div`
  background: #fff;
  border-bottom: 1px solid #e4e6e6;
  ${HorizontalAlign}
  padding: 20px;
  flex-direction: column;
  .user {
    ${VerticalAlign}
  }
  .mobile-header {
    margin-left: 10px;
    width: 100%;
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
    .user {
      align-items: flex-start;
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
    }
  }
`;

export const Answer = ({ user, votes, time, text }) => {
  const { width } = useViewport();
  const breakpoint = 768;
  const isDesktop = breakpoint <= width;
  return (
    <AnswerWrapper>
      <div className="user">
        <Avatar user={user} size={50} />
        {!isDesktop && (
          <div className="mobile-header">
            <QuestionHeader user={user} time={time} timePrefix="answered" />
          </div>
        )}
      </div>
      <div className="content">
        {isDesktop && (
          <QuestionHeader user={user} time={time} timePrefix="answered" />
        )}
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
