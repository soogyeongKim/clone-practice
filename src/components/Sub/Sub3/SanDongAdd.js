import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

class SanDongAdd extends Component{
    render(){
        return(
            <>
                <Con>
                    <ConArea>
                        <SanDong>
                            <h3>대우조선해양 산동 유한공사</h3>
                            <p> <Color>글로벌 네트워크 전략</Color>에 따라  중국 산동성 옌타이시 경제기술개발구 팔각진에 설립된 
                                <br/><BlueColor>대형 선박용 블록과 육,해상 플랜트 관련 중간제품</BlueColor>을 생산하는 회사입니다
                            </p>

                            <SanTable>
                                <tr>
                                    <th>주소</th> 
                                    <td>Bajiao Town, Yantai Economic&Technical<br/> 
                                        Development Zone, Shandong Prov. China, 264006</td> 
                                </tr>
                                <tr>
                                    <th>연락처</th> 
                                    <td>86-535-308-2400</td>   
                                </tr>
                                <tr>
                                    <th>주주 구성</th>
                                    <td>대우조선해양100%</td>
                                </tr>

                                <tr>
                                    <th>회사 규모</th>
                                    <td>면적 : 100만 ㎡</td>
                                </tr>
                                
                                <tr>
                                    <th></th>
                                    <td>종업원수 : 2,000명</td>
                                </tr>
                            </SanTable>
                        </SanDong>
                        
                    </ConArea>
                </Con>
            </>
        )
    }
}

const Con = styled.div`
    width:1200px; 
    margin: 0 auto;
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
    margin-top: 250px; 
    position: relative;
    margin-bottom: 200px; 

`;

const SanDong = styled.div`
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


const SanTable = styled.table`
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



export default SanDongAdd;