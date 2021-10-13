import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import Img from "../assets/img/pas.jpg";

class Passion extends Component{
    render() {
        return(
            <>              
                <Title>
                    <h2>경영 철학</h2>
                </Title>
                <ConArea>
                    <ConSlogan>
                        <h3>핵심 가치</h3>
                        <p>정직한 행동과 약속 실천을 통해 고객과 지속적으로 신뢰를 쌓으며, 현실에 안주하지 않고 더 높은 가치를 향해 
                            <br/>끊임없이 <BlueColor>변화</BlueColor>와 <Color>혁신</Color>을 추구하는 대우조선해양인의 의지와 마음을 담아 핵심가치로 선정하였습니다.</p>
                    </ConSlogan>
                    <Pass>
                        <img src={Img} />
                        <h4>열정<span>passion</span></h4>
                        <p>대우조선해양은 구성원들의 열정이 이룩한 위대한 역사였으며, 이같은 열정을 <br/>바탕으로 시련과 역경을 극복하여 왔습니다.</p>
                    
                        <dl>
                            <dt>사명감</dt>
                            <dd>동료에 대한 <br/>책임 의식</dd>
                        </dl>
                        <dl>
                            <dt>실천</dt>
                            <dd>문제해결에 <br/>앞장선다</dd>
                        </dl>
                        <dl>
                            <dt>긍정</dt>
                            <dd>할 수 있다는 <br/>마음 가짐</dd>    
                        </dl>   
                        <dl>
                            <dt>자부심</dt>
                            <dd>조직과 개인에 <br/>대한 긍지</dd>
                        </dl> 
                    </Pass>
                </ConArea>              
            </>
        )
    }
}




const Title = styled.div`
    width:1200px; 
    margin: 0 auto; 
    overflow: hidden;

    & h2{
        font-size: 50px; 
        text-align: center; 
        margin: 100px 0;
    }

`;

const ConArea = styled.div`
    width:1200px; 
    margin: 0 auto; 
    overflow: hidden;

    &::before {
        content: ''; 
        display: block; 
        position: absolute; 
        left:50%; 
        top:830px;
        width: 3px; 
        height: 120px; 
        background: #0065b3;
    }

`;

const ConSlogan = styled.div`

    & h3 {
        margin: 150px 0 100px 0; 
        font-size: 40px; 
        text-align: center;
    }

    & p {
        font-size: 24px;
        text-align: center; 
        margin-bottom: 150px; 
        line-height: 2em;
    }

`;

const Color = styled.span`
    color:#fa7c01;
`;

const BlueColor =styled.span`
    color:#0065b3;
`;

const Pass = styled.div`
    float:left; 
    position: relative;
    margin-bottom: 200px;

    & h4{
        display:inline-block; 
        font-size: 35px; 
        color:red; 
        height: 42px; 
        padding: 8px 0; 
        margin: 155px 0 200px 20px; 
        width: 300px;

        &::before {
            content: ''; 
            display: block; 
            position: absolute; 
            left:1px; 
            top:673px; 
            width: 5px; 
            height: 50px; 
            background: red;
        }

        & span {
            font-size: 35px; 
            margin-left: 50px;
        }
    }

    & p {
        float:right; 
        width: 680px; 
        height: 50px; 
        padding-left:200px; 
        font-size:18px; 
        text-align: justify; 
        margin: 152px 0 200px 0;
        line-height: 2em;
    }

    & dl {
        float:left; 
        text-align: center; 
        position: relative; 
        width: 200px; 
        margin-right: 133px;

        &::after {
            content: ''; 
            display: block; 
            position: absolute; 
            top: 99px; 
            right:200px; 
            width:70px; 
            height: 2px; 
            background: red;
        }

        &:nth-child(7) {
            margin-right:0;
        }
    }

    & dt {
        width: 198px; 
        height: 68px; 
        padding-top:30px; 
        border: 1px solid red; 
        background: red; 
        border-radius: 20px 20px 0 0;
        font-size: 25px; 
        color:#fff; 
        font-weight: 600;

        &::after {
            content: ''; 
            display: block; 
            position: absolute; 
            top:95px; 
            right:260px; 
            width: 10px; 
            height: 10px; 
            border-radius: 50px;
            background: red;
        }
    }

    & dd {
        width: 198px; 
        height: 92px; 
        padding-top:38px; 
        border: 1px solid red; 
        border-radius: 0 0 20px 20px; 
        line-height: 2em;
        position: absolute; 
        top:70px; 
        transition: all .5s;

        &:hover {
            background: #fff; 
            border: 1px solid red; 
            border-radius: 0 0 20px 20px; 
            height: 110px; 
            position: absolute; 
            top:30px;
            font-weight: 600; 
            padding-top:60px; 
            transition: all .5s;
        }
    }
`;


export default Passion;