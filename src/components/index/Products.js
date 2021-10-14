import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import Primg1 from "../../assets/img/pr_1.jpg";
import Primg2 from "../../assets/img/pr_2.jpg";
import Primg3 from "../../assets/img/pr_3.jpg";
import Proimg1 from "../../assets/img/pro_1.jpg";
import Proimg2 from "../../assets/img/pro_2.jpg";
import Proimg3 from "../../assets/img/pro_3.jpg";

class Products extends Component {
    render(){
        return(
            <>
                <Product>
                    <h3>사업분야</h3>
                    <Pro>
                        <Pro1></Pro1>
                        <Pro2>
                            <span></span>
                        </Pro2>
                        <Pro3></Pro3>
                        <ProUl>
                            <ProLi>
                                <Pr1>
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
                                </Pr1>
                            </ProLi>
                            <ProLi>
                                <Pr2>
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
                                </Pr2>
                            </ProLi>
                            <ProLi>
                                <Pr3>
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
                                </Pr3>
                            </ProLi>
                        </ProUl>
                    </Pro>
                </Product>
            </>
        )
    }
}


const Product = styled.section`
    width: 100%; 
    padding:150px 0;  
    background:#f4f4f4;

    & > h3 {
        font-size: 50px; 
        position: relative; 
        padding:0 0 100px 50px; 
        width: 1200px; 
        margin: 0 auto;  

        &::before {
            content: ''; 
            display: block; 
            width:8px; 
            height: 60px; 
            background: #0065b3; 
            position:absolute; 
            top:-4px; 
            left:31px;
        }
    }
`;

const Pro = styled.div`
    width: 1200px; 
    margin: 0 auto; 
    overflow: hidden; 
    height:700px;
    position: relative;

    & > div {
        width:400px; 
        position:absolute; 
        top:0; 
        height:700px ; 
        background-size: cover; 
        opacity: 0;  
        transition:all .5s ease-out;
    }
`;

const Pro1 = styled.div`
    background: url(${Primg1}) center 0 no-repeat; 
    left:0; 
    filter: brightness(.6);


`;

const Pro2 = styled.div`
    left:50%; 
    margin-left:-200px; 
    overflow:hidden

    & > span {
        display:block; 
        width:1200px; 
        height:800px; 
        background:url(${Primg2}) center 0 no-repeat; 
        position:absolute; 
        top:0; 
        left:50%; 
        margin-left:-600px;
        filter: brightness(.6);
    }
`;

const Pro3 = styled.div`
    background: url(${Primg3}) center 0 no-repeat; 
    left:800px; 
    z-index:2;
    filter: brightness(.6);
`;

const ProUl = styled.ul`
    overflow: hidden;
`;

const ProLi = styled.li`
    width: 399px; 
    float: left; 
    height: 800px;
    background-size: cover;

    &:nth-child(1) {
        background:url(${Proimg1}) center center no-repeat;
    }

    &:nth-child(2) {
        background:url(${Proimg2}) center center no-repeat;
    }

    &:nth-child(3) {
        background:url(${Proimg3}) center center no-repeat;
    }
    
`;

const Pr1 = styled.a`
    display: block; 
    height: 800px; 
    position: relative; 
    z-index: 20; 
    color: #fff; 
    font-size: 40px;

        & > h4 {
            text-align: center; 
            position: relative; 
            top:60px
        }

        & > p > span {
            display: none; 
            font-size: 20px; 
            padding:0 50px 0 100px; 
            line-height: 2em; 
            position: relative; 
            top:790px;
        }

`;

const Pr2 = styled.a`
    display: block; 
    height: 800px; 
    position: relative; 
    z-index: 20; 
    color: #fff; 
    font-size: 40px;

        & > h4 {
            text-align: center; 
            position: relative; 
            top:60px
        }

        & > p > span {
            display: none; 
            font-size: 20px; 
            padding:0 50px 0 100px; 
            line-height: 2em; 
            position: relative; 
            top:790px;
        }

`;

const Pr3 = styled.a`
    display: block; 
    height: 800px; 
    position: relative; 
    z-index: 20; 
    color: #fff; 
    font-size: 40px;

        & > h4 {
            text-align: center; 
            position: relative; 
            top:60px
        }

        & > p > span {
            display: none; 
            font-size: 20px; 
            padding:0 50px 0 100px; 
            line-height: 2em; 
            position: relative; 
            top:790px;
        }

`;

export default Products;