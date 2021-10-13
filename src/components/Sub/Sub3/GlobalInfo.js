import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import GloImg from "../../../assets/img/glo_1.jpg";
import Glo from "../../../assets/img/glo_2_03.jpg";
import Oct from "../../../assets/img/octagon.svg";

class GlobalInfo extends Component{
    render(){
        return(
            <>
                <Con>
                    <img src = {GloImg} />
                    <Slogan>
                    <h3><BlueColor>세계바다</BlueColor>를 <Color>무대</Color>로</h3>
                    <p>대우조선해양의 해외 지사에서는 오늘도 세계의 해운회사와 중개인들을 
                        상대로 활발한 영업활동을 펼치고 있습니다.</p>
                    </Slogan>
                    <Info>
                        <InfoLi>
                            <a href="/">
                               <Box>지사</Box>
                               <Name>런던 지사</Name>
                               <dl>
                                    <dt>address</dt>
                                    <dd>Unit C402,<br/> 
                                        Westfield London Shopping Centre,<br/> 
                                        Ariel Way, London W12 7FD, UK</dd>
                                </dl>
                                <BtnMap>map</BtnMap> 
                            </a>
                        </InfoLi>
                        <InfoLi>
                            <a href="/">
                               <Box>지사</Box>
                               <Name>런던 지사</Name>
                               <dl>
                                    <dt>address</dt>
                                    <dd>Unit C402,<br/> 
                                        Westfield London Shopping Centre,<br/> 
                                        Ariel Way, London W12 7FD, UK</dd>
                                </dl>
                                <BtnMap>map</BtnMap> 
                            </a>
                        </InfoLi>
                        <InfoLi>
                            <a href="/">
                               <Box>지사</Box>
                               <Name>런던 지사</Name>
                               <dl>
                                    <dt>address</dt>
                                    <dd>Unit C402,<br/> 
                                        Westfield London Shopping Centre,<br/> 
                                        Ariel Way, London W12 7FD, UK</dd>
                                </dl>
                                <BtnMap>map</BtnMap> 
                            </a>
                        </InfoLi>
                        <InfoLi>
                            <a href="/">
                               <Box>지사</Box>
                               <Name>런던 지사</Name>
                               <dl>
                                    <dt>address</dt>
                                    <dd>Unit C402,<br/> 
                                        Westfield London Shopping Centre,<br/> 
                                        Ariel Way, London W12 7FD, UK</dd>
                                </dl>
                                <BtnMap>map</BtnMap> 
                            </a>
                        </InfoLi>
                        <InfoLi>
                            <a href="/">
                               <Box>지사</Box>
                               <Name>런던 지사</Name>
                               <dl>
                                    <dt>address</dt>
                                    <dd>Unit C402,<br/> 
                                        Westfield London Shopping Centre,<br/> 
                                        Ariel Way, London W12 7FD, UK</dd>
                                </dl>
                                <BtnMap>map</BtnMap> 
                            </a>
                        </InfoLi>
                        <InfoLi>
                            <a href="/">
                               <Box>지사</Box>
                               <Name>런던 지사</Name>
                               <dl>
                                    <dt>address</dt>
                                    <dd>Unit C402,<br/> 
                                        Westfield London Shopping Centre,<br/> 
                                        Ariel Way, London W12 7FD, UK</dd>
                                </dl>
                                <BtnMap>map</BtnMap> 
                            </a>
                        </InfoLi>
                    </Info>
                </Con>
            </>
        )
    }
}

const Con = styled.div`
    width:1200px; 
    margin: 0 auto;
    margin-bottom: 150px;
`;

const Color = styled.span`
    color:#fa7c01; 
    font-weight: 600;
`;

const BlueColor = styled.span`
    color:#0065b3; 
    font-weight: 600;
`;

const Slogan = styled.div`
    margin: 250px 0 250px 0;

    & h3{
        margin: 150px 0 100px 0; 
        font-size: 40px;
        text-align: center;
    }

    & p {
        font-size: 22px; 
        font-weight: bold; 
        text-align: center; 
        margin-bottom: 150px; 
        line-height: 2em;
    }

`;

const Info = styled.ul`
    display:block; 
    height: 830px;
`;

const InfoLi = styled.li`
    float:left; 
    overflow:hidden; 
    background:#fff; 
    border:1px solid #ddd;
    width:378px; 
    height:382px; 
    margin:0 29px 29px 0; 
    text-align:left;

        &::before {
        content:""; display:block; width:380px; height: 382px;
        background:url(${Glo}) no-repeat; 
        opacity: .6;
        position:absolute;  
        }

        & a {
            display:block; 
            position:relative; 
            width:338px; 
            height:220px; 
            padding:75px 0 88px 40px;

            & dl {
                margin:35px 0 0;
            }

            & dt {
                font-family:"roboto";font-size:20px;color:#0065b3; text-transform: uppercase;
            }

            & dd {
                font-size:18px; color:#666; line-height:2em; margin-top:20px;
            }
        }

        &:nth-child(3),&:nth-child(6) {
            margin-right: 0;
        }
`;

const Box = styled.div`
    display:inline-block; 
    background:#0065b3; 
    padding:0 15px;
    font-size:18px; 
    color:#fff; 
    text-align:center;
    line-height:30px; 
    position:absolute; 
    left:0; 
    top:0;
`;

const Name = styled.div`
    font-size:24px;
`;

const BtnMap = styled.div`
    position:absolute; 
    left:40px;
    bottom:40px; 
    transition:all .3s;

    &::before {
        content: ''; 
        display: block; 
        background: url(${Oct})no-repeat ; 
        width: 75px; 
        height: 75px;
        position: absolute; 
        top: -27px; 
        left:-20px;
    }

    &:hover {
        transform:rotate(90deg); 
        transition:all 1s;
    }
`;

export default GlobalInfo;