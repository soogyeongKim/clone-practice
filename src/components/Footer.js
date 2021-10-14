import React, { Component } from "react";
import styled from "styled-components";

import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";

class Footer extends Component {
  render() {
    return (
      <>
        <FooterArea>
          <FooterInner>
            <FooterLeft>
              <FooterMenu>
                <List>
                  <a href="/">개인정보처리방침</a>
                </List>
                <List>
                  <a href="/">이용약관</a>
                </List>
                <List>
                  <a href="/">게시판</a>
                </List>
                <List>
                  <a href="/">전자결제제도</a>
                </List>
                <List>
                  <a href="/">사이버캠퍼스</a>
                </List>
              </FooterMenu>
              <CopyRight>
                <Address>
                  <span>본사</span>: 055-735-2114 &emsp; <span>서울</span>:
                  02-2129-0114
                  <br />
                  경상남도 거제시 거제대로 3370
                </Address>
                <p>Copyright &copy; 2011 DSME Co,.ltd. All Right Reserved.</p>
              </CopyRight>
            </FooterLeft>
            <FooterRight>
              <Sns>
                <SnsUl>
                  <SnsLi>
                    <a href="/" target="_blank" title="페이스북 새 창으로 열기">
                      <span className="hidden">페이스북</span>
                      <SnsFace/>
                    </a>
                  </SnsLi>
                  <SnsLi>
                    <a href="/" target="_blank" title="유투브 새 창으로 열기">
                      <span className="hidden">유투브</span>
                      <SnsYou/>
                    </a>
                  </SnsLi>
                  <SnsLast>
                    <a href="/" target="_blank" title="트위터 새 창으로 열기">
                      <span className="hidden">트위터</span>
                      <SnsTwi/>
                    </a>
                  </SnsLast>
                </SnsUl>
              </Sns>
              <FamilySite>
                <a href="/">
                  제휴 사이트
                  <GoTriangleUp className="arrow_i" />
                </a>
                <FamilyList>
                  <li>
                    <a href="/" target="_blank" title="사이트 새 창에 열림">
                      DSCC
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank" title="사이트 새 창에 열림">
                      신한중공업
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank" title="사이트 새 창에 열림">
                      삼우중공업
                    </a>
                  </li>
                </FamilyList>
              </FamilySite>
            </FooterRight>
          </FooterInner>
        </FooterArea>
      </>
    );
  }
}

const FooterArea = styled.footer`
  height: 220px; 
  background: #222; 
  clear: both;
`;

const FooterInner = styled.div`
  width: 1200px; 
  margin: 0 auto;
`;

const FooterLeft = styled.div`
  overflow: hidden; 
  font-size: 1em; 
  color:#fff; 
  float:left; 
  width: 950px;
`;

const FooterMenu = styled.ul`
  width: 950px; 
  margin: 20px 0 30px 0;  
  overflow: hidden; float:left

`;

const List = styled.li`
  float:left; 
  margin-right: 20px; 
  position: relative;

  
  &:after{
    content: ''; 
    display: block; 
    width: 1px; 
    height: 15px; 
    background: #fff;
    position: absolute; 
    left:-10px; 
    bottom:2px
  }

  & a {
    color:#fff; 
    font-weight: bold;
  }
`;

const CopyRight = styled.div`
  width:950px; 
  float:left;
`;

const Address = styled.address`
  line-height: 2.3em; 
  margin:10px 0 35px 0;

  & > p{
    margin-bottom: 10px;
  }
`;

const FooterRight = styled.div`
  width: 170px; 
  overflow: hidden;

  & > a{
    color:#fff;  
    display: block;
  }
`;

const Sns = styled.div`
  width: 132px; 
  margin:10px 0 25px 0
`;

const SnsUl = styled.ul`
  overflow: hidden;

`;

const SnsLi = styled.li`
  margin: 0 20px 0 2px; 
  margin-top: 10px; 
  float:left;

  

`;

const SnsLast = styled.li`
  margin: 0 20px 0 2px; 
  margin-top: 10px; 
  float:left;
  margin-right: 0;
`;

const FamilySite = styled.div`
  position: absolute;  
  background: #222;

  &:hover {
    background: #fff;

  }

  & > a {
    display: block; 
    padding: 5px 5px 0 15px; 
    border: 1px solid#fff; 
    width: 120px; 
    height: 25px;
    color:#fff;

    & > span {
      text-align: left;
    }

    &:hover{
      color:#222;
    }
  }
`;

const FamilyList = styled.ul`
    position: absolute; 
    top:31px; left:0;
    border:1px solid #ccc; 
    width: 140px;     
    display: none;

    & > li {
      border-bottom:1px solid#fff; 
      position: relative; 
      left:0; 
      width: 120px; 
      padding: 3px 10px;

      &:hover {
        background: #999;
      }
    }

`;

const SnsFace = styled(FaFacebookSquare)`
  font-size: 28px;
  color:#fff;

`;

const SnsYou = styled(FaYoutube)`
  font-size: 28px;
  color:#fff;
`;

const SnsTwi = styled(FaTwitter)`
  font-size: 28px;
  color:#fff;
`;

export default Footer;
