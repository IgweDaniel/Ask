import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Tabs, ContentHeader, Avatar } from "../components";
import { users, fullProfileInfo } from "../data";
import { TiLocation } from "react-icons/ti";
import { AiFillMail, AiFillQuestionCircle } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { DiBitbucket } from "react-icons/di";

import { IoMdChatboxes } from "react-icons/io";
import { parseStats } from "../utils";

const ProfileWrapper = styled.div`
  /* height: 100%; */
  padding-bottom: 30px;
  background: #fff;
  .about {
    padding: 40px 40px 0;
    margin: 20px 0;
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

  .user-avatar {
    position: absolute;
    z-index: 1;
    bottom: 30px;
    left: 20px;
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
    opacity: 0.3;
  }
`;

const UserStats = styled.div`
  display: grid;
  padding: 0 20px;
  margin: 30px;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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
`;

const ICON_SIZE = 20;
export const Profile = ({ className }) => {
  const { userId } = useParams();

  const user = users.find((user) => user.id === Number(userId));
  const profile = {
    ...user,
    ...fullProfileInfo,
  };

  // console.log(profile);
  return (
    <>
      <ContentHeader />
      <ProfileWrapper className={className}>
        <UserBanner banner={profile.banner}>
          <div className="user-avatar">
            <Avatar user={user} size={80} showProfile={false} />
          </div>
        </UserBanner>

        <Tabs>
          <div label="About">
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
          <div label="Questions">
            <em>Questions</em>!
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
