import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import { FaPlus } from "react-icons/fa";

class Board extends Component {
    render() {
        return(
            <>
                <BoardWrap>
                    <BoardInner>
                        <News>
                            <h3>보도자료</h3>
                            <NewsLeft>
                                <NewsLeftUl>
                                    <NewsLeftLi>
                                    </NewsLeftLi>
                                    <NewsLeftLi>
                                    </NewsLeftLi>
                                </NewsLeftUl> 
                                <a href="/">
                                    <Plus>
                                        <FaPlus/> 
                                    </Plus>
                                </a>
                            </NewsLeft>
                        </News>
                        <Notice>
                            <h3>공지사항</h3>
                            <NoticeRight>
                                <NoticeRightUl>
                                    <NoticeRightLi>
                                    </NoticeRightLi>
                                    <NoticeRightLi>
                                    </NoticeRightLi>
                                    <NoticeRightLi>
                                    </NoticeRightLi>
                                </NoticeRightUl>
                                <a href="/">
                                    <PlusRight>
                                        <FaPlus/> 
                                    </PlusRight>
                                </a>
                            </NoticeRight>
                        </Notice>
                    </BoardInner>
                </BoardWrap>
                
            </>
        )
    }
}


const BoardWrap = styled.div`
    width: 100%; 
    padding:150px 0 100px;  
    background:#f6f6f6; 
    overflow: hidden;
`;

const BoardInner = styled.div`
    width: 1200px;
    margin: 0 auto; 
    overflow: hidden;
`;

const News = styled.section`
    position: relative;
    width:600px; 
    float:left; 

    &::before {
        content: ''; 
        display: block; 
        width: 530px; 
        height: 2px; 
        background: #0065b377; 
        position: absolute; 
        top:65px
    }

    & > h3 {
        font-size: 40px;
    }
`;

const NewsLeft = styled.div`
    margin-top: 150px;
`;

const NewsLeftUl = styled.ul`
    overflow: hidden;
`;

const NewsLeftLi = styled.li`
    float:left; 
    width: 256px; 
    height: 460px; 
    margin-right: 20px;
    border: 1px solid #ccc; 
    border-radius: 20px; 
    background: #fff; 
    transition: all .5s ease;
`;


const Plus = styled.span`
    position: absolute; 
    top:0; 
    right:80px; 
    color:#0065b3;
    font-size: 25px;
`;

const PlusRight = styled.span`
    position: absolute; 
    top: 5px; 
    right:40px; 
    color:#fa7d01;
    font-size: 25px;
`;

const Notice = styled.section`
    width:580px; 
    float:right; 
    padding: 0 10px; 
    position: relative;

    &::before {
        content: ''; 
        display: block; 
        width: 570px; 
        height:2px; 
        background:#fa7d0177; 
        position: absolute; 
        top:65px;
    }

    & h3 {
        font-size: 40px;
    }


`;

const NoticeRight = styled.div`
    margin-top: 150px;
`;

const NoticeRightUl = styled.ul`

`;

const NoticeRightLi = styled.li`
    width: 570px; 
    height: 130px; 
    border: 1px solid#ccc; 
    border-radius: 20px; 
    background: #fff; 
    transition: all .5s ease; 
    margin-bottom: 35px;
`;




export default Board;