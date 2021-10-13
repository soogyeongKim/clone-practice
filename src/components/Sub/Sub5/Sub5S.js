import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";



class Sub5S extends Component{
    render(){
        return(
            <Menu>
                <h3>홍보 센터</h3>
                <MenuUl>
                    <MenuLi>
                        <a href="#/sub5"> 보도 자료</a>
                    </MenuLi>
                    <MenuLi>
                        <a href="#/sub6"> 공지 사항</a>
                    </MenuLi>
                </MenuUl>
                <LineMap>
                    홈  &gt; 홍보 센터 &gt;<strong> 보도 자료</strong>
                </LineMap>
            </Menu>

        )
    }
}

const Menu = styled.div`
    margin: 0 auto; 
    padding: 15px 0;  
    text-align: center; 
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
    width: 600px; 
    float:left; 
    border: 1px solid #ccc;  
    padding: 20px 0; 
    background: #fff;
    box-sizing: border-box;

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


export default Sub5S;