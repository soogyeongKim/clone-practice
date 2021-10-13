import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import RndLeft1 from "../assets/img/rnd_s1.jpg";
import RndLeft2 from "../assets/img/rnd_s2.jpg";
import RndLeft3 from "../assets/img/rnd_s3.jpg";
import RndLeft4 from "../assets/img/rnd_s4.jpg";
import RndMid1 from "../assets/img/rnd_s2_1.jpg";
import RndMid2 from "../assets/img/rnd_s2_2.jpg";
import RndMid3 from "../assets/img/rnd_s2_3.jpg";
import RndMid4 from "../assets/img/rnd_s2_4.jpg";




import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

class Business extends Component {
    render() {
        return(
            <>
                <MainBusiness>
                    <BusiInner>
                        <h3>R&D</h3>
                        <BusiSlider>
                            <Slider1>
                                <Active>
                                    <a href="/">
                                        <SliderImg1>
                                            <img src={RndLeft1}/>
                                        </SliderImg1>
                                        <Txt1>
                                            아틱드릴쉽
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt1>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg1>
                                            <img src={RndLeft2}/>
                                        </SliderImg1>
                                        <Txt1>
                                            해상 풍력 발전기 설치선
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선
                                            </span>
                                        </Txt1>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg1>
                                            <img src={RndLeft4}/>
                                        </SliderImg1>
                                        <Txt1>
                                            원자력 추진선
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt1>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg1>
                                            <img src={RndLeft3}/>
                                        </SliderImg1>
                                        <Txt1>
                                            로봇 기술
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt1>
                                    </a>
                                </Active>
                            </Slider1>
                            <Slider2>
                                <Active>
                                    <a href="/">
                                        <SliderImg2>
                                            <img src={RndMid1}/>
                                        </SliderImg2>
                                        <Txt2>
                                            아틱드릴쉽
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt2>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg2>
                                            <img src={RndMid3}/>
                                        </SliderImg2>
                                        <Txt2>
                                            해상 풍력 발전기 설치선
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선
                                            </span>
                                        </Txt2>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg2>
                                            <img src={RndMid2}/>
                                        </SliderImg2>
                                        <Txt2>
                                            원자력 추진선
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt2>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg2>
                                            <img src={RndMid4}/>
                                        </SliderImg2>
                                        <Txt2>
                                            로봇 기술
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt2>
                                    </a>
                                </Active>
                            </Slider2>
                            <Slider3>
                                <Active>
                                    <a href="/">
                                        <SliderImg3>
                                            <img src={RndLeft1}/>
                                        </SliderImg3>
                                        <Txt3>
                                            아틱드릴쉽
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt3>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg3>
                                            <img src={RndMid3}/>
                                        </SliderImg3>
                                        <Txt3>
                                            해상 풍력 발전기 설치선
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선
                                            </span>
                                        </Txt3>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg3>
                                            <img src={RndMid2}/>
                                        </SliderImg3>
                                        <Txt3>
                                            원자력 추진선
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt3>
                                    </a>
                                </Active>
                                <Active>
                                    <a href="/">
                                        <SliderImg3>
                                            <img src={RndMid4}/>
                                        </SliderImg3>
                                        <Txt3>
                                            로봇 기술
                                            <span>
                                                DSME가 독자 개발 한 풍력 발전 설치선 
                                            </span>
                                        </Txt3>
                                    </a>
                                </Active>
                            </Slider3>
                        </BusiSlider>
                        <SliderNav>
                            <SliderPrev>
                                <ArrowBack />
                                <span></span>
                            </SliderPrev>
                            <SliderNext>
                                <ArrowFor />
                                <span></span>
                            </SliderNext>
                        </SliderNav>
                    </BusiInner>
                </MainBusiness>
            </>
        )
    }
}

const MainBusiness = styled.section`
    width: 100%; 
    margin-bottom: 130px;
    position: relative; 
    overflow: hidden; 
    width:100%; 
    background:#fff
`;

