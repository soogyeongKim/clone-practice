import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

class Noti extends Component{
    render(){
        return(
            <>
                <Con>
                    <TitleArea>
                        <h2>공지 사항</h2> 
                        <Slogan>
                            <p>
                            <BlueColor>대우조선해양 </BlueColor> 의 과거 , 현재 그리고  <Color>미래</Color>를 전합니다.
                            </p>
                        </Slogan>
                    </TitleArea>
                    <ConArea>
                       
                       
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

const Color = styled.span`
    color: #fa7c01;
    font-weight: 600;
`;

const ConArea = styled.div``;

export default Noti;