import React, { Component } from "react";
import styled from "styled-components";

class Navigation extends Component {
  render() {
    return (
      <>
        <Gnb id="gnb">
          <h2 className="hidden">글로벌네비게이션영역</h2>
          <DropdownMenu className="dropdownmenu">
            <Menu className="menu">
              <h3>
                <a className="depth1" href="#/sub1_1">
                  기업소개
                </a>
              </h3>
              <ul>
                <li>
                  <a href="/sub1_1">회사 소개</a>
                </li>
                <li>
                  <a href="/sub1_2">경영 철학</a>
                </li>
                <li>
                  <a href="/sub1_3">글로벌 네트워크</a>
                </li>
                <li>
                  <a href="sub1/sub1_4.html">오시는 길</a>
                </li>
              </ul>
            </Menu>
            <Menu className="menu">
              <h3>
                <a className="depth1" href="sub2/sub2_1.html">
                  사업분야
                </a>
              </h3>
              <ul>
                <li>
                  <a href="sub2/sub2_1.html">상선/특수선</a>
                </li>
                <li>
                  <a href="sub2/sub2_2.html">해양/플랜트</a>
                </li>
                <li>
                  <a href="sub2/sub2_3.html">건조 실적</a>
                </li>
              </ul>
            </Menu>
            <Menu className="menu">
              <h3>
                <a className="depth1" href="sub3/sub3_1.html">
                  기술연구
                </a>
              </h3>
              <ul>
                <li>
                  <a href="sub3/sub3_1.html">연구 소개</a>
                </li>
                <li>
                  <a href="sub3/sub3_2.html">보유 기술</a>
                </li>
              </ul>
            </Menu>
            <Menu className="menu">
              <h3>
                <a className="depth1" href="concert/list.php">
                  홍보센터
                </a>
              </h3>
              <ul>
                <li>
                  <a href="concert/list.php">보도 자료</a>
                </li>
                <li>
                  <a href="greet/list.php">공지 사항</a>
                </li>
              </ul>
            </Menu>
            <Menu className="menu">
              <h3>
                <a className="depth1" href="sub5/sub5_1.html">
                  투자정보
                </a>
              </h3>
              <ul>
                <li>
                  <a href="sub5/sub5_1.html">주가 정보</a>
                </li>
                <li>
                  <a href="sub5/sub5_2.html">재무 정보</a>
                </li>
                <li>
                  <a href="sub5/sub5_3.html">건의 사항</a>
                </li>
              </ul>
            </Menu>
            <Menu className="menu">
              <h3>
                <a className="depth1" href="sub6/sub6_1.html">
                  지속경영
                </a>
              </h3>
              <ul>
                <li>
                  <a href="sub6/sub6_1.html">윤리 경영</a>
                </li>
                <li>
                  <a href="sub6/sub6_2.html">사회 공헌</a>
                </li>
                <li>
                  <a href="sub6/sub6_3.html">안전/환경</a>
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
  /* gnb 공통영역 */
`;

const DropdownMenu = styled.ul`
  font-size: 22px;
  font-weight: 600;
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

export default Navigation;