const BusiInner = styled.div`
    width: 1200px; 
    margin: 0 auto; 
    box-sizing: border-box;
    position: relative;

    & > h3 {
        font-size: 50px; 
        position: relative; 
        left:0; 
        top:160px;
        padding-left:30px; 
        width: fit-content; 

        &::before {
            content: ''; 
            display: block; 
            width:8px; 
            height: 60px; 
            background: #0065b3; 
            position:absolute; 
            top:0; 
            left:0;
        }
    }
`;

const BusiSlider = styled.div`
    position: relative;
`;

const Slider1 = styled.ul`
    margin-top:200px; 
    width:400px; 
    height:600px; 
    overflow:hidden; 
    display: inline-block; 
    position: relative;
`;

const Active = styled.li`
    box-sizing:border-box; 
    padding-right:60px; 
    float:left; 
    position: absolute; 
    color:#fff;
    z-index:0; 
    cursor:pointer;

    & a {
        display: block;
    }

`;

const SliderImg1 = styled.div`
    width:450px;

    & > img {
        width : 100%
    }
`;

const Txt1 = styled.strong`
    position: absolute; 
    top:500px;
    left:15px; 
    font-size:30px; 
    letter-spacing: -0.5px; 
    line-height: 1.6; 
    font-weight: 700;
    box-sizing: border-box; 
    color: #fff;

    & > span {
        display: block; 
        margin-bottom:8px; 
        font-size:18px; 
        line-height: 1.64; 
        letter-spacing: -0.7px; 
        font-weight: 700; 
        white-space: pre-line;7
        overflow: hidden;
    }
  
`;

const Txt2 = styled.strong`
    position: absolute;  
    left:15px; 
    top:530px;
    font-size:30px; 
    letter-spacing: -0.5px; 
    line-height: 1.6; 
    font-weight: 700;
    box-sizing: border-box; 
    color: #fff;

    & > span {
        display: block; 
        margin-bottom:8px; 
        font-size:18px; 
        line-height: 1.64; 
        letter-spacing: -0.7px; 
        font-weight: 700; 
        white-space: pre-line; 
        opacity: 0; 
        height:0; 
        overflow: hidden;
    }
`;

const Txt3 = styled.strong`
    position: absolute; 
    bottom:20px; 
    left:15px; 
    font-size:30px; 
    letter-spacing: -0.5px; 
    line-height: 1.6; 
    font-weight: 700;
    box-sizing: border-box; 
    color: #fff;

    & > span {
        display: block; 
        margin-bottom:8px; 
        font-size:18px; 
        line-height: 1.64; 
        letter-spacing: -0.7px; 
        font-weight: 700; 
        white-space: pre-line; 
        opacity: 0; 
        height:0; 
        overflow: hidden;
    }
`;



const Slider2 = styled.ul`
    position:absolute; 
    left:450px; 
    top:80px;
    width:350px; 
    height:585px;
    overflow:hidden;
`;

const SliderImg2 = styled.div`
    width:400px;   
    
    
`;

const Slider3 = styled.ul`
    position:absolute; 
    left:849px; 
    width:350px; 
    height:680px; 
    top:122px;
    overflow:hidden;
`;

const SliderImg3 = styled.div`
    width:360px;   
    
    & > img {
        width : 100%
    }
`;

const SliderNav = styled.div`
    position: absolute; 
    left:600px; 
    margin-left:-40px; 
    top:738px;
`;

const SliderPrev = styled.button`
    margin-left:20px;
`;

const SliderNext = styled.button`
    margin-left:20px;
`;

const ArrowBack = styled(MdArrowBackIosNew)`
    font-size: 30px;
     position: relative; 
     left:0;  
     padding-top: 9px;

`;

const ArrowFor = styled(MdArrowForwardIos)`
    font-size: 30px; 
    position: relative; 
    left:0;  
    padding-top: 9px;

`;



export default Business;