import React, { useRef, useState } from "react";
import styled from "styled-components";
import { QuickProfile } from ".";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

const AvatarWrapper = styled.div`
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  cursor: pointer;
  .avatar-wrapper {
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    padding: 5px;
  }
  @media (min-width: 1024px) {
  }
`;

const AnimationProfile = styled.div`
  position: absolute;
  transition: 0.5s;
  width: 300px;
  height: 240px;
  top: 50px;
  left: ${({ avatarSize }) => avatarSize / 2}px;
  z-index: 10;
  transform: translateX(-50%);
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -7px;
    background: #fff;
    left: 50%;

    /* transform: translateX(-${({ avatarSize }) => avatarSize / 2}%); */
    width: 15px;
    height: 15px;
    transform: translateX(-${({ avatarSize }) =>
      avatarSize / 2}%) rotateZ(45deg)
      ;
    border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const Avatar = ({ user, ...props }) => {
  const { id, avatar, name } = user;
  const [animate, setAnimate] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <AvatarWrapper
        {...props}
        onMouseEnter={(e) => setAnimate(true)}
        onMouseLeave={(e) => setAnimate(false)}
      >
        <Link to={`/users/${id}`}>
          <div className="avatar-wrapper">
            <img src={avatar} alt={name} />
          </div>
        </Link>

        <Transition nodeRef={nodeRef} in={animate} timeout={500}>
          {(state) => (
            <AnimationProfile state={state} avatarSize={props.size}>
              <QuickProfile {...user} />
            </AnimationProfile>
          )}
        </Transition>
      </AvatarWrapper>
    </>
  );
};
