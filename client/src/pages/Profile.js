import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { Tabs, ContentHeader, Avatar, Question } from "../components";
import { users, fullProfileInfo, questions } from "../data";
import { TiLocation } from "react-icons/ti";
import { AiFillMail, AiFillQuestionCircle } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { DiBitbucket } from "react-icons/di";

import { IoMdChatboxes, IoMdPeople } from "react-icons/io";
import { parseStats } from "../utils";

const ProfileWrapper = styled.div`
  /* height: 100%; */

  background: #fff;
  .about {
    padding: 40px 40px 0;
    margin: 20px 0;
  }
  .about-wrapper {
    padding-bottom: 30px;
  }

  .account-details {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail {
    margin: 0 10px;
    /* font-style: italic; */
  }
`;
const UserBanner = styled.div`
  height: 200px;
  position: relative;
  background: url(${({ banner }) => banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .user,
  .meta {
    position: absolute;
    z-index: 1;
    bottom: 30px;

    display: flex;
    align-items: center;
  }
  .user {
    left: 20px;
  }
  .meta {
    z-index: 2;
    right: 20px;
  }
  .meta .friendship {
    background: #fff;
    color: ${({ theme }) => theme.colors.grey};
    margin: 0 10px;
    display: flex;
    width: 110px;
    height: 25px;
  }

  .meta .friendship .icon {
    width: 20%;
  }
  .meta .friendship .text {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user .name {
    font-weight: bold;
    color: #fff;
    margin: 0 5px;
  }
  .user-avatar {
    /* background: #fff; */
    padding: 5px;
  }
  :after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background: #000;
    opacity: 0.5;
  }
`;

const UserStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px;
  gap: 10px;
  .stat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    text-transform: uppercase;
    font-variant: small-caps;
    font-weight: bold;
    font-size: 12px;
  }

  @media (min-width: 768px) {
    padding: 0 10px;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 10px;
  }
  @media (min-width: 1024px) {
    padding: 0 20px;
    gap: 20px;
    margin: 30px;
  }
`;

const ICON_SIZE = 20;
export const Profile = ({ className }) => {
  const { userId } = useParams();

  const user = users.find((user) => user.id === Number(userId));
  const profile = {
    ...user,
    ...fullProfileInfo,
  };
  const myQuestion = questions.map((question) => ({ ...question, user: user }));

  // console.log(profile);
  if (!profile || !user) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <ContentHeader custompage={user.name} />
      <ProfileWrapper className={className}>
        <UserBanner banner={profile.banner}>
          <div className="user">
            <div className="user-avatar">
              <Avatar user={user} size={80} showProfile={false} />
            </div>
            <span className="name">{user.name}</span>
            <span className={`badge ${user.status.toLowerCase()}`}>
              {user.status}
            </span>
          </div>

          <div className="meta">
            <div className="friendship">
              <span className="icon">
                <IoMdPeople size={18} />
              </span>
              <span className="text">
                {parseStats(profile.followers_count)} followers
              </span>
            </div>

            <div className="friendship">
              <span className="icon">
                <IoMdPeople size={18} />
              </span>
              <span className="text">
                {parseStats(profile.following_count)} following
              </span>
            </div>
          </div>
        </UserBanner>

        <Tabs>
          <div label="About">
            <div className="about-wrapper">
              {profile.about && <div className="about">{profile.about}</div>}
              <div className="account-details">
                {profile.location && (
                  <div className="location detail">
                    <span className="icon">
                      <TiLocation />
                    </span>
                    <span className="text">{profile.location}</span>
                  </div>
                )}
                {profile.email && (
                  <div className="email detail">
                    <span className="icon">
                      <AiFillMail />
                    </span>
                    <span className="text">{profile.email}</span>
                  </div>
                )}
                {profile.occupation && (
                  <div className="occupation detail">
                    <span className="icon">
                      <MdWork />
                    </span>
                    <span className="text">{profile.occupation}</span>
                  </div>
                )}
              </div>

              <UserStats>
                <div className="stat question">
                  <span className="icon">
                    <AiFillQuestionCircle color="#2d6ff7" size={ICON_SIZE} />
                  </span>
                  <span className="text">
                    {parseStats(profile.stats.questions)} question
                  </span>
                </div>
                <div className="stat answer">
                  <span className="icon">
                    <IoMdChatboxes size={ICON_SIZE} color="#DA2C38" />
                  </span>
                  <span className="text">
                    {parseStats(profile.stats.answers)} answer
                  </span>
                </div>
                <div className="stat best_answer">
                  <span className="icon">
                    <GiGraduateCap color="#048A81" size={ICON_SIZE} />
                  </span>
                  <span className="text">
                    {parseStats(profile.stats.best_answer)} best answer
                  </span>
                </div>
                <div className="stat points">
                  <span className="icon">
                    <DiBitbucket color="#EB8258" size={ICON_SIZE} />
                  </span>
                  <span className="text">
                    {parseStats(profile.stats.points)} points
                  </span>
                </div>
              </UserStats>
            </div>
          </div>
          <div label="Questions">
            {myQuestion.map((question) => (
              <Question {...question} key={question.id}>
                <span slot="title">
                  <Link to={`/question/${question.id}`}>{question.title}</Link>
                </span>
                <p className="short_detail" slot="detail">
                  {question.short_detail}
                </p>
              </Question>
            ))}
          </div>
          <div label="Answers">
            <em>Answers</em>!
          </div>
          <div label="Best Answers">
            <em>Best Answers</em>!
          </div>
        </Tabs>
      </ProfileWrapper>
    </>
  );
};
