import React, { Component } from "react";
import styled from "styled-components";

import VImg1 from "../../assets/img/v_1.jpg"
import VImg2 from "../../assets/img/v_2.jpg"
import VImg3 from "../../assets/img/v_3.jpg"
import VImg4 from "../../assets/img/v_4.jpg"
import Pa from "../../assets/img/pa.svg";
import Tri from "../../assets/img/tri.png";

class MainVisual extends Component {
    render() {
        return(
            <>
               <Visual>
                    <Gallery>
                        <GalleryUl>
                            <GalleryLi>
                                <a href="/">
                                    <img src={VImg2} />
                                </a>
                            </GalleryLi>
                            <GalleryLi>
                                <a href="/">
                                    <img src={VImg1} /> 
                                </a>
                            </GalleryLi>
                            <GalleryLi>
                                <a href="/">
                                    <img src={VImg3} /> 
                                </a>
                            </GalleryLi>
                            <GalleryLi>
                                <a href="/">
                                    <img src={VImg4} />
                                </a>
                            </GalleryLi>
                        </GalleryUl>
                    </Gallery>
                    <GalleryText>
                        <TextUl>
                            <TextLi>
                                나누는 기쁨,
                                <br />
                                함께함으로 더해지는 즐거움{" "}
                            </TextLi>
                            <TextLi>
                                더 나은 미래를 향한,
                                <br /> 끊임없는 항해
                            </TextLi>
                            <TextLi>
                                같이의 가치
                                <br /> 긴 여정을 함께하는 상생의 가치{" "}
                            </TextLi>
                            <TextLi>
                                보다 행복한 내일,
                                <br /> 가치를 더하는 기업{" "}
                            </TextLi>
                        </TextUl>
                    </GalleryText>
                    <Dock>
                        <Mbtn></Mbtn>
                        <Mbtn></Mbtn>
                        <Mbtn></Mbtn>
                        <Mbtn></Mbtn>
                        <Ps></Ps>
                    </Dock>
                </Visual>
            </>
        );
    }
}


const Visual = styled.div`
    position: relative; 
    width: 2000px; 
    left: 50%; 
    margin-left: -1000px; 
    overflow: hidden; 
    z-index: 10;

`;

const Gallery = styled.div`
    position:relative ;
    overflow:hidden; 
    width:8000px; 
    height:961px; 
    left:0; 
    top:0;

`;

const GalleryUl = styled.ul`
    overflow:hidden;
`;

const GalleryLi = styled.li`
    float:left; 
    position: relative;

    &:after{
        content: ''; 
        display: block; 
        width: 87%; 
        height: 2px; 
        background-color: #fff;
        position: absolute; 
        top:100px; 
        left:100px;
    }
`;

const GalleryText = styled.div`
    position: absolute; 
    top: 370px; 
    left: 590px; 
    width: 800px; 
    line-height: 4.25em;
`;


const TextUl = styled.ul`

`; 

const TextLi = styled.li`
    text-align: center; 
    font-size: 40px; 
    font-weight: 500; 
    color: #fff;  
    padding: 30px 0; 
    z-index: 10; 
    display: none; 
    position: relative; 
    background: url(${Tri}) 740px 69px no-repeat;

    &:after{
        content: ''; 
        display: block; 
        width: 87%; 
        height: 2px; 
        background-color: #fff; 
        position: absolute; 
        top:100px; 
        left:100px;
    }

    &:nth-of-type(1){
        display: block;
    }
`; 

const Dock =styled.div`
    width:170px; 
    position:absolute; 
    left:950px; 
    bottom: 50px; 
    height: 20px;
`;

const Mbtn = styled.span`
    margin-right:15px; 
    cursor:pointer; 
    display:block; 
    float:left;  
    width:16px; 
    height:16px; 
    background: #fff; 
    border-radius:8px; 
    transition: all .5s
`;

const Ps = styled.span`
    margin-right:15px;  
    cursor:pointer; 
    display:block;  
    width:16px; 
    height:16px; 
    float:left; 
    background:url(${Pa}) 0 0 no-repeat; 
    background-size: contain ;
`;



export default MainVisual;