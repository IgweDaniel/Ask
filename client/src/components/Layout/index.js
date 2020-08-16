import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";

import { Modal, QuestionForm, AuthForm } from "../";

import { AppStats } from "./AppStats";
import { AppNav } from "./AppNav";

const LayoutWrapper = styled.div`
  .mainContent {
    height: 100%;
  }
  .misc {
    background: ${({ theme }) => theme.colors.bgColor};
  }

  .quickNav {
    display: none;
  }

  .ranking {
    background: #fff;
    min-height: 300px;
  }
  .wall {
  }

  @media (min-width: 850px) {
    .wall {
      display: grid;
      gap: 20px;
      grid-template-columns: 2fr 1fr;
    }
  }
  @media (min-width: 1200px) {
    .quickNav {
      display: block;
    }
    .ranking {
      display: block;
    }

    .wall {
      grid-template-columns: 200px 2.5fr 1fr;
    }
  }
`;

export const Layout = ({ className, children }) => {
  // const { width } = useViewport();
  // const breakpoint = 769;
  // const isDesktop = breakpoint < width;

  const [showAuthForm, setShowAuthForm] = useState(false);
  const [trigger, setTrigger] = useState(null);

  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const handleShowAuthForm = (shouldShow, type) => {
    if (shouldShow) {
      setTrigger(type);
    } else {
      setTrigger(null);
    }
    setShowAuthForm(shouldShow);
  };

  const handleQuestionForm = (shouldShow) => {
    setShowQuestionForm(shouldShow);
  };
  return (
    <>
      <Header openAuthForm={handleShowAuthForm} />

      <Modal show={showAuthForm} closeModal={handleShowAuthForm}>
        <AuthForm trigger={trigger} />
      </Modal>

      <Modal show={showQuestionForm} closeModal={handleQuestionForm}>
        <QuestionForm />
      </Modal>

      <div className="page-reset"></div>

      <LayoutWrapper className={className}>
        <div className="container">
          <div className="wall">
            <section className="quickNav">
              <AppNav />
            </section>

            <section className="mainContent">{children}</section>

            <section className="misc">
              <AppStats openQuestionForm={handleQuestionForm} />
            </section>
          </div>
        </div>
      </LayoutWrapper>

      <footer>&copy; 2020 Question and Answer</footer>
    </>
  );
};
