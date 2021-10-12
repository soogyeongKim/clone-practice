import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import logo from "../assets/img/logo.svg";

class Header extends Component {
  render() {
    return (
      <>
        <SkipNav>
          <a href="#content">본문 바로가기</a>
          <a href="#gnb">글로벌 네비게이션 바로가기</a>
        </SkipNav>
        <HeaderArea>
          <HeaderInner>
            <TopMenu>
              <ul>
                <li>
                  <a href="/">로그인</a>
                </li>
                <li className="last">
                  <a href="/">회원가입</a>
                </li>
              </ul>
            </TopMenu>
            <Logo>
              <a href="/">대우조선해양</a>
            </Logo>
          </HeaderInner>
          <Navigation />
        </HeaderArea>
      </>
    );
  }
}

const SkipNav = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  & > a {
    display: block;
    height: 1px;
    margin-bottom: -1px;
    overflow: hidden;
    text-align: center;
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }
  & > a:hover,
  & > a:focus,
  & > a:active {
    display: block;
    height: auto;
    padding: 10px 0;
    background: #fefefe;
  }
`;

const HeaderArea = styled.header`
  position: fixed;
  width: 100%;
  z-index: 50;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid#ccc;
  box-shadow: 0 0 10px #999;
  height: 180px;
  transition: all ease;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 39px;
    background: #0065b3;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const HeaderInner = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const TopMenu = styled.div`
  overflow: hidden;

  & ul {
    overflow: hidden;
    float: right;
    margin-top: 10px;
  }
  & li {
    float: left;
    margin-right: 35px;
    position: relative;
    color: #fff;
  }
  & li.last {
    margin-right: 0;
  }
  & li a {
    color: #fff;
  }
  & li a:hover {
    font-weight: 500;
  }
`;

const Logo = styled.h1`
  margin-top: 15px;
  display: block;
  height: 60px;
  background: url(${logo}) center no-repeat;
  text-indent: -999px;
  overflow: hidden;
`;

export default Header;
