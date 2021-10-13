import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

class SamWooAdd extends Component{
    render(){
        return(
            <>
                <Con>
                    <TitleArea>
                        <h2>글로벌 네트워크</h2>
                        <Slogan>
                            <p>대형 선박용 블록과 육,해상 플랜트 관련 중간제품을 생산하는 <BlueColor>대우조선해양산동유한공사(DSSC)</BlueColor> 등 
                            <br/>대우조선해양의 자회사들은 <Color>글로벌 네트워크</Color> 전략을 충실히 실행하고 있습니다.</p> 
                        </Slogan>
                    </TitleArea>
                    <ConArea>
                        <SamWoo>
                            <h3>삼우중공업</h3>
                            <p>전라남도 광양만권 경제자유구역의 율촌산업단지에 위치하고 있는 <Color>삼우중공업</Color>은 
                                <br/>선박의 Block, Hatch Cover, Rudder 및 육해상 해양제품을 생산하고 있습니다.
                            </p>
                            <SamTable>
                                <tr>
                                    <th>주소</th>
                                    <td>전라남도 광양시 광양읍 율촌산단3로 111</td>
                                </tr>
                                <tr>  
                                    <th>연락처</th>
                                    <td> 061-780-3000</td>
                                </tr>  
                                <tr>   
                                    <th>주주구성</th>
                                    <td>대우조선해양 100%</td>
                                </tr>
                                <tr>    
                                    <th>생산제품</th>
                                    <td>조선/중공업</td>   
                                </tr> 
                                <tr>
                                    <th></th>
                                    <td>기타 철 구조물</td> 
                                </tr>
                            </SamTable>
                        
                        </SamWoo>
                        
                    </ConArea>
                </Con>
            </>
        )
    }
}

const Con = styled.div`
    width: 1200px; 
    margin: 0 auto
`;

const TitleArea = styled.div`
    margin-top: 150px;

    & h2 {
        font-size: 50px; 
        text-align: center; 
        margin: 100px 0;
    }
`;

const Slogan = styled.div`
    & p{
        font-size: 24px;
        text-align: center; 
        margin-bottom: 100px; 
        line-height: 2em;
    }
`;

const Color = styled.span`
    color:#fa7c01; 
    font-weight: 600;
`;

const BlueColor = styled.span`
    color:#0065b3; 
    font-weight: 600;
`;

const ConArea = styled.div`
    width:1200px; 
    margin: 0 auto;

    &::before {
        content: ''; 
        display: block; 
        position: absolute; 
        left:50%; 
        top:1030px;
        width: 3px; 
        height: 120px; 
        background: #0065b3;
    }

`;

const SamWoo = styled.div`
    margin-top: 250px; 
    position: relative;

    &::before {
        content: ''; 
        display:inline-block; 
        width: 700px; 
        height: 3px; 
        background: #0065b3; 
        position: absolute;
        top:378px;
    }

    &::after {
        content: ''; 
        display: inline-block; 
        width: 700px; 
        height: 3px; 
        background: #0065b3; 
        position: absolute;
        top:888px; 
        left:500px
    }

    & h3 {
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


const SamTable = styled.table`
    width: 100%;
    height: 500px; 
    border-collapse:collapse; 
    font-size: 20px;

    & tr:not(:last-child) {
        border-bottom:1px solid #ccc
    }

    & th {
        padding: 10px;
        text-align: center;
        font-weight: unset; 
        width: 450px;
        vertical-align: middle;
    }

    & td {
        padding: 10px;
        text-align: center;
        vertical-align: middle;
    }
`;



export default SamWooAdd;