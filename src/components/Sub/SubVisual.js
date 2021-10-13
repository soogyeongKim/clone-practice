import React from "react";
import { Component } from "react/cjs/react.production.min";
import styled from "styled-components";

import SubImg from "../../assets/img/v_sub1.jpg";


class SubVisual extends Component {
    render () {
        return (
            <Visual>

            </Visual>
        );
    }       
}

const Visual = styled.div`

    margin-top: 180px;
    width: 2000px; 
    position: relative; 
    left: 50%; 
    margin-left: -1000px;  
    background: url(${SubImg}) no-repeat; 
    height: 350px; 
    overflow: hidden; 
    background-size: cover;
    background-position-y: 0; 
    animation: grow 40s linear infinite;

    @keyframes grow {0% { background-size: 100% auto; }
                    75% { background-size: 110% auto; }
                    100% { background-size: 100% auto;}

`;


export default SubVisual;