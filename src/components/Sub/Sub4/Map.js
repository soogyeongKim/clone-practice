import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import Dsme from "../../../assets/img/dsme.png";
import Dep from "../../../assets/img/departures.png";
import Tra from "../../../assets/img/train.png";
import Bus from "../../../assets/img/bus.png";
import AddImg from "../../../assets/img/add.png";
import Tel from "../../../assets/img/tel.png";

class Map extends Component{

   

    render(){
        return(
            <>
                <Con>
                    <TitleArea>
                        <h2>오시는 길</h2>
                        <Slogan>
                            <p><BlueColor>“ 대우조선해양”</BlueColor> 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.</p> 
                        </Slogan>
                    </TitleArea>
                    <ConArea>
                        <ComMap>

                        </ComMap>
                        <Name>
                            <span>대우조선해양</span>Daewoo Shipbuilding & Marine Engineering Co., Ltd.
                            <img src={Dsme}/>
                            <Add>
                                <dl>
                                    <dt>add</dt>
                                    <dd>53302 , 경상남도 거제시 거제대로 3370</dd>
                                </dl>
                                <dl>
                                    <dt>tel</dt>
                                    <dd>055-735-2114</dd>
                                </dl>
                            </Add>
                        </Name>
                        <Way>
                            <h3>찾아오시는 길</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th rowspan="2" scope="row">서울-부산-옥포</th>
                                        <th scope="row">
                                            <img src={Dep}/>
                                            비행기</th>
                                        <td>서울 김포공항 → 부산 김해공항 → 옥포/고현방면 직행버스  
                                            →  시내버스/택시  → 대우조선해양</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> <img src={Tra}/>기차</th>
                                        <td>KTX → 부산역 → 지하철(부산 신평역) 
                                            →  옥포/고현방면 직행버스 → 시내버스/택시 → 대우조선해양</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>    
                                <tbody>
                                    <tr>
                                        <th scope="row">  서울-사천-옥포</th>
                                        <th scope="row"><img src={Dep}/>비행기</th>
                                        <td>서울 김포공항 → 사천공항 →옥포/고현방면 직행버스 
                                            →  시내버스/택시 →  대우조선해양</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="last">   
                                <tbody>
                                    <tr>
                                        <th rowspan="2" scope="row">서울-통영-옥포</th>
                                        <th scope="row"><img src={Bus}/>고속버스</th>
                                        <td>서울남부고속버스터미널 → 고현/장승포 
                                            → 시내버스/택시 →대우조선해양</td>
                                    </tr>
                                    <tr> 
                                        <th scope="row"><img src={Bus}/>직행버스</th>
                                        <td>서울남부고속버스터미널 →고성 → 통영  → 고현/장승포
                                            → 시내버스/택시 → 대우조선해양</td>
                                    </tr>
                                </tbody>
                            </table>      
                        </Way>
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

const BlueColor = styled.span`
    color:#0065b3; 
    font-weight: 600;
`;

const ConArea = styled.div``;

const ComMap = styled.div`
    width: 1200px; 
    height: 600px;
    border: 1px solid #0065b3;
    box-sizing: border-box;
`;

const Name = styled.div`
    width: 100%; 
    height: 140px; 
    background:rgba(0, 101, 179); 
    color:#fff; 
    font-weight: bold;
    font-size:20px; 
    padding-top: 40px;
    position: relative;

    & span {
        font-size: 35px; 
        margin: 0 30px 25px 30px;
    }

    & img {
        position: absolute; 
        top:14px; 
        right: 100px;
    }
`;

const Add = styled.div`
    font-size: 20px;

    & dl{
        display: block; 
        margin: 35px 0 0 20px; 
        float:left;
    }
    & dl:nth-child(1) dt{
        float:left;
        width: 60px; 
        padding-left: 40px; 
        height: 40px;
        display:inline-block; 
        background: url(${AddImg}) 2px -19px no-repeat;
    }

    & dl:nth-child(2) dt{
        float:left; 
        width: 60px; 
        padding-left: 40px; 
        height: 40px;
        display:inline-block; 
        background: url(${Tel}) -5px -15px no-repeat;
    }

    & dl > dd{
        float: left;
    }
`;

const Way = styled.div`

    & h3{
        font-size: 35px; 
        text-align: center; 
        margin: 150px 0;
    }

    & table {
        width: 100%; 
        margin: 40px 0 ; 
        text-align: center; 
        border:1px solid#ccc;  
    }
    & img{ 
        width: 22px; 
        height: 22px; 
        padding-right: 20px; 
    }
    & table > tbody > tr > th {
        background:rgba(204, 204, 204, .2); 
        font-weight: unset; 
        font-size:16px;
        vertical-align: middle;
        width: 200px; 
        border:1px solid #ccc; 
        font-size:20px
    }
    
    & table > tbody > tr > td {
        border:1px solid #ccc; 
        text-align: left; 
        padding-left: 40px; 
        height: 100px; 
        vertical-align: middle;
    }
`;





export default Map;