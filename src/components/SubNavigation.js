import React, { Component } from "react";

class SubNavigation extends Component {
  render() {
    return (
      <>
        <div className="visual_sub1"></div>
        <div className="sub_menu">
          <h3>기업 소개</h3>
          <ul>
            <li className="current">
              <a href="sub1_1">회사 소개</a>
            </li>
            <li>
              <a href="#/sub1_2">경영 철학</a>
            </li>
            <li>
              <a href="sub1_3">글로벌 네트워크</a>
            </li>
            <li>
              <a href="sub1_4.html">오시는 길</a>
            </li>
          </ul>
          <div className="line_map">
            홈 &gt; 기업 소개 &gt;<strong> 회사 소개</strong>
          </div>
        </div>
      </>
    );
  }
}

export default SubNavigation;
