import React from "react";
import styled from "styled-components";

import MainVisual from "../components/index/MainVisual";
import Company from "../components/index/Company";
import Product from "../components/index/Products";
import Business from "../components/index/Business";
import Board from "../components/index/Board";
import Stock from "../components/index/Stock";






class Home extends React.Component {
  render() {
    return (
      <>
        <Contents>
          <MainVisual/>
          <Company />
          <Product />
          <Business />
          <Board />
          <Stock />
        </Contents>   
      </>  
    );
  }
}


const Contents = styled.div`

  margin: 0 auto; 
  overflow: hidden;

  `;


export default Home;
