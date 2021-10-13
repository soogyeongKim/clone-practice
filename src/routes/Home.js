import React from "react";
import styled from "styled-components";

import MainVisual from "../components/MainVisual";
import Company from "../components/Company";
import Product from "../components/Products";
import Business from "../components/Business";
import Board from "../components/Board";
import Stock from "../components/Stock";






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
