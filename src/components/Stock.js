import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import StockImg from "../assets/img/stock.jpg";

import { BsCircleFill } from "react-icons/bs";

class Stock extends Component{
    render() {
        return(
            <>
                <MainStock>
                    <h3>투자정보</h3>
                    <StockCon>
                        <StockConUl>
                            <StockConLi>
                                <a href="/">
                                    <h4>주가 정보</h4>
                                    <StockList>
                                        <ListLi>
                                            <Circle />
                                            주가 정보
                                        </ListLi>
                                        <ListLi>
                                            <Circle />
                                            주가 정보
                                        </ListLi>
                                    </StockList>
                                    <span>자세히 보기</span>
                                </a>
                            </StockConLi>
                            <StockConLi>
                                <a href="/">
                                    <h4>재무 정보</h4>
                                    <StockList>
                                        <ListLi>
                                            <Circle />
                                            주가 정보
                                        </ListLi>
                                        <ListLi>
                                            <Circle />
                                            주가 정보
                                        </ListLi>
                                    </StockList>
                                    <span>자세히 보기</span>
                                </a>
                            </StockConLi>
                            <StockConLi>
                                <a href="/">
                                    <h4>문&emsp;&emsp;의</h4>
                                    <StockList>
                                        <ListLi>
                                            <Circle />
                                            주가 정보
                                        </ListLi>
                                        <ListLi>
                                            <Circle />
                                            주가 정보
                                        </ListLi>
                                    </StockList>
                                    <span>자세히 보기</span>
                                </a>
                            </StockConLi>
                        </StockConUl>
                    </StockCon>
                </MainStock>
            </>
        )
    }
}

const MainStock = styled.section`
    position: relative; 
    width: 2000px; 
    left: 50%; 
    margin-left: -1000px; 
    padding: 100px 0 200px 0; 
    border:1px solid #fff;

    & > h3 {
        font-size:50px; 
        padding-bottom: 100px; 
        text-align: center; 
        position: relative;

        &::before {
            content: ''; 
            display: block; 
            width:8px; 
            height: 60px; 
            background: #0065b3; 
            position:absolute; 
            top:0px; 
            left:880px;
        }
    }
`;

const StockCon = styled.div`
    width: 2000px; 
    height: 300px; 
    position: relative;
    background: url(${StockImg}) top no-repeat;
    background-attachment: fixed;  
    z-index: 10; 
    border:1px solid#fff;
`;

const StockConUl = styled.ul`
    overflow: hidden;
`;

const StockConLi = styled.li`
    width:33.33%; 
    height: 300px; 
    float:left;

    & a {
        display: block; 
        height: 100%; 
        border-right:1px solid #fff;
        background: rgba(0, 0, 0, .2); 
        transition: all .6s ease-out;
    
        & > h4 {
            color:#fff; 
            font-size:50px; 
            text-align: center; 
            padding-top: 50px; 
            font-size:40px 
        }
    
        & > span {
            display: block; 
            width: 180px; 
            border: 1px solid #fff; 
            color: #fff; 
            transition: all .5s ease-out;
            font-size:20px; 
            margin-left:225px; 
            padding: 7px 0; 
            text-align: center;
        }
    
        &:hover {
            background:rgba(0, 0, 0, .7);
            & > span{
                box-shadow: 220px 0 0 0 #fff inset; 
                color:#333;
            }
            
        } 
    }
`;

const StockList = styled.ul`
    width: 50%; 
    margin: 40px auto;
    overflow: hidden;
`;

const ListLi = styled.li`
    font-size: 18px;  
    text-align: center; 
    float: left; 
    color:#ccc; 
    width: 50%; 
    margin-top: 10px; 
    position: relative; 
    transition: all 1s ease; 
    height: fit-content;
`;

const Circle = styled(BsCircleFill)`
    font-size:10px; 
    position: absolute; 
    top:6px; 
    left:27px;
`;



export default Stock;