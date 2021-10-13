import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import Suimg from "../../../assets/img/sub1_1_02.png";


class Summary extends Component {
    render() {
        return (
            <>
                <SumCon>
                    <Title>회사 소개</Title>
                    <TitleArea>
                        <TitleUl>
                            <TitleLi ClassName="current">
                                <a href="/">개요</a>
                            </TitleLi>
                            <TitleLi>
                                <a href="/">연혁</a>
                            </TitleLi>
                            <TitleLi>
                                <a href="/">ceo</a>
                            </TitleLi>
                        </TitleUl>
                    </TitleArea>
                    <TitleCon>
                        <Con>
                            <ConSlogan>
                                <h3>개요</h3>
                                <p>뿌리깊은 조선역사를 지닌 유럽, 세계 경제의 거대한 축을 이루는
                                    미주 등 세계 조선시장에서,
                                    <br />
                                    <span>대우조선해양</span>이 건조한 선박들이 ‘
                                    <span className="color">최고 품질의 배</span>’로 각광 받고
                                    있습니다.</p>
                            </ConSlogan>
                            <img src={Suimg}/>
                            <Con1>
                                <Con1Ul>
                                    <Con1Li1>
                                        대우조선해양에서 대형 해양플랜트를 건조해 본 오일메이저들은
                                        그 기술 수준과 납기준수, 고객의 요구를 최대한 만족시키기
                                        위해 노력하는 대우조선해양 사람들의 성실한 땀방울에 크게
                                        만족하며단골고객이 되고 있습니다. 각종 선박과 해양플랜트,
                                        시추선, 부유식 원유생산설비, 잠수함, 구축함 등을 건조하는
                                        세계 초일류 조선 해양 전문기업입니다. 490만㎡의 넓은 부지
                                        위에 최적 설비로 기술 개발을 거듭해, 고기술 선박 건조에
                                        탁월한 능력을 보유하고 있습니다.T기술을 기반으로 체계화 된
                                        선박건조기술과 고난도 해양플랫폼 건조능력, 대형 플랜트
                                        프로젝트 관리능력, 전투잠수함과 구축함을 건조하는 높은
                                        기술력을 고루 갖춰, 모든 종류의 조선 해양 제품을 최상의
                                        품질로 만들어 냅니다.
                                    </Con1Li1>
                                    <Con1Li2>
                                        대우조선해양은 최고의사결정기구인 이사회와 감사위원회를
                                        비롯, 세계 선진기업을 능가하는 투명한 기업경영 시스템을
                                        갖추고 있습니다. 이사회는 사내ㆍ외 이사가 동수로 구성돼
                                        있으며 분기별로 외부감사인의 감사를 거쳐 경영성과와
                                        재무제표를 증권 거래소에 공시하고 있습니다.대우조선해양은
                                        2000년 10월23일 분리독립과 함께 관계사 채무보증과 부실자산
                                        등 재무구조 상의 모든 부실을 털어내고 투명하고 튼실한
                                        재무구조를 갖춰 영업이익률과 경상이익률, 자기자본 비율
                                        등에서 세계 선진기업들과 어깨를 나란히 하고 있습니다. 또
                                        품질과 보건안전환경 조직을 독립조직으로 두어 제품의
                                        품질향상과 종업원의 건강과 안전, 환경경영 체제를 완비하고
                                        있습니다.
                                    </Con1Li2>
                                    <Con1Li3>
                                        대우조선해양 중앙연구원은 용접기법 개발, 연구 및 장치
                                        개발품의 실무 검증을 수행하는 '종합 실험동'과 HSE 관련 연구,
                                        시험측정 등을 수행하는 '시험측정 연구동', LNG 제품 관련
                                        기술을 실현할 수 있는 '에너지 시스템 실험 센터'등을 운용하고
                                        있습니다. 계측기 교정 및 시험분석 s업무에 대해서는 높은
                                        기술력과 공신력을 바탕으로 ISO/IEC 17025 국제공인
                                        교정/시험기관으로부터 국내 조선사 중 유일하게 선정되었으며,
                                        한국 조선기술을 선도하는 연구소로 정부와 학회 등 권위 있는
                                        기관의 각종 기술상을 수상한 바 있습니다. 주력 제품 경쟁력
                                        분석을 통한 제품 전략 수립, 기자재 국산화/표준화 활동을 통한
                                        원가 경쟁력 제고, DSME Smartship 개발 전략 수립/플랫폼 개발
                                        및 실전적용 등의 연구활동을 하고 있습니다.
                                    </Con1Li3>
                                </Con1Ul>
                            </Con1>
                        </Con>
                    </TitleCon>
                </SumCon>
            </>
        )
    }
}

const SumCon = styled.div`
    width: 100%; 
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 50px; 
    text-align: center; 
    margin: 100px 0;
`;

const TitleArea = styled.div`
    width: 1200px;
    margin: 150px auto;
    position: relative;
`;

const TitleUl = styled.ul`
    height: 60px; 
    margin: 150px 0 auto; 
    text-transform: uppercase; 
    position: relative;

    &::before {
        content: ''; 
        display: block;
        position: absolute; 
        top: 4px; 
        width:100%; 
        height: 1px; 
        background: #ccc; 
        transition: all .5s; 
        z-index:-1;
    }
`;

const TitleLi = styled.li`
    float: left;

    &::before {
        content:""; 
        display: block; 
        margin: 0 auto; 
        background: #ccc; 
        transition: all .5s; 
        width: 10px; 
        height: 10px; 
        border-radius: 50%;

        }

    &:hover::before {
        background: #0065b3; 
        transform: scale(1.2);
    }

    & a {
        font-size: 18px; 
        width: 400px; 
        transition: all .5s; 
        display: block; 
        padding:18px 0; 
        text-align: center;

        &:hover {
            color: #0065b3; 
            font-weight: 600;
        }
    }
`;

const TitleCon = styled.div`
    margin-bottom: 150px; 
    margin: 0 auto; 
    width: 1200px; 
    overflow: hidden;
`;

const Con = styled.div`

`;

const ConSlogan = styled.div`
    text-align: center;
    margin: 150px 0 100px 0;


    & h3 {
        font-size: 40px; 
        font-weight: bold; 
        margin-bottom: 100px;
    }

    & p  {
        font-size: 24px; 
        line-height: 2em;
    }

`;

const Con1 = styled.div`
    font-size:18px; 
    line-height: 1.7em; 
    text-align: justify;  
    position: relative;
`;

const Con1Ul = styled.ul`

    &::before{
        content: ''; 
        display: block;
        position: absolute; 
        left:600px; 
        width: 1px; 
        height: 1500px; 
        background: #fa7c01;
    }
`;

const Con1Li1 = styled.li`

    margin: 150px 700px 150px 0; 
    padding-top: 80px;

    &::before {
        content: ''; 
        display: block; 
        position: absolute; 
        left:593px;  
        margin-top: 150px; 
        width: 15px; 
        height: 15px;
        border-radius: 50%; 
        background: #fa7c01;
    }
`;
const Con1Li2 = styled.li`

    margin-left: 700px;

    &::before {
        content: ''; 
        display: block; 
        position: absolute; 
        left:593px;  
        margin-top: 150px; 
        width: 15px; 
        height: 15px;
        border-radius: 50%; 
        background: #fa7c01;
    }
`;
const Con1Li3 = styled.li`

    margin: 150px 700px 150px 0;

    &::before {
        content: ''; 
        display: block; 
        position: absolute; 
        left:593px;  
        margin-top: 150px; 
        width: 15px; 
        height: 15px;
        border-radius: 50%; 
        background: #fa7c01;
    }
`;

export default Summary;