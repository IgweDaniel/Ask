import React from "react";
import styled from "styled-components";
import { Avatar } from ".";
import { Link } from "react-router-dom";
import { parseStats } from "../../utils";
export const Question = ({ className, ...props }) => {
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
    <div className={className}>
      <Link to={`/question/${id}`}>
        <div className="content">
          <div className="meta">
            <Avatar user={user} size={50} />

            <div className="action">
              <span className="icon clickable">
                <i className="fas fa-caret-up"></i>
              </span>
              <span className="votes">{votes}</span>
              <span className="icon clickable">
                <i className="fas fa-caret-down"></i>
              </span>
            </div>
          </div>
          <div className="body">
            <div className="header">
              <span className="username">{user.name}</span>
              <span className="date">Asked at {time}</span>
            </div>
            <h3 className="title">{title}</h3>
            <p className="short-detail">{short_detail}</p>

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
                  <i className="fas fa-comment-alt"></i>
                </span>
                <span className="text">{parseStats(answers)} answers</span>
              </div>

              <div className="button-group comment">
                <span className="icon">
                  <i className="fas fa-eye"></i>
                </span>
                <span className="text">{parseStats(views)} views</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const StyledQuestion = styled(Question)`
  .content {
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
    margin-left: 10px;
    font-size: 13px;
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
    .content {
      flex-direction: row;
      justify-content: center;
      padding: 20px;
    }
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
