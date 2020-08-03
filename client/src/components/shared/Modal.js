import React, { useRef } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { Align } from "../../styles";

const ContentWrapper = styled.div`
  position: relative;
  z-index: 600;
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
  transition: 0.5s;
  transform: translateY(${({ state }) => (state === "entered" ? 0 : -400)}px);
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 500;
  background: #000;
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
  opacity: ${({ state }) => (state === "entered" ? 0.45 : 0)};
`;
const ModalWrapper = styled.div`
   position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 500;
  ${Align}
  display: ${({ state }) => (state === "exited" ? "none" : "flex")};
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;

export const Modal = ({ children, show, closeModal }) => {
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={show} timeout={300}>
      {(state) => (
        <ModalWrapper state={state}>
          <Transition nodeRef={nodeRef2} in={show} timeout={300}>
            {(state) => (
              <>
                <Backdrop state={state} onClick={() => closeModal(false)} />
                <ContentWrapper state={state}>{children}</ContentWrapper>
              </>
            )}
          </Transition>
        </ModalWrapper>
      )}
    </Transition>
  );
};
