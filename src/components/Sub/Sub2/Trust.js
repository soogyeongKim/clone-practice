import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import Img from "../../../assets/img/trust.jpg";

class Trust extends Component{
    render() {
        return(
            <>              
                <ConArea>
                    <ConTrust>
                        <img src={Img} />
                        <h4>신뢰<span>trust</span></h4>
                        <p>대우조선해양은 신뢰를 바탕으로 모든 분야에서 원활한 협력관계를 유지하고<br/> 있으며, 노사 화합과 고객감동을 이루어 나가고 있습니다.</p>
                    
                        <dl>
                            <dt>소통</dt>
                            <dd>열린 마음으로 <br/>이해 존중</dd>
                        </dl>
                        <dl>
                            <dt>투명성</dt>
                            <dd>윤리와 원칙을 <br/>지킨다</dd>
                        </dl>
                        <dl>   
                            <dt>공유</dt>
                            <dd>의사결정의 <br/>과정 공유</dd>
                        </dl>   
                        <dl>
                            <dt>공동체</dt>
                            <dd>배려와 공유를 <br/>통한 협력</dd>
                        </dl> 
                    </ConTrust>
                </ConArea>            
            </>
        )
    }
}


const ConArea = styled.div`
    width: 1200px; 
    margin: 0 auto; 
    overflow: hidden;
`;



const ConTrust = styled.div`
float:left; 
position: relative;
margin-bottom: 200px;

& h4{
    display:inline-block; 
    font-size: 35px; 
    color: #0065b3; 
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
        background: #0065b3;
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
        left:200px; 
        width:70px; 
        height: 2px;
        background: #0065b3;
    }

    &:nth-child(7) {
        margin-right:0;
    }
}
& dt {
    width: 198px; 
    height: 68px; 
    padding-top:30px; 
    border: 1px solid #0065b3; 
    background: #0065b3; 
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
        background: #0065b3;
    }
}

& dd {
    width: 198px; 
    height: 92px; 
    padding-top:38px; 
    border: 1px solid #0065b3; 
    border-radius: 0 0 20px 20px; 
    line-height: 2em;
    position: absolute; 
    top:70px; 
    transition: all .5s;

    &:hover {
        background: #fff; 
        border: 1px solid #0065b3; 
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








export default Trust;