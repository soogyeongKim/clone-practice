import React, { Component } from "react";
import styled from "styled-components";

class Navigation extends Component {

   hoverScript = () => {
 
  }

  render() {
    return (
      <>
        <Gnb>
          <h2 className="hidden">글로벌네비게이션영역</h2>
          <DropdownMenu>
            <Menu>
              <h3>
                <a href="/sub1">
                  기업소개
                </a>
              </h3>
              <ul>
                <li>
                  <a href="/">회사 소개</a>
                </li>
                <li>
                  <a href="/">경영 철학</a>
                </li>
                <li>
                  <a href="/">글로벌 네트워크</a>
                </li>
                <li>
                  <a href="/">오시는 길</a>
                </li>
              </ul>
            </Menu>
            <Menu>
              <h3>
                <a href="/">
                  사업분야
                </a>
              </h3>
              <ul>
                <li>
                  <a href="/">상선/특수선</a>
                </li>
                <li>
                  <a href="/">해양/플랜트</a>
                </li>
                <li>
                  <a href="/">건조 실적</a>
                </li>
              </ul>
            </Menu>
            <Menu>
              <h3>
                <a href="/">
                  기술연구
                </a>
              </h3>
              <ul>
                <li>
                  <a href="/">연구 소개</a>
                </li>
                <li>
                  <a href="/">보유 기술</a>
                </li>
              </ul>
            </Menu>
            <Menu>
              <h3>
                <a href="/">
                  홍보센터
                </a>
              </h3>
              <ul>
                <li>
                  <a href="/">보도 자료</a>
                </li>
                <li>
                  <a href="/">공지 사항</a>
                </li>
              </ul>
            </Menu>
            <Menu>
              <h3>
                <a href="/">
                  투자정보
                </a>
              </h3>
              <ul>
                <li>
                  <a href="/">주가 정보</a>
                </li>
                <li>
                  <a href="/">재무 정보</a>
                </li>
                <li>
                  <a href="/">건의 사항</a>
                </li>
              </ul>
            </Menu>
            <Menu>
              <h3>
                <a href="/">
                  지속경영
                </a>
              </h3>
              <ul>
                <li>
                  <a href="/">윤리 경영</a>
                </li>
                <li>
                  <a href="/">사회 공헌</a>
                </li>
                <li>
                  <a href="/">안전/환경</a>
                </li>
              </ul>
            </Menu>
          </DropdownMenu>
        </Gnb>
      </>
    );
  }
}

const Gnb = styled.nav`
  overflow : hidden;
`;


const Menu = styled.li`
  float: left;
  text-align: center;
  position: relative;
  width: 16.66%;
  padding: 20px 0;

  & a {
    text-align: center;
    display: block;
  }
  & ul {
    position: absolute;
    left: 0;
    top: 57px;
    font-weight: 400;
    display: none;
    margin: 0 auto;
    width: 100%;
    height: 210px;
  }
  & ul li a {
    padding-top: 20px;
    transition: all 0.4s;
    font-size: 18px;
    width: 200px;
  }

  
  
`;


const DropdownMenu = styled.ul`
  width: 1200px;
  margin: 0 auto;
  font-size: 22px;
  font-weight: 600;

  &:hover{
    & > ${Menu} {
      & > ul {
        display:block;
       
      }
    }

  }
`;
export default Navigation;
