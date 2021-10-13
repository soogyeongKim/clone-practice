import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import IconImg1 from "../assets/img/icon1.jpg";
import IconImg2 from "../assets/img/icon2.jpg";
import IconImg3 from "../assets/img/icon3.jpg";
import IconImg4 from "../assets/img/icon4.jpg";


class Company extends Component {
    render() {
        return (
            <>
              <Com>
                <ComTop>
                    <h3>기업 소개</h3>
                    <p>관행과 상식을 깨는 역발상, 신뢰와 열정을 원동력 삼아 <br />더
                        좋은 미래를 향해 항해하는 대우조선해양입니다.</p>
                </ComTop>
                <ComIcon>
                    <ComIconUl>
                        <ComIconLi>
                            <a href="/">
                                <div>
                                    <span>01</span>
                                    <span>회사 소개</span>
                                </div>
                            </a>
                        </ComIconLi>
                        <ComIconLi>
                            <a href="/">
                                <div>
                                    <span>02</span>
                                    <span>경영 철학</span>
                                </div>
                            </a>
                        </ComIconLi>
                        <ComIconLi>
                            <a href="/">
                                <div>
                                    <span>03</span>
                                    <span>글로벌 네트워크</span>
                                </div>
                            </a>
                        </ComIconLi>
                        <ComIconLi>
                            <a href="/">
                                <div>
                                    <span>04</span>
                                    <span>오시는길</span>
                                </div>
                            </a>
                        </ComIconLi>
                    </ComIconUl>
                </ComIcon>
              </Com>  
            </>
        )
    }

}

const Com = styled.section`
  width: 1200px; 
  position: relative; 
  margin: 200px auto; 
  margin-bottom: 150px;
  overflow: hidden; 
  background: #fff;
  
`;


const ComTop = styled.div`
  width: 800px;
  height: 200px; 
  background: #0089d1; 
  float:left;


    & > h3{
      font-size:50px; 
      color:#fff; 
      text-align: center; 
      padding:73px 0;

      &::before {
        content:'';
        display: block;
        width: 200px; 
        height: 4px; 
        background: #fff; 
        position: absolute; 
        top:100px; 
        left:600px
      }

      &::after {
        content:'';
        display: block; 
        width: 200px; 
        height: 4px; 
        background: #fff; 
        position: absolute; 
        top:100px;
      }
    }

    & > P{
      padding:40px 0; 
      line-height: 2.3em; 
      font-size:24px; 
      text-align: center;
    }
`;

const ComIcon = styled.div`
  height: 780px; 
  float: right;

  
`;

const ComIconUl = styled.ul`
  overflow: hidden;
`;

const ComIconLi = styled.li`
  float: left; 
  position: relative;

  &:nth-child(1){
    background: url(${IconImg1}) no-repeat; 
    position: absolute;
    top:0; 
    right:0
  }
  &:nth-child(2){
    background: url(${IconImg2}) no-repeat; 
    position: absolute; 
    top:390px; 
    left:0
  }
  &:nth-child(3){
    background: url(${IconImg3}) no-repeat; 
    position: absolute; 
    top:390px; 
    left:400px
  }
  &:nth-child(4){
    background: url(${IconImg4}) no-repeat; 
    position: absolute; 
    top:390px; 
    left:800px
  }

  & > a {
    display: block; 
    width: 400px;
    height: 390px; 
    transition: all .3s ease-out; 
    position: relative;   
  }

  & > a > div {
    width: 50px; 
    height: 390px; 
    float:right;
    background: rgba(0, 0, 0, .4); 
    transition: all .6s ease 
  }
  & > a > div > span:nth-of-type(1) {
    display: block; 
    font-size: 32px; 
    color: #fff;  
    font-weight: 600; 
    padding: 30px 0 0 6px; 
    width: 50px;
    transition: all .6s ease
  }
  & > a > div > span:nth-of-type(2) {
  display: block; 
  text-align: center; 
  font-size: 24px; 
  color:#fff; 
  padding: 60px 10px 0 10px; 
  width:30px; 
  }
  
  
  &:hover a{
    background: rgba(0, 0, 0, .5);
  }

  &:hover a > div {
    width: 400px;
  }

  &:hover a > div > span:nth-of-type(1){
    width: 400px;
    font-size: 40px; 
    padding: 130px 0 0 100px;   
  }  
  &:hover a > div > span:nth-of-type(2){
    width: 400px;
    font-size: 30px; 
    padding: 20px 10px 0 10px;
  }

`;


export default Company;