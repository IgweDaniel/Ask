import React, { useState } from "react";
import styled from "styled-components";

const Tab = ({
  label,
  onClick,
  activeTab,
  className,
  customClass,
  customActiveClass,
}) => {
  return (
    <li
      className={`${customClass ? customClass : className} ${
        activeTab === label
          ? customActiveClass
            ? customActiveClass
            : "tab-list-active"
          : ""
      } clickable`}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  );
};

const StyledTab = styled(Tab)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  padding: 0 10px;
  &.tab-list-active {
    border-bottom: 2px solid ${(props) => props.theme.colors.dark};
  }
`;

const Tabs = ({
  className,
  children,
  tabsClassName,
  tabClassName,
  activeTabClassName,
}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={className}>
      <ul className={tabsClassName ? tabsClassName : "tab-list"}>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <StyledTab
              customActiveClass={activeTabClassName}
              customClass={tabClassName}
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ul>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return null;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export const StyledTabs = styled(Tabs)`
  .tab-list {
    border-bottom: 1px solid #e4e6e6;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 70px;
    width: 100%;
    padding: 0 10px;
  }
`;
