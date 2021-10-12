import React, { Component } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";

class Footer extends Component {
  render() {
    return (
      <footer id="footerArea">
        <div className="footer_inner">
          <a className="topMove" href="#"></a>
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
    );
  }
}

export default Footer;
