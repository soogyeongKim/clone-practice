import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import CeoImg from "../assets/img/ceoimg.jpg";


class Ceo extends Component {
    render() {
        return(
            <>
                <Con>
                    <ConSlogan>
                        <h3>CEO</h3>
                        <p><Color>초 일류 기술</Color> 경영으로 시장을 선도하고 <BlueColor>영속 발전</BlueColor>하는 회사를 만들겠습니다.  </p>
                    </ConSlogan>
                    <img src={CeoImg} />
                    <CeoTxt>
                        <p>대우조선해양 웹사이트를 방문해 주신 여러분을 환영합니다.</p>
                        
                        <p>대우조선해양은 1973년 옥포만에 첫 삽을 뜬 이후 40여년만에 세계 최고의 조선해양기업으로 성장하였습니다. 
                            작은 어촌에서 매년 수 조원을 <br/>수출하는  ‘<Color>옥포만의 기적</Color>’을 일궈냈습니다. 
                            오늘 이 순간도 지금 이 자리에 만족하지 않고 그 어느 누구도 추격할 수 없는 기술적 격차와 리더십을 갖춰
                            시장을 선도하며 지속발전 기업이 될 것을 약속합니다.</p>
                            
                        <p>세계 조선업 정상에는 대한민국이, 그리고 대우조선해양이 있습니다. 
                            우리가 건조한 명품 선박과 해양 플랜트는 세계 곳곳에서 자원과 물품을 운송하고 원유 가스 등 에너지를 발굴합니다. 
                            바다를 지름길 삼아 세계와 세계를 이어주며 인류의 풍요로운 삶에 기여를 하고 있습니다. 
                            천연가스 재액화 기술, 극지 기술, 독자 잠수함 건조 기술 등 앞선 기술력으로 
                            LNG선 강자, 야말 신화, 특수선 명가의 전통을 이어가고 있습니다.</p>
                        
                        <p>최근 조선 해양 시장의 불확실성은 더욱 커지고 있습니다. 승자만이 시장을 독식하는 진검 승부가 시작되었습니다.
                            대우조선해양은 지속적인 혁신으로 업계 1위를 넘어 영속기업이 되기 위한 견고한 발판을 마련하고자 합니다. 
                            기술력과 원가 경쟁력을 확보해 고객과 주주에게 최고 가치를 안겨 드리겠습니다. 
                            초일류 기술경영으로 시장 판도를 바꾸는 ‘<BlueColor>게임 체인저</BlueColor>’가 되겠습니다.</p>
                                
                        <p>이를 위해 제품·기술 차별화로 기술 DSME 위상을 드높이고, 관리 고도화로 생산성을 높이는 등  
                            경쟁력을 높이는 데 최선을 다하겠습니다.<br/>
                            <Color>관행과 상식을 깨는 역발상</Color>, 두려움 없는 청년 정신, 신뢰와 열정의 기업문화를 원동력으로 삼아 
                            더 나은 미래를 향해 끊임없이 항해하고자 합니다.</p>
                                
                        <p><BlueColor>바다가 있는 한 조선해양산업은, 대우조선해양은 영원할 것입니다</BlueColor>.</p>
                                
                        <p>대우조선해양이 있어 바다에서 이뤄지는 인류 역사는 더욱 발전할 것입니다.<br/> 
                            신뢰와 열정이라는 핵심가치를 바탕으로 대우조선해양이 펼치는 과거, 현재, 미래 모습을 확인해보시길 바랍니다.</p>
                    </CeoTxt>
                </Con>
            </>
        )
    }
}

const Con = styled.div`
    margin-bottom: 150px; 
    margin: 0 auto;
    width: 1200px; 
    overflow: hidden;
`;

const ConSlogan = styled.div`
    text-align: center; 
    margin: 150px 0 100px 0;

    & h3 {
        font-size: 40px; font-weight: bold; margin-bottom: 100px;
    }

    & p {
        font-size: 24px; line-height: 2em;  
    }

`;

const Color = styled.span`
    color: #fa7c01;
`;

const BlueColor = styled.span`
    color: #0065b3;
`;


const CeoTxt = styled.div`

    & p {
        margin-bottom: 60px;
        font-size: 18px; 
        text-align: justify; 
        line-height: 1.8em; 
        
    
        &:nth-child(1){
            margin-top: 100px;
        }
    }
`;

export default Ceo;