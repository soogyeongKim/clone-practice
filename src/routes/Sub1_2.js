import React from "react";
import "./Sub1_2.css";
import "../index.css";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";

class App extends React.Component {
  render() {
    return (
      <div className="wrap">
        <div id="skipNav">
          <a href="#content">본문 바로가기</a>
          <a href="#gnb">글로벌 네비게이션 바로가기</a>
        </div>
        <header id="headerArea">
          <div className="header_inner">
            <div className="top_menu">
              <ul>
                <li>
                  <a href="#">로그인</a>
                </li>
                <li className="last">
                  <a href="#">회원가입</a>
                </li>
              </ul>
            </div>
            <h1 className="logo">
              <a href="#">대우조선해양</a>
            </h1>
            <nav id="gnb">
              <h2 className="hidden">글로벌네비게이션영역</h2>
              <ul className="dropdownmenu">
                <li className="menu">
                  <h3>
                    <a className="depth1" href="#">
                      기업소개
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">회사 소개</a>
                    </li>
                    <li>
                      <a href="#">경영 철학</a>
                    </li>
                    <li>
                      <a href="#">글로벌 네트워크</a>
                    </li>
                    <li>
                      <a href="#">오시는 길</a>
                    </li>
                  </ul>
                </li>
                <li className="menu">
                  <h3>
                    <a className="depth1" href="#">
                      사업분야
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">상선/특수선</a>
                    </li>
                    <li>
                      <a href="#">해양/플랜트</a>
                    </li>
                    <li>
                      <a href="#">건조 실적</a>
                    </li>
                  </ul>
                </li>
                <li className="menu">
                  <h3>
                    <a className="depth1" href="#">
                      기술연구
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">연구 소개</a>
                    </li>
                    <li>
                      <a href="#">보유 기술</a>
                    </li>
                  </ul>
                </li>
                <li className="menu">
                  <h3>
                    <a className="depth1" href="#">
                      홍보센터
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">보도 자료</a>
                    </li>
                    <li>
                      <a href="#">공지 사항</a>
                    </li>
                  </ul>
                </li>
                <li className="menu">
                  <h3>
                    <a className="depth1" href="#">
                      투자정보
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">주가 정보</a>
                    </li>
                    <li>
                      <a href="#">재무 정보</a>
                    </li>
                    <li>
                      <a href="#">건의 사항</a>
                    </li>
                  </ul>
                </li>
                <li className="menu">
                  <h3>
                    <a className="depth1" href="#">
                      지속경영
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">윤리 경영</a>
                    </li>
                    <li>
                      <a href="#">사회 공헌</a>
                    </li>
                    <li>
                      <a href="#">안전/환경</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="visual_sub1"></div>
        <div className="sub_menu">
          <h3>기업 소개</h3>
          <ul>
            <li className="current">
              <a href="sub1_1">회사 소개</a>
            </li>
            <li>
              <a href="sub1_2">경영 철학</a>
            </li>
            <li>
              <a href="sub1_3">글로벌 네트워크</a>
            </li>
            <li>
              <a href="sub1_4">오시는 길</a>
            </li>
          </ul>
          <div className="line_map">
            홈 &gt; 기업 소개 &gt;<strong> 경영 철학</strong>
          </div>
        </div>
        <article id="content_sub1_2">
          <div className="title_area_sub1_2">
            <h2>경영 철학</h2>
          </div>
          <div className="content_area_sub1_2">
            <div className="slogan">
              <h3>핵심 가치</h3>
              <p>
                정직한 행동과 약속 실천을 통해 고객과 지속적으로 신뢰를 쌓으며,
                현실에 안주하지 않고 더 높은 가치를 향해
                <br />
                끊임없이 <span>변화</span>와 <span className="color">혁신</span>
                을 추구하는 대우조선해양인의 의지와 마음을 담아 핵심가치로
                선정하였습니다.
              </p>
            </div>
            <div className="passion">
              <img src="/assets/img/sub1_2_1.jpg" alt="" />
              <h4>
                열정<span>passion</span>
              </h4>
              <p>
                대우조선해양은 구성원들의 열정이 이룩한 위대한 역사였으며,
                이같은 열정을
                <br /> 바탕으로 시련과 역경을 극복하여 왔습니다.
              </p>

              <dl>
                <dt>사명감</dt>
                <dd>
                  동료에 대한 <br />
                  책임 의식
                </dd>
              </dl>
              <dl>
                <dt>실천</dt>
                <dd>
                  문제해결에 <br />
                  앞장선다
                </dd>
              </dl>
              <dl>
                <dt>긍정</dt>
                <dd>
                  할 수 있다는 <br />
                  마음 가짐
                </dd>
              </dl>
              <dl className="last">
                <dt>자부심</dt>
                <dd>
                  조직과 개인에 <br />
                  대한 긍지
                </dd>
              </dl>
            </div>
            <div className="trust">
              <img src="assets/img/sub1_2_2.jpg" alt="" />
              <h4>
                신뢰<span>trust</span>
              </h4>
              <p>
                대우조선해양은 신뢰를 바탕으로 모든 분야에서 원활한 협력관계를
                유지하고
                <br /> 있으며, 노사 화합과 고객감동을 이루어 나가고 있습니다.
              </p>
              <dl>
                <dt>소통</dt>
                <dd>
                  열린 마음으로 <br />
                  이해 존중
                </dd>
              </dl>
              <dl>
                <dt>투명성</dt>
                <dd>
                  윤리와 원칙을 <br />
                  지킨다
                </dd>
              </dl>
              <dl>
                <dt>공유</dt>
                <dd>
                  의사결정의 <br />
                  과정 공유
                </dd>
              </dl>
              <dl className="last">
                <dt>공동체</dt>
                <dd>
                  배려와 공유를 <br />
                  통한 협력
                </dd>
              </dl>
            </div>
          </div>
        </article>
        <footer id="footerArea">
          <div className="footer_inner">
            <div className="footer_left">
              <ul className="footer_menu">
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">이용약관</a>
                </li>
                <li>
                  <a href="#">게시판</a>
                </li>
                <li>
                  <a href="#">전자결제제도</a>
                </li>
                <li>
                  <a href="#">사이버캠퍼스</a>
                </li>
              </ul>
              <div className="copyright">
                <address>
                  <span>본사</span>: 055-735-2114 &emsp; <span>서울</span>:
                  02-2129-0114
                  <br />
                  경상남도 거제시 거제대로 3370
                </address>
                <p>Copyright &copy; 2011 DSME Co,.ltd. All Right Reserved.</p>
              </div>
            </div>
            <div className="footer_right">
              <div className="sns">
                <ul>
                  <li>
                    <a href="#" target="_blank" title="페이스북 새 창으로 열기">
                      <span className="hidden">페이스북</span>
                      <FaFacebookSquare className="sns_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" title="유투브 새 창으로 열기">
                      <span className="hidden">유투브</span>
                      <FaYoutube className="sns_icon" />
                    </a>
                  </li>
                  <li className="sns_last">
                    <a href="#" target="_blank" title="트위터 새 창으로 열기">
                      <span className="hidden">트위터</span>
                      <FaTwitter className="sns_icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="familysite">
                <a className="arrow" href="#">
                  제휴 사이트
                  <GoTriangleUp className="arrow_i" />
                </a>
                <ul className="family_list">
                  <li>
                    <a href="#" target="_blank" title="사이트 새 창에 열림">
                      DSCC
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" title="사이트 새 창에 열림">
                      신한중공업
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" title="사이트 새 창에 열림">
                      삼우중공업
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
