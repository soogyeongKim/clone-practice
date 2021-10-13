import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";



class SubMenu extends Component{
    render(){
        return(
            <Menu>
                <h3>기업 소개</h3>
                <MenuUl>
                    <MenuLi>
                        <a href="/"> 회사 소개</a>
                    </MenuLi>
                    <MenuLi>
                        <a href="/"> 경영 철학</a>
                    </MenuLi>
                    <MenuLi>
                        <a href="/"> 글로벌 네트워크</a>
                    </MenuLi>
                    <MenuLi>
                        <a href="/"> 오시는 길</a>
                    </MenuLi>
                </MenuUl>
                <LineMap>
                    홈  &gt; 기업 소개 &gt;<strong> 회사 소개</strong>
                </LineMap>
            </Menu>

        )
    }
}

const Menu = styled.div`
    margin: 0 auto; 
    padding: 15px 0;  
    text-align: 
    center; 
    width: 1200px; 
    position: relative;

    & h3 {
        font-size:50px; 
        position: absolute; 
        top:-200px; 
        left:50%; 
        margin-left: -101px; 
        color:#fff; 
        font-weight: 400;
    }
`;

const MenuUl = styled.ul`
    width: 100%; 
    position: absolute; 
    top:-27px;
`;

const MenuLi = styled.li`
    width: 298px; 
    float:left; 
    border: 1px solid #ccc;  
    padding: 20px 0; 
    background: #fff;

    &:hover {
        background: #0065b3; 
        border-color:#0065b3;
    }


    &:nth-child(2)
    , &:nth-child(3)
    , &:nth-child(4){
        border-left:0;
    }

    & a {
        color: #333; 
        margin: 0px 10px; 
        padding: 10px 10px; 
        position: relative; 
        font-size:20px;
    
            &::before {
                content: ''; 
                left: 0px; 
                top: 0px;
            }
            &::after {
                content: ''; 
                right: 0px; 
                bottom: 0px;
            }
        
            &::before , &::after { 
                position: absolute; 
                width: 0%; 
                height: 2px; 
                background: #fff; 
                transition: all 0.3s;
            }
    }

    &:hover a {
        color:#fff;
    }

    &:hover a::before{
        width: 100%;
    }

    &:hover a::after{
        width: 100%;
    }
`;

const LineMap = styled.div`
    width: 1200px; 
    font-size: 16px; 
    position: absolute; 
    top:-270px; 
    color:#fff;
    
    & strong {
        color:#fff; 
        font-weight: 600;
    }

    
`;


export default SubMenu;