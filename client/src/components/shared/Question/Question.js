import React, { useRef } from "react";

import { Avatar } from "..";
import { Link } from "react-router-dom";
import { parseStats } from "../../../utils";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";

import { GiClick } from "react-icons/gi";

import { useViewport } from "../../../hooks";

import { QuestionContent, QuestionWrapper } from "./style";
import { QuestionHeader } from "./QuestionHeader";

const Question = ({ children, ...props }) => {
  // eslint-disable-next-line
  const nodeRef = useRef(null);

  const { id, user, tags, views, answers, votes, has_answered, time } = props;
  const { width } = useViewport();
  const breakpoint = 768;
  const isDesktop = breakpoint <= width;

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

            {!isDesktop && <QuestionHeader user={user} time={time} />}
          </div>
          <div className="body">
            {isDesktop && <QuestionHeader user={user} time={time} />}
            <h3 className="title">
              {children.find((child) => child.props.slot === "title")}
            </h3>

            {children.find((child) => child.props.slot === "detail")}

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

export { Question, QuestionHeader };
