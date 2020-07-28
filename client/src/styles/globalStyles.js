import { createGlobalStyle } from "styled-components";
import { VerticalAlign, Align } from "./reusableStyles";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    font-family: 'Inter', sans-serif;
    box-sizing:border-box;
}
  body {
    background: ${({ theme }) => theme.colors.bgColor};
  }
  li{
      list-style:none
  }
  a{
      color:inherit;
      text-decoration:none;
  }
  .icon{
      display:flex;
      align-items:center;
      justify-content:center;
  }

  .button {
      outline:none;
      box-shadow:none;
      border:none;
cursor:pointer;
    font-weight: bold;
    padding: 7px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color:#Fff;
    width:fit-content;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 2px;
  }
  .page-reset{
      height:${({ theme }) => theme.settings.navHeight}px;
      margin-bottom:20px;
  }
  .clickable{
      cursor:pointer;
  }
.button-group{
    cursor: pointer;
    display: flex;
    border: 1px solid #e4e6e6;
    background-color: #Fff;
    align-items: center;
    justify-content: center;

    white-space: nowrap;
    padding: 6px 0px;
    width:120px;
    text-transform:capitalize;
    color:     ${(props) => props.theme.colors.grey};
}
.button-group .icon{
width: 30%;
font-size:13px;
}
.button-group .text{
width:70%;
}

 .tabs {
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
    background: ${({ theme }) => theme.colors.bgColor};
    padding: 0 10px;
    height: 45px;

  ${VerticalAlign}
  }
   .tab {
    ${Align}
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
    height: 100%;
    width: 70px;
    border-bottom: none;
  }
   .tab-active {
    background: #fff;
    position: relative;
    /* border-top: 1px solid ${(props) => props.theme.colors.lightGrey}; */
    border: none;
  }
   .tab-active:after {
    content: "";
    display: block;
    background: #fff;
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
  }
  .container{
      width: 100%;
     margin: 0 auto;
  }

  @media (min-width: 768px) {
    .container{
        width: 90%;
  }
  }
  @media (min-width: 1024px) {
  }
`;
