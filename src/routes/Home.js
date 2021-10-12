import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

class Home extends React.Component {
  render() {
    return (
      <div className="wrap">
        <div className="visual">
          <div className="gallery">
            <ul>
              <li>
                <a href="#">
                  <img src="/assets/img/v_2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/v_3.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/v_1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/v_4.jpg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="gallery_text">
            <ul>
              <li>
                나누는 기쁨,
                <br />
                함께함으로 더해지는 즐거움{" "}
              </li>
              <li>
                더 나은 미래를 향한,
                <br /> 끊임없는 항해
              </li>
              <li>
                같이의 가치
                <br /> 긴 여정을 함께하는 상생의 가치{" "}
              </li>
              <li>
                보다 행복한 내일,
                <br /> 가치를 더하는 기업{" "}
              </li>
            </ul>
          </div>
          <div className="dock">
            <span className="mbutton  btn1"></span>
            <span className="mbutton  btn2"></span>
            <span className="mbutton  btn3"></span>
            <span className="mbutton  btn4"></span>
            <span className="ps"></span>
          </div>
        </div>
        <article id="content">
          <h2 className="hidden">본문콘텐츠영역</h2>
          <section className="company">
            <div className="company_top">
              <h3>기업 소개</h3>
              <p>
                관행과 상식을 깨는 역발상 신뢰와 열정을 원동력 삼아 <br />더
                좋은 미래를 향해 항해하는 대우조선해양입니다.
              </p>
            </div>
            <div className="icon">
              <ul>
                <li>
                  <a href="#">
                    <div>
                      <span className="num">01</span>
                      <span className="txt">회사 소개</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <span className="num">02</span>
                      <span className="txt">경영 철학</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <span className="num">03</span>
                      <span className="txt">글로벌 네트워크</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <span className="num">04</span>
                      <span className="txt">오시는길</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="product">
            <h3>사업분야</h3>
            <div className="pro">
              <div className="pro1"></div>
              <div className="pro2">
                <span></span>
              </div>
              <div className="pro3"></div>
              <ul>
                <li>
                  <a className="pr1" href="#">
                    <h4>상선/특수선</h4>
                    <p>
                      <span>
                        대우조선해양은 동시에 4척의 대형 LPG 운반선(VLGC)을
                        성공적으로 건조하며, 정확한 납기 준수와 최고 수준의
                        기술력으로 세계 시장을 선도하고 있습니다. 현재 환경규제
                        기준을 준수하고 연료비 절감으로 경제성을 확보할 수 있는
                        ME-LGIP 탑재 선박의 건조도 기대하고 있습니다.
                      </span>
                    </p>
                  </a>
                </li>
                <li>
                  <a className="pr2" href="#">
                    <h4>해양/플랜트</h4>
                    <p>
                      <span>
                        LNG 수송선, 해양정제, LNG 생산에 필요한 경험과 기술을
                        접목하여 대우조선해양은 세계 최초의 FLNG를 성공적으로
                        Petronas사에 인도하였습니다. 야드 내에서의 완벽한 건조로
                        인해 해상 현지 도착 후 단 기간 내에 LNG 생산을 시작할 수
                        있었으며, 해양 LNG 시장 역사상 최초의 FLNG로
                        기록되었습니다.
                      </span>
                    </p>
                  </a>
                </li>
                <li>
                  <a className="pr3" href="#">
                    <h4>건조 실적</h4>
                    <p>
                      <span>
                        야드 내에서의 완벽한 건조로 인해 해상 현지 도착 후 단
                        기간 내에 LNG 생산을 시작할 수 있었으며, 해양 LNG 시장
                        역사상 최초의 FLNG로 기록되었습니다. 대우조선해양은
                        남들이 가지 못하는 분야에서 해양시장의 새로운 장을 열고
                        있습니다. 혁신적인 기술력과 첨단 시스템을 바탕으로다양한
                        선박을 최고의 품질로 건조합니다
                      </span>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="main_business_area">
            <div className="inner">
              <h3>R&D</h3>
              <div className="main_business_slider">
                <ul className="slider01">
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s1.jpg" alt="" />
                      <strong>
                        아틱드릴쉽
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s2.jpg" alt="" />
                      <strong>
                        해상 풍력 발전기 설치선
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s4.jpg" alt="" />
                      <strong>
                        원자력 추진선
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s3.jpg" alt="" />
                      <strong>
                        로봇 기술
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                </ul>
                <ul className="slider02">
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s2_1.jpg" alt="" />
                      <strong>
                        아틱드릴쉽
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s2_3.jpg" alt="" />
                      <strong>
                        해상 풍력 발전기 설치선
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s2_2.jpg" alt="" />
                      <strong>
                        원자력 추진선
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s2_4.jpg" alt="" />
                      <strong>
                        로봇 기술
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                </ul>
                <ul className="slider03">
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s1.jpg" alt="" />
                      <strong>
                        아틱드릴쉽
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s2_3.jpg" alt="" />
                      <strong>
                        해상 풍력 발전기 설치선
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s2_2.jpg" alt="" />
                      <strong>
                        원자력 추진선
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <img src="/assets/img/rnd_s2_4.jpg" alt="" />
                      <strong>
                        로봇 기술
                        <span>DSME가 독자 개발 한 풍력 발전 설치선</span>
                      </strong>
                    </a>
                  </li>
                </ul>
                <div className="slider_nav">
                  <button type="button" className="slider_prev">
                    <MdArrowBackIosNew />
                    <span></span>
                  </button>
                  <button type="button" className="slider_next">
                    <MdArrowForwardIos />
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="board">
            <div className="board_inner">
              <section className="news">
                <h3>보도자료</h3>
                <div className="board_left">
                  <ul></ul>
                  <a href="#">
                    <span className="plus">
                      <FaPlus />
                    </span>
                  </a>
                </div>
              </section>
              <section className="notice">
                <h3>공지사항</h3>
                <div className="board_right">
                  <ul></ul>
                  <a href="#">
                    <span className="plus_right">
                      <FaPlus />
                    </span>
                  </a>
                </div>
              </section>
            </div>
          </div>
          <section className="stock">
            <h3>투자정보</h3>
            <div className="stock_con">
              <ul>
                <li>
                  <a href="./sub5/sub5_1.html">
                    <h4>주가 정보</h4>
                    <ul className="stock_list">
                      <li>
                        <BsCircleFill className="i" />
                        주가 정보
                      </li>
                      <li>
                        <BsCircleFill className="i" />
                        주가 정보
                      </li>
                    </ul>
                    <span className="plus">자세히 보기</span>
                  </a>
                </li>
                <li>
                  <a href="./sub5/sub5_2.html">
                    <h4>재무 정보</h4>
                    <ul className="stock_list">
                      <li>
                        <BsCircleFill className="i" />
                        주가 정보
                      </li>
                      <li>
                        <BsCircleFill className="i" />
                        주가 정보
                      </li>
                    </ul>
                    <span className="plus">자세히 보기</span>
                  </a>
                </li>
                <li className="stock1">
                  <a href="./sub5/sub5_3.html">
                    <h4>문&emsp;&emsp;의</h4>
                    <ul className="stock_list">
                      <li>
                        <BsCircleFill className="i" />
                        주가 정보
                      </li>
                      <li>
                        <BsCircleFill className="i" />
                        주가 정보
                      </li>
                    </ul>
                    <span className="plus">자세히 보기</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    );
  }
}
export default Home;
